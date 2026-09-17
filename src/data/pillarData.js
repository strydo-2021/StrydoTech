import {
  Layout,
  Settings2
} from 'lucide-react';
import { digitalMarketingPillar } from '../pages/digitalMarketingPillar';
import { iotPillar } from '../pages/iotPillar';
import { digitalEngineeringPillar } from '../pages/digitalEngineeringPillar';
import { enterpriseLogicPillar } from '../pages/enterpriseLogicPillar';
import { cognitiveTechPillar } from '../pages/cognitiveTechPillar';
import { cloudStrategyPillar } from '../pages/cloudStrategyPillar';

export const pillarData = [
  digitalEngineeringPillar,
  enterpriseLogicPillar,
  cognitiveTechPillar,
  iotPillar,
  cloudStrategyPillar,
  {
    id: 'human-interface',
    category: 'Human Interface',
    color: '#742A5F',
    icon: Layout,
    description: 'Intuitive design systems where aesthetics meet rigorous technical function.',
    items: ['UI/UX Design', 'Design Systems', 'Product Systems', 'Prototyping & Testing']
  },
  digitalMarketingPillar,
  {
    id: 'tech-advisory',
    category: 'Tech Advisory',
    color: '#3B7B84',
    icon: Settings2,
    description: 'Strategic technical roadmaps to navigate the shifting engineering landscape.',
    items: ['Software Architecture', 'Legacy Migration', 'IT Governance', 'Scalability Audit']
  }
];