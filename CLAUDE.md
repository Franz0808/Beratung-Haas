# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Entwicklungsserver starten (Next.js dev server)
npm run build     # Produktions-Build erstellen
npm run start     # Produktions-Server lokal starten
```

## Architektur

**Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS 3, PostCSS

**Routing** (Next.js App Router): Alle Routen sind auf Deutsch:
- `/` → Home (`app/page.tsx`)
- `/ueber` → About (`app/ueber/page.tsx`)
- `/leistungen` → Services Übersicht (`app/leistungen/page.tsx`)
- `/leistungen/paarberatung` → Service-Detail Paarberatung
- `/leistungen/lebensberatung` → Service-Detail Lebensberatung
- `/faq` → FAQ (`app/faq/page.tsx`)
- `/kontakt` → Kontakt (`app/kontakt/page.tsx`)

**Layout**: `app/layout.tsx` — Root-Layout mit Inter-Font, `<Nav>` und `<Footer>` auf allen Seiten.

**Components** (`components/`): `Nav`, `Footer`, `Icons`, `FAQAccordion`, `StepNavigator`, `ProcessNavigator`.

**Styling**: Tailwind CSS 3 via PostCSS. CSS-Variablen in `app/globals.css`:
- `--navy: #1b3d52`, `--mid: #2a5c74`, `--accent: #D98C2B`, `--warm: #f5f3f0`
- Globale Utility-Klassen: `.label`, `.title-hero`, `.title-section`, `.body-text`, `.btn-primary`, `.btn-outline`, `.link-arrow`, `.service-card`, etc.
- Responsive Breakpoints via `@media (max-width: 768px)` in globals.css.

**Animationen**: Reine CSS-Transitions. Keine Animation-Library.

**State Management**: Ausschließlich lokaler React-State mit `useState` – keine globale State-Library.

**Bilder**: Next.js `<Image>`, alle Bilder statisch in `public/`. `images.unoptimized: true` (für Static Export / GitHub Pages).

**Pfad-Alias**: `@/*` zeigt auf den Projekt-Root (konfiguriert in `tsconfig.json`).

## Besonderheiten

- Die gesamte UI-Sprache ist **Deutsch (de-DE)** – alle Texte, Routen und Kommentare sollten auf Deutsch bleiben.
- Next.js `next.config.ts` hat `output: 'export'`, `images.unoptimized: true` und webpack-polling für dev.
- Keine API-Routes, kein Backend, keine Umgebungsvariablen nötig.

## Deployment

**WICHTIG: Kein ZIP mit PowerShell verwenden** – PowerShell's `Compress-Archive` speichert Backslashes, die auf Linux-Servern zu Fehlern führen.

Stattdessen `tar.gz` mit GNU tar erstellen (in Git Bash verfügbar):

```bash
npm run build
tar -czf dist.tar.gz -C "D:\Franz\Developments\Beratung Haas Website\.next\standalone" .
```

Auf dem Linux-Server entpacken und mit `node server.js` starten, oder das `out/`-Verzeichnis als statische Dateien ausliefern.
