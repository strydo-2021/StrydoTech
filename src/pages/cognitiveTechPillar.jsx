import { Cpu } from 'lucide-react';

export const cognitiveTechPillar = {
  id: 'cognitive-tech',
  category: 'Cognitive Tech',
  title: 'Cognitive Tech',
  color: '#EB6621',
  icon: Cpu,
  gradient: 'from-[#EB6621] to-[#993E10]',
  heroGrid: true,

  description: 'Harnessing Generative AI and Machine Learning to drive predictive intelligence.',
  longDesc: 'We move beyond AI hype to deliver tangible business value. From embedding Large Language Models (LLMs) into your products to training custom predictive models on your proprietary data, we engineer intelligent systems that automate complex reasoning, extract insights from unstructured data, and anticipate trends before they happen.',

  tech: ['Python', 'PyTorch / TensorFlow', 'OpenAI API', 'LangChain', 'Pinecone / Milvus', 'Hugging Face', 'Scikit-learn', 'CUDA'],

  items: ['Generative AI', 'Predictive Analytics', 'Intelligent Chatbots', 'Computer Vision'],

  caseStudy: {
    name: 'a recent AI-driven predictive modeling project',
    link: '/portfolio'
  },

  features: [
    {
      t: 'LLM Orchestration',
      d: 'Integrating GPT-4, Claude, and open-source models with your private data using advanced RAG architectures.'
    },
    {
      t: 'Data Pipeline Engineering',
      d: 'Building the robust ETL pipelines required to clean, normalize, and feed data into machine learning models.'
    },
    {
      t: 'Model Fine-Tuning',
      d: 'Adapting base models to your specific industry domain, vocabulary, and desired output formats.'
    },
    {
      t: 'Scalable Inference',
      d: 'Deploying models on optimized GPU infrastructure for low-latency, high-throughput inference.'
    }
  ],

  subServices: [
    {
      title: 'Generative AI & RAG Systems',
      description: 'We build intelligent applications that can converse with your proprietary data. Using Retrieval-Augmented Generation (RAG), we create AI assistants that provide accurate, cited answers based on your documents, reducing hallucinations and increasing trust.',
      tactics: [
        'Vector database implementation (Pinecone, Qdrant, Milvus)',
        'Semantic search and hybrid retrieval strategies',
        'Document parsing and chunking optimization for PDFs and unstructured data',
        'Agentic workflows using LangChain or LlamaIndex',
        'Prompt engineering and guardrail implementation'
      ]
    },
    {
      title: 'Predictive Analytics & Forecasting',
      description: 'Turn historical data into a strategic advantage. We train machine learning models to identify hidden patterns, forecast demand, predict customer churn, and optimize pricing strategies based on complex variables.',
      tactics: [
        'Time-series forecasting for inventory and revenue',
        'Customer churn prediction and Lifetime Value (LTV) modeling',
        'Dynamic pricing algorithms based on market conditions',
        'Fraud detection and anomaly identification',
        'A/B testing and statistical validation of model performance'
      ]
    },
    {
      title: 'Intelligent Chatbots & Virtual Assistants',
      description: 'Deploy conversational agents that actually solve user problems instead of just routing to FAQs. We build context-aware assistants that can execute actions, query databases, and handle complex customer service inquiries autonomously.',
      tactics: [
        'Multi-turn conversation management and context retention',
        'Integration with CRM and ticketing systems (Zendesk, Salesforce)',
        'Intent recognition and slot filling',
        'Human-in-the-loop fallback and escalation routing',
        'Voice synthesis and speech-to-text integration'
      ]
    },
    {
      title: 'Computer Vision & OCR',
      description: 'Automate visual inspection and data extraction. We implement deep learning models that can identify objects in images, monitor video feeds for specific events, and extract structured data from complex documents.',
      tactics: [
        'Object detection and classification (YOLO, ResNet)',
        'Optical Character Recognition (OCR) for invoices and forms',
        'Facial recognition and biometric authentication',
        'Quality control automation for manufacturing lines',
        'Edge AI deployment for real-time video processing'
      ]
    }
  ]
};
