# Sito Malibu — Mapo Club Estate 2026

Landing page per i 7 eventi estivi del Mapo Club, ottimizzata per traffico da Meta Ads.

## Avvio rapido

```bash
# Dalla cartella del progetto:
python3 -m http.server 8000
# Apri http://localhost:8000
```

---

## Dove sostituire i contenuti

### Video Hero
- **File:** `index.html` → sezione `<!-- HERO -->`
- **Cosa:** sostituisci `assets/hero-video.mp4` con il video reale (formato MP4, max 10-15MB per performance)
- **Poster:** sostituisci `assets/hero-poster.jpg` con un frame del video (fallback immagine)
- Se non c'è un video, l'overlay a gradiente funziona come fallback automatico

### Poster evento prossimo (1080×1350)
- **File:** `script.js` → array `EVENTS` → campo `posterUrl` dell'evento prossimo
- **Esempio:** `posterUrl: 'assets/poster-foam-party.jpg'`
- Il formato consigliato è 1080×1350px (rapporto Instagram stories/post verticale)
- Metti i file poster nella cartella `assets/`

### Testi degli eventi
- **File:** `script.js` → array `EVENTS`
- Ogni evento ha: `date`, `time`, `title`, `desc`, `tags`, `emoji`, `ticketUrl`, `mapsUrl`, `posterUrl`
- Le date devono essere in formato `YYYY-MM-DD`
- Lo script rileva automaticamente l'evento più vicino

### Link biglietti
- **File:** `script.js` → campo `ticketUrl` di ogni evento
- Sostituisci i placeholder `#ticket-xxx` con i link reali (Eventbrite, Dice, ecc.)

### Link Google Maps
- **File:** `script.js` → campo `mapsUrl` di ogni evento
- Sostituisci con il link Google Maps reale del Mapo Club

### Link Instagram
- **File:** `index.html` → sezione footer CTA
- Sostituisci `https://instagram.com/mapoclub` con il profilo reale

### Facebook Pixel
- **File:** `index.html` → `<head>` → commento `<!-- Facebook Pixel placeholder -->`
- Decommentare e inserire il Pixel ID reale per il tracking delle conversioni Meta Ads

### Open Graph (anteprima social)
- **File:** `index.html` → meta tag `og:image`, `og:title`, `og:description`
- Aggiungi un file `og-image.jpg` (1200×630px) nella root del progetto

---

## Struttura file

```
SITOMALIBU/
├── index.html      ← pagina principale
├── styles.css      ← tutti gli stili
├── script.js       ← logica, dati eventi, animazioni
├── assets/         ← video, poster, immagini
│   ├── hero-video.mp4
│   ├── hero-poster.jpg
│   └── poster-*.jpg
├── og-image.jpg    ← immagine anteprima social
└── README.md       ← questo file
```

## Note tecniche
- Mobile-first, nessun framework CSS
- Nessuna dipendenza esterna (solo Google Fonts)
- Intersection Observer per animazioni scroll
- Fallback automatico se il video non carica
- Supporto `prefers-reduced-motion`
