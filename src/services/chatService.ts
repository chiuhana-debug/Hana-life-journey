import { ChatMessage } from '../types';

export const SUGGESTED_QUESTIONS = [
  'What did Hana study?',
  "What is Hana's career journey?",
  'Why did Hana decide to study Business AI?',
  'How did Hana use AI in marketing?',
];

export const INITIAL_AI_MESSAGE: ChatMessage = {
  id: 'init-msg',
  role: 'model',
  content:
    "Hello! I am **Hana's AI**, an interactive assistant here to help you explore Hana's background, education, marketing leadership at Inling International, and her transition into Business AI at SMU. Feel free to ask any question or click one of the suggested topics below!",
  timestamp: 'Just now',
};

// Fallback intelligent grounding for offline/preview conditions if network or API key is unavailable
const LOCAL_KNOWLEDGE_BASE = [
  {
    keywords: ['study', 'education', 'degree', 'university', 'college', 'academic', 'major'],
    answer:
      "Hana completed her **Bachelor of International Business** at **James Cook University**, graduating with honors. Her coursework provided a strong foundation in global market dynamics, cross-cultural communication, supply chain mechanics, and multilateral trade frameworks. Currently, she is advancing her academic journey by pursuing a **Master of Business AI** at **Singapore Management University (SMU)**, focusing on machine learning, data analytics, and AI business strategy.",
  },
  {
    keywords: ['career', 'journey', 'job', 'experience', 'work', 'inling', 'history'],
    answer:
      "Hana's career journey is defined by high-impact international marketing and strategic progression:\n\n1. **Marketing Specialist at Inling International Ltd.**:\n   - Executed multi-channel performance marketing campaigns across EMEA & APAC.\n   - Analyzed customer acquisition costs (CAC) and funnel drop-offs with statistical tools.\n   - Managed international influencer outreach.\n\n2. **Marketing Manager at Inling International Ltd.**:\n   - Led cross-functional marketing teams across creative, media buying, and product marketing.\n   - Managed multi-million dollar annual budgets, achieving a 3.2x ROI expansion.\n   - Streamlined marketing automation workflows and championed data-driven decision-making.\n\n3. **Transition to Business AI (SMU)**:\n   - Currently studying Master of Business AI to pioneer AI-driven strategy and predictive analytics.",
  },
  {
    keywords: ['why', 'leave', 'job', 'quit', 'choose', 'decide', 'transition', 'reason', 'business ai', 'smu', 'master'],
    answer:
      "Hana's decision to leave her job and pursue the **Master of Business AI at Singapore Management University (SMU)** was directly triggered by a real-world challenge and breakthrough during her marketing career:\n\n1. **The Practical Marketing Challenge**:\n   While working as a Marketing Manager at Inling International Ltd., Hana led influencer marketing campaigns across Europe. She encountered a major obstacle: many European influencers were uncomfortable communicating in English, creating severe language and cultural barriers that made establishing collaborations slow and difficult.\n\n2. **The Innovative AI Solution**:\n   Hana started using ChatGPT to address these communication bottlenecks. Rather than using it just for word-for-word translation, she leveraged it to adapt the **tone and communication style** to each distinct cultural context:\n   - For **Spain and Italy**, she crafted a warmer, more conversational and relationship-focused tone.\n   - For **Germany**, she adopted a more formal, structured, and professional communication style.\n\n3. **The Turning Point & Insight**:\n   This was a pivotal turning point. Hana realized that AI was far more than an operational time-saver—it had the power to solve profound human-centric business and cross-cultural communication problems and fundamentally transform modern marketing.\n\n4. **The Decision to Study Business AI**:\n   This revelation ignited Hana's passion for integrating AI into core enterprise strategy. To master machine learning, predictive analytics, and AI-driven business decision-making, she decided to leave her marketing role and enroll in the Master of Business AI program at SMU.",
  },
  {
    keywords: ['how', 'use ai', 'marketing', 'influencer', 'chatgpt', 'campaign', 'strategy', 'spain', 'italy', 'germany', 'tone'],
    answer:
      "While working as a Marketing Manager at Inling International, Hana used AI to solve a critical cross-border communication challenge:\n\n- **Overcoming Language & Cultural Barriers**: Many European influencers were hesitant to communicate in English. Hana used ChatGPT not only to translate messages into various European languages, but to calibrate the tone and style to regional business cultures.\n- **Cultural Tone Calibration**:\n  * In **Spain and Italy**, she used a warmer, conversational tone to build rapport.\n  * In **Germany**, she used a more formal, structured, and professional communication style.\n- **Business Impact**: This AI-driven cultural bridge accelerated negotiation timelines by over 60%, built genuine cross-border trust, and proved that AI is a strategic business asset.",
  },
  {
    keywords: ['future', 'pillar', 'vision', 'goal'],
    answer:
      "Hana's future vision is centered on three core pillars:\n\n1. **Global Strategy**: Leveraging AI to interpret diverse market signals and tailor global campaigns with local precision.\n2. **Predictive Marketing**: Anticipating consumer needs and market shifts through predictive CLV, behavioral propensity modeling, and Bayesian allocation.\n3. **Human-AI Synergy**: Designing systems where human creativity and intuition are amplified, not replaced, by machine intelligence.",
  },
  {
    keywords: ['contact', 'email', 'phone', 'reach', 'linkedin'],
    answer:
      "You can connect with Hana via:\n- **Phone**: +1 (234) 567-890\n- **LinkedIn**: Via the profile links on this website\n- **Inquiry**: You can also use the 'Get in Touch' button in the navigation or footer to send a direct message for AI advisory, leadership opportunities, or academic collaborations.",
  },
];

export async function askHanaAI(
  userQuery: string,
  history: ChatMessage[]
): Promise<string> {
  try {
    const formattedHistory = history.map((m) => ({
      role: m.role,
      content: m.content,
    }));

    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: userQuery,
        history: formattedHistory,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      if (data && data.reply) {
        return data.reply;
      }
    }
  } catch (error) {
    console.warn('Backend /api/chat not reachable, using grounded profile knowledge base fallback:', error);
  }

  // Grounded local fallback with strict boundary check
  const lower = userQuery.toLowerCase();
  for (const item of LOCAL_KNOWLEDGE_BASE) {
    if (item.keywords.some((kw) => lower.includes(kw))) {
      return item.answer;
    }
  }

  return "I do not have enough information about that specific topic in Hana's profile. You can ask me about Hana's education at James Cook University, her marketing career at Inling International, her transition to Business AI at SMU, or how she applied AI in global marketing strategy.";
}
