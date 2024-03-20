## Test guide DigiHOT

Det finnes per nå fire grupper med testbrukere

#### Hjelpemiddelformidlere

| FNR         | NAVN               | KOMMUNE | INNLOGGING   |
| ----------- | ------------------ | ------- | ------------ |
| 13820599335 | KVADRATISK FAKTURA | STAD    | Bruk Test-ID |

#### Bestillere

| FNR         | NAVN                | KOMMUNE          | INNLOGGING   |
| ----------- | ------------------- | ---------------- | ------------ |
| 26838899624 | SKAPENDE SVIGERINNE | VESTRE JAKOBSELV | Bruk Test-ID |

#### Brukerpassbrukere

| FNR         | NAVN             | KOMMUNE | INNLOGGING   |
| ----------- | ---------------- | ------- | ------------ |
| 03847797958 | NONFIGURATIV SAU | VADSØ   | Bruk Test-ID |

#### Hjelpemiddelbrukere

| FNR         | NAVN               | KOMMUNE | INNLOGGING   | KOMMENTAR  |
| ----------- | ------------------ | ------- | ------------ | ---------- |
| 13820599335 | KVADRATISK FAKTURA | STAD    | Bruk Test-ID | 18 år      |
| 26928698180 | FROM ANDRIK        | STAD    | Bruk Test-ID | 37 år      |

#### Teknikere

| FNR         | NAVN                | KOMMUNE | ENGANGSKODE  | PASSORD |
| ----------- | ------------------- | ------- | ------------ | ------- |
| 26848497710 | BERØMT AKTIVITET    | HASVIK  | Bruk Test-ID | N/A     |

#### Optikere

| FNR         | NAVN                | KOMMUNE | ENGANGSKODE  | PASSORD |
| ----------- | ------------------- | ------- | ------------ | ------- |
| 26848497710 | BERØMT AKTIVITET    | HASVIK  | Bruk Test-ID | N/A     |
| 19879898431 | ØKOLOGISK GLADIATOR | SANDE   | Bruk Test-ID | N/A     |

#### Barnebrille-barn

| FNR         | NAVN                | ALDER | TYPE       | FORESATT    |
| ----------- | ------------------- | ----- | ---------- | ----------- |
| 20071359671 | TAKTFULL KALKULATOR | 9 ÅR  | BARN       |
| 07480966982 | SITRONGUL OVN       | 12 ÅR | BARN       | 09418208349 |
| 17500582154 | USTABIL ALDER       | 16 ÅR | VERGE      | 09418208349 |
| 25470456313 | LEGITIM PINSETT     | 17 ÅR | FULLMAKT   | 09418208349 |
| 21500887483 | HUMORISTISK VALMUE  | 13 ÅR | UKJENTADDR | 02437713408 |

- Merk: Sitrongul Ovn har kontrakt om delt bosted hos sin mor.
- Merk: Legitim Pinsett blir 18år før lansering av barnebrille-løsningen!
- Merk: Humoristik Valmue har en mor uten arbeid og ukjent adresse (men er ansett som bosatt og skal kunne søke).

#### Saksbehandlere

| E-POST                              | NAVN                | SENTRAL               | PASSORD  | GRUPPER.                                               |
| ----------------------------------- | ------------------- | --------------------- | -------- | ------------------------------------------------------ |
| f_z994064.e_z994064@trygdeetaten.no | f_z994064.e_z994064 | 2970 - NAV IKT DRIFT  | SortBil3 | hotsak-brukere,                                        |
| f_z994074.e_z994074@trygdeetaten.no | f_z994074.e_z994074 | 2970 - NAV IKT DRIFT  | SortBil3 | hotsak-brukere,                                        |
| f_z994377.e_z994377@trygdeetaten.no | f_z994377.e_z994377 | 2970 - NAV IKT DRIFT  | SortBil3 | hotsak-brukere, brilleadmin-brukere, Fortrolig_Adresse |
| f_z991054.e_z991054@trygdeetaten.no | f_z991054.e_z991054 | 2970 - NAV IKT DRIFT  | SortBil3 | hotsak-brukere, brilleadmin-brukere, Fortrolig_Adresse, Egne ansatte |
| f_z994589.e_z994589@trygdeetaten.no | f_z994589.e_z994589 | 2970 - NAV IKT DRIFT  | SortBil3 | hotsak-brukere, brilleadmin-brukere                    |
| f_Z994579.e_z994579@trygdeetaten.no | f_Z994579.e_z994579 | 2970 - NAV IKT DRIFT  | SortBil3 | hotsak-brukere, brilleadmin-brukere                    |
| f_z994032.e_z994032@trygdeetaten.no | f_z994032.e_z994032 | 2103 - NAV VIKAFOSSEN | SortBil3 | hotsak-brukere, Strengt_Fortrolig_Adresse              |
| f_z994951.e_z994951@trygdeetaten.no | f_z994951.e_z994951 | 2103 - NAV VIKAFOSSEN | SortBil3 | hotsak-brukere, Strengt_Fortrolig_Adresse              |

---

### Behovsmelding

[Gå til behovsmelding](https://hjelpemidler.intern.dev.nav.no/hjelpemidler/digitalsoknadhjelpemidler/)

Logg inn med en [formidler](#hjelpemiddelformidlere) eller en [bestiller](#bestillere)

Man kan søke på vegne av enhver testbruker som er opprettet via [Dolly](https://dolly.nais-dev-fss.adeo.no/).
Merk at for å se "Dine Hjelpemidler" må brukeren det søkes for være tilknyttet idporten, og om dette er
ønskelig må man søke på vegne av en av disse [hjelpemiddelbrukerne](#hjelpemiddelbrukere)

#### Ekstern (tidligere labs) og prod-mirror

I [Ekstern](https://hjelpemidler.ekstern.dev.nav.no/hjelpemidler/digitalsoknadhjelpemidler) og
[Prod-mirror](https://hjelpemidler-prod-mirror.ekstern.dev.nav.no/hjelpemidler/digitalsoknadhjelpemidler)
versjonene kan man slå opp på følgende fnr. for å teste visse scenario:

| FNR         | SCENARIO                                                           |
| ----------- | ------------------------------------------------------------------ |
| 11098600142 | Request for å hente bruker feiler (bruker kan ikke hentes fra PDL) |
| 20071359671 | Bruker tilhører en annen kommune                                   |
| 27116920269 | Formidler slår opp på seg selv                                     |
| 10127622634 | Bruker kan ikke få bestilling (gjelder kun for rolle=BESTILLER)    |
| 28070477086 | Bruker er under 18 år                                              |
| 09097400366 | Bruker kan ikke varsles                                            |
| 09097400447 | Bruker har reservert seg mot varsling                              |
| 31037526749 | Brukeroppslag returnerer en ufullstendig adresse (fra PDL)         |

#### Bestilling

I labs kan man få en bestilling ved å legge inn Sedat som hjelpemiddelbruker, og ellers sørge for at saken oppfyller kriteriene for å være en bestilling.
I dev kan man bruke "Debug"-panelet for å styre roller, eller logge inn med SKAPENDE SVIGERINNE og også legge henne inn som hjelpemiddelbruker.

---

### Dine hjelpemidler

[Gå til Dine hjelpemidler](https://hjelpemidler.intern.dev.nav.no/hjelpemidler/dinehjelpemidler/)

Logg inn med en [hjelpemiddelbruker](#hjelpemiddelbrukere)

---

### Dine hjelpemiddelsaker (innsenders oversikt over innsendte behovsmeldinger)

#### Dev

[Gå til Dine hjelpemiddelsaker i dev](https://hjelpemidler.intern.dev.nav.no/hjelpemidler/formidler)

Logg inn med en [formidler](#hjelpemiddelformidlere)

#### Ekstern (tidligere labs) og prod-mirror

[Gå til Dine hjelpemiddelsaker i ekstern](https://hjelpemidler.ekstern.dev.nav.no/hjelpemidler/formidler)

[Gå til Dine hjelpemiddelsaker i prod-mirror](https://hjelpemidler-prod-mirror.ekstern.dev.nav.no/hjelpemidler/formidler)

---

### Ny Saksbehandlingsflate (Hotsak)

[Gå til Hotsak](https://hotsak.intern.dev.nav.no)

Logg inn med en [saksbehandler](#saksbehandlere)

---

### Barnebriller

#### [Dev](https://brille.intern.dev.nav.no/hjelpemidler/barnebriller)

1. Logg inn med [SEDAT KRONJUVEL](#hjelpemiddelformidlere) eller [BERØMT AKTIVITET](#hjelpemiddelbrukere)
2. Slå opp på et [barn](#barnebrille-barn)

#### [Labs](https://brille-labs.ekstern.dev.nav.no/hjelpemidler/barnebriller)

I labs kan man slå opp på et hvilket som helst fnr. så lenge det er gyldig.

For å teste et "barn" som ikke oppfyller alle vilkårene kan man bruke fnr. `08887799742`

---

### Hvordan opprette en behovsmelding som dukker opp i ny saksbehandlingsløsning?

En behovsmelding må fylle disse kriteriene for å gå til ny saksbehandlingsflyt i test:

- Ingen fritekst
- Bruker må bo hjemme
- Bruker må bo i samme kommune som formidler representerer

Alle søknader i test går til sentral 2970 - NAV IKT DRIFT

Man kan se hvorfor en søknad evt. går til gammel flyt i [grafana](https://grafana.nais.io/d/4pzzHK6Gz/saksbehandling?orgId=1&var-cluster=team-digihot-influxdb-dev)

---

### Hvordan teste "Be om tilgang" mot Altinn

(Bruk TestID ved innlogging)

- Logg på behovsmelding som UNØYAKTIG KALKULATOR `24884099060`, og be om tilgang for `KURSIV MODIG APE - 312787350`.
- Logg på i [Altinn testmiljø tt02](https://tt02.altinn.no) i en annen nettleser eller inkognito vindu (eller så blir du automatisk logget inn som UNØYAKTIG KALKULATOR) som BERØMT AKTIVITET `26848497710`.

---

### Manuelle brillesøknader

For å lage journalposter som skal journalføres i Hotsak kan man bruke testdata-frontend applikasjonen.
https://testdata-frontend.intern.dev.nav.no/

Logg på med f_z994377.e_z994377@trygdeetaten.no og passord SortBil3

Fødselsnummer som legges inn i skjermbildet, vil være fødselsnummer til personen dokumentet registeres på. For å få det mest mulig reelt, kan man legge inn fnr til barn fra Dolly der.

Velg tema HJE og skjema "Tilskudd ved kjøp av briller til barn".

##### Dolly personer til test

| FNR         | NAVN                 | ALDER | TYPE                              | FORESATT    |
| ----------- | -------------------- | ----- | --------------------------------- | ----------- |
| 17458745633 | Alfabetisk Algoritme | 35    | FORELDER                          |             |
| 14460989362 | Eksplosiv Tunge      | 13    | BARN                              | 17458745633 |
| 07511697152 | Akseptabel Bror      | 6     | BARN                              | 17458745633 |
| 19501857435 | Usedvanlig Fil       | 4     | BARN                              | 17458745633 |
| 03441558383 | Nedsnødd Journalist  | 7     | BARN, KODE 6                      |             |
| 30487721626 | Flat Pistol          | 45    | FORELDER, SKJERMET fra 14.03.2023 |             |
| 26480984314 | Bra Domstol          | 13    | BARN                              | 30487721626 |
