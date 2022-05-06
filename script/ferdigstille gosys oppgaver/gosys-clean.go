package main

import (
	"bytes"
	"encoding/json"
	"flag"
	"fmt"
	"log"
	"net/http"
)

var (
	aktoerIDFromFNR = map[string]string{
		"15084300133": "2816991252958",
	}

	user     = flag.String("user", "srv-digihot", "Service bruker brukernavn, brukt for å generere STS token")
	pw       = flag.String("pw", "", "Service-bruker passord, brukt for å generere STS token")
	aktoerID = flag.String("aktoerId", "", "Overstyr FNR-tabellen og brukt denne aktør id'en i stede")
	fnr      = flag.String("fnr", "15084300133", "Personnummer for brukeren du vil ferdigstille oppgaver for (hvis man setter aktoerID ignoreres dette feltet)")
	limit    = flag.Int("limit", 320, "Maks antall oppgaver vi ferdigstiller (sortert ASC)")
)

func main() {
	flag.Parse()

	targetAktoerID := ""
	if *aktoerID == "" {
		if id, ok := aktoerIDFromFNR[*fnr]; ok {
			targetAktoerID = id
		} else {
			panic(fmt.Sprintf("FNR ukjent for skriptet, du kan finne aktør id'en til FNR'et og overstyre med --aktoerId. Kjente FNR/aktørID: %#v", aktoerIDFromFNR))
		}
	} else {
		targetAktoerID = *aktoerID
	}

	fmt.Printf("Ferdigstiller alle oppgaver for aktørId=%s:\n", targetAktoerID)

	fmt.Printf("- Genererer STS token for %s\n", *user)
	req, err := http.NewRequest("POST", fmt.Sprintf("https://security-token-service.dev.adeo.no/rest/v1/sts/token?grant_type=client_credentials&scope=openid"), nil)
	if err != nil {
		panic(err)
	}

	req.Header.Add("Accept", "application/json")
	req.SetBasicAuth(*user, *pw)

	c := http.Client{}
	resp, err := c.Do(req)
	if err != nil {
		panic(err)
	}

	if resp.StatusCode != 200 {
		panic(fmt.Sprintf("Unexpected status code: %s", resp.Status))
	}

	stsResult := map[string]interface{}{}
	decoder := json.NewDecoder(resp.Body)
	if err = decoder.Decode(&stsResult); err != nil {
		panic(err)
	}

	stsToken := stsResult["access_token"]

	fmt.Printf("- Henter ut listen over alle oppgaver fra Gosys\n")

	url := fmt.Sprintf("https://oppgave.dev.intern.nav.no/api/v1/oppgaver?statuskategori=AAPEN&tema=HJE&aktoerId=%s&sorteringsrekkefolge=ASC&sorteringsfelt=ENDRET_TIDSPUNKT&limit=%d", targetAktoerID, *limit)
	req, err = http.NewRequest("GET", url, nil)
	if err != nil {
		panic(err)
	}

	req.Header.Add("Authorization", fmt.Sprintf("Bearer %s", stsToken))
	req.Header.Add("Accept", "application/json")
	req.Header.Add("X-Correlation-ID", "hje-zzzppp")

	resp, err = c.Do(req)
	if err != nil {
		panic(err)
	}

	if resp.StatusCode != 200 {
		panic(fmt.Sprintf("Unexpected status code: %s", resp.Status))
	}

	dataIn := map[string]interface{}{}
	decoder = json.NewDecoder(resp.Body)
	if err = decoder.Decode(&dataIn); err != nil {
		panic(err)
	}

	tasksIn := (dataIn["oppgaver"]).([]interface{})

	fmt.Printf("- Ferdigstiller %d oppgaver\n", len(tasksIn))
	for idx, t := range tasksIn {
		task := t.(map[string]interface{})
		result := map[string]interface{}{
			"id": task["id"],
			"versjon": task["versjon"],
			"status":   "FERDIGSTILT",
		}

		buf, err := json.MarshalIndent(result, "", "    ")
		if err != nil {
			log.Fatalln(err)
		}

		bufReader := bytes.NewReader(buf)

		fmt.Printf("\t- Ferdigstiller oppgave %d/%d\n", idx+1, len(tasksIn))

		url = fmt.Sprintf("https://oppgave.dev.intern.nav.no/api/v1/oppgaver/%d", int(task["id"].(float64)))
		req, err = http.NewRequest("PATCH", url, bufReader)
		if err != nil {
			panic(err)
		}

		req.Header.Add("Authorization", fmt.Sprintf("Bearer %s", stsToken))
		req.Header.Add("Accept", "application/json")
		req.Header.Add("Content-Type", "application/json")
		req.Header.Add("X-Correlation-ID", "1234")

		resp, err = c.Do(req)
		if err != nil {
			panic(err)
		}

		if resp.StatusCode != 200 {
			panic(fmt.Sprintf("Unexpected status code: %s", resp.Status))
		}
	}

	fmt.Println("Ferdig!")
}
