/**
 * Hjelpemiddelsøknad model spec
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class Formidler {
    'navn': string;
    'arbeidssted': string;
    'stilling': string;
    'adresse': string;
    'telefon': string;
    'treffesEnklest': string;
    'epost': string;
    'kommunenavn'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "navn",
            "baseName": "navn",
            "type": "string",
            "format": ""
        },
        {
            "name": "arbeidssted",
            "baseName": "arbeidssted",
            "type": "string",
            "format": ""
        },
        {
            "name": "stilling",
            "baseName": "stilling",
            "type": "string",
            "format": ""
        },
        {
            "name": "adresse",
            "baseName": "adresse",
            "type": "string",
            "format": ""
        },
        {
            "name": "telefon",
            "baseName": "telefon",
            "type": "string",
            "format": ""
        },
        {
            "name": "treffesEnklest",
            "baseName": "treffesEnklest",
            "type": "string",
            "format": ""
        },
        {
            "name": "epost",
            "baseName": "epost",
            "type": "string",
            "format": ""
        },
        {
            "name": "kommunenavn",
            "baseName": "kommunenavn",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Formidler.attributeTypeMap;
    }
    
    public constructor() {
    }
}
