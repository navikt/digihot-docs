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

### Oppdatere NPM_TOKEN (for autentisering for publisering til npmjs)
[Workflow](https://github.com/navikt/hm-docs/blob/main/.github/workflows/publish-models.yaml) som publiserer til npmjs, benytter et `NPM_TOKEN` (repository secret) som gjør det mulig å publisere pakker til npmjs under `@navikt` organisasjonen.

Dersom det er behov for å oppdatere/erstatte dette tokenet så kan man gjøre følgende: 
- opprette en personlig bruker på npmjs
- slå på 2FA på Auth+Write
- be om å bli lagt til i `@navikt` i `#nav-frontend` på Slack.

Deretter kan man på sin profil generere et "Automation"-token som kan legges inn som repository secret i dette repoet, slik at GitHub Actions-skriptet får tilgang til tokenet.
Dette er altså et personlig token, og eieren av tokenet vil få mail f.eks. ved publisering av ny pakke.
