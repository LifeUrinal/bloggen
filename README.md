# bloggen

En ren, statisk portefølje- og bloggside — HTML/CSS/JS uten rammeverk eller byggesteg. Designet er inspirert av tekniske tegninger: rutenett, hjørnemarkører, monospace-metadata og en "blueprint"-fargemodus i tillegg til den lyse "papir"-modusen.

## Struktur

```
index.html            Forside (hero, om, utvalgte prosjekter, siste innlegg, kontakt)
prosjekter.html       Full prosjektoversikt med filter
blogg.html            Blogglisting (bygges fra js/posts-data.js)
blogg/*.html          Enkeltinnlegg
css/style.css         Alt av styling (CSS-variabler for begge temaer)
js/posts-data.js       Register over alle blogginnlegg (metadata + pin-status)
js/posts.js             Bygger post-listene på forsiden og blogg.html fra posts-data.js
js/main.js               Temabytte, mobilmeny, filter på prosjektsiden
404.html                  Feilside
```

## Kom i gang

Ingen avhengigheter eller byggesteg. Åpne `index.html` direkte i nettleseren, eller kjør en enkel lokal server fra rotmappen, f.eks.:

```
python3 -m http.server 8000
```

## Tilpasning

Dette er en ferdig mal med eksempelinnhold. Før publisering:

1. **Navn/branding** — navnet er satt til `JOHANNES TORP`. Søk og erstatt om du vil endre det.
2. **Prosjekter** (`prosjekter.html` og forsidens utvalg) — alle kort merket med taggen "Eksempel" er plassholdere. Bytt ut med dine egne prosjekter og fjern taggen.
3. **Blogginnlegg** (`blogg/*.html`) — de tre innleggene er skrevet som ferdige eksempeltekster i din stemme. Behold, rediger eller erstatt dem — se "Nytt blogginnlegg" under for hvordan nye innlegg legges til.
4. **Kontakt** — e-postadressen er allerede satt til torp95@gmail.com. GitHub/LinkedIn/CV-lenker i footeren har `#` som placeholder og må fylles inn.
5. **Farger/tema** — juster CSS-variablene øverst i `css/style.css` (`:root` for papirmodus, `[data-theme="blueprint"]` for mørk modus).

## Nytt blogginnlegg

Blogglisten på forsiden og på `blogg.html` bygges automatisk fra `js/posts-data.js` — du trenger ikke lenger å redigere HTML-listene for hånd.

1. Kopiér en fil i `blogg/`-mappen (f.eks. `blogg/tanker-om-constraints.html`), gi den et nytt filnavn (dette blir "slug"-en), og skriv innholdet.
2. Legg til et nytt objekt i `js/posts-data.js` med samme `slug` som filnavnet (uten `.html`):

   ```js
   {
     slug: "mitt-nye-innlegg",
     title: "Tittel på innlegget",
     excerpt: "Kort ingress som vises i listene.",
     date: "2026-09-01",
     tags: ["Tag1", "Tag2"],
     readingTime: "5 min lesing",
     pinned: false
   }
   ```

3. Ferdig — innlegget dukker automatisk opp på `blogg.html`, og på forsiden hvis det er blant de nyeste (eller er pinnet, se under).

**Hold et innlegg fast på forsiden:** sett `pinned: true` på innlegget i `posts-data.js`. Forsiden viser da dette innlegget først (merket med en "Utvalgt"-tag), uavhengig av om du senere publiserer nyere innlegg. Forsiden viser til enhver tid maks 3 innlegg: pinnede innlegg først, deretter de nyeste øvrige.

## Deploy

Siden er 100% statisk og kan hostes hvor som helst — Netlify, Vercel, GitHub Pages, eller en vanlig webserver. Ingen server-side kode kreves.
