# Testguide for bytte av hjelpemidler

Beskrivelse av testdata som kan brukes i de ulike testmiljøene.

## dev ekstern (og prod-mirror)
https://hjelpemidler.ekstern.dev.nav.no/hjelpemidler/digitalsoknadhjelpemidler/

Her kan man legge inn hvilket som helst gyldig fnr på bruker. F.eks `26848497710`.

__Serienummerstyrte hjelpemiddel__  
I ekstern miljøene brukes hardkodede testdata. For øyeblikket er hjelpemidler innen følgende isokoder satt til å være serienummerstyrte:
- '1206' // Ganghjelpemidler som håndteres med begge armene (disse er ikke serienummerstyrt på ekte, vil kanskje bli endret)
- '1222' // Manuelle rullestoler
- '1236' // Personløftere
- '1812' // Senger og sengeutstyr

__Ingen utlån__  
HMS-artnr.: `000000`

__To utlån__  
HMS-artnr. `177946`  
Serienr. `123456` og `111111`

__Ett utlån__  
Alle andre HMS-artnr.
Serienr. `123456` (dersom serienummerstyrt)

## dev intern (krever naisdevice)
https://hjelpemidler.intern.dev.nav.no/hjelpemidler/digitalsoknadhjelpemidler/
Her kan man logge inn som `26848497710`, og også søke om hjelpemidler til samme fnr.

For å kunne melde at et hjelpemiddel skal byttes inn, så må bruker ha et utlån på det hjelpemiddelet som er gyldig for bytte. 
Det vil si at type utlånet må være permanent, eller tidsbestemt med en innleveringsdato som ikke er passert.

Denne brukeren har følgende utlån:  
__Rullator Gemino 20__  
Antall: 1  
HMS-artnr.: 177946  
Type utlån: Tidsbestemt  
Innleveringsdato: 2023-12-20  

__Rullator Gemino 20__  
Antall: 1  
HMS-artnr.: 177946  
Type utlån: null  

__Rullator Gemino 20__  
Antall: 1  
HMS-artnr.: 177946  
Type utlån: Korttidsutlån  
Innleveringsdato: 2023-11-02  

__Panthera U3 Light__  
Antall: 1  
HMS-artnr.: 236958  
Serienr: 821948  
Type utlån: Permanent  

__Panthera U3 Light__  
Antall: 1  
HMS-artnr.: 236958  
Serienr: 687273  
Type utlån: Permanent  

__Varmehanske Minitech__  
Antall: 1  
HMS-artnr.: 132933  
Type utlån: Permanent  

__Eksempel på tilsvarende hjelpemiddel:__  
- Gemino 20 -> Gemino 20  
- Panthera U3 Light -> Cross 6 Allround  
- Vamehanske Minitech -> Cypromed Matthew  
