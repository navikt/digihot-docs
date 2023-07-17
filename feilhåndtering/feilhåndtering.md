# Feilhåndtering
Diverse erfaringer rundt håndtering av feilsituasjoner, som kan være nyttig å ha dokumentert for fremtiden.

## Alert: "Søknad mangler oppgave"
> En eller flere søknader mangler oppgave. Dette tyder på at de har stoppet opp og må undersøkes.

### Løsning
Sjekk logg for å se hvor søknaden har stoppet opp (eksempel: https://logs.adeo.no/app/r/s/G0MD9)

Av og til så stopper en søknad opp i hm-saksberiker. Vi har gjort noen forsøk på å finne ut hva som fører til dette, men ettersom feilen ser ut til å kun oppstå når ting skjer/går ned med uheldig timing, så er det litt utfordrende å løse. Prøv gjerne et nytt forsøk på å finne feilen dersom du har tid.

For å sparke i gang igjen søknaden så kan du sannsynligvis bruke `fix-stuck-søknad-2`-branchen i hm-saksberiker (dersom det er her søknaden har stoppet opp).

- Sjekk ut branchen og rabase den på main
    ```
    cd hm-saksberiker
    git checkout main
    git pull
    git checkout fix-stuck-soknad-2
    git rebase main
    ```
    - fix evt. konflikter

- Oppdater `STUCK_SØKNAD_ID` i `ApplicationBuilder`
- Ammend commit (slik at vi ikke må rebase mange commits i fremtiden)
- Se over endringene i branchen før du pusher. Branchen vil kjøre 1 instans i prod, som manuelt trigger håndtering av søknaden ved oppstart.
- Kontroller loggen og sjekk at søknaden har komt seg videre.
- Prodsett main-branchen på nytt, slik at `fix-stuck-søknad-2` ikke lenger ligger i prod.