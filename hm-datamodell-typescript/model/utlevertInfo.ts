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
import { UtlevertType } from './utlevertType';

export class UtlevertInfo {
    'utlevertType'?: UtlevertType;
    'overfrtFraBruker'?: string;
    'annenKommentar'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "utlevertType",
            "baseName": "utlevertType",
            "type": "UtlevertType"
        },
        {
            "name": "overfrtFraBruker",
            "baseName": "overførtFraBruker",
            "type": "string"
        },
        {
            "name": "annenKommentar",
            "baseName": "annenKommentar",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return UtlevertInfo.attributeTypeMap;
    }
}

