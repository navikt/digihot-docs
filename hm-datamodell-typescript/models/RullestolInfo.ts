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

import { SitteputeValg } from './SitteputeValg';
import { HttpFile } from '../http/http';

export class RullestolInfo {
    'skalBrukesIBil'?: boolean;
    'sitteputeValg'?: SitteputeValg;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "skalBrukesIBil",
            "baseName": "skalBrukesIBil",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "sitteputeValg",
            "baseName": "sitteputeValg",
            "type": "SitteputeValg",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RullestolInfo.attributeTypeMap;
    }
    
    public constructor() {
    }
}
