const Organisations = {
    animals: [
        {
            name: 'Djurens Rätt',
            image: 'https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg',
            table: {
                name: 'Djurens Rätt',
                category: 'Djur',
                area: 'Sverige',
                verified: 'Ja'
            },
            checkboxes: ['Insamlingskontroll', 'Ekonomisk berättelse', 'Swish'],
            notChecked: ['Inga exakta nummer'],
            about: `Djurens Rätt är Sveriges största djurrätts- och djurskyddsorganisation. De är partipolitiskt obundna
             och arbetar för en värld där djur respekteras som kännande individer med rätt till sina egna liv. Djurens Rätt
             är beroende av frivilligt stöd för att kunna hjälpa djuren. Det är alla medlemmar och gåvogivare som är Djurens Rätt.`,
            mission: `Djurens Rätt har funnits sedan 1882 och är idag Sveriges ledande djurrätts- och djurskyddsorganisation med omkring 45 000 medlemmar. Vi arbetar för alla de djur som lider i djurförsök, i livsmedelsindustrins djurfabriker, i burar på pälsfarmer och djur som på andra sätt utnyttjas av människor så att de inte får utlopp för sina naturliga beteenden.
          
            Djurens Rätt är en uttalad antivåldsrörelse, eftersom vi anser att varken människor eller djur ska utsättas för våld. 
            Vi vill genom demokratisk opinionsbildning, politisk påverkan och attitydförändring förverkliga vårt mål: en värld där djur respekteras som kännande individer med rätt till sina egna liv. Vi verkar framförallt inom Sverige men samverkar med andra organisationer och nätverk internationellt och inom EU.`,
            howtosupport: ['Ge en gåva', 'Bli medlem i "Rädda Djuren-Klubben"', 'Minnesgåva', 'Gåvogram', 'Testamentera'],
            link: 'https://www.djurensratt.se/engagera-dig/stod-oss',
            source: 'https://www.djurensratt.se/om-djurens-ratt',
            misc: 'Djurens rätt har godkänt 90-konto, vilket betyder att minst 75% av alla donationer går till ändamålet.'
        },
        {
            name: 'Världsnaturfonden WWF',
            image: 'https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg',
            table: {
                name: 'Världsnaturfonden WWF',
                category: 'Djur & Natur',
                area: 'Hela världen',
                verified: 'Ja'
            },
            checkboxes: ['Insamlingskontroll', 'År 2015 gick 87% till ändamålet', 'Swish'],
            notChecked: ['Inga exakta nummer', 'Generalsekreteraren arvodas med 102000kr'],
            about: `WWF, World Wide Fund for Nature, är en oberoende och partipolitiskt obunden naturvårdsorganisation. Med fler än fem miljoner supportrar runt om i världen är WWF en av världens ledande ideella naturvårdsorganisationer med verksamhet i över 100 länder. WWF bedriver ett mycket aktivt naturvårdsarbete i fält, men också i maktens korridorer och vid de internationella förhandlingsborden. WWF arbetar aktivt för att hitta lösningar för att hejda den hotande klimatförändringen och arbetar med ett stort antal projekt runt om i världen.  `,
            mission: `WWF arbetar för att hejda förstörelsen av jordens naturliga livsmiljöer och bygga en framtid där människor lever i harmoni med naturen. WWF bedriver klimat- och naturvårdsarbete där akuta eller långsiktiga åtgärder är nödvändiga för att bromsa klimatförändringen och bevara utrotningshotade växt- och djurarter eller hela naturområden. Miljöproblemen känner inga gränser. Därför är det viktigt att arbeta lokalt med ett globalt perspektiv. 
            `,
            howtosupport: ['Ge en gåva', 'Bli fadder"', 'Bli medlem'],
            link: 'http://www.wwf.se/insamlingsportal/',
            source: 'http://www.wwf.se/wwfs-arbete/om-wwf/fragor-och-svar-om-wwf/1157246-fragor-och-svar-om-varldsnaturfonden-wwf',
            misc: 'Under 2015 gick 87 procent av intäkterna till ändamålet, och av dessa användes 83 procent till naturvårdsverksamhet och 17 procent till informationsverksamhet. Endast 12 procent av våra intäkter går till administration och insamling och övriga 1 procent går till eget kapital.'
        }
    ],
    people: [
        {
            name: 'Röda Korset',
            image: 'https://images.pexels.com/photos/1209962/pexels-photo-1209962.jpeg',
            table: {
                name: 'Röda Korset',
                category: 'Katastrofer',
                area: 'Hela världen',
                verified: 'Ja'
            },
            checkboxes: ['Insamlingskontroll', 'Visar exakt hur din gåva spenderas', 'Swish'],
            notChecked: ['Arvoden finansieras av medlemsintäkter', 'Ordförande tjänar 65 500kr i månaden', 'Generalsekrteraren tjänar 95 000kr i månaden'],
            about: `Röda Korset är världens främsta katastroforganisation. Vi finns över hela världen och består av miljontals frivilliga som bestämt sig för att hjälpa andra människor. Vi kämpar för att rädda liv och ge hopp. Vi delar ut mat, förebygger katastrofer och bidrar med medmänsklig värme.`,
            mission: `Genom vårt världsomspännande nätverk kan vi hjälpa på ett sätt som ingen annan organisation kan. Vi finns över hela världen och arbetar förebyggande för att katastrofer inte ska inträffa. Vi finns där om den ändå sker och vi är kvar efteråt – långt efter att andra gett sig av och medierna tystnat.`,
            howtosupport: ['Månadsgivare', 'Gåva', 'Medlem', 'Skapa Insamling', 'Second Hand', 'Testamentera', 'Shop'],
            link: 'https://stod.redcross.se/',
            source: 'https://www.redcross.se/om-oss/',
            misc: 'Röda Korset har en omfattande sida som visar exakt hur din gåva spenderas och vart pengarna går. Du hittar den här: https://www.redcross.se/om-oss/ekonomi/sa-har-anvands-din-gava/ ',
            extralink: 'https://www.redcross.se/om-oss/ekonomi/sa-har-anvands-din-gava/'
        }
    ],
    sickness: [
        {
            name: 'Barncancerfonden',
            image: 'https://images.pexels.com/photos/1250452/pexels-photo-1250452.jpeg',
            table: {
                name: 'Barncancerfonden',
                category: 'Cancerdrabbade barn',
                area: 'Sverige',
                verified: 'Ja'
            },
            checkboxes: ['Insamlingskontroll', 'Visar exakt hur din gåva spenderas', 'Swish', 'Lägre arvoden än många andra organisationer'],
            notChecked: ['2017 gick 74,8% procent till ändamålet'],
            about: `Barncancerfonden, tillsammans med våra sex regionala föreningar, bekämpar barncancer och arbetar för att drabbade barn, ungdomar och deras familjer får den vård och det stöd de behöver. De insamlade medlen används till Barncancerfondens tre ändamål, forskning och utbildning, råd och stöd samt information. `,
            mission: `Barncancerfonden finansierar idag 237 forskningsinitiativ inom barncancerområdet, både spjutspets- och breddprojekt. Under 2017 uppgick satsningarna på renodlade forskningsprojekt till 235 miljoner kronor. Därtill finansierades större utbildningsinsatser. Varje år genomför vi dessutom flera hundra aktiviteter som gemensamt, via våra ändamål, bidrar till att vi ska uppnå våra mål.

            Vår verksamhet är mångfacetterad men vår vision är enkel, Barncancerfonden ska utrota barncancer. Hopp, mod och ansvar är de kärnvärden som styr vårt dagliga arbete. Vi sprider hopp till varandra och vår omvärld. Vi visar mod genom att se verkligheten som den är. Och vi tar ansvar för barnen och familjerna`,
            howtosupport: ['Barnsupporter', 'Gåva', 'Presentshop', 'Egen insamling', 'Minnesgåva'],
            link: 'https://www.barncancerfonden.se/jag-vill-bidra/',
            source: 'https://www.barncancerfonden.se/om-barncancerfonden/',
            misc: 'Barncancerfonden presenterar hur höga löner och arvoden som de i kanslit mottager. Det kan man läsa om här: https://www.barncancerfonden.se/om-barncancerfonden/oppenhet-och-transparens/loner-och-arvoden/ '
        }
    ],
    violence: [
        {
            name: 'Friends',
            image: 'https://images.pexels.com/photos/754769/pexels-photo-754769.jpeg',
            table: {
                name: 'Friends',
                category: 'Anti-mobbning',
                area: 'Sverige',
                verified: 'Ja'
            },
            checkboxes: ['Insamlingskontroll', 'Swish', 'Styrelsen arbetar ideellt'],
            notChecked: ['Generalsekreteraren tjänar 93 000kr i månaden'],
            about: `Friends är en barnrättsorganisation som arbetar mot mobbning. Det gör vi genom att utbilda skolor, förskolor och idrottsföreningar, samt genom att driva opinion för att skapa förändring på samhällsnivå.`,
            mission: `Friends har utvecklat omfattande utbildningsprogram som vänder sig till förskolor, skolor och idrottsföreningar. Förskolan, skolan eller föreningen kontaktar själva Friends och därefter åker vi dit och utbildar. Vi hjälper framför allt till med det förebyggande arbetet och fokuserar på långsiktighet och helhetstänkande. För att nå resultat anser vi att man måste inbegripa alla som finns omkring barnet – personal/ledare, föräldrar och andra barn och unga. Vuxna har alltid det yttersta ansvaret så Friends börjar därför med att förankra arbetet hos dem för att sedan gå vidare med barnen. Vi ger kunskap och konkreta verktyg så att skolan eller föreningen kan arbeta vidare på egen hand, men vi finns även med som stöd i deras arbete.`,
            howtosupport: ['Månadsgivare', 'Gåva', 'Egen insamling'],
            link: 'https://friends.se/stod-oss/bli-manadsgivare/',
            source: 'https://friends.se/om-oss/om-friends/',
            misc: 'Friends generalsekreterare har en månandslön på 93 000 kronor, men resten av styrelsen arbetar utan arvode'
        }
    ],
    culture: [
        {
        name: 'Fryshuset',
        image: 'https://images.pexels.com/photos/1068523/pexels-photo-1068523.jpeg',
        table: {
            name: 'Fryshuset',
            category: 'Ungdom och Sysselsättning',
            area: 'Internationellt',
            verified: 'Ja'
        },
        checkboxes: ['Insamlingskontroll'],
        notChecked: ['Presenterar inte arvoden'],
        about: `Fryshuset är en internationell organisation som arbetar med att göra det möjligt för unga att genom sina passioner förändra världen. Vi lyssnar på, arbetar och bygger relationer med unga och skapar tillsammans med dem mötesplatser där unga syns, hörs och räknas. På Fryshuset har unga möjligheter att utöva sina passioner, skapa och delta i ungdomsdrivna aktiviteter, utbildningar och arbete. Alla delarna är betydelsefulla för att kunna växa. `,
        mission: `Vi arbetar för att samhället ska ta ungas åsikter och idéer på allvar eftersom vi är övertygade om att det bidrar till ett kreativt och lösningsinriktat samhällsklimat som vågar tänka nytt och hitta nya lösningar.

Fryshuset har egna mötesplatser i Sverige och Köpenhamn men har verksamhet på fler platser, exempelvis genom avtal med kommuner och företag. Vi arbetar också med turnéer och digitala mötesplatser vilket bidrar till att vi arbetar med unga i hela Sverige`,
        howtosupport: ['Ge en gåva', 'Samarbetspartner', 'Volontär', 'Bidra med yrkeskompetens'],
        link: 'https://fryshuset.se/samarbetspartners/stod-fryshuset/',
        source: 'https://fryshuset.se/om-fryshuset/',
        misc: 'Fryshuset har 90-konto, vilket betyder att minst 75% av insamlade medel går till ändamålet'
    }
    ],
    misc: {
        name: '',
        image: '',
        table: {
            name: '',
            category: '',
            area: '',
            verified: ''
        },
        checkboxes: {
            verified: true,
            economy: true,
            swish: true
        },
        about: ``,
        mission: ``,
        howtosupport: [''],
        link: '',
        misc: ''
    }
};

export {Organisations};