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
 * @interface Formidler
 */
export interface Formidler {
    /**
     * 
     * @type {string}
     * @memberof Formidler
     */
    navn: string;
    /**
     * 
     * @type {string}
     * @memberof Formidler
     */
    arbeidssted: string;
    /**
     * 
     * @type {string}
     * @memberof Formidler
     */
    stilling: string;
    /**
     * 
     * @type {string}
     * @memberof Formidler
     */
    adresse: string;
    /**
     * 
     * @type {string}
     * @memberof Formidler
     */
    telefon: string;
    /**
     * 
     * @type {string}
     * @memberof Formidler
     */
    treffesEnklest: string;
    /**
     * 
     * @type {string}
     * @memberof Formidler
     */
    epost: string;
    /**
     * 
     * @type {string}
     * @memberof Formidler
     */
    kommunenavn?: string;
}

export function FormidlerFromJSON(json: any): Formidler {
    return FormidlerFromJSONTyped(json, false);
}

export function FormidlerFromJSONTyped(json: any, ignoreDiscriminator: boolean): Formidler {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'navn': json['navn'],
        'arbeidssted': json['arbeidssted'],
        'stilling': json['stilling'],
        'adresse': json['adresse'],
        'telefon': json['telefon'],
        'treffesEnklest': json['treffesEnklest'],
        'epost': json['epost'],
        'kommunenavn': !exists(json, 'kommunenavn') ? undefined : json['kommunenavn'],
    };
}

export function FormidlerToJSON(value?: Formidler | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'navn': value.navn,
        'arbeidssted': value.arbeidssted,
        'stilling': value.stilling,
        'adresse': value.adresse,
        'telefon': value.telefon,
        'treffesEnklest': value.treffesEnklest,
        'epost': value.epost,
        'kommunenavn': value.kommunenavn,
    };
}


