import { Database } from 'lucide-react';

export const enterpriseLogicPillar = {
  id: 'enterprise-logic',
  category: 'Enterprise Logic',
  title: 'Enterprise Logic',
  color: '#5E296F',
  icon: Database,
  gradient: 'from-[#5E296F] to-[#3A1847]',
  heroGrid: true,

  description: 'Streamlining complex business operations through centralized digital ecosystems.',
  longDesc: 'Disconnected systems create operational drag. We digitize, centralize, and automate your core business processes by building custom ERPs, CRMs, and operational software. We untangle complex workflows and replace manual data entry with intelligent automation, giving your team a single source of truth and the tools they need to operate at peak efficiency.',

  tech: ['Java / Spring Boot', 'C# / .NET', 'PostgreSQL', 'Kafka', 'RabbitMQ', 'Elasticsearch', 'Docker', 'Kubernetes'],

  items: ['ERP Development', 'CRM Systems', 'Business Automation', 'Inventory Mgmt'],

  caseStudy: {
    name: 'a recent enterprise digital transformation',
    link: '/portfolio'
  },

  features: [
    {
      t: 'Workflow Digitization',
      d: 'Mapping and converting manual, paper-based, or spreadsheet-heavy processes into streamlined digital workflows.'
    },
    {
      t: 'Centralized Data Lakes',
      d: 'Consolidating data from siloed departments into a unified, secure, and searchable enterprise repository.'
    },
    {
      t: 'System Interoperability',
      d: 'Building middleware to ensure smooth communication between legacy mainframes and modern cloud services.'
    },
    {
      t: 'Role-Based Dashboards',
      d: 'Creating tailored interfaces that provide specific departments with exactly the data and tools they need.'
    }
  ],

  subServices: [
    {
      title: 'Custom ERP Development',
      description: 'Off-the-shelf ERPs often force your business to change its processes to fit the software. We build bespoke Enterprise Resource Planning systems mapped exactly to how your business actually operates, ensuring higher adoption and immediate ROI.',
      tactics: [
        'Modular architecture for Finance, HR, Supply Chain, and Operations',
        'Real-time financial reporting and automated ledger entries',
        'Complex approval workflows and audit trails',
        'Secure vendor and employee portal integration',
        'Migration strategies from legacy on-premise ERPs'
      ]
    },
    {
      title: 'Tailored CRM Solutions',
      description: 'Manage your customer relationships with a platform built around your unique sales cycle. We create CRM systems that track interactions, automate follow-ups, and provide predictive insights into your sales pipeline without unnecessary bloat.',
      tactics: [
        'Custom lead scoring and routing algorithms',
        'Omnichannel communication tracking (Email, Phone, SMS)',
        'Sales pipeline visualization and forecasting',
        'Automated contract generation and e-signature integration',
        'Customer success and ticketing system modules'
      ]
    },
    {
      title: 'Business Process Automation',
      description: 'We identify repetitive, rule-based tasks and replace them with reliable background processes. By integrating various APIs and utilizing event-driven architecture, we eliminate manual data entry and reduce human error.',
      tactics: [
        'Event-driven architectures using Kafka or RabbitMQ',
        'Automated data syncing between disparate SaaS tools',
        'Document parsing and OCR for invoice automation',
        'Scheduled reporting and automated stakeholder alerts',
        'Robotic Process Automation (RPA) for legacy UI interactions'
      ]
    },
    {
      title: 'Inventory & Supply Chain Management',
      description: 'Gain total visibility into your supply chain. We build systems that track inventory levels across multiple warehouses, automate reordering based on predictive demand, and provide real-time logistics tracking.',
      tactics: [
        'Multi-warehouse inventory tracking and transfer management',
        'Barcode / RFID scanning integration',
        'Predictive demand forecasting and automated PO generation',
        'Supplier performance tracking and lead-time analysis',
        'Integration with 3PL providers and shipping APIs'
      ]
    }
  ]
};
