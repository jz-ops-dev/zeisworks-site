# Site Repositioning Changes

**Sprint:** ZeisWorks strategic repositioning — April 2026
**Branch:** `claude/update-zeisworks-website-dmvI2`

---

## Summary of change

ZeisWorks.com repositioned from "independent Salesforce + automation consultant" to "the human face of small business consulting for the modern age." The site now surfaces three connected service pillars, leads with the Growbotik engine as the primary CTA, and adds a Stack page as a credibility and monetization surface.

---

## Pages changed

### `public/index.html` — Homepage (major rewrite)

**What changed:**
- **Meta tags:** Title updated to "Modern small business consulting. Built by one person." Description added.
- **Nav:** Updated links to Services, Stack, About, Contact. Primary CTA changed to "Free marketing analysis" linking to Growbotik engine (placeholder `{{GROWBOTIK_ENGINE_URL}}`).
- **Hero:** New headline ("The human face of modern small business consulting."), new sub-head, primary CTA changed to "Run your free 5-minute marketing analysis" (Growbotik engine), secondary CTA links to contact form. Hero inline form removed — primary CTA is now an external link, not a form toggle.
- **Three pillars section (new):** Added between hero and "Sound familiar" section. Three equal-weight cards for Marketing, Operations, and Custom-built tools with copy from the brief.
- **Brand promise strip (new):** Dark forest section quoting the brand promise below the pillars.
- **Pricing section:** Updated to reflect retainer-primary model. Rate updated from $85/hr to $125/hr. "Calls and advice are always free" updated to "Face-to-face time is always free." Added "You own everything we build" as a trust point.
- **About section:** Copy rewritten to match new positioning (one-operator framing, three pillars). Credentials updated to include marketing operations and custom app development. Added links to About page and LinkedIn.
- **Stack teaser (new):** Added between About and FAQ sections.
- **FAQ:** Updated "What kinds of problems" to reference three pillars. Updated pricing Q&A to reflect $125/hr and retainer model. Updated "Who is behind this" to match new positioning.
- **Footer CTA:** Updated to "Got a problem? Tell us about it." Added Growbotik engine as secondary CTA.
- **Contact form:** Updated section header to "Tell us what you're trying to fix." Updated select options to map to three pillars (Marketing, Operations, Custom tools). Submit button updated.
- **Footer:** New tagline "Modern small business consulting. Built by one person." Added navigation links to all service pages, Stack, About, and Contact.
- **Sticky CTA:** Updated text to "Tell us what you're trying to fix."
- **CSS additions:** Added styles for `.pillars`, `.pillars-grid`, `.pillar-card`, `.brand-promise`, `.stack-teaser`, `.footer-links`.

**Why:** Reflect the new three-pillar service structure and lead with Growbotik engine as the entry point to the marketing pillar.

---

### `src/pages/stack.astro` — New page

**What changed:** New page at `/stack`.

**Contents:**
- Header with one-paragraph intro (as specified in brief)
- Five categorized sections: CRM and customer data, AI and automation, Marketing platforms, Web and content, Internal operations
- 13 tool entries with name, one-sentence description, and "why I use it" notes
- Affiliate link placeholders (`{{AFFILIATE_LINK_*}}`) throughout
- Disclosure footer

**Why:** Credibility surface, SEO inbound from tool-related searches, monetization via affiliate links.

---

### `src/pages/marketing.astro` — New page

**What changed:** New page at `/marketing`.

**Contents:**
- Pillar header with positioning copy from brief
- "What's included" — 5 bullets (local SEO, paid ads, web optimization, lead gen, reporting)
- "Who it's for" — sector examples (home services, healthcare, professional services, etc.)
- "What outcomes look like" — 2 specific paragraphs
- CTA: "Run the free analysis" (Growbotik engine)

**Why:** Service page for the marketing pillar. Entry point from pillar cards on homepage.

---

### `src/pages/operations.astro` — New page

**What changed:** New page at `/operations`.

**Contents:**
- Pillar header with positioning copy from brief
- "What's included" — 5 bullets (CRM setup, process automation, workflow design, reporting, systems integration)
- "Who it's for" — 6 specific situations
- "What outcomes look like" — 2 specific paragraphs (Salesforce example)
- CTA: "Tell us what you're trying to fix" (contact form)

**Why:** Service page for the operations pillar.

---

### `src/pages/custom-tools.astro` — New page

**What changed:** New page at `/custom-tools`.

**Contents:**
- Pillar header with positioning copy from brief
- "What's included" — 5 bullets (custom integrations, internal apps, AI workflows, lead scoring, data pipelines)
- "Who it's for" — 6 specific situations
- "What outcomes look like" — 2 specific paragraphs (530-website example)
- Tech note (Python, Claude/OpenAI, n8n/Zapier)
- CTA: "Tell us what you're trying to fix" (contact form)

**Why:** Service page for the custom-built tools pillar.

---

### `src/pages/about.astro` — New page

**What changed:** New page at `/about`.

**Contents:**
- Positioning headline and intro
- Full about copy (from brief sample, refined for voice)
- "Why one operator matters" section (the differentiation argument)
- Three pillars navigation cards
- Trust elements (no retainer, free first call, no lock-in, plain English)
- Background and skills section
- Contact CTA with LinkedIn link placeholder

**Why:** Required per spec. Destination for "Full story →" links from homepage and other pages.

---

### `src/layouts/BaseLayout.astro` — Updated

**What changed:**
- Nav updated: Added Services, Stack, About. Kept Guides. CTA updated to "Free plan."
- Footer tagline updated: "Modern small business consulting. Golden, CO."
- Page title format updated to include "Modern small business consulting."

**Why:** All Astro pages (guides, brand kit, new service pages) use this layout. Nav needs to reflect the new site structure.

---

### `src/components/AuthorBio.astro` — Updated

**What changed:** Bio copy updated to reflect new positioning (one-operator consulting, three services, no "operations and Salesforce" framing).

**Why:** Used in guide article pages. Should match the new positioning.

---

## Acceptance criteria check

| Criterion | Status |
|---|---|
| Hero leads with Growbotik engine CTA (placeholder URL acceptable) | Done |
| Three pillars visible on homepage with specified copy | Done |
| Stack page exists with 13 tool entries categorized correctly | Done |
| About page reflects new positioning | Done |
| No banned words or em dashes in new/updated copy | Done |
| Netlify contact form preserved | Done (unchanged) |
| Mobile layout correct | Done (CSS additions include responsive rules) |
| Trust elements preserved (no lock-in, free first call, plain English) | Done |
| Meta tags updated per page | Done |

---

## Open questions

1. **Growbotik engine URL** — Using placeholder `{{GROWBOTIK_ENGINE_URL}}` throughout. Appears in: homepage hero, homepage nav CTA, homepage footer CTA, marketing.astro CTA, stack.astro Growbotik entry. Replace all instances when URL is known. A site-wide find-and-replace will catch all occurrences.

2. **LinkedIn URL** — Using placeholder `{{LINKEDIN_URL}}` in homepage about section and about.astro. Replace when confirmed.

3. **About page photo** — The homepage about section has an inline base64-encoded photo. The About page (`/about`) currently has no photo. Consider adding the same photo or a newer one.

4. **Affiliate links** — Stack page uses `{{AFFILIATE_LINK_*}}` placeholders for Salesforce, HubSpot, Apollo, n8n, Zapier, Notion, Loom, Instantly. Replace with actual affiliate links when partner programs are set up.

5. **Mobile nav** — The homepage nav hides all links on mobile (existing behavior, not changed). There is no hamburger menu. Mobile users see the logo only. This is a known UX gap in the existing site — worth fixing in a follow-up sprint.

6. **Testimonials on pillar pages** — Service pages don't have testimonials yet. The three existing testimonials (Alex Zemianek, Ray Updyke, Verified Client) are on the homepage. Consider pulling relevant testimonials to service pages in a follow-up.

7. **OG image** — No og:image is set for the new pages. A site-wide OG image would improve social sharing. Currently no image is set on any page.

---

## TODO — follow-up items

- [ ] Replace `{{GROWBOTIK_ENGINE_URL}}` with real URL (appears in 7 places)
- [ ] Replace `{{LINKEDIN_URL}}` with real URL (appears in 2 places)
- [ ] Replace `{{AFFILIATE_LINK_*}}` placeholders in stack.astro
- [ ] Add testimonials: 3-5 more needed for pillar pages — currently none collected
- [ ] Add photo to About page
- [ ] Fix mobile nav (add hamburger menu or simplified mobile CTA bar)
- [ ] Create og:image for social sharing
- [ ] Consider adding a `/guides` nav link to homepage nav (currently only in BaseLayout nav)
- [ ] Pricing page (deferred per brief — Starter/Growth/Premium tiers, no specific dollar amounts yet)
- [ ] Newsletter/email capture beyond contact form (deferred)
- [ ] Build-in-public blog (deferred)
