## Test guide DigiHOT

Det finnes per nå fire grupper med testbrukere

- #### Hjelpemiddelformidlere

  | FNR         | NAVN            | KOMMUNE | ENGANGSKODE | PASSORD  |
  |-------------|-----------------|---------|-------------|----------|
  | 15084300133 | SEDAT KRONJUVEL | SULDAL  | otp         | qwer1234 |
  
- #### Bestillere

  | FNR         | NAVN                | KOMMUNE          | INNLOGGING   |
  |-------------|---------------------|------------------|--------------|
  | 26838899624 |	SKAPENDE SVIGERINNE | VESTRE JAKOBSELV | Bruk Test-ID |

- #### Hjelpemiddelbrukere

  | FNR         | NAVN            | KOMMUNE | ENGANGSKODE | PASSORD  |
  |-------------|-----------------|---------|-------------|----------|
  | 15084300133 | SEDAT KRONJUVEL | SULDAL  | otp         | qwer1234 |
  | 16120101181 | KREATIV BAMSE   | SULDAL  | otp         | qwer1234 |
  | 10127622634 | KRAFTIG ERT     | SULDAL  | otp         | qwer1234 |
  
- #### Barnebrille-barn

  | FNR         | NAVN               | ALDER | TYPE       | FORESATT    |
  |-------------|--------------------|-------|------------|-------------|
  | 20071359671 | TAKTFULL KALKULATOR | 9 ÅR | BARN       | 
  | 07480966982 | SITRONGUL OVN      | 12 ÅR | BARN       | 09418208349 |
  | 17500582154 | USTABIL ALDER      | 16 ÅR | VERGE      | 09418208349 |
  | 25470456313 | LEGITIM PINSETT    | 17 ÅR | FULLMAKT   | 09418208349 |
  | 21500887483 | HUMORISTISK VALMUE | 13 ÅR | UKJENTADDR | 02437713408 |
  
  - Merk: Sitrongul Ovn har kontrakt om delt bosted hos sin mor.
  - Merk: Legitim Pinsett blir 18år før lansering av barnebrille-løsningen!
  - Merk: Humoristik Valmue har en mor uten arbeid og ukjent adresse (men er ansett som bosatt og skal kunne søke).

- #### Saksbehandlere

  | E-POST      | NAVN            | SENTRAL | PASSORD  |
  |-------------|-----------------|---------|-------------|
  | f_z994064.e_z994064@trygdeetaten.no | f_z994064.e_z99406 | 2970 - NAV IKT DRIFT  | SortBil3 |
  | f_z994074.e_z994074@trygdeetaten.no | f_z994074.e_z99407 | 2970 - NAV IKT DRIFT  | SortBil3 |
  | f_z994377.e_z994377@trygdeetaten.no | f_z994074.e_z99407 | 2970 - NAV IKT DRIFT  | SortBil3 |


***

### Behovsmelding 

[Gå til behovsmelding](https://hjelpemidler.dev.nav.no/hjelpemidler/digitalsoknadhjelpemidler/)

Logg inn med en [formidler](#hjelpemiddelformidlere) eller en [bestiller](#bestillere)

Man kan søke på vegne av enhver testbruker som er opprettet via [Dolly](https://dolly.nais-dev-fss.adeo.no/).
Merk at for å se "Dine Hjelpemidler" må brukeren det søkes for være tilknyttet idporten, og om dette er
ønskelig må man søke på vegne av en av disse [hjelpemiddelbrukerne](#hjelpemiddelbrukere)

#### Labs og prod-mirror
I [Labs](https://hjelpemidlerdigitalsoknad.labs.nais.io/hjelpemidler/digitalsoknadhjelpemidler/) og 
[Prod-mirror](https://hjelpemidlerdigitalsoknad-prod-mirror.labs.nais.io/hjelpemidler/digitalsoknadhjelpemidler/) 
versjonene kan man slå opp på følgende fnr. for å teste visse scenario:

| FNR         | SCENARIO                                                           |
|-------------|--------------------------------------------------------------------|
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
***


### Dine hjelpemidler 

[Gå til Dine hjelpemidler](https://hjelpemidler.dev.nav.no/hjelpemidler/dinehjelpemidler/)

Logg inn med en [hjelpemiddelbruker](#hjelpemiddelbrukere)

***

### Dine hjelpemiddelsøknader (for formidlere)

#### Dev
[Gå til Dine hjelpemiddelsøknader i dev](https://hjelpemidler.dev.nav.no/hjelpemidler/formidler/)

Logg inn med en [formidler](#hjelpemiddelformidlere)

#### Labs og prod-mirror
[Gå til Dine hjelpemiddelsøknader i labs](https://hjelpemidlerdigitalsoknad.labs.nais.io/hjelpemidler/formidler/)

[Gå til Dine hjelpemiddelsøknader i prod-mirror](https://hjelpemidlerdigitalsoknad-prod-mirror.labs.nais.io/hjelpemidler/formidler/)

***

### Ny Saksbehandlingsflate (Hotsak)

[Gå til Hotsak](https://hotsak.dev.intern.nav.no)

Logg inn med en [saksbehandler](#saksbehandlere)

***

### Barnebriller 

#### [Dev](https://brille.dev.nav.no/hjelpemidler/barnebriller)
1. Logg inn med [SEDAT KRONJUVEL](#hjelpemiddelformidlere)
2. Slå opp på et [barn](#barnebrille-barn)

#### [Labs](https://brille.labs.nais.io/hjelpemidler/barnebriller/)
I labs kan man slå opp på et hvilket som helst fnr. så lenge det er gyldig.

For å teste et "barn" som ikke oppfyller alle vilkårene kan man bruke fnr. `08887799742`

***

###  Hvordan opprette en behovsmelding som dukker opp i ny saksbehandlingsløsning?


En behovsmelding må fylle disse kriteriene for å gå til ny saksbehandlingsflyt i test: 
 
- Ingen fritekst
- Bruker må bo hjemme
- Bruker må bo i samme kommune som formidler representerer

Alle søknader i test går til sentral 2970 - NAV IKT DRIFT

Man kan se hvorfor en søknad evt. går til gammel flyt i [grafana](https://grafana.nais.io/d/4pzzHK6Gz/saksbehandling?orgId=1&var-cluster=team-digihot-influxdb-dev)

***

### Hvordan teste "Be om tilgang" mot Altinn
(Bruk TestID ved innlogging)

- Logg på behovsmelding som EGOISTISK PUMPE `22924498351`, og be om tilgang for `STORÅS OG HESSENG - 910753282`.
- Logg på i [Altinn testmiljø tt02](https://tt02.altinn.no) i en annen nettleser eller inkognito vindu (eller så blir du automatisk logget inn som EGOISTISK PUMPE) som SEDAT KRONJUVEL `15084300133`.

