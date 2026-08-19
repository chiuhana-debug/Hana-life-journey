export interface TimelineChapter {
  id: string;
  chapterNum: string;
  title: string;
  institutionOrCompany: string;
  roleOrDegree: string;
  description: string;
  tags?: string[];
  period?: string;
  highlights?: string[];
  isCurrent?: boolean;
}

export interface FuturePillar {
  id: string;
  title: string;
  description: string;
  icon: 'globe' | 'insights' | 'psychology';
  color: 'secondary' | 'tertiary';
  details?: string[];
}

export interface ContactFormState {
  name: string;
  email: string;
  subject: string;
  message: string;
  topic: 'ai_consultation' | 'career_opportunity' | 'academic_collaboration' | 'general';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  content: string;
  timestamp: string;
}

