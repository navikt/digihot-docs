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
import { KontaktPerson } from './kontaktPerson';
import { Leveringsmaate } from './leveringsmaate';

export class Levering {
    'kontaktPerson': KontaktPerson;
    'leveringsmaate': Leveringsmaate;
    'adresse'?: string;
    'merknad'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "kontaktPerson",
            "baseName": "kontaktPerson",
            "type": "KontaktPerson"
        },
        {
            "name": "leveringsmaate",
            "baseName": "leveringsmaate",
            "type": "Leveringsmaate"
        },
        {
            "name": "adresse",
            "baseName": "adresse",
            "type": "string"
        },
        {
            "name": "merknad",
            "baseName": "merknad",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Levering.attributeTypeMap;
    }
}

