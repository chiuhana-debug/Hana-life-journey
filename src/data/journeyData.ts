import { TimelineChapter, FuturePillar } from '../types';

export const HERO_DATA = {
  label: 'MY LIFE JOURNEY',
  titlePart1: 'From Business',
  titleConnector: 'to',
  titlePart2: 'AI',
  description:
    'My journey from International Business and Marketing to Business AI. Bridging the gap between human narrative and technological evolution.',
  ctaText: 'Explore My Journey',
  currentFocus: 'Current Focus: Master of Business AI',
  imageUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuC6Lh4F145I6rSf1oGA4LWfKC3zol80aL8J8kH-47y-bjycDkwBu-xyECn0uMTM3tYpmZEAzREG1_JePSBvDT7IKZp_Hc3Jazc7iDzyuwibzKNeuIEVW1QpeoFVa3xQZSL_8B3Z89s0m92jQuswFUyJb2wEM_OmJRXA53giV9NXq7FnrcdNTmUiav1mgjSgRYMcbDC4RaOYUBKddcUPTn8hKUwNNJhKSZX-YBi2bDQdf8RZlYRzCOV-',
};

export const TIMELINE_CHAPTERS: TimelineChapter[] = [
  {
    id: 'education',
    chapterNum: 'Chapter 01',
    title: 'Education',
    institutionOrCompany: 'James Cook University',
    roleOrDegree: 'Bachelor of International Business',
    description:
      'Laying the foundational knowledge of global markets, cross-cultural communication, and strategic enterprise management.',
    period: 'Foundations',
    highlights: [
      'Studied international trade regulations, supply chain dynamics, and multilateral negotiations',
      'Developed cross-cultural frameworks for transnational corporate strategy',
      'Graduated with honors, focusing on emerging APAC digital commerce corridors'
    ],
    isCurrent: false,
  },
  {
    id: 'career',
    chapterNum: 'Chapter 02',
    title: 'Career Begins',
    institutionOrCompany: 'Inling International Ltd.',
    roleOrDegree: 'Marketing Specialist',
    description:
      'Executing marketing campaigns, analyzing market trends, and learning the practical application of business theories in a fast-paced environment.',
    period: 'Early Career',
    highlights: [
      'Designed and executed multi-channel performance marketing campaigns across EMEA & APAC',
      'Analyzed customer acquisition costs and funnel drop-offs with statistical tools',
      'Spearheaded international influencer outreach and content localized partnerships'
    ],
    isCurrent: false,
  },
  {
    id: 'growth',
    chapterNum: 'Chapter 03',
    title: 'Career Growth',
    institutionOrCompany: 'Inling International Ltd.',
    roleOrDegree: 'Marketing Manager',
    description:
      'Steering marketing strategy, managing teams, and driving measurable business growth. A period of profound professional development and leadership.',
    period: 'Leadership & Scale',
    highlights: [
      'Led cross-functional teams spanning creative, media buying, and product marketing',
      'Optimized multi-million dollar annual marketing budgets yielding 3.2x ROI expansion',
      'Championed data-informed workflows and automated workflow pipelines across internal stakeholders'
    ],
    isCurrent: false,
  },
  {
    id: 'smu',
    chapterNum: 'Chapter 04',
    title: 'A New Chapter',
    institutionOrCompany: 'Singapore Management University (SMU)',
    roleOrDegree: 'Master of Business AI',
    description:
      'Pivoting into the future. Learning to harness artificial intelligence to solve complex business challenges, optimize operations, and create new paradigms in marketing.',
    tags: ['Machine Learning', 'Data Analytics', 'AI Strategy'],
    period: 'Present & Ongoing',
    highlights: [
      'Deep dive into Large Language Models, Generative AI workflows, and neural predictive models',
      'Developing AI-driven decision engines for predictive customer lifetime value and churn mitigation',
      'Bridging technical computational frameworks with strategic boardroom value creation'
    ],
    isCurrent: true,
  },
];

export const AI_MOMENT_DATA = {
  tag: 'The Catalyst',
  title: 'The AI Moment',
  highlight: 'AI',
  subtitle:
    "Realizing AI's power to solve complex business problems beyond mere efficiency.",
  quoteParagraph1:
    'While working as a Marketing Manager at Inling International, I led influencer marketing campaigns across diverse European markets. We encountered a major real-world challenge: many European influencers were uncomfortable communicating in English, creating severe language and cultural barriers that made establishing fruitful collaborations difficult and slow.',
  quoteParagraph2:
    "I started using ChatGPT not simply for literal translation or time-saving, but to adapt our tone and communication style to distinct cultural contexts. For instance, in Spain and Italy, we used a warmer, conversational tone; for Germany, we crafted a structured, formal, and professional approach. This breakthrough proved that AI can solve complex, human-centric business problems—igniting my passion to study Business AI at SMU.",
  breakdown: {
    friction: {
      title: 'Practical Communication Barriers',
      points: [
        'Influencers in non-English European markets hesitant to engage in English',
        'Literal translation tools lacking localized warmth, nuance, and regional etiquette',
        'Misunderstandings and prolonged back-and-forth delaying international campaigns'
      ]
    },
    bridge: {
      title: 'Culturally Adapted AI Bridge (The Catalyst)',
      points: [
        'Nuanced tone calibration (e.g., warm & conversational for Spain/Italy; formal & structured for Germany)',
        'Accelerated partnership agreements and established genuine cross-border trust',
        'Sparked Hana’s realization of AI’s strategic business power, directly inspiring her Master of Business AI journey at SMU'
      ]
    }
  }
};

export const FUTURE_PILLARS: FuturePillar[] = [
  {
    id: 'global-strategy',
    title: 'Global Strategy',
    description:
      'Leveraging AI to interpret diverse market signals and tailor global campaigns with local precision.',
    icon: 'globe',
    color: 'secondary',
    details: [
      'Real-time semantic analysis of localized consumer sentiment',
      'Adaptive brand localization without loss of core identity',
      'Dynamic multi-region competitive intelligence tracking'
    ]
  },
  {
    id: 'predictive-marketing',
    title: 'Predictive Marketing',
    description:
      'Moving beyond reactive analytics to anticipate consumer needs and market shifts.',
    icon: 'insights',
    color: 'tertiary',
    details: [
      'Predictive CLV and behavioral propensity modeling',
      'Automated dynamic budget allocation based on Bayesian priors',
      'Hyper-personalized messaging generated in real-time'
    ]
  },
  {
    id: 'human-ai-synergy',
    title: 'Human-AI Synergy',
    description:
      'Designing systems where human creativity is amplified, not replaced, by machine intelligence.',
    icon: 'psychology',
    color: 'secondary',
    details: [
      'Human-in-the-loop creative brainstorming systems',
      'Ethical and responsible AI governance frameworks',
      'Empowering business strategists with intuitive AI copilots'
    ]
  },
];
