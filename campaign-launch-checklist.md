# Meta Ads Campaign Launch Checklist: ZeisWorks

This document outlines the creative briefs and launch checklist for the ZeisWorks gap analysis campaign. The goal is to drive qualified B2B service business owners into the automated analysis funnel via two distinct entry points: high-friction (direct to analysis) and low-friction (checklist first).

## 1. Campaign Architecture

We are running a single Meta Ads campaign with the **Lead Generation** objective, optimizing for the `Lead` standard event. The campaign contains three ad sets targeting different stages of intent.

### Ad Set 1: Broad Local B2B (Direct to Analysis)
*   **Targeting:** Facebook Page Admins, Business Page Admins (US only). Exclude: Marketing agencies, SEO professionals.
*   **Destination:** `/campaign/competitor-gap`
*   **Goal:** Immediate, high-intent form submissions.

### Ad Set 2: Vertical Specific (Checklist First)
*   **Targeting:** Interests in Dentistry, HVAC, Plumbing, Roofing, Medical Spa (US only). Exclude: Marketing agencies, SEO professionals.
*   **Destination:** `/campaign/local-visibility`
*   **Goal:** Low-cost email capture and retargeting pool growth.

### Ad Set 3: Retargeting (The "Still Thinking" Loop)
*   **Targeting:** Custom Audience: Website visitors (past 30 days) OR Checklist downloaders. Exclude: People who have triggered the `Lead` event (already converted).
*   **Destination:** `/campaign/still-thinking`
*   **Goal:** Convert warm traffic that bounced before submitting their business info.

---

## 2. Ad Creative Briefs

The ZeisWorks brand voice is direct, professional, and free of jargon. We avoid stock photos of people shaking hands and explicitly avoid mentioning "AI" in top-of-funnel ads, focusing instead on automation, efficiency, and competitive gaps.

### Angle A: The Competitor Gap (Direct)
**Visual Concept:** A split-screen screenshot. Left side shows a generic business at #4 in the Google Maps pack. Right side shows a competitor at #1 with a bright green highlight.
**Primary Text:**
> Most local businesses are invisible on Google Maps because their Business Profile is incomplete. 
>
> I run a free 12-hour analysis on service businesses to show exactly why competitors are outranking them — and what to fix first. No sales call required. Results land straight in your inbox.
**Headline:** Why is your competitor getting the calls you should be getting?
**CTA Button:** Get Offer

### Angle B: The Self-Audit (Checklist)
**Visual Concept:** A clean, high-contrast mockup of the green "Local Search Visibility Checklist" PDF against a dark background.
**Primary Text:**
> Are you missing the basics? 
>
> Download the 25-point checklist I use to audit local service businesses. It covers the five areas that determine whether Google shows your business to people searching — or shows your competitor instead. No email required to view the PDF.
**Headline:** The 25 things every local business needs to rank on Google.
**CTA Button:** Download

### Angle C: The Retargeting Push (Still Thinking)
**Visual Concept:** A text-heavy graphic on a cream background. Bold serif text: "Knowing what to fix is only half the battle."
**Primary Text:**
> You downloaded the checklist, but running the audit yourself takes time — and it's easy to miss things that only show up in a competitive analysis. 
>
> Let me run the full competitor gap analysis on your specific business. Takes 5 minutes to submit. Results in your inbox within 12 hours. Free.
**Headline:** Let me run the analysis for you.
**CTA Button:** Learn More

---

## 3. Pre-Launch Checklist

Before activating the campaign in Meta Ads Manager, ensure all technical scaffolding is verified.

- [x] **Meta Pixel Installed:** Pixel ID `555580570097631` is active in `BaseLayout.astro`.
- [x] **Lead Event Firing:** The `fbq('track', 'Lead')` script is present on both thank-you pages (`/campaign/competitor-gap/thank-you` and the standard analysis thank-you).
- [x] **Custom Event Firing:** The `ChecklistDownload` custom event fires when the PDF button is clicked on the checklist page.
- [x] **Landing Pages Live:**
    - [x] `/campaign/competitor-gap` (High friction)
    - [x] `/campaign/local-visibility` (Low friction)
    - [x] `/campaign/still-thinking` (Retargeting)
- [x] **Forms Connected:** All Netlify forms (`campaign-competitor-gap`, `campaign-local-visibility-optin`, `campaign-retargeting`) have hidden HTML definitions to ensure Netlify parses them correctly.
- [ ] **Creative Assets Generated:** Produce the 3 visual assets outlined in the creative briefs.
- [ ] **Campaign Built in Meta:** Structure the campaign, ad sets, and ads according to Section 1.
- [ ] **Test Submission:** Submit a test lead through the live `/campaign/competitor-gap` page to verify the Netlify form captures the data and the Meta Pixel fires the Lead event.

## 4. Post-Launch Monitoring

Once live, monitor the following metrics daily for the first week:
1.  **Cost Per Lead (CPL):** The primary KPI. Track the cost of a full gap analysis submission.
2.  **Cost Per Click (CPC) on the Checklist:** Ensure top-of-funnel traffic is cheap enough to sustain the retargeting pool.
3.  **Retargeting Conversion Rate:** Measure how many checklist downloaders eventually convert via the `/campaign/still-thinking` page.
