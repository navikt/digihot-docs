## Teststrategi DigiHOT

Dette dokumentet beskriver hvilke tanker teamet gjør seg rundt testing av ny og endret funksjonalitet. 


### Test-pyramiden


![Test-pyramide](https://raw.githubusercontent.com/navikt/hm-docs/main/testdokumentasjon/images/testpyramide_full_hm.png)

Testpyramiden illustrerer omfanget av testing på ulike nivåer i prosjektet. Det finnes mange nivåer av testing, men pyramiden 
over viser DigiHOT sin strategi per nå. 

* Unit tests / Enhetstest
    * Tester de minste bestandsdelene i applikasjonen (funksjoner, klasser o.l.), Enhetstester er tallrike og små og kjøres automatisk hver gang 
    koden bygges.
* Integrasjonstest
    * Tester integrasjoner mellom større deler av en applikasjon, f.eks. api til service, kall mot database o.l. Integrasjonstester 
    kjøres på samme måte som enhetstester automatisk ved bygg av koden.
* Monitorering og alerts
    * Monitorering og alerts er ikke en tradisjonell del av testpyramiden men er tatt med her for å vise ca. omfang. Monitorering 
      og alerting er blitt viktigere i senere år på grunn av utviklingsmetodikken vi bruker i dag med hyppige og små 
      endringer istedenfor store leveranser noen ganger per år. Dette omtales ytterligere senere i dokumentet.
* Smoke Tests
    * Dette mangler vi enn så lenge. Smoke Tests er enkle overordnede tester av at en applikasjon er oppe og tilgjengelig for 
    sluttbruker. Som regel simulerer slike tester en brukers lasting av en eller flere nettsider.
* Manuell testing
    * Manuell testing innebærer flere måter å teste på
        * Utvikler - utvikler tester endringer for å sjekke at alt fungerer som forventet i test/prod
        * Produkteier/andre - produkteiere og andre med kjennskap til løsningen tester systematisk at endringer fungerer som 
            forventet. Ofte spesifiseres det konkrete kriterier som en del av brukerhistorien som leveres, dette gjør vi ikke i DigiHOT per i dag.
        * Utforskende testing - Teammedlemmer utfører testing uten å skulle sjekke ut en gitt funksjonalitet, men forsøker å avdekke
        feil hvor som helst i løsningen. Vi har ingen struktur rundt slik testing per i dag. 
          
### Testing av brukerhistorier før prodsetting
Enhetstester, integrasjonstester og manuell testing av utvikler gjennomføres alltid uansett størrelse på ny/endret funksjonalitet. 

Ved utvikling av ny funksjonalitet av en viss kompleksitet eller der konsekvensen for sluttbruker er større, typisk en ny brukerhistorie, 
skal dette testes av andre enn utvikler selv før produksjonssetting. Som regel består dette av manuell ende-til-ende testing av produkteier og/eller designer. 

Utvikler kommuniserer vanligvis at ny funksjonalitet er klar til test på stand-up eller i slack-kanalen "#digihot_test". 

Dersom det finnes feil eller behov for endringer så løses dette fortløpende. Dersom feil eller andre nødvendige endringer er omfattende 
tas funksjonaliteten ut av trunk (dvs. kode som skal til produksjon) frem til den er klar for ny test. Dersom nødvendige endringer er mindre, 
f.eks. mindre kosmetiske feil, kan koden produksjonssettes og endringer gjøres i etterkant. 

      
### Monitorering og feedback

Det er satt opp alerting mot slack ved feilhendelser i back-end applikasjoner.
* '#digihot-alerts'
* '#digihot-rr-alerts'
    
Det er satt opp noe overvåking av feilhendelser i front-end applikasjoner gjennom logger i sentry.

**N.B. Denne loggingen kan med fordel bygges ut og forbedres**
* https://sentry.gc.nav.no/
    
Daglig drift overvåkes gjennom dashboards i grafana: 
* https://grafana.nais.io/d/cAuIA5iMk/hjelpemidlersoknad?orgId=1&refresh=1m (Overordnet board)
* https://grafana.nais.io/d/MiarU7PGk/digihot-rapids-and-rivers?orgId=1 (Rivers & Rapids)
* https://grafana.nais.io/d/4pzzHK6Gz/saksbehandling?orgId=1 (Saksbehandling)
    


