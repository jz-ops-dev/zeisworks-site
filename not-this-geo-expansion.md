# Paid Campaign Expansion Strategy: "Not this GEO"
## Capitalizing on early momentum and scaling the funnel

**zeisWorks · zeisworks.com · (720) 650-2447**

---

The "Not this GEO" creative is a strong pattern interrupt. It breaks the mold of typical B2B marketing ads by using a nostalgic, slightly self-deprecating visual (a teal Geo Metro) paired with a punchy local SEO hook. Early data shows this is working.

### 1. Current Campaign Performance

Your current campaign ("May 2026 Leads Campaign") has been running for roughly a day and a half with a $50/day budget. The early signals are highly promising for B2B lead generation.

| Metric | Current Performance | What it means |
|---|---|---|
| **Spend** | $37.48 | The campaign is pacing correctly against the $50 daily budget. |
| **Impressions** | 1,222 | You are getting solid reach for the spend. |
| **CPM** | $30.67 | Cost per 1,000 impressions. For B2B targeting, anything under $40 is excellent. |
| **Link Clicks** | 32 | Actual clicks through to the website. |
| **CTR (Link)** | 2.61% | Click-through rate. In B2B, a CTR over 1% is good; **2.6% is exceptional** and proves the "Not this GEO" creative is a strong hook. |
| **CPC (Link)** | $1.17 | Cost per click. Paying roughly a dollar for a targeted B2B click is highly efficient. |

*Note: Meta reported 5 "leads," but because the Pixel wasn't fully configured on the thank-you page until today, these were likely algorithm estimations based on landing page views rather than true form submissions. Now that the Pixel is hardcoded to fire the `Lead` event strictly on `/gap-analysis/thank-you`, your cost-per-lead (CPL) tracking will be 100% accurate moving forward.*

---

### 2. The Expansion Strategy

Because the "Not this GEO" creative is driving a 2.6% CTR at a $1.17 CPC, we should not turn it off. Instead, we need to expand the campaign architecture around it to capture both the high-intent traffic it generates and the low-intent traffic that bounces.

#### Phase 1: Vertical-Specific Copy Variants
The visual (the teal Geo) and the hook ("Not this GEO") stay exactly the same, but we duplicate the ad into four new ad sets, each with copy tailored to one of your core verticals.

1. **Med Spas:** "Not this GEO. I'm talking about the geo-targeting that determines whether your med spa shows up when someone searches for Botox in your zip code. If you're not in the top 3, you're losing high-value bookings to the clinic down the street."
2. **Dental:** "Not this GEO. I'm talking about the local SEO that puts your practice in the Maps 3-pack when a new resident searches for a dentist. Stop relying entirely on referrals."
3. **Independent Vets:** "Not this GEO. I'm talking about the local search visibility you need to outrank Banfield and VCA when a pet owner searches for an emergency vet near them."
4. **Home Services:** "Not this GEO. I'm talking about the local pack rankings that drive emergency HVAC and plumbing calls. If you aren't visible there, your trucks aren't moving."

**The Destination:** All of these route directly to `/gap-analysis`.

#### Phase 2: The Checklist Soft-Catch
The current ad asks for a relatively high-friction conversion (filling out the gap analysis form). To maximize the value of the cheap clicks ($1.17 CPC) you are getting, we need to capture the people who click but aren't ready to submit their business details.

- **The Setup:** We launch a parallel ad set using a different creative (a mockup of the green checklist PDF).
- **The Audience:** Broad local service business targeting.
- **The Destination:** `/local-search-checklist`
- **The Goal:** Build a massive, cheap retargeting pool.

#### Phase 3: The Retargeting Squeeze
This is where the ROI is realized. We create a Custom Audience in Meta of anyone who triggered a `PageView` on `zeisworks.com` but did not trigger a `Lead` event.

- **The Ad:** A direct, text-heavy ad with no clever hook.
- **The Copy:** "You visited the site but didn't request the gap analysis. Knowing what to fix is only half the battle. Let me run the analysis for you. Takes 5 minutes to submit, results in 12 hours. Free."
- **The Destination:** `/gap-analysis`

---

### 3. Immediate Next Steps

The Pixel is now live and tracking correctly. To execute this expansion:

1. **Let the current ad run.** Do not touch the "Not this GEO" ad set until May 8. We need to see what the true Cost Per Lead (CPL) settles at now that the Pixel is tracking actual form submissions.
2. **Build the vertical copy variants.** Prepare the copy for Med Spas, Dental, Vets, and Home Services so they are ready to launch as separate ad sets next week.
3. **Launch the Checklist ad.** Set up a new campaign with a $15/day budget driving traffic exclusively to the `/local-search-checklist` page to start building the retargeting pool.
