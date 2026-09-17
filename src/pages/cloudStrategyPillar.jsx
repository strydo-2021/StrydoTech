import { Cloud } from 'lucide-react';

export const cloudStrategyPillar = {
  id: 'cloud-strategy',
  category: 'Cloud Strategy',
  title: 'Cloud Strategy',
  color: '#BC2D3F',
  icon: Cloud,
  gradient: 'from-[#BC2D3F] to-[#7A1926]',
  heroGrid: true,

  description: 'Bulletproof infrastructure engineered for global scale and zero-downtime.',
  longDesc: 'Your software is only as reliable as the infrastructure it runs on. We design, provision, and manage enterprise-grade cloud environments on AWS, Azure, and GCP. From container orchestration and CI/CD automation to rigorous security auditing and disaster recovery, we build the invisible foundation that keeps your business online 24/7.',

  tech: ['AWS / GCP / Azure', 'Kubernetes', 'Terraform', 'Docker', 'GitHub Actions', 'Datadog', 'Prometheus', 'Linux'],

  items: ['Multi-Cloud Setup', 'DevOps Automation', 'Security Audits', 'Infrastructure'],

  caseStudy: {
    name: 'a high-availability cloud migration',
    link: '/portfolio'
  },

  features: [
    {
      t: 'Infrastructure as Code (IaC)',
      d: 'Provisioning and managing cloud resources using Terraform and CloudFormation for reproducible environments.'
    },
    {
      t: 'High Availability Architecture',
      d: 'Designing multi-region, load-balanced systems with automated failover to guarantee 99.99% uptime.'
    },
    {
      t: 'Continuous Integration / Deployment',
      d: 'Automating the testing and deployment pipeline to enable rapid, safe, and frequent code releases.'
    },
    {
      t: 'Observability & Alerting',
      d: 'Implementing deep telemetry and monitoring so we know about issues before your users do.'
    }
  ],

  subServices: [
    {
      title: 'Cloud Architecture & Migration',
      description: 'Moving to the cloud requires a strategy, not just a lift-and-shift. We design cloud-native architectures that leverage managed services for maximum efficiency and seamlessly migrate your legacy workloads with zero operational downtime.',
      tactics: [
        'Cloud-readiness assessment and TCO analysis',
        'Microservices architecture design',
        'Serverless compute implementation (AWS Lambda, Azure Functions)',
        'Zero-downtime database migration strategies',
        'Multi-cloud and hybrid-cloud topologies'
      ]
    },
    {
      title: 'DevOps & CI/CD Automation',
      description: 'We eliminate the friction between development and operations. By automating your build, test, and deployment pipelines, we empower your engineering teams to ship features faster and with greater confidence.',
      tactics: [
        'CI/CD pipeline construction (GitHub Actions, GitLab CI, Jenkins)',
        'Containerization and registry management (Docker)',
        'Kubernetes cluster provisioning and orchestration (EKS, GKE)',
        'Automated integration and load testing in staging environments',
        'Blue-green and canary deployment strategies'
      ]
    },
    {
      title: 'Cloud Security & Compliance',
      description: 'Security is a continuous posture, not a checklist. We harden your cloud infrastructure against attack, implement least-privilege access controls, and ensure compliance with industry standards like SOC2, HIPAA, and GDPR.',
      tactics: [
        'IAM role auditing and least-privilege enforcement',
        'Network security (VPCs, WAFs, and DDoS protection)',
        'Secrets management (HashiCorp Vault, AWS Secrets Manager)',
        'Automated vulnerability scanning and penetration testing',
        'Compliance reporting and audit logging (AWS CloudTrail)'
      ]
    },
    {
      title: 'FinOps & Cost Optimization',
      description: 'Stop overpaying for underutilized resources. We audit your cloud spend, identify waste, and implement architectural changes and purchasing strategies to dramatically reduce your monthly infrastructure bill.',
      tactics: [
        'Resource rightsizing and orphaned asset cleanup',
        'Reserved Instance and Savings Plan strategy',
        'Spot instance orchestration for fault-tolerant workloads',
        'Auto-scaling policies based on predictive traffic patterns',
        'Cost allocation tagging and departmental chargebacks'
      ]
    }
  ]
};
