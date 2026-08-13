// Real Upwork reviews, previously published on zeisworks.com (recovered
// verbatim from commit cca383c, where the source noted "Real Upwork reviews,
// carried over from the previous site"). Do NOT edit the wording — these are
// other people's words. Swap or extend only with equally real, permissioned
// quotes.
export interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I've had the pleasure to work closely with Jack in numerous projects, roles, and challenges. All of which have exceeded my expectations as a company leader.",
    name: 'Alex Zemianek',
    title: 'Owner & CEO, JZ Vacation Rentals',
  },
  {
    quote:
      'Jack was great at communicating, efficient, personable and dependable. He was easy to work with and a great asset to our team.',
    name: 'Verified Client',
    title: 'Upwork · 5.0',
  },
  {
    quote:
      'Jack was amazing to work with, which is why he worked for us on a long-term basis. He is thorough, accurate, and timely. I highly recommend him.',
    name: 'Ray Updyke',
    title: 'Alpaca VC · 254 hrs logged',
  },
];

// Third-party-verifiable: the profile these ratings live on.
export const UPWORK_PROFILE_URL = 'https://www.upwork.com/freelancers/~01ddd112c03a2e1428';
export const PROOF_BAR = '5.0 on Upwork · Top Rated · 100% Job Success';
