#!/bin/bash

rm -r hm-datamodell-kotlin/src
rm -r hm-datamodell-kotlin/docs

wget https://repo1.maven.org/maven2/org/openapitools/openapi-generator-cli/5.1.0/openapi-generator-cli-5.1.0.jar -O openapi-generator-cli.jar

java -jar openapi-generator-cli.jar generate \
    -i openapi.yaml \
    -g kotlin \
    -o hm-datamodell-kotlin \
    --additional-properties=enumPropertyNaming=UPPERCASE \
    --additional-properties=artifactId=hm-datamodell-kotlin \
    --additional-properties=groupId=com.github.navikt \
    --additional-properties=packageName=no.nav.hjelpemidler.domain \
    --global-property=models