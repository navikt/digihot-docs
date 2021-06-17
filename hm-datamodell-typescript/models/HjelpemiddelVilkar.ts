/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface HjelpemiddelVilkar
 */
export interface HjelpemiddelVilkar {
    /**
     * 
     * @type {string}
     * @memberof HjelpemiddelVilkar
     */
    vilkaarTekst: string;
    /**
     * 
     * @type {string}
     * @memberof HjelpemiddelVilkar
     */
    tilleggsInfo?: string;
}

export function HjelpemiddelVilkarFromJSON(json: any): HjelpemiddelVilkar {
    return HjelpemiddelVilkarFromJSONTyped(json, false);
}

export function HjelpemiddelVilkarFromJSONTyped(json: any, ignoreDiscriminator: boolean): HjelpemiddelVilkar {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'vilkaarTekst': json['vilkaarTekst'],
        'tilleggsInfo': !exists(json, 'tilleggsInfo') ? undefined : json['tilleggsInfo'],
    };
}

export function HjelpemiddelVilkarToJSON(value?: HjelpemiddelVilkar | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'vilkaarTekst': value.vilkaarTekst,
        'tilleggsInfo': value.tilleggsInfo,
    };
}


