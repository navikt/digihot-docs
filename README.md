# README
 
Diverse dokumentasjon tilknyttet Team Digihot.

## Felles datamodell for Hjelpemiddelsøknad

Den felles datamodellen er spesifisert med [OpenAPI](https://www.openapis.org/) i `openapi.yaml`.

Kotlin- og TypeScript-implementasjoner genereres utifra spesifikasjonen vha. `generer-datamodeller.sh` skriptet.

Vi bruker GitHub Actions til å automatisk oppdatere Kotlin og TypeScript modellene ved endringer i `openapi.yaml`.

### Hvordan oppdatere modellen
1) Gjør endringer i `openapi.yaml`, commit og push.
2) Dette trigger `.github/workflows/generate-models.yaml`, som genererer oppdaterte modeller og lager en release.
3) Publiser releasen. Dette trigger `.github/workflows/publish-models.yaml`, som 
publiserer TypeScript-pakken til [npmjs](https://www.npmjs.com/package/@navikt/hm-datamodell-typescript). Kotlin-pakken blir automatisk tilgjengelig via [JitPack](https://jitpack.io/#navikt/hm-docs) med den nye versjonen.

#### Autentisering for publisering til npmjs
For å kunne publisere pakke til npmjs under `@navikt` organisasjonen, så må man: 
- opprette en personlig bruker på npmjs
- slå på 2FA på Auth+Write
- be om å bli lagt til i `@navikt` i `#nav-frontend` på Slack.

Deretter kan man på sin profil generere et "Automation"-token som kan legges inn som repository secret i dette repoet, slik at GitHub Actions-skriptet får tilgang til tokenet.