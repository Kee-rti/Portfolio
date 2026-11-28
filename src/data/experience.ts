export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  type: string;
  badge?: string;
  summary: string;
  highlights: string[];
  skills: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: 'naturetech',
    role: 'ML Engineer (Intern)',
    company: 'NatureTech SimpleInventions Pvt Ltd',
    period: '6 months',
    type: 'Internship',
    badge: 'ML Prototype & Technical Documentation',
    summary: 'Focused on a software-only safety-monitoring ML prototype using synthetic multi-sensor scenarios, alongside supporting technical documentation.',
    highlights: [
      'Built a six-week software prototype exploring safety-event classification from simulated PIR, thermal, radar, environmental, audio and door-state signals.',
      'Experimented with LSTM and multimodal sensor-fusion approaches in Streamlit, keeping the scope to synthetic-data research rather than hardware deployment.',
      'Authored technical documentation for AI-driven products to support internal innovation filings.'
    ],
    skills: ['Python', 'LSTM', 'Multimodal Sensor Fusion', 'Synthetic Data', 'Streamlit', 'Git/GitHub']
  },
  {
    id: 'codingjr',
    role: 'AI Research Engineer (Intern)',
    company: 'Codingjr Pvt Ltd',
    period: '2 months',
    type: 'Internship',
    badge: 'AI Research & Product Discovery',
    summary: 'Researched LLM copilots and AI-agent opportunities, translating business pain points into technical outlines and decision-ready material.',
    highlights: [
      'Researched potential copilot, LLM and agent workflows to identify practical automation opportunities and business use cases.',
      'Synthesized findings into technical and non-technical documentation and contributed to a pitch deck outlining proposed AI solutions.'
    ],
    skills: ['LLMs', 'AI Agents', 'Copilot Workflows', 'Product Research', 'Technical Documentation', 'Technical Presentation']
  }
];
