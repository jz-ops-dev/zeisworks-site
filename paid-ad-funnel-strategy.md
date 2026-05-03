# Paid Ad Funnel Strategy: ZeisWorks
## Driving qualified local service businesses to the Gap Analysis

Now that the site is optimized to convert, paid traffic is the fastest way to scale the number of analyses you run. Because your capacity is 100/month (via Growbotik), the goal is volume without sacrificing intent.

The core challenge with paid ads for B2B services is filtering out low-intent clicks. If we run generic "get more customers" ads, you will spend your time running analyses for businesses that can't afford you.

Here is the funnel architecture designed specifically for the ZeisWorks gap analysis offer.

### 1. The Offer Hierarchy

We will run two parallel funnels on Meta (Facebook/Instagram), testing two different levels of friction.

| Funnel Path | The Offer | The Friction | The Goal |
|---|---|---|---|
| **Direct to Analysis** | "Find out why competitors outrank you." | High (Requires form fill + business info) | Immediate qualified leads ready for a 12-hour turnaround. |
| **Checklist First** | "The 25-point Local Search Checklist." | Low (Immediate PDF download) | Retargeting pool building. Capture attention from business owners who aren't ready to hand over their URL yet. |

### 2. Campaign Structure (Meta Ads)

We will use Meta because the targeting allows us to isolate small business owners, page admins, and specific interests (e.g., dentistry, aesthetics, home services) much cheaper than Google Ads for this specific offer.

**Campaign Objective:** Lead Generation (Conversion objective optimized for the Thank You page URL).

**Audience Targeting:**
- **Broad B2B:** Facebook Page Admins, Business Page Admins
- **Vertical Specific:** Interests in Dentistry, Medical Spa, HVAC, Plumbing, Roofing
- **Exclusions:** Marketing agencies, SEO professionals (to prevent competitors from clicking your ads)

### 3. Ad Creative & Copy Strategy

The creative must match the "no games, straight talk" brand voice. No stock photos of people shaking hands.

**Angle 1: The Competitor Gap (Direct to Analysis)**
- **Visual:** A split-screen screenshot showing a generic business at #4 in the Maps pack, and a competitor at #1.
- **Headline:** "Why is your competitor getting the calls you should be getting?"
- **Body Copy:** "Most local businesses are invisible on Google Maps because their Business Profile is incomplete. I'll run a free 12-hour analysis on your business and show you exactly why your competitors are outranking you — and what to fix first. No sales call required."
- **CTA:** Get Offer

**Angle 2: The Self-Audit (Checklist First)**
- **Visual:** A clean mockup of the green checklist PDF.
- **Headline:** "The 25 things every local business needs to rank on Google."
- **Body Copy:** "Are you missing the basics? Download the 25-point checklist I use to audit local service businesses. No email required — just the PDF."
- **CTA:** Download

### 4. The Retargeting Loop

This is where the system actually makes money.

1. **Pixel Tracking:** The Meta Pixel is installed on `zeisworks.com`.
2. **Audience 1 (Warm):** Anyone who visits the site or downloads the checklist but *does not* hit the `/gap-analysis/thank-you` page.
3. **The Retargeting Ad:** A direct, text-heavy ad that addresses their hesitation.
   - *Copy:* "You downloaded the checklist, but knowing what to fix is only half the battle. Let me run the analysis for you. Takes 5 minutes to submit, results in 12 hours. Free."

### 5. Execution Steps

To launch this, here is what needs to happen next:

1. **Install the Meta Pixel:** Add the base code to `BaseLayout.astro`.
2. **Set up Custom Conversions:** Define a visit to `/gap-analysis/thank-you` as a "Lead" conversion.
3. **Build the Creatives:** Generate the 2-3 visual assets needed for the ads.
4. **Launch the Campaign:** Use the Meta Ads Manager connector to build the campaign, set a daily budget (e.g., $30/day to start), and monitor the Cost Per Lead (CPL).

With Growbotik handling the analysis volume, your only bottleneck is how cheaply we can acquire a qualified form submission.
