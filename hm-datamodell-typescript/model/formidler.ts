/**
 * Hjelpemiddelsøknad model spec
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class Formidler {
    'navn': string;
    'arbeidssted': string;
    'stilling': string;
    'adresse': string;
    'telefon': string;
    'treffesEnklest': string;
    'epost': string;
    'kommunenavn'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "navn",
            "baseName": "navn",
            "type": "string"
        },
        {
            "name": "arbeidssted",
            "baseName": "arbeidssted",
            "type": "string"
        },
        {
            "name": "stilling",
            "baseName": "stilling",
            "type": "string"
        },
        {
            "name": "adresse",
            "baseName": "adresse",
            "type": "string"
        },
        {
            "name": "telefon",
            "baseName": "telefon",
            "type": "string"
        },
        {
            "name": "treffesEnklest",
            "baseName": "treffesEnklest",
            "type": "string"
        },
        {
            "name": "epost",
            "baseName": "epost",
            "type": "string"
        },
        {
            "name": "kommunenavn",
            "baseName": "kommunenavn",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Formidler.attributeTypeMap;
    }
}

