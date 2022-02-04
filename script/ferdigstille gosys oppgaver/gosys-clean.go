package main

import (
	"bytes"
	"encoding/json"
	"flag"
	"fmt"
	"log"
	"net/http"
	"os"
)

var (
	user     = flag.String("user", "srv-digihot", "Service user username, used to generate STS token")
	pw       = flag.String("pw", "", "Service user password, used to generate STS token")
	aktoerID = flag.String("aktørId", "2816991252958", "Aktør id for brukeren som man skal ferdigstille alle oppgavene for")
	limit    = flag.Int("limit", 320, "Maks antall oppgaver vi ferdigstiller (sortert ASC)")
)

func main() {
	flag.Parse()

	fmt.Printf("Ferdigstiller alle oppgaver for aktørId=%s:\n", *aktoerID)

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

	fmt.Printf("- Henter ut listen over alle oppgaver fra Gosys for %s\n", *aktoerID)

	url := fmt.Sprintf("https://oppgave.dev.intern.nav.no/api/v1/oppgaver?statuskategori=AAPEN&tema=HJE&aktoerId=%s&sorteringsrekkefolge=ASC&sorteringsfelt=ENDRET_TIDSPUNKT&limit=%d", *aktoerID, *limit)
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

	tasksOut := []map[string]interface{}{}
	for _, t := range tasksIn {
		task := t.(map[string]interface{})
		tasksOut = append(tasksOut, map[string]interface{}{
			"id":      task["id"],
			"versjon": task["versjon"],
		})
	}

	if len(tasksOut) == 0 {
		fmt.Println("Oppgavelisten er allerede tom!")
		os.Exit(0)
	}

	result := map[string]interface{}{
		"status":   "FERDIGSTILT",
		"oppgaver": tasksOut,
	}

	buf, err := json.MarshalIndent(result, "", "    ")
	if err != nil {
		log.Fatalln(err)
	}

	bufReader := bytes.NewReader(buf)

	fmt.Printf("- Ferdigstiller %d oppgaver for %s\n", len(tasksOut), *aktoerID)

	url = fmt.Sprintf("https://oppgave.dev.intern.nav.no/api/v1/oppgaver")
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

	fmt.Println("Ferdig!")
}
