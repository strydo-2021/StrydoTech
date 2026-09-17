// Add this object to your pillarData array (in ../data/pillarData.js).
// Import Megaphone / TrendingUp / Users from lucide-react alongside
// whatever icons the rest of pillarData already imports.

import {
    Megaphone,
    TrendingUp,
    Users,
    ArrowUpRight
} from 'lucide-react';

// color / gradient below are sampled directly from the Strydo logo's
// red→orange band (measured ~#C23C50 → #D9432E → #EA8339), not picked
// by eye — keeps this pillar's accent distinct from Cloud Strategy
// (red) and Cognitive Tech (orange) while still reading as "the logo".
export const digitalMarketingPillar = {
    id: 'digital-marketing',
    category: 'Digital Marketing',
    title: 'Digital Marketing',
    color: '#D9432E',
    icon: Megaphone,
    gradient: 'from-[#BC2D3F] via-[#D9432E] to-[#EB6621]',
    heroGrid: true,

    // Short line used on the Services overview cards
    description:
        'Full-funnel marketing that turns visibility into pipeline — strategy, content, paid media and lead generation working as one system.',

    // Shown in the black "Ecosystem" panel
    longDesc:
        'We treat marketing as an engineering problem as much as a creative one: every channel is instrumented, every campaign has a hypothesis, and every dollar spent is traceable to a business outcome. From founder personal branding to enterprise lead-gen funnels, our team plans the strategy, builds the assets, runs the campaigns and reports on what actually moved revenue.',

    // Chips in the Ecosystem panel
    tech: [
        'Google Ads',
        'Meta Ads',
        'GA4',
        'Google Search Console',
        'HubSpot',
        'Semrush / Ahrefs',
        'Klaviyo',
        'LinkedIn Campaign Manager'
    ],

    // Used on the Services overview page card
    items: [
        'SEO & Organic Growth',
        'Paid Media & Performance',
        'Lead Generation',
        'Personal & Executive Branding'
    ],

    caseStudy: {
        name: 'a recent lead-generation engagement',
        link: '/portfolio'
    },

    // Feeds "Core Competencies" on the detail page — kept short since
    // the real depth lives in subServices below.
    features: [
        {
            t: 'Full-Funnel Strategy',
            d: 'Channel mix, budget allocation and a 90-day roadmap built around your actual sales cycle, not a generic marketing calendar.'
        },
        {
            t: 'Search & Organic Visibility',
            d: 'Technical SEO, content architecture and authority-building that compound instead of resetting every quarter.'
        },
        {
            t: 'Paid Acquisition',
            d: 'Google, Meta and LinkedIn campaigns built around measurable CAC and LTV, not vanity impressions.'
        },
        {
            t: 'Conversion & Reporting',
            d: 'Landing pages, tracking and dashboards so every lead can be traced back to the exact campaign that produced it.'
        }
    ],

    // Powers the new "Inside the discipline" deep-dive section on the
    // detail page. Each entry is a distinct marketing discipline with
    // its own real tactics — this is where the actual depth lives.
    subServices: [
        {
            title: 'Digital Marketing Strategy',
            description:
                'Before any channel gets a budget, we map the funnel: how people discover the brand, what makes them trust it, and where they actually convert. The strategy sets the sequencing so channels reinforce each other instead of competing for the same click.',
            tactics: [
                'Audience segmentation and buyer-journey mapping',
                'Competitive and channel-gap analysis',
                'Budget allocation across paid, owned and earned channels',
                'Quarterly roadmap tied to pipeline and revenue targets',
                'Marketing-sales handoff and lead-definition alignment'
            ]
        },
        {
            title: 'SEO & Organic Growth',
            description:
                'Search is treated as a compounding asset, not a monthly checklist. We fix the technical foundation first — crawlability, site speed, structured data — then build topical authority around the terms your buyers are actually searching.',
            tactics: [
                'Technical audits: crawlability, indexation, Core Web Vitals, schema markup',
                'Keyword and search-intent mapping into topic clusters',
                'On-page optimization and internal linking architecture',
                'Digital PR and backlink acquisition for domain authority',
                'Local SEO: Google Business Profile, citations, review strategy',
                'Rank tracking and organic traffic reporting tied to conversions'
            ]
        },
        {
            title: 'Content Marketing',
            description:
                'Content is built to do a job — rank, educate, or convert — and every piece maps back to a stage in the funnel. We plan editorial calendars around real search and audience data instead of publishing on instinct.',
            tactics: [
                'Editorial calendars built from keyword and audience research',
                'Long-form SEO content, case studies and comparison pages',
                'Video and short-form content repurposing across channels',
                'Email newsletters and nurture content',
                'Content performance review and iteration cadence'
            ]
        },
        {
            title: 'Paid Media & Performance Marketing',
            description:
                'Paid channels are run as a testing system: structured experiments, clear creative hypotheses, and budget that shifts toward what is actually producing qualified pipeline, reviewed weekly rather than left on autopilot.',
            tactics: [
                'Google Search, Shopping and Performance Max campaigns',
                'Meta and Instagram acquisition and retargeting funnels',
                'LinkedIn campaigns for B2B and account-based targeting',
                'Creative testing frameworks (A/B and multivariate)',
                'CAC, ROAS and LTV modeling by channel and campaign',
                'Retargeting and cross-channel remarketing sequences'
            ]
        },
        {
            title: 'Lead Generation & Funnel Optimization',
            description:
                'Traffic without conversion infrastructure is wasted spend. We design the landing pages, offers and follow-up sequences that turn visits into qualified leads your sales team actually wants to talk to.',
            tactics: [
                'High-converting landing page design and copywriting',
                'Lead magnets, gated content and webinar funnels',
                'Marketing automation and nurture email sequences',
                'CRM integration, lead scoring and routing',
                'Conversion rate optimization through structured A/B testing',
                'Exit-intent, form and funnel-drop-off analysis'
            ]
        },
        {
            title: 'Influencer & Creator Marketing',
            description:
                'We match brands with creators whose audience actually overlaps with the buyer, not just follower count — and negotiate usage rights so the content keeps working as paid and organic assets long after the post goes live.',
            tactics: [
                'Creator discovery and vetting across micro, mid and macro tiers',
                'Campaign briefs, contracts and usage-rights negotiation',
                'Platform-specific strategy for Instagram, YouTube and TikTok',
                'UGC repurposing into paid ad creative and site content',
                'Affiliate and performance-based partnership tracking',
                'Campaign reporting: reach, engagement and attributed conversions'
            ]
        },
        {
            title: 'Personal & Executive Branding',
            description:
                'For founders and executives, the personal brand is often the fastest-trusted channel a company has. We build a consistent narrative and content system so that trust compounds into pipeline instead of staying stuck at "nice profile."',
            tactics: [
                'Positioning, narrative and voice development',
                'LinkedIn and X content systems for consistent thought leadership',
                'Personal website and bio architecture',
                'Podcast, panel and media visibility placement',
                'Content repurposing from long-form to social-native formats'
            ]
        },
        {
            title: 'Marketing Automation & Analytics',
            description:
                'None of the above is trustworthy without measurement. We instrument every channel so spend, content and campaigns can be judged by what they actually produced, not by platform-reported metrics alone.',
            tactics: [
                'GA4 and server-side tracking implementation',
                'Multi-touch attribution modeling across channels',
                'Marketing automation workflows (HubSpot, Klaviyo, etc.)',
                'Custom dashboards for leadership and channel-level reporting',
                'Monthly performance reviews with next-cycle recommendations'
            ]
        }
    ]
};
