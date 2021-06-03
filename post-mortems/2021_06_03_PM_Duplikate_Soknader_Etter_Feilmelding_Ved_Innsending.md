## Oppsummering av hendelse

Vi, i team digihot, fekk fire meldingar i HotJar og ein mail om feil 2021-06-03. Alle feila gjekk på at 
- formidlar hadde fylt ut og prøvd å sende inn søknad
- fått feilmelding "feil ved innsending av søknad, prøv igjen senere"
- forsøkt igjen fleire gongar med samme resultat

Kontakt med Hjelpemiddelsentralen avslørte at alle forsøka hadde blitt sendt inn, trass i feilmeldinga.

Ein bug i logging av metrikk førte til at API-endepunktet for innsending av søknadar, feila etter at søknaden hadde blitt behandla. Bugen blei innført i forbindelse med logging av nye metrikkar rundt bruk av fritekstfelt, som blei innført 2021-05-31. Ein fiks blei produksjonssatt 2021-06-02. Feilen oppstod i søknadar som inneholdt hjelpemiddel i kategorien `komfyrvakt`.


## Rotårsak til feilen

Endring i logging av metrikk i eit REST-endepunkt inneholdt ein bug som førte til IndexOutOfBoundsException ved uthenting av verdiar frå ei liste.

Manglande `try-catch` rundt logikken for logging av metrikkar tillot feilen å boble opp slik at endepunktet returnerte feilstatus, trass i at behandling av søknaden egentleg hadde gått som det skulle.

Dette førte til at formidlar fekk opp feilmelding i web-applikasjonen som kallar på endepunktet, med beskjed om å prøve igjen seinare. Påfølgjande forsøk frå formidlar førte til samme resultat, og dermed at fleire like søknadar blei sendt inn. 

Feila blei logga på `Warning`-nivå, men burde vore logga på `Error`-nivå. Hadde det blitt logga som `Error` så hadde vi mest sannsynleg oppdaga feilen tidlegare.

## Læring

Hugse på kva funksjonalitet som er kritisk og ikkje, og passe på at ikkje-kritisk funksjonalitet som feilar ikkje blir behandla som ein kritisk feil.

Passe på at logging av metrikkar og annan ikkje-kritisk funksjonalitet er dekka av `try-catch` slik at dette kan feile trygt, utan å påverke annan funksjonalitet.

Tenke nøyare gjennom kva som vil skje dersom feil oppstår i ulike ledd. 


## Hva gjorde vi bra

Prioriterte å løyse feilen så fort som mogleg så snart den blei oppdaga. Informerte pårørte om feilen og informerte Hjelpemiddelsentralen om kva søknadar det kan være duplikat av (tidsrom og som inneheld komfyrvakt).

## Hva gjorde vi dårlig

Feilen kunne vore oppdaga tidlegare med grunndigare testing, kodegodkjenning, og dersom feilen hadde blitt logga som `Error`.

## Hvordan hindrer vi at noe lignende skjer igjen? (tiltak)

Snakke om feilen i teamet for å gjere alle observant på denne typen feil. 

Opprette regresjonstest som hindrar framtidige kodeendringar i å gjenningøre feilen.

Sørge for at vi får varsel ASAP neste gang liknande feil oppstår.