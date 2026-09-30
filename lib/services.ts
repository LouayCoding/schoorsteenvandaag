export interface ServiceDetail {
  label: string;
  price: string;
}

export interface ServiceStep {
  step: string;
  description: string;
}

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  title: string;
  price: string;
  description: string;
  image: string;
  details: ServiceDetail[];
  benefits: string[];
  process: ServiceStep[];
  faq: ServiceFaq[];
}

export const SERVICES: Service[] = [
  {
    slug: "schoorsteen-vegen",
    title: "Schoorsteen vegen",
    price: "39,50",
    description: "Professioneel vegen van uw schoorsteen voor optimale trek en brandveiligheid.",
    image: "/heropc.webp",
    details: [
      { label: "1 kanaal", price: "€39,50" },
      { label: "Extra kanaal", price: "€25,-" },
    ],
    benefits: [
      "Voorkomt schoorsteenbrand en CO-vergiftiging",
      "Verbetert de trek en rookafvoer",
      "Verlengt de levensduur van uw schoorsteen",
      "Voldoet aan verzekeringseisen",
    ],
    process: [
      { step: "Inspectie", description: "We inspecteren eerst de schoorsteen op beschadigingen" },
      { step: "Afdekken", description: "Uw vloer en meubels worden zorgvuldig afgedekt" },
      { step: "Vegen", description: "Professioneel vegen met moderne apparatuur" },
      { step: "Controle", description: "Eindcontrole en uitgifte van veegbewijs" },
    ],
    faq: [
      { q: "Hoe vaak moet ik mijn schoorsteen laten vegen?", a: "Bij regelmatig gebruik minimaal 1x per jaar. Bij intensief gebruik (dagelijks stoken) adviseren wij 2x per jaar." },
      { q: "Krijg ik een veegbewijs?", a: "Ja, na elke veegbeurt ontvangt u een officieel veegbewijs voor uw verzekering." },
      { q: "Hoe lang duurt het vegen?", a: "Gemiddeld 20-30 minuten per kanaal, afhankelijk van de vervuiling." },
    ],
  },
  {
    slug: "camera-inspectie",
    title: "Camera-inspectie",
    price: "139",
    description: "Inwendige inspectie met HD-camera voor een compleet beeld van uw rookkanaal.",
    image: "/camera-inspectie.webp",
    details: [{ label: "Camera-inspectie", price: "€139,-" }],
    benefits: [
      "Detecteert scheuren en beschadigingen vroegtijdig",
      "HD-beelden van de binnenkant van uw schoorsteen",
      "Voorkomt dure reparaties door tijdige signalering",
      "Uitgebreid rapport met foto's en advies",
    ],
    process: [
      { step: "Voorbereiding", description: "Camera-apparatuur wordt klaargemaakt en getest" },
      { step: "Inspectie", description: "Camera wordt door het kanaal geleid met HD-opnames" },
      { step: "Analyse", description: "Directe beoordeling van de staat van het rookkanaal" },
      { step: "Rapportage", description: "U ontvangt een rapport met beelden en advies" },
    ],
    faq: [
      { q: "Wanneer is een camera-inspectie nodig?", a: "Bij twijfel over de staat van uw schoorsteen, na een schoorsteenbrand, of bij aankoop van een woning." },
      { q: "Hoe lang duurt een camera-inspectie?", a: "Gemiddeld 30-45 minuten, afhankelijk van de lengte en toegankelijkheid van het kanaal." },
      { q: "Krijg ik de beelden te zien?", a: "Ja, u ontvangt een rapport met foto's en eventueel video-opnames van de inspectie." },
    ],
  },
  {
    slug: "luchtkanaal-reinigen",
    title: "Luchtkanaal reinigen",
    price: "155",
    description: "Reiniging van lucht- en ventilatiekanalen voor gezonde binnenlucht.",
    image: "/luchtkanaal-reinigen.webp",
    details: [
      { label: "1e kanaal", price: "€155,-" },
      { label: "Volgende kanalen", price: "€135,-" },
    ],
    benefits: [
      "Verbetert de luchtkwaliteit in uw woning",
      "Verwijdert stof, pollen en allergenen",
      "Verhoogt de efficiëntie van uw ventilatiesysteem",
      "Voorkomt gezondheidsklachten door vervuilde lucht",
    ],
    process: [
      { step: "Inspectie", description: "We controleren het ventilatiesysteem en de kanalen" },
      { step: "Afdekken", description: "Bescherming van uw interieur tijdens de werkzaamheden" },
      { step: "Reinigen", description: "Professionele reiniging met gespecialiseerde apparatuur" },
      { step: "Controle", description: "Eindcontrole en advies over onderhoud" },
    ],
    faq: [
      { q: "Hoe vaak moet een luchtkanaal gereinigd worden?", a: "Wij adviseren elke 3-5 jaar, afhankelijk van gebruik en omgeving. Bij allergieën of huisdieren kan vaker nodig zijn." },
      { q: "Hoeveel tijd kost het reinigen?", a: "Gemiddeld 2-4 uur, afhankelijk van het aantal kanalen en de vervuiling." },
      { q: "Merk ik verschil na reiniging?", a: "Ja, de meeste klanten merken direct een verbetering in luchtkwaliteit en minder stof in huis." },
    ],
  },
  {
    slug: "vogelnest-verwijderen",
    title: "Vogelnest verwijderen",
    price: "95",
    description: "Veilig en diervriendelijk verwijderen van vogelnesten uit uw schoorsteen.",
    image: "/vogelnest-verwijderen.webp",
    details: [
      { label: "Vogelnest verwijderen", price: "€95,-" },
      { label: "Inclusief schoorsteen vegen", price: "€125,-" },
    ],
    benefits: [
      "Voorkomt verstopping en rookoverlast",
      "Diervriendelijke, verantwoorde verwijdering",
      "Herstelt de trek van uw schoorsteen",
      "Voorkomt brandgevaar door nestmateriaal",
    ],
    process: [
      { step: "Inspectie", description: "We controleren of het nest actief is (broedseizoen)" },
      { step: "Verwijdering", description: "Voorzichtige verwijdering van het nest" },
      { step: "Reiniging", description: "Schoorsteen wordt schoongemaakt van resten" },
      { step: "Preventie", description: "Advies over het plaatsen van een schoorsteenkap" },
    ],
    faq: [
      { q: "Mag een vogelnest altijd verwijderd worden?", a: "Nee, tijdens het broedseizoen (maart-augustus) mag een actief nest niet verwijderd worden. Wij controleren dit altijd eerst." },
      { q: "Hoe voorkom ik nieuwe vogelnesten?", a: "Door het plaatsen van een schoorsteenkap met gaas. Wij kunnen dit direct voor u regelen." },
      { q: "Wat als er nog vogels in het nest zitten?", a: "Dan wachten we tot de jongen uitgevlogen zijn. Dit is wettelijk verplicht." },
    ],
  },
  {
    slug: "schoorsteenkap-plaatsen",
    title: "Schoorsteenkap plaatsen",
    price: "79",
    description: "Plaatsing van een schoorsteenkap ter bescherming tegen weer en vogels.",
    image: "/schoorsteenkap-plaatsen.webp",
    details: [
      { label: "Schoorsteenkap plaatsen", price: "€79,-" },
      { label: "Inclusief schoorsteen vegen", price: "€109,-" },
    ],
    benefits: [
      "Voorkomt vogelnesten en bladeren in de schoorsteen",
      "Beschermt tegen regen en wind",
      "Verbetert de trek bij harde wind",
      "Verlengt de levensduur van uw schoorsteen",
    ],
    process: [
      { step: "Advies", description: "We bepalen het juiste type kap voor uw schoorsteen" },
      { step: "Opmeting", description: "Nauwkeurige meting van de schoorsteenopening" },
      { step: "Plaatsing", description: "Vakkundige montage van de schoorsteenkap" },
      { step: "Controle", description: "Test van de trek en afwerking" },
    ],
    faq: [
      { q: "Welke schoorsteenkap heb ik nodig?", a: "Dit hangt af van uw type schoorsteen en toepassing. Wij adviseren u graag over de beste optie." },
      { q: "Beïnvloedt een kap de trek?", a: "Een goed geplaatste kap verbetert juist de trek en voorkomt terugslag bij wind." },
      { q: "Hoe lang gaat een schoorsteenkap mee?", a: "Bij normale omstandigheden 15-25 jaar, afhankelijk van het materiaal (RVS of aluminium)." },
    ],
  },
  {
    slug: "dak-inspectie",
    title: "Dakinspectie",
    price: "165",
    description: "Visuele inspectie van uw dak op gebreken en onderhoudspunten, met rapport.",
    image: "/dak-inspectie.webp",
    details: [
      { label: "Dakinspectie", price: "€165,-" },
      { label: "Inclusief schoorsteen vegen", price: "Op aanvraag" },
    ],
    benefits: [
      "Vroegtijdige detectie van dakschade",
      "Voorkomt wateroverlast en lekkages",
      "Uitgebreid rapport met foto's",
      "Advies over noodzakelijk onderhoud",
    ],
    process: [
      { step: "Visuele inspectie", description: "Controle van dakpannen, lood en aansluitingen" },
      { step: "Fotodocumentatie", description: "Foto's van eventuele gebreken en aandachtspunten" },
      { step: "Beoordeling", description: "Analyse van de staat van het dak" },
      { step: "Rapportage", description: "Schriftelijk rapport met advies en kostenraming" },
    ],
    faq: [
      { q: "Hoe vaak moet een dak geïnspecteerd worden?", a: "Wij adviseren elke 3-5 jaar, of na extreme weersomstandigheden zoals storm of hagel." },
      { q: "Wat wordt er allemaal gecontroleerd?", a: "Dakpannen, nokken, lood, goten, schoorsteenaansluitingen en algemene staat van het dak." },
      { q: "Kunnen jullie ook direct repareren?", a: "Ja, kleine reparaties kunnen vaak direct uitgevoerd worden. Voor grotere werkzaamheden maken we een offerte." },
    ],
  },
  {
    slug: "daklekkage-repareren",
    title: "Daklekkage repareren",
    price: "165",
    description: "Snelle en vakkundige reparatie van lekkages aan uw dak bij de schoorsteen.",
    image: "/daklekkage-repareren.webp",
    details: [
      { label: "Daklekkage-reparatie", price: "€165,-" },
      { label: "Inclusief schoorsteen vegen", price: "Op aanvraag" },
    ],
    benefits: [
      "Snelle respons bij spoedgevallen",
      "Voorkomt verdere waterschade",
      "Vakkundige reparatie van lood en aansluitingen",
      "Garantie op uitgevoerde werkzaamheden",
    ],
    process: [
      { step: "Spoedcontrole", description: "We lokaliseren de oorzaak van de lekkage" },
      { step: "Noodreparatie", description: "Indien nodig direct tijdelijke afdichting" },
      { step: "Definitieve reparatie", description: "Vakkundige reparatie van lood of dakpannen" },
      { step: "Controle", description: "Test op waterdichtheid en afwerking" },
    ],
    faq: [
      { q: "Hoe snel kunnen jullie komen bij een lekkage?", a: "Bij spoedgevallen streven we ernaar binnen 24 uur ter plaatse te zijn voor een noodreparatie." },
      { q: "Wat zijn veelvoorkomende oorzaken?", a: "Verouderd loodwerk rond de schoorsteen, losse dakpannen of beschadigde aansluitingen." },
      { q: "Wordt de reparatie vergoed door verzekering?", a: "Dat hangt af van uw polis. Wij leveren altijd een gedetailleerde factuur voor uw verzekeraar." },
    ],
  },
  {
    slug: "creosoot-verwijderen",
    title: "Creosoot verwijderen",
    price: "149",
    description: "Professionele verwijdering van gevaarlijke creosootaanslag uit uw schoorsteen.",
    image: "/creosoot-verwijderen.webp",
    details: [
      { label: "Creosoot verwijderen", price: "€149,-" },
      { label: "Inclusief schoorsteen vegen", price: "€179,-" },
    ],
    benefits: [
      "Voorkomt gevaarlijke schoorsteenbranden",
      "Verwijdert hardnekkige teeraanslag",
      "Herstelt optimale trek en veiligheid",
      "Verlengt de levensduur van uw schoorsteen",
    ],
    process: [
      { step: "Inspectie", description: "We beoordelen de mate van creosootaanslag" },
      { step: "Voorbereiding", description: "Extra bescherming vanwege intensieve reiniging" },
      { step: "Verwijdering", description: "Professionele verwijdering met gespecialiseerde tools" },
      { step: "Nazorg", description: "Advies over voorkomen van nieuwe aanslag" },
    ],
    faq: [
      { q: "Wat is creosoot en waarom is het gevaarlijk?", a: "Creosoot is een teerachtige aanslag die ontstaat bij onvolledige verbranding. Het is zeer brandbaar en kan schoorsteenbrand veroorzaken." },
      { q: "Hoe herken ik creosootaanslag?", a: "Zwarte, glanzende aanslag in de schoorsteen, verminderde trek, of rookontwikkeling in huis." },
      { q: "Hoe voorkom ik creosoot?", a: "Gebruik droog hout, zorg voor voldoende trek, en laat de schoorsteen regelmatig vegen." },
    ],
  },
];
