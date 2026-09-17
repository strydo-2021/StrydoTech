import { Globe } from 'lucide-react';

export const digitalEngineeringPillar = {
  id: 'digital-engineering',
  category: 'Digital Engineering',
  title: 'Digital Engineering',
  color: '#3B7B84',
  icon: Globe,
  gradient: 'from-[#3B7B84] to-[#1E4D54]',
  heroGrid: true,

  description: 'Architecting high-performance web systems and scalable custom software.',
  longDesc: 'We build digital products that perform under pressure. From high-conversion marketing websites to complex SaaS platforms, we architect solutions using modern, scalable tech stacks that deliver seamless user experiences and robust backend logic. We don’t just write code; we engineer systems designed for growth, maintainability, and business impact.',

  tech: ['React / Next.js', 'Node.js', 'Spring Boot', 'PostgreSQL', 'TypeScript', 'GraphQL', 'Docker', 'Redis'],

  items: ['Website Development', 'Web Applications', 'Custom Software', 'SaaS Development'],

  caseStudy: {
    name: 'a recent scalable SaaS platform',
    link: '/portfolio'
  },

  features: [
    {
      t: 'Frontend Architecture',
      d: 'Lightning-fast, highly interactive user interfaces built with React, Next.js, and modern CSS paradigms.'
    },
    {
      t: 'Backend & API Engineering',
      d: 'Resilient microservices and REST/GraphQL APIs built to handle high concurrency and complex data models.'
    },
    {
      t: 'Database Design',
      d: 'Optimized schema design and query tuning across SQL and NoSQL databases for lightning-fast data retrieval.'
    },
    {
      t: 'Performance & Security',
      d: 'Rigorous performance auditing and security-first engineering to protect your data and delight your users.'
    }
  ],

  subServices: [
    {
      title: 'Custom Web Application Development',
      description: 'We build tailored web applications that solve specific business problems. From internal tools that streamline operations to customer-facing portals that drive engagement, our applications are built for performance, security, and intuitive usability.',
      tactics: [
        'Single Page Applications (SPAs) and Server-Side Rendered (SSR) apps',
        'Progressive Web Apps (PWAs) with offline capabilities',
        'Complex state management and real-time data synchronization',
        'Accessibility (a11y) and responsive design standards',
        'Integration with third-party APIs and enterprise systems'
      ]
    },
    {
      title: 'SaaS Product Engineering',
      description: 'Taking a SaaS product from concept to scale requires more than just code. We engineer multi-tenant architectures, subscription billing integrations, and scalable infrastructure that supports rapid user growth without degradation.',
      tactics: [
        'Multi-tenant architecture and data isolation strategies',
        'Stripe / Paddle subscription billing and metering integration',
        'Role-Based Access Control (RBAC) and complex permissions',
        'Automated onboarding workflows and transactional emails',
        'Scalable infrastructure provisioning and CI/CD pipelines'
      ]
    },
    {
      title: 'Enterprise Website & CMS Development',
      description: 'Your marketing site is your most important digital asset. We build blazing-fast, SEO-optimized enterprise websites powered by headless CMS platforms that empower your marketing team without compromising on performance.',
      tactics: [
        'Headless CMS implementation (Sanity, Contentful, Strapi)',
        'Static Site Generation (SSG) for sub-second page loads',
        'Dynamic routing and internationalization (i18n)',
        'Technical SEO, Core Web Vitals optimization, and structured data',
        'Conversion Rate Optimization (CRO) focused layouts'
      ]
    },
    {
      title: 'API Development & System Integration',
      description: 'In a modern digital ecosystem, systems need to talk to each other seamlessly. We design robust APIs and middleware that connect disparate systems, enabling automated workflows and unified data views.',
      tactics: [
        'RESTful and GraphQL API design and implementation',
        'API Gateway configuration and rate limiting',
        'OAuth2, JWT, and secure API authentication',
        'Legacy system integration and data migration',
        'Webhook handling and event-driven architectures'
      ]
    }
  ]
};
