# Wafa Trust Website — Complete Project Handoff Document

> **For:** The next developer (Claude Code or anyone else picking this up)  
> **Created:** July 19, 2026  
> **Project Location:** `/Users/mokshparjapati/Desktop/website/wafa-site/`  
> **Original Site Reference:** `/Users/mokshparjapati/Desktop/website/upload_to_hostinger/index.html`

---

## 1. Project Overview & Goal

**Wafa Educational And Charitable Trust** (`wafatrustindia.org`) is an Indian charity organization based in Akola, Maharashtra. They had a WordPress site that was hacked (casino links injected), so the database was deleted. The WordPress site is now dead.

### The Goal
Build a **fully static Next.js React website** that:
1. Looks **identical** to the original WordPress/Elementor site (use `upload_to_hostinger/index.html` as the visual reference)
2. Requires **no database** — all content is stored in a JSON file
3. Can be deployed to **Vercel** with a DNS rotation on the original domain
4. Includes a **Razorpay donation** page (the charity accepts donations)
5. Should look **professional and premium** — not like a basic template

### What Has Been Built So Far
A working Next.js 16 app with:
- 40 static pages (homepage, about, services, blog, gallery, contact, donate, etc.)
- All content extracted from the old WordPress backup into `site-data.json`
- Custom React components for Header, Footer, HeroSlider, Counters, etc.
- A full CSS design system in `globals.css`

### What's NOT Working / Needs Fixing
The homepage layout does **not** match the original site closely enough. The user is frustrated because:
- The visual design diverges too much from the original Elementor look
- Images are incorrectly assigned or missing in several places
- Some icons use raw emojis instead of proper SVG/font-awesome icons
- The hero section text alignment and image display need work

---

## 2. Project Architecture

```
wafa-site/
├── public/
│   ├── assets/                    # All images (see Section 5 below)
│   ├── data/
│   │   └── site-data.json         # ALL site content (blogs, pages, counters)
│   ├── wp-content/                # Copied from original site (CSS/fonts — may be deletable)
│   └── wp-includes/               # Copied from original site (CSS — may be deletable)
├── src/
│   ├── app/
│   │   ├── layout.js              # Root layout with Header + Footer
│   │   ├── page.js                # HOMEPAGE (the main focus of fixes)
│   │   ├── globals.css            # Complete design system (~1850 lines)
│   │   ├── about/page.js
│   │   ├── award/page.js
│   │   ├── blog/page.js
│   │   ├── blog/[id]/page.js
│   │   ├── certificate/page.js
│   │   ├── contact/page.js
│   │   ├── donate/page.js         # Has Razorpay integration
│   │   ├── gallery/page.js
│   │   ├── mission/page.js
│   │   ├── vision/page.js
│   │   ├── privacy-policy/page.js
│   │   ├── refund-policy/page.js
│   │   ├── terms/page.js
│   │   └── services/[slug]/page.js   # Dynamic service pages (21 services)
│   ├── components/
│   │   ├── Header.js              # Top bar + navigation + mobile menu
│   │   ├── Footer.js              # 4-column footer
│   │   ├── HeroSlider.js          # Hero banner with background image
│   │   ├── FeatureCards.js         # Mission/Events/Support/Volunteer cards
│   │   ├── CounterSection.js      # Animated counters (1,160+ etc.)
│   │   ├── CampaignGrid.js        # Service/campaign cards grid
│   │   ├── GalleryGrid.js         # Photo gallery grid
│   │   └── BlogCard.js            # Blog post card
│   └── lib/
│       └── data.js                # Data loading functions from site-data.json
├── package.json
└── next.config.mjs
```

### How to Run
```bash
cd /Users/mokshparjapati/Desktop/website/wafa-site
npm install
npm run dev        # Development server on http://localhost:3000
npm run build      # Production build (validates everything compiles)
```

---

## 3. The Original Homepage Layout (What It Should Look Like)

The reference file is: `upload_to_hostinger/index.html`

Open it in a browser to see the target design. Here is the **exact section order** from the original:

| # | Section | Content | Images Used |
|---|---------|---------|-------------|
| 1 | **Header/Topbar** | Email, phone, social links, logo, nav | `assets/logo.jpeg` (the round trust logo) |
| 2 | **Hero Banner** | "Be A Voice For Poor People" over a full-width photo | `assets/hero.jpg` (award ceremony photo) |
| 3 | **4 Feature Cards** | Mission, Events, Support, Volunteer — overlapping the hero | No images, just icons |
| 4 | **Counters** | 1,160+ borewells, 823+ handpumps, 181+ masjids, 15,885+ foods | No images, just numbers with icons |
| 5 | **About / Wafa Trust intro** | "Wafa Educational & Charitable Trust" + "Economic Support" + "Medical Assistance" boxes | `assets/image-1.jpg` |
| 6 | **"We're here to help them"** | Secondary about text section | No images |
| 7 | **Event Gallery** | "Event Galleys" — 8 photos in a grid | `image-1.jpg`, `image-2.jpg`, `image-3.jpg`, `donate-2.jpg`, `donate-4.jpg`, `donate-5.jpg`, `donate-6.jpg`, `donate-7.jpg` |
| 8 | **Latest News** | 4 blog cards: Ration Kit, Hand Pumps, House Construction, Quran Distribution | `blog1.jpg`, `blog2.jpg`, `blog3.jpg`, `blog4.jpg` |
| 9 | **CTA Banner** | "Fundraising for the people and causes you care about" | No images (blue background) |
| 10 | **Footer** | 4 columns: About, Links, Charity/Services, Contact + "Raise Money" | Logo webp |

### Current Homepage (`page.js`) Section Order
The current `page.js` has this order:
1. HeroSlider → 2. FeatureCards → 3. CounterSection → 4. About Section → 5. Gallery → 6. Latest News/Campaigns → 7. CTA Banner

**This order is approximately correct** but the visual styling and content within each section doesn't match the original closely enough.

---

## 4. Theme / Color System

The original site uses the **Paroti WordPress theme** with these colors:

| Element | Color | CSS Variable |
|---------|-------|-------------|
| Primary (links, buttons, accents) | `#0099d9` (bright cyan/blue) | `--color-primary` |
| Accent (secondary buttons) | `#f7941d` (orange) | `--color-accent` |
| Body text | `#1a2e22` (dark green-black) | `--color-text` |
| Background | `#ffffff` | `--color-bg` |
| Alt background | `#f7f9f8` | `--color-bg-alt` |
| Footer background | `#0b1d14` (very dark green-black) | `--color-bg-dark` |

### Fonts
- **Headings:** Poppins (300–800 weight)
- **Body:** Inter (300–700 weight)
- **Also used in original:** Manrope, Roboto Slab

---

## 5. IMAGES — The Critical Section

> [!CAUTION]
> **Images are the #1 source of user frustration.** Many images are incorrectly assigned, some are screenshots from the old WP admin, and the gallery showed wrong photos. Pay very careful attention to this section.

### 5.1 Image Files in `/public/assets/`

| Filename | What It Actually Is | Where It Should Be Used |
|----------|-------------------|----------------------|
| `hero.jpg` | Award ceremony photo (men receiving award/shield) | **Hero banner background** — this is correct |
| `logo.jpeg` | Wafa Trust round logo (blue/green circle with Arabic text) | **Header logo** — currently used correctly |
| `logo.png` | Same logo, PNG version with transparency | Favicon |
| `about.jpg` | Photo of trust activities | **About section** |
| `image-1.jpg` | Charity work photo | About section + Gallery |
| `image-2.jpg` | Charity work photo | Gallery |
| `image-3.jpg` | Charity work photo | Gallery |
| `blog1.jpg` | Ration kit distribution photo | Blog card: "Free Distribution of Ration Kit" |
| `blog2.jpg` | Hand pump installation photo | Blog card: "Providing Hand Pumps" |
| `blog3.jpg` | House construction photo | Blog card: "House Construction for the Needy" |
| `blog4.jpg` | Quran distribution photo | Blog card: "Quran e Kareem Distribution" |
| `donate-2.jpg` through `donate-7.jpg` | Various charity activity photos | **Gallery section** (Event Galleys) |
| `slider-11.jpg` through `slider-71.jpg` | Various charity work photos | **Campaign/service cards** (NOT the gallery) |
| `mosques.jpg` | Mosque photo | Campaign card for Masjid/Madrasa Build |
| `event1.webp` | Event photo | Campaign card for Maktab Deeniyat |
| `campaign_1.jpeg` through `campaign_26.jpeg` | WhatsApp photos from the trust | These are **real charity work photos from the client**. They were sent via WhatsApp and renamed. These should be used for service/campaign pages. |
| `shape-*.png` | Decorative shapes from original theme | Background decoration elements |
| `bg-*.jpg` | Background images from original theme | Various section backgrounds |
| `woocommerce-placeholder.png` | WooCommerce default image | **NOT for use** — delete or ignore |
| `0ecfec4c-*.webp` | Logo in various sizes (from WP media library) | Can use as alternative logo sources |

### 5.2 Image Issues That Need Fixing

> [!WARNING]
> 1. **Gallery section** currently uses `blog1-4.jpg` and `slider-*.jpg` files — it should use `image-1.jpg`, `image-2.jpg`, `image-3.jpg`, `donate-2.jpg`, `donate-4.jpg`, `donate-5.jpg`, `donate-6.jpg`, `donate-7.jpg` (matching the original site's "Event Galleys" section)
> 2. **Campaign/service cards** use a manual mapping in `data.js` (`CAMPAIGN_IMAGE_MAP`) — some mappings are wrong or reuse the same image. Each of the 26 `campaign_X.jpeg` files corresponds to a specific service. These need to be properly matched.
> 3. **Hero image** (`hero.jpg`) is used correctly BUT the text was previously centered (blocking faces in the photo). It was moved to right-align. Verify this looks good.
> 4. **Header emojis** — The topbar still uses text characters like `✉`, `📞`, `f`, `ig`, `▶`, `wa` instead of proper Font Awesome or SVG icons. These look unprofessional.
> 5. **Footer emojis** — The footer contact section uses `📍`, `📞`, `✉️` emojis. Replace with proper SVG icons.

### 5.3 Campaign Image Mapping (in `data.js`)

The current mapping in `CAMPAIGN_IMAGE_MAP` assigns generic photos to campaigns. The **correct** approach would be:
- Use `campaign_1.jpeg` through `campaign_26.jpeg` for the 21 service pages
- These were the actual WhatsApp images the client sent showing their real charity work
- But we need to figure out which campaign_X maps to which service (they were bulk-renamed)

For now, **any real photo is better than a placeholder**, so using `campaign_N.jpeg` files for campaigns is acceptable.

---

## 6. Known Issues & Bugs

### 6.1 Homepage Issues
- [ ] **Section layout doesn't match original** — The spacing, typography, and card styles diverge from the Elementor original
- [ ] **Hero text alignment** — Was moved to right-align, may need tuning
- [ ] **Feature cards** — These were newly added; style should match the original's overlapping card design
- [ ] **"We're here to help them"** section in the original is a distinct section from the "Wafa Educational & Charitable Trust" section — in the current code they are merged into one About section
- [ ] **Gallery images wrong** — Should show charity event photos, not screenshots or slider images

### 6.2 Component Issues
- [ ] **Header topbar** uses emoji text (`✉`, `📞`, `f`, `ig`, `▶`, `wa`) instead of Font Awesome icons
- [ ] **Footer** uses emoji icons (`📍`, `📞`, `✉️`) instead of SVG icons
- [ ] **HeroSlider "Donate Now" button** still has a `❤` emoji character — should be an SVG heart icon
- [ ] **Header "Donate Now" button** was changed to blue (`btn-primary`) with SVG — this is correct now

### 6.3 Page Content Issues
- [ ] Some service pages may have thin or missing content (extracted from old WP database)
- [ ] Blog pages only have 4 entries — could be expanded if the client provides more
- [ ] The `SITE_INFO.phone` in `data.js` line 133 has a typo: `'+91 9373aborsh'` — should be `'+91 93732 08864'`

### 6.4 Leftover Files to Clean Up
- `public/wp-content/` and `public/wp-includes/` — These were copied from the original site during a failed 1:1 porting attempt. They are **~10MB of WordPress CSS/JS/fonts that are NOT currently being used**. They can be safely deleted unless you plan to reference original Elementor styles.
- `public/wp-content/inline-styles.css` — Extracted inline styles from old HTML, not in use.

---

## 7. CSS Architecture (`globals.css`)

The CSS file is ~1850 lines and contains everything in one file:

| Section | Lines (approx.) | Description |
|---------|-----------------|-------------|
| CSS Variables | 1–73 | All design tokens (colors, spacing, fonts, shadows) |
| Reset & Base | 74–130 | Box-sizing reset, body styles, typography defaults |
| Container & Layout | 130–170 | `.container`, `.section`, `.section-alt` |
| Buttons | 170–250 | `.btn`, `.btn-primary`, `.btn-accent`, `.btn-white`, `.btn-outline` |
| Topbar | 250–320 | Top contact bar styling |
| Header/Nav | 320–500 | Main navigation, dropdown, mobile menu, hamburger |
| Hero Section | 500–650 | Hero slider, overlay, text content, animations |
| About Section | 650–750 | Two-column layout, image, checkmarks |
| Counters | 750–850 | Animated counter boxes |
| Campaign Grid | 850–950 | Service/campaign cards |
| CTA Banner | 950–1000 | Blue call-to-action section |
| Blog Cards | 1000–1050 | Blog post card styling |
| Gallery | 1050–1100 | Photo grid |
| Footer | 1100–1250 | 4-column footer with social links |
| Page-specific | 1250–1650 | About page, donate page, contact page, etc. |
| Animations | 1650–1700 | Fade-in, slide-up keyframes |
| Responsive | 1700–1850 | Media queries for tablet and mobile |
| Feature Cards | Appended at end | The 4 cards below the hero |

> [!TIP]
> The CSS uses a design system approach with CSS custom properties. To change the entire color scheme, just update the `:root` variables at the top. The hero text was set to `text-align: right` and `justify-content: flex-end` to avoid blocking faces in the hero image.

---

## 8. Data Layer (`site-data.json`)

All content lives in `/public/data/site-data.json`. Structure:

```json
{
  "counters": {
    "borewell": "1,160",
    "handpump": "823",
    "masjid": "181",
    "foods": "15,885"
  },
  "blogs": [
    {
      "id": 1,
      "title": "Free Distribution of Ration Kit",
      "image": "assets/blog1.jpg",
      "excerpt": "...",
      "content": "...(HTML)...",
      "date": "2023-03-15"
    }
  ],
  "gallery": ["assets/image-1.jpg", "..."],
  "pages": [
    {
      "id": "water-well-for-needy-place",
      "title": "Water well for needy place",
      "content": "...(HTML)..."
    }
  ]
}
```

The `data.js` file in `src/lib/` provides helper functions:
- `getCounters()` — Returns counter values
- `getAllBlogs()` / `getBlogById(id)` — Blog data
- `getGallery()` — **Hardcoded array of gallery image paths** (NOT from JSON)
- `getAllServices()` / `getServiceBySlug(slug)` — Maps service slugs to page data + images
- `getAllPages()` / `getPageBySlug(slug)` — Generic page lookup

---

## 9. User Feedback Timeline (What the User Asked For)

Here is a chronological summary of every user request, so you understand the full context:

1. **"Check last conversation status"** — User had been trying to extract a corrupt `.wpress` backup for days
2. **"I got a call with the client, we can make Node.js React website, skip the database"** — The pivotal decision to go Next.js
3. **"Donation is a must, I want this on Vercel"** — Razorpay integration required
4. **"Run a local build"** — First time seeing the site
5. **"Use the HTML colour theme, so many 404 pages, homepage has different picture than hero"** — First round of complaints
6. **"You put ALL the screenshots in the gallery"** — Gallery was showing WP admin screenshots
7. **"Hero image not properly formatted, looks too AI"** — Hero image needed better presentation
8. **"Pages lack content, empty, no images"** — Service pages were thin
9. **"Hero page icons look unprofessional"** — Emojis instead of proper icons
10. **"Hero image should have logo" / "Nahi yr hero image chahiye"** — Confusion about hero image vs. logo placement
11. **"Find the file named hero image and add that"** — Clarified: use `hero.jpg` for the hero banner
12. **"That orange icon should be blue"** — Donate button changed from orange to blue
13. **"This one too, make it white"** — CTA "Become a Donor" button changed to white
14. **"Text should be right, image should be properly seen"** — Hero text moved to right side
15. **"Homepage should resemble this (index.html)"** — Wants the React site to match the original Elementor layout
16. **"Not accurate, everything is different"** — Sections reordered but still looked different
17. **"Don't you have your own mind, this is not functional"** — A failed 1:1 HTML dump approach broke everything; user rightfully angry. It was reverted.
18. **"Create one single folder with relevant files"** — Packaged into `wafa_trust_nextjs_website.zip`
19. **"Claude Code is here to help, create extensive document"** — This document

---

## 10. Priority Fix List (Start Here)

> [!IMPORTANT]
> Fixes ordered by user priority:

### P0 — Must Fix Immediately
1. **Fix the gallery images** in `data.js` `getGallery()` function — replace the current list with: `image-1.jpg`, `image-2.jpg`, `image-3.jpg`, `donate-2.jpg`, `donate-4.jpg`, `donate-5.jpg`, `donate-6.jpg`, `donate-7.jpg`
2. **Fix `SITE_INFO.phone` typo** in `data.js` line 133 — change `'+91 9373aborsh'` to `'+91 93732 08864'`
3. **Replace all emojis with SVG icons** in `Header.js` (topbar: ✉, 📞, f, ig, ▶, wa) and `Footer.js` (📍, 📞, ✉️) and `HeroSlider.js` (❤)

### P1 — Homepage Visual Match
4. **Style the homepage to match `upload_to_hostinger/index.html`** — Open that file in a browser, then adjust CSS in `globals.css` to match:
   - Hero section sizing, gradient overlay, text positioning
   - Feature cards should overlap the hero bottom edge
   - Counter section background and layout
   - About section two-column layout with decorative elements
   - Gallery grid layout
   - Blog card styling
   - CTA banner styling
5. **Split the About section** — The original has TWO distinct sections: (a) "Wafa Educational and Charitable Trust" with image-1.jpg and sub-boxes for "Economic Support" / "Medical Assistance", and (b) "We're here to help them" as a simpler text section. Currently merged into one.

### P2 — Content Polish
6. **Verify all 21 service pages have real content** — Check `site-data.json` pages for empty or broken HTML
7. **Use `campaign_X.jpeg` files for service cards** — Update `CAMPAIGN_IMAGE_MAP` in `data.js`
8. **Delete unused WordPress files** — Remove `public/wp-content/` and `public/wp-includes/` directories

### P3 — Deployment
9. **Deploy to Vercel** — `npm run build` already works successfully
10. **Set up Razorpay** on the donate page (currently has a placeholder form)

---

## 11. Reference Files

| File | Purpose |
|------|---------|
| `upload_to_hostinger/index.html` | **THE reference** — open in browser to see target homepage design |
| `upload_to_hostinger/*.html` | All original pages (35 HTML files) — visual references for each page |
| `wafa-site/` | **THE working codebase** — Next.js project |
| `WhatsApp Image *.jpeg` (in workspace root) | Original campaign photos sent by the client (same as `campaign_X.jpeg` in assets) |

---

## 12. Contact & Site Information

- **Organization:** Wafa Educational And Charitable Trust
- **Website:** wafatrustindia.org
- **Email:** wafatrust011@gmail.com
- **Phone:** +91 93732 08864
- **Address:** Near Zubaida Hospital, Mohammadi Chowk, Akola, Maharashtra 444001, India
- **Facebook:** https://www.facebook.com/wafatrust
- **Instagram:** https://www.instagram.com/wafa_trust/
- **YouTube:** https://www.youtube.com/@wafatrust
- **WhatsApp:** https://wa.me/919373208864
