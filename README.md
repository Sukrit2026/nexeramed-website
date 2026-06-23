# Nexera Medical Website

Marketing website for Nexera Medical and the SpectraShield™ line of antimicrobial
N95/N99 respirator masks. Static HTML/CSS/JS, hosted on GitHub Pages.

## Structure

```
nexeramed-website/
├── cfiles/        # Main site pages (HTML)
├── nfiles/        # Archived news / press-release pages
├── dfiles/        # Product datasheets (PDF)
├── graphics/      # Images, logos, icons
├── styles.css     # Site stylesheet
├── sitemap.xml    # Sitemap
├── robots.txt
└── serve.js       # Local dev static server (not deployed)
```

## Local preview

```
node serve.js        # serves at http://localhost:3011 (entry: cfiles/home.html)
```

## Deployment

Served via GitHub Pages from the `master` branch. Note that GitHub Pages does not
process `.htaccess` or custom response headers; HTTPS is enforced via the
repository's **Settings → Pages → Enforce HTTPS** option. The contact page lists
phone/email directly (no server-side form handling on Pages).
