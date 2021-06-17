/**
* Hjelpemiddel søknad model spec
* No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
*
* The version of the OpenAPI document: 1.0.0
* 
*
* NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
* https://openapi-generator.tech
* Do not edit the class manually.
*/
package no.nav.hjelpemidler.domain.models


import com.squareup.moshi.Json

/**
 * 
 * @param navn 
 * @param arbeidssted 
 * @param stilling 
 * @param adresse 
 * @param telefon 
 * @param treffesEnklest 
 * @param epost 
 * @param kommunenavn 
 */

data class Formidler (
    @Json(name = "navn")
    val navn: kotlin.String,
    @Json(name = "arbeidssted")
    val arbeidssted: kotlin.String,
    @Json(name = "stilling")
    val stilling: kotlin.String,
    @Json(name = "adresse")
    val adresse: kotlin.String,
    @Json(name = "telefon")
    val telefon: kotlin.String,
    @Json(name = "treffesEnklest")
    val treffesEnklest: kotlin.String,
    @Json(name = "epost")
    val epost: kotlin.String,
    @Json(name = "kommunenavn")
    val kommunenavn: kotlin.String? = null
)

