/*
 * Registeret over alle blogginnlegg.
 *
 * Slik legger du til et nytt innlegg:
 * 1. Kopiér en fil i blogg/-mappen (f.eks. blogg/tanker-om-constraints.html),
 *    gi den et nytt filnavn (slug), og skriv innholdet.
 * 2. Legg til et nytt objekt her med samme "slug" som filnavnet (uten .html).
 * 3. Sett "pinned: true" hvis innlegget skal bli værende i utvalget på
 *    forsiden, uavhengig av om nyere innlegg kommer til.
 *
 * Forsiden viser inntil 3 innlegg: først de som er "pinned" (nyeste øverst),
 * deretter de nyeste øvrige innleggene til det er 3 totalt.
 * Bloggsiden (blogg.html) viser alle innlegg, nyeste først.
 */
const POSTS = [
  {
    slug: "bygge-i-det-apne",
    title: "Building in public: et ingeniørblikk på MVP-er",
    excerpt: "Hva prototyping på verkstedet kan lære oss om å skippe ferdig kode i produksjon, og hvorfor «god nok til å teste» er en egen disiplin.",
    date: "2026-08-10",
    tags: ["Produktutvikling", "MVP"],
    readingTime: "4 min lesing",
    pinned: false
  },
  {
    slug: "cad-til-kode",
    title: "Fra CAD til kode: hva maskinteknikk kan lære programmering",
    excerpt: "Toleranser, sikkerhetsmarginer og hvorfor «god nok» faktisk er et presist mål, ikke en unnskyldning.",
    date: "2026-07-02",
    tags: ["Programvare", "Maskinteknikk"],
    readingTime: "6 min lesing",
    pinned: false
  },
  {
    slug: "tanker-om-constraints",
    title: "Hvorfor jeg elsker begrensninger i ingeniørarbeid",
    excerpt: "De beste løsningene kommer sjelden fra ubegrenset frihet — de kommer fra harde krav og trange marginer.",
    date: "2026-05-18",
    tags: ["Refleksjon", "Ingeniørfag"],
    readingTime: "5 min lesing",
    pinned: false
  }
];
