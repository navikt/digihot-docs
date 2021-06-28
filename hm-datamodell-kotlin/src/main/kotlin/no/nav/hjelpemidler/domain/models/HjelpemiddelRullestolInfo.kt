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
package no.nav.hjelpemidler.domain.models


import com.squareup.moshi.Json

/**
 * 
 * @param skalBrukesIBil 
 * @param sitteputeValg 
 */

data class HjelpemiddelRullestolInfo (
    @Json(name = "skalBrukesIBil")
    val skalBrukesIBil: kotlin.Boolean? = null,
    @Json(name = "sitteputeValg")
    val sitteputeValg: HjelpemiddelRullestolInfo.SitteputeValg? = null
) {

    /**
     * 
     * Values: STANDARD_SITTEPUTE,LEGGES_TIL_SEPARAT,HAR_FRA_FOR
     */
    enum class SitteputeValg(val value: kotlin.String) {
        @Json(name = "StandardSittepute") STANDARD_SITTEPUTE("StandardSittepute"),
        @Json(name = "LeggesTilSeparat") LEGGES_TIL_SEPARAT("LeggesTilSeparat"),
        @Json(name = "HarFraFor") HAR_FRA_FOR("HarFraFor");
    }
}

