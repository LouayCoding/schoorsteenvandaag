import stedenData from "@/data/steden.json";

export function getAllSteden(): string[] {
  return stedenData.gemeenten;
}

export function getStadSlug(stad: string): string {
  return stad
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/['’`]/g, "")
    .replace(/[()]/g, "")
    .replace(/,/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getStadFromSlug(slug: string): string | null {
  return stedenData.gemeenten.find((s) => getStadSlug(s) === slug) ?? null;
}

/** Buurgemeenten: alfabetisch venster rond de stad (deterministisch, geen dubbele). */
export function getNearbySteden(stad: string, count = 8): string[] {
  const alle = stedenData.gemeenten;
  const index = alle.indexOf(stad);
  if (index === -1) return alle.slice(0, count);
  const result: string[] = [];
  let offset = 1;
  while (result.length < count && offset < alle.length) {
    const after = alle[index + offset];
    const before = alle[index - offset];
    if (after) result.push(after);
    if (before && result.length < count) result.push(before);
    offset++;
  }
  return result;
}

/** Simpele deterministische hash zodat elke stad dezelfde variant houdt. */
function hashStad(stad: string): number {
  let hash = 0;
  for (let i = 0; i < stad.length; i++) {
    hash = (hash * 31 + stad.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

export interface StadContentBlocks {
  intro: string;
  waarom: string;
  extra: string;
}

/** Unieke tekstblokken per stad — drie varianten per blok, gekozen op naam-hash,
 *  zodat de 383 pagina's onderling verschillen en niet als doorway-pages lezen. */
export function getStadContent(stad: string): StadContentBlocks {
  const h = hashStad(stad);

  const intros = [
    `Woont u in ${stad} en zoekt u een betrouwbare schoorsteenveger? Ons netwerk heeft vakmensen actief in ${stad} en de omliggende dorpen. Zij kennen de huizen in de regio — van vooroorlogse woningen met gemetselde kanalen tot nieuwbouw met dubbelwandig RVS.`,
    `Voor schoorsteenonderhoud in ${stad} hoeft u niet ver te zoeken. Onze schoorsteenvegers werken dagelijks in en rond ${stad} en kunnen daardoor snel schakelen: vaak bent u binnen enkele werkdagen geholpen.`,
    `Een schoorsteenveger in ${stad} nodig? Wij plannen uw veegbeurt, inspectie of reparatie in ${stad} zonder wachttijden van maanden. Eén telefoontje of formulier en het staat in de agenda.`,
  ];

  const waaroms = [
    `Jaarlijks vegen is in ${stad} net zo belangrijk als overal: het voorkomt schoorsteenbrand, koolmonoxidevergiftiging en rookoverlast. Bovendien eisen de meeste opstalverzekeraars een jaarlijks veegbewijs — dat ontvangt u bij ons direct na de veegbeurt.`,
    `Verzekeraars stellen steeds vaker een jaarlijkse veegbeurt verplicht. Onze vakmensen in ${stad} leveren na afloop direct een officieel veegbewijs, zodat u bij schade nooit voor verrassingen staat.`,
    `Of u nu een open haard, houtkachel of pelletkachel heeft: een schoon rookkanaal is essentieel voor veilig stoken. In ${stad} voeren wij veegbeurten uit inclusief controle van de trek en een officieel veegbewijs.`,
  ];

  const extras = [
    `Naast schoorsteen vegen kunt u in ${stad} ook bij ons terecht voor camera-inspecties, het verwijderen van vogelnesten, schoorsteenkappen en dakreparaties rond de schoorsteen. Eén aanspreekpunt voor het hele kanaal, van kachel tot kap.`,
    `Ook voor spoed — een verstopt kanaal, rook in huis of een vogelnest in het broedseizoen — staan onze vakmensen in ${stad} klaar. Bel ons en we denken direct met u mee.`,
    `Van monumentale panden in het centrum tot rijtjeshuizen in de buitenwijken: onze schoorsteenvegers in ${stad} hebben de ervaring en het materiaal voor elk type rookkanaal.`,
  ];

  return {
    intro: intros[h % intros.length],
    waarom: waaroms[(h >> 2) % waaroms.length],
    extra: extras[(h >> 4) % extras.length],
  };
}

export function getStadFaq(stad: string): { question: string; answer: string }[] {
  return [
    {
      question: `Wat kost schoorsteen vegen in ${stad}?`,
      answer: `Schoorsteen vegen in ${stad} kost €39,50 voor het eerste kanaal en €25 per extra kanaal, exclusief btw. U ontvangt altijd een officieel veegbewijs voor uw verzekering.`,
    },
    {
      question: `Hoe snel kan een schoorsteenveger in ${stad} langskomen?`,
      answer: `Meestal binnen enkele werkdagen. Bij spoed — bijvoorbeeld rookoverlast of een verstopping — kan er vaak dezelfde dag nog iemand in ${stad} langskomen.`,
    },
    {
      question: `Werken jullie ook in de dorpen rondom ${stad}?`,
      answer: `Ja, onze vakmensen dekken heel de regio rond ${stad}. Ook als uw woonplaats er niet bij staat, kunt u gewoon een afspraak maken.`,
    },
    {
      question: "Krijg ik een veegbewijs voor mijn verzekering?",
      answer: "Ja, direct na de veegbeurt ontvangt u een officieel veegbewijs dat door alle Nederlandse verzekeraars wordt geaccepteerd.",
    },
  ];
}
