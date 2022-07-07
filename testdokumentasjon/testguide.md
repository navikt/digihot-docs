## Test guide DigiHOT

Det finnes per nå tre grupper med testbrukere

- #### Hjelpemiddelformidlere

  | FNR         | NAVN            | KOMMUNE | ENGANGSKODE | PASSORD  |
  |-------------|-----------------|---------|-------------|----------|
  | 15084300133 | SEDAT KRONJUVEL | SULDAL  | otp         | qwer1234 |

- #### Hjelpemiddelbrukere

  | FNR         | NAVN            | KOMMUNE | ENGANGSKODE | PASSORD  |
  |-------------|-----------------|---------|-------------|----------|
  | 15084300133 | SEDAT KRONJUVEL | SULDAL  | otp         | qwer1234 |
  | 16120101181 | KREATIV BAMSE   | SULDAL  | otp         | qwer1234 |
  | 10127622634 | KRAFTIG ERT     | SULDAL  | otp         | qwer1234 |
  
- #### Barnebrille-barn

  | FNR         | NAVN               | ALDER | TYPE       | FORESATT    |
  |-------------|--------------------|-------|------------|-------------|
  | 07480966982 | SITRONGUL OVN      | 12 ÅR | BARN       | 09418208349 |
  | 17500582154 | USTABIL ALDER      | 16 ÅR | VERGE      | 09418208349 |
  | 25470456313 | LEGITIM PINSETT    | 17 ÅR | FULLMAKT   | 09418208349 |
  | 21500887483 | HUMORISTISK VALMUE | 13 ÅR | UKJENTADDR | 02437713408 |
  
  Merk: Sitrongul Ovn har kontrakt om delt bosted hos sin mor.
  Merk: Humoristik Valmue har en mor uten arbeid og ukjent adresse (men er ansett som bosatt og skal kunne søke).

- #### Saksbehandlere

  | E-POST      | NAVN            | SENTRAL | PASSORD  |
  |-------------|-----------------|---------|-------------|
  | f_z994064.e_z994064@trygdeetaten.no | f_z994064.e_z99406 | 2970 - NAV IKT DRIFT  | SortBil3 |
  | f_z994074.e_z994074@trygdeetaten.no | f_z994074.e_z99407 | 2970 - NAV IKT DRIFT  | SortBil3 |


***

### Behovsmelding 

[Gå til behovsmelding](https://hjelpemidler.dev.nav.no/hjelpemidler/digitalsoknadhjelpemidler/)

Logg inn med en [formidler](#hjelpemiddelformidlere)

Man kan søke på vegne av enhver testbruker som er opprettet via [Dolly](https://dolly.nais-dev-fss.adeo.no/).
Merk at for å se "Dine Hjelpemidler" må brukeren det søkes for være tilknyttet idporten, og om dette er
ønskelig må man søke på vegne av en av disse [hjelpemiddelbrukerne](#hjelpemiddelbrukere)

#### Labs og prod-mirror
I [Labs](https://hjelpemidlerdigitalsoknad.labs.nais.io/hjelpemidler/digitalsoknadhjelpemidler/) og 
[Prod-mirror](https://hjelpemidlerdigitalsoknad-prod-mirror.labs.nais.io/hjelpemidler/digitalsoknadhjelpemidler/) 
versjonene kan man slå opp på følgende fnr. for å teste visse scenario:

| FNR         | SCENARIO                       |
|-------------|--------------------------------|
| 11098600142 | Bruker kan ikke hentes fra PDL |
| 27116920269 | Formidler slår opp på seg selv |
| 28070477086 | Bruker er under 18 år          |

***


### Dine hjelpemidler 

[Gå til Dine hjelpemidler](https://hjelpemidler.dev.nav.no/hjelpemidler/dinehjelpemidler/)

Logg inn med en [hjelpemiddelbruker](#hjelpemiddelbrukere)

***

### Dine hjelpemiddelsøknader (for formidlere)

[Gå til Dine hjelpemiddelsøknader](https://hjelpemidler.dev.nav.no/hjelpemidler/formidler/)

Logg inn med en [formidler](#hjelpemiddelformidlere)
***

### Ny Saksbehandlingsflate (Hotsak)

[Gå til Hotsak](https://hotsak.dev.intern.nav.no)

Logg inn med en [saksbehandler](#saksbehandlere)

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
(Bruk BankId med enganskode og passord som beskrevet tidligere.)

- Logg på behovsmelding som KREATIV BAMSE `16120101181`, og be om tilgang for `STORÅS OG HESSENG - 910753282`.
- Logg på i [Altinn testmiljø tt02](https://tt02.altinn.no) i en annen nettleser eller inkognito vindu (eller så blir du automatisk logget inn som KREATIV BAMSE) som SEDAT KRONJUVEL `15084300133`.

