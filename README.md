# bloggen

En ren, statisk portefølje- og bloggside — HTML/CSS/JS uten rammeverk eller byggesteg. Designet er inspirert av tekniske tegninger: rutenett, hjørnemarkører, monospace-metadata og en "blueprint"-fargemodus i tillegg til den lyse "papir"-modusen.

## Struktur

```
index.html         Forside (hero, om, utvalgte prosjekter, siste innlegg, kontakt)
prosjekter.html     Full prosjektoversikt med filter
blogg.html          Blogglisting
blogg/*.html        Enkeltinnlegg
css/style.css        Alt av styling (CSS-variabler for begge temaer)
js/main.js            Temabytte, mobilmeny, filter på prosjektsiden
404.html               Feilside
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
3. **Blogginnlegg** (`blogg/*.html`) — de tre innleggene er skrevet som ferdige eksempeltekster i din stemme. Behold, rediger eller erstatt dem, og legg til nye ved å kopiere en av filene i `blogg/`-mappen og lenke den opp i `blogg.html` og forsiden.
4. **Kontakt** — e-postadressen er allerede satt til torp95@gmail.com. GitHub/LinkedIn/CV-lenker i footeren har `#` som placeholder og må fylles inn.
5. **Farger/tema** — juster CSS-variablene øverst i `css/style.css` (`:root` for papirmodus, `[data-theme="blueprint"]` for mørk modus).

## Nytt blogginnlegg

Kopiér en fil fra `blogg/`, oppdater tittel, metadata og innhold, og legg den til som en rad i `blogg.html` (og eventuelt i "Siste fra bloggen" på forsiden).

## Deploy

Siden er 100% statisk og kan hostes hvor som helst — Netlify, Vercel, GitHub Pages, eller en vanlig webserver. Ingen server-side kode kreves.
