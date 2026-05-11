# NexeraMed.com Website Archive

Full archive of www.nexeramed.com captured on 2026-05-11 for team review and update planning.

## Purpose

This repo contains the current state of the NexeraMed website so the team can review all content — including pages that are no longer linked in the navigation — and decide what to keep, update, or remove before the site redesign.

## Directory Structure

```
nexeramed-website/
├── cfiles/          # Main site pages (PHP)
├── nfiles/          # News article pages and PR PDFs
├── dfiles/          # Product data sheets (PDFs)
├── graphics/        # Images, logos, icons
├── javascript/      # jQuery and slider scripts
├── styles.css       # Main stylesheet
├── thickbox.css     # Lightbox/modal stylesheet
├── anythingslider.css # Slider stylesheet
├── sitemap.xml      # Original sitemap (42 URLs)
└── SITE_AUDIT.md    # Detailed page-by-page status
```

## Page Status Overview

### Active Pages (Live & Accessible)
| Page | File | Status |
|------|------|--------|
| Home | `cfiles/home.php` | ✅ Live |
| About Nexera | `cfiles/about.php` | ✅ Live |
| Management Team | `cfiles/about_team.php` | ✅ Live |
| Investors | `cfiles/about_investors.php` | ✅ Live |
| Privacy Statement | `cfiles/about_privacy.php` | ✅ Live |
| Products | `cfiles/products.php` | ✅ Live |
| Guardian Product | `cfiles/products_guardian.php` | ✅ Live |
| SpectraShield Technology | `cfiles/products_technology.php` | ✅ Live |
| Antimicrobial Info | `cfiles/products_antimicrobial.php` | ✅ Live |
| Performance Testing | `cfiles/products_ptesting.php` | ✅ Live |
| Resources | `cfiles/news_resourcelinks.php` | ✅ Live |
| Contact Us | `cfiles/contact.php` | ✅ Live |
| Canada Regulatory | `cfiles/regulatory_CA.php` | ✅ Live |
| EU Regulatory | `cfiles/regulatory_EU.php` | ✅ Live |

### Hidden Team Member Profiles (Accessible but NOT linked in navigation)
| Person | File | Notes |
|--------|------|-------|
| Team ID: pasa | `cfiles/about_team_pasa.php` | ⚠️ Not linked |
| Team ID: jimo | `cfiles/about_team_jimo.php` | ⚠️ Not linked |
| Team ID: shwa | `cfiles/about_team_shwa.php` | ⚠️ Not linked |
| Team ID: akag | `cfiles/about_team_akag.php` | ⚠️ Not linked |
| Team ID: coca | `cfiles/about_team_coca.php` | ⚠️ Not linked |

### Ghost Pages (In sitemap but return 404 — NOT recoverable)
| Page | Original URL | Notes |
|------|-------------|-------|
| Defender Product | `/cfiles/products_defender.php` | ❌ 404 — content lost |
| Guardian 2 Product | `/cfiles/products_guardian2.php` | ❌ 404 — content lost |
| Board of Directors | `/cfiles/about_board.php` | ❌ 404 — content lost |
| Board Member: clcr | `/cfiles/about_board.php?boardid=clcr` | ❌ 404 — content lost |
| Board Member: miam | `/cfiles/about_board.php?boardid=miam` | ❌ 404 — content lost |
| Partners | `/cfiles/about_partners.php` | ❌ 404 — content lost |
| Media | `/cfiles/news_media.php` | ❌ 404 — content lost |
| News | `/cfiles/news.php` | ❌ 404 — still linked in footer |

### News Articles (All accessible, dates range 2007–2011)
| File | Approx Date |
|------|-------------|
| `nfiles/news_110711_1.php` | Jul 2011 |
| `nfiles/news_091511_1.php` | Sep 2011 |
| `nfiles/news_090811_1.php` | Sep 2011 |
| `nfiles/news_030811_1.php` | Mar 2011 |
| `nfiles/news_042709_1.php` | Apr 2009 |
| `nfiles/news_021209_2.php` | Feb 2009 |
| `nfiles/news_021209_1.php` | Feb 2009 |
| `nfiles/news_012209_1.php` | Jan 2009 |
| `nfiles/news_110608_1.php` | Nov 2008 |
| `nfiles/news_090407_1.php` | Sep 2007 |
| `nfiles/news_090407_2.php` | Sep 2007 |
| `nfiles/news_082407_1.php` | Aug 2007 |

### Documents
| File | Status |
|------|--------|
| `dfiles/Guardian_FFP2.pdf` | ✅ Downloaded |
| `dfiles/Guardian_FFP3.pdf` | ❌ 404 — missing |
| `nfiles/news_103007_FOSS_MRSA_PR.pdf` | ✅ Downloaded |

## Products Referenced But Missing Pages
- **SpectraShield Protector Mask** — mentioned on products page, no detail page exists
- **SpectraShield 9500 Surgical N95** — mentioned on investors page (FDA 510(k) cleared), no page
- **SpectraShield 9900** — mentioned on about page, no page
- **Guardian FFP3** — PDF datasheet was in sitemap but returns 404

## Known Issues
1. Footer links to "Nexera In The News" (`/cfiles/news.php`) which is 404
2. Sitemap uses `http://` instead of `https://`
3. Sitemap references pages that no longer exist
4. 3+ former team member profiles are accessible by direct URL but hidden from navigation

## Team Action Required
- [ ] Review each active page for content accuracy
- [ ] Decide: restore or permanently remove ghost pages (Board, Partners, Media, etc.)
- [ ] Decide: keep or remove hidden team member profiles
- [ ] Decide: keep or archive old news articles (2007–2011)
- [ ] Decide: create product pages for Protector, 9500, 9900
- [ ] Update sitemap to reflect actual site structure
- [ ] Fix broken footer links
