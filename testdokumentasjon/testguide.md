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

### Ny Saksbehandlingsflate 

[Gå til ny saksbehandlingsflate](https://hm-saksbehandling.dev.intern.nav.no/)

Logg inn med en [saksbehandler](#saksbehandlere)

***

###  Hvordan opprette en behovsmelding som dukker opp i ny saksbehandlingsløsning?


En behovsmelding må fylle disse kriteriene for å gå til ny saksbehandlingsflyt i test: 
 
- Ingen fritekst
- Bruker må bo hjemme
- Bruker må bo i samme kommune som formidler representerer

Alle søknader i test går til sentral 2970 - NAV IKT DRIFT

Man kan se hvorfor en søknad evt. går til gammel flyt i [grafana](https://grafana.nais.io/d/4pzzHK6Gz/saksbehandling?orgId=1&var-cluster=team-digihot-influxdb-dev)
