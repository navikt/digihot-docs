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
 * @param etternavn 
 * @param fornavn 
 * @param fnummer 
 * @param telefonNummer 
 * @param boform 
 * @param bruksarena 
 * @param funksjonsnedsettelser 
 * @param signatur 
 * @param adresse 
 * @param postnummer 
 * @param poststed 
 */

data class Bruker (
    @Json(name = "etternavn")
    val etternavn: kotlin.String,
    @Json(name = "fornavn")
    val fornavn: kotlin.String,
    @Json(name = "fnummer")
    val fnummer: kotlin.String,
    @Json(name = "telefonNummer")
    val telefonNummer: kotlin.String,
    @Json(name = "boform")
    val boform: Bruker.Boform,
    @Json(name = "bruksarena")
    val bruksarena: Bruker.Bruksarena,
    @Json(name = "funksjonsnedsettelser")
    val funksjonsnedsettelser: kotlin.collections.List<Bruker.Funksjonsnedsettelser>,
    @Json(name = "signatur")
    val signatur: Bruker.Signatur,
    @Json(name = "adresse")
    val adresse: kotlin.String? = null,
    @Json(name = "postnummer")
    val postnummer: kotlin.String? = null,
    @Json(name = "poststed")
    val poststed: kotlin.String? = null
) {

    /**
     * 
     * Values: HJEMME,INSTITUSJON
     */
    enum class Boform(val value: kotlin.String) {
        @Json(name = "Hjemme") HJEMME("Hjemme"),
        @Json(name = "Institusjon") INSTITUSJON("Institusjon");
    }
    /**
     * 
     * Values: DAGLIGLIV,UKJENT
     */
    enum class Bruksarena(val value: kotlin.String) {
        @Json(name = "Dagligliv") DAGLIGLIV("Dagligliv"),
        @Json(name = "Ukjent") UKJENT("Ukjent");
    }
    /**
     * 
     * Values: BEVEGELSE,H_RSEL,KOGNISJON
     */
    enum class Funksjonsnedsettelser(val value: kotlin.String) {
        @Json(name = "Bevegelse") BEVEGELSE("Bevegelse"),
        @Json(name = "Hørsel") H_RSEL("Hørsel"),
        @Json(name = "Kognisjon") KOGNISJON("Kognisjon");
    }
    /**
     * 
     * Values: FULLMAKT,BRUKERBEKREFTELSE
     */
    enum class Signatur(val value: kotlin.String) {
        @Json(name = "Fullmakt") FULLMAKT("Fullmakt"),
        @Json(name = "Brukerbekreftelse") BRUKERBEKREFTELSE("Brukerbekreftelse");
    }
}
