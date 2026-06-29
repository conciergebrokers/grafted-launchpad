import type { LucideIcon } from "lucide-react";
import {
  Users,
  Sprout,
  HeartHandshake,
  Hammer,
  Repeat,
} from "lucide-react";

export const EVENTBRITE_URL =
  "https://www.eventbrite.ca/e/grafted-faith-integrated-business-networking-tickets-1991515299872";

export const MEETING_INFO = {
  day: "Tuesdays",
  time: "12:30 PM",
  city: "Edmonton",
  province: "Alberta",
  launch: "Launching June 2026",
  founder: "Jen Garrison",
  email: "info@graftedexchange.ca",
  domain: "graftedexchange.ca",
};

export const MEMBERSHIP_PRICING = {
  price: 150,
  currency: "CAD",
  cadence: "month",
  label: "$150/month",
  description:
    "One simple monthly membership. Built to keep the room accessible, sustainable, and easy to understand.",
  notes: [
    "No GST is charged at this time.",
    "Lunch is not included. Members pay for their own lunch at each meeting.",
    "The first 15 paid signups receive founding member status.",
  ],
  benefits: [
    "Weekly Tuesday meetings",
    "Member directory access once your profile is complete",
    "Grafted In, The Forge, The Exchange, and Kingdom Come",
    "Referral, prayer, and growth tracking as the member tools come online",
    "Founding member badge for the first 15 paid signups",
    "Lunch is on your own",
  ],
};

export const PILLARS = [
  {
    title: "Built My Business",
    body: "Real referrals, results, tracked and celebrated.",
  },
  {
    title: "Helped Me Grow",
    body: "Practical business development woven with spiritual alignment.",
  },
  {
    title: "I Am Not Alone",
    body: "Deep community where people are known, supported, and connected.",
  },
];

export const CONNECTION_POINTS = [
  {
    title: "Real relationship",
    body: "People learn each other's businesses, lives, needs, and capacity before referrals begin to move.",
  },
  {
    title: "Generous exchange",
    body: "Members give, receive, celebrate, and follow through with open hands.",
  },
  {
    title: "Whole-person growth",
    body: "Business development, spiritual alignment, and honest community belong in the same room.",
  },
];

export const MEETING_SEGMENTS: {
  name: string;
  body: string;
  icon: LucideIcon;
}[] = [
  {
    name: "Grafted In",
    body: "Small circles where members share who they are, a win, and what they need in business or faith.",
    icon: Users,
  },
  {
    name: "Equipping Time",
    body: "Practical business teaching woven with Kingdom principle.",
    icon: Sprout,
  },
  {
    name: "The Forge",
    body: "Three focused one-on-one conversations that deepen relationship and sharpen what was just taught.",
    icon: Hammer,
  },
  {
    name: "The Exchange",
    body: "Members pass referrals, celebrate closed business, share gratitude, and name what God is doing.",
    icon: Repeat,
  },
  {
    name: "Kingdom Come",
    body: "The community closes in prayer. Requests are written down, followed up, and answered prayer is celebrated.",
    icon: HeartHandshake,
  },
];

export const SLIP_TYPES = [
  {
    name: "Sowing Slip",
    body: "A referral passed into the community.",
  },
  {
    name: "Harvest Slip",
    body: "Closed business received through Grafted.",
  },
  {
    name: "Forge Slip",
    body: "An outside one-on-one completed.",
  },
  {
    name: "Growth Slip",
    body: "Personal development engagement.",
  },
];

export const FUTURE_FEATURES = {
  portal: [
    "Personal slip activity",
    "Prayer request follow-up",
    "Member directory access",
    "Branch updates",
  ],
  members: [
    "Public member profiles",
    "Business category filters",
    "Ideal referral details",
    "Founding member badges",
  ],
  admin: [
    "Member status review",
    "Community-level reports",
    "Branch leadership tools",
    "Stripe payment status tracking",
  ],
};

export const AUDIENCE_CARDS = [
  "Solopreneurs",
  "Tradespeople",
  "Service providers",
  "Creatives",
  "Retail owners",
  "Established companies",
  "Faith-motivated entrepreneurs",
  "Business owners who are curious, respectful, and open to the faith-forward nature of the room",
];

export const DIFFERENTIATORS = [
  "Relationship with accountability",
  "Referrals celebrated with generosity",
  "Faith integrated openly",
  "Room for every business size and stage",
  "Selling welcomed with honour",
  "Prayer practiced with care",
];

export const MEMBER_POSTURE = [
  "Show up genuinely",
  "Honour the faith in the room",
  "Participate fully",
  "Attend consistently",
  "Bring guests when you can",
  "Contribute referrals and support when available",
  "Stay open to being surprised",
];

export const BRANCH_PHASES = [
  {
    phase: "Phase 1: Root",
    body: "Founding Edmonton community.",
  },
  {
    phase: "Phase 2: Branch",
    body: "Train leaders and seed additional branches.",
  },
  {
    phase: "Phase 3: Multiply",
    body: "Expand across Alberta and beyond as leaders rise from within.",
  },
];

export const FAQ_ITEMS = [
  {
    q: "What is Grafted?",
    a: "Grafted is a faith-integrated business networking community in Edmonton for business owners who want real referrals, practical growth, and deeper relationship.",
  },
  {
    q: "Is Grafted a church program?",
    a: "Grafted is an independent business networking community with faith fully present in the room. It serves business owners across churches, industries, and stages of growth.",
  },
  {
    q: "Do I have to be a Christian to visit?",
    a: "No, you don't. Everyone's faith journey is their own, and we will respect that as much as you respect the room. The faith in the room will be clear, and visitors are asked to honour the prayer, scripture, and faith-forward nature of the community.",
  },
  {
    q: "What happens at a meeting?",
    a: "Each meeting includes Grafted In, Equipping Time, The Forge, The Exchange, and Kingdom Come. The room includes conversation, teaching, one-on-ones, referral sharing, gratitude, testimony, and prayer.",
  },
  {
    q: "When does Grafted meet?",
    a: "Grafted meets weekly on Tuesdays at 12:30 PM in Edmonton.",
  },
  {
    q: "Can I visit before joining?",
    a: "Yes. Visitors may attend up to three times before making a membership decision. The first three visits are free. Visitors pay for their own meal.",
  },
  {
    q: "What does membership cost?",
    a: "Membership is $150 CAD per month per member. No GST is charged at this time. Lunch is not included, so members pay for their own lunch at each meeting. The first 15 paid signups receive founding member status.",
  },
  {
    q: "Are meals included?",
    a: "No. Members and visitors pay for their own meal at each meeting.",
  },
  {
    q: "What if I cannot afford membership?",
    a: "We believe where we put our money is tied to where our heart is. Investing in yourself and your business growth is an important step in business. If there are extenuating circumstances, we are open to hearing about them.",
  },
  {
    q: "Are industries exclusive?",
    a: "Grafted welcomes business owners across industries. The room is relationship-first and inclusive of business owners across business sizes and stages.",
  },
  {
    q: "Are MLM businesses allowed?",
    a: "The membership team considers these situations case by case. The key question is posture. A business owner whose primary intention is recruiting members into a team structure creates a mismatch with the room.",
  },
  {
    q: "What are slips?",
    a: "Slips are how Grafted tracks what matters. Sowing Slips track referrals passed. Harvest Slips track closed business received. Forge Slips track outside one-on-ones. Growth Slips track personal development engagement.",
  },
  {
    q: "Will there be a member portal?",
    a: "Yes, later. The future portal will support slip tracking, member reporting, prayer follow-up, branch updates, and member resources.",
  },
  {
    q: "Will members be listed publicly?",
    a: "The future member showcase may allow members to be displayed publicly, with permission, so the broader community can discover Grafted businesses.",
  },
  {
    q: "Will there be more branches?",
    a: "Yes, when the community is ready. Grafted is designed to multiply into branches while keeping the same meeting flow, culture, and depth.",
  },
];

export type Branch = {
  id: string;
  name: string;
  city: string;
  province: string;
  meetingDay: string;
  meetingTime: string;
  venueName: string;
  venueAddress: string;
  leaderName: string;
  status: "founding" | "active" | "planning";
};

export type Member = {
  id: string;
  firstName: string;
  lastName: string;
  businessName: string;
  industry: string;
  branchId: string;
  membershipStatus: "founding" | "active" | "visitor";
  publicProfileEnabled: boolean;
  profileImage?: string;
  website?: string;
  bio: string;
};

export type SlipType = "sowing" | "harvest" | "forge" | "growth";

export type Slip = {
  id: string;
  type: SlipType;
  memberId: string;
  branchId: string;
  date: string;
  value?: number;
  description: string;
};
