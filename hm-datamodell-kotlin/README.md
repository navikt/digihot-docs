# no.nav.hjelpemidler.domain - Kotlin client library for Hjelpemiddel søknad model spec

## Requires

* Kotlin 1.4.30
* Gradle 6.8.3

## Build

First, create the gradle wrapper script:

```
gradle wrapper
```

Then, run:

```
./gradlew check assemble
```

This runs all tests and packages the library.

## Features/Implementation Notes

* Supports JSON inputs/outputs, File inputs, and Form inputs.
* Supports collection formats for query parameters: csv, tsv, ssv, pipes.
* Some Kotlin and Java types are fully qualified to avoid conflicts with types defined in OpenAPI definitions.
* Implementation of ApiClient is intended to reduce method counts, specifically to benefit Android targets.

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DefaultApi* | [**dummyGet**](docs/DefaultApi.md#dummyget) | **GET** /dummy | 


<a name="documentation-for-models"></a>
## Documentation for Models

 - [no.nav.hjelpemidler.domain.models.Bruker](docs/Bruker.md)
 - [no.nav.hjelpemidler.domain.models.Formidler](docs/Formidler.md)
 - [no.nav.hjelpemidler.domain.models.Hjelpemiddel](docs/Hjelpemiddel.md)
 - [no.nav.hjelpemidler.domain.models.HjelpemiddelVilkar](docs/HjelpemiddelVilkar.md)
 - [no.nav.hjelpemidler.domain.models.KontaktPerson](docs/KontaktPerson.md)
 - [no.nav.hjelpemidler.domain.models.Levering](docs/Levering.md)
 - [no.nav.hjelpemidler.domain.models.Oppfolgingsansvarlig](docs/Oppfolgingsansvarlig.md)
 - [no.nav.hjelpemidler.domain.models.Soknadsdata](docs/Soknadsdata.md)
 - [no.nav.hjelpemidler.domain.models.Tilbehor](docs/Tilbehor.md)


<a name="documentation-for-authorization"></a>
## Documentation for Authorization

All endpoints do not require authorization.
