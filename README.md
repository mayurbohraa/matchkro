# MatchKro Website

Official marketing website for **MatchKro** — an Indian dating app ("Love and Earnings Go on a Date!"). This is a static, multi-page site built with plain HTML, CSS, and jQuery, styled with Bootstrap 5.

## Tech Stack

- **HTML5** — static pages, no build step or bundler
- **CSS3** — [`css/styles.css`](css/styles.css) (custom styles) + [`css/responsive.min.css`](css/responsive.min.css) (responsive/media-query overrides)
- **Bootstrap 5.3.1** — loaded via CDN (CSS + JS bundle)
- **Bootstrap Icons 1.10.5** — loaded via CDN
- **jQuery 2.1.3** — [`js/jquery-2.1.3.min.js`](js/jquery-2.1.3.min.js)
- **Vanilla/jQuery JS** — [`js/scripts.js`](js/scripts.js) for interactivity (e.g. navbar toggle)

No package manager, npm scripts, or build tooling are used — the site can be served as-is by any static file server.

## Project Structure

```
.
├── index.html              # Home page (hero, quote, about us, approach, contact/footer sections)
├── css/
│   ├── styles.css          # Main stylesheet
│   └── responsive.min.css  # Responsive/media-query styles
├── js/
│   ├── jquery-2.1.3.min.js
│   └── scripts.js          # Navbar toggle and other page interactivity
├── images/                 # Logos, icons, screenshots, and decorative assets
└── pages/
    ├── faq.html
    ├── safetycentre.html
    ├── datingsafetytips.html
    ├── privacypolicy.html
    ├── cookiepolicy.html
    ├── securitypolicy.html
    └── t&c.html
```

## Pages

| Page | Description |
|---|---|
| `index.html` | Home page with Hero, Quote, About Us, Approach, and Contact/Footer sections |
| `pages/faq.html` | Frequently Asked Questions |
| `pages/safetycentre.html` | Safety Centre overview |
| `pages/datingsafetytips.html` | Dating safety tips |
| `pages/privacypolicy.html` | Privacy Policy |
| `pages/cookiepolicy.html` | Cookie Policy |
| `pages/securitypolicy.html` | Security Policy |
| `pages/t&c.html` | Terms & Conditions |

## Home Page Sections

- **Navbar** — logo, links to Home / About Us / Safety Centre / Contact Us, and a Download button linking to the Play Store listing
- **Hero** (`#hero`) — headline, tagline, and Google Play download badge
- **Quote** (`#quote`) — decorative quote section
- **About Us** (`#about-us`) — app/company introduction
- **Approach** (`#approach`) — how MatchKro works
- **Contact/Footer** (`#contact-footer`) — contact details and footer links

## Running Locally

Since this is a static site, you can open `index.html` directly in a browser, or serve it with any static file server for correct relative-path behavior, e.g.:

```bash
# Python
python -m http.server 8000

# Node (npx)
npx serve .
```

Then visit `http://localhost:8000`.

## Notes

- Bootstrap, Bootstrap Icons, and their dependencies are loaded from the `jsdelivr` CDN rather than bundled locally.
- Originally developed by Progshee Technologies (see comment at the top of `index.html`).
