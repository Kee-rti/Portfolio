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
    role: 'AI Engineer (Intern)',
    company: 'NatureTech SimpleInventions Pvt Ltd',
    period: 'Dec 2025',
    type: 'Internship',
    badge: 'ML Prototype & Documentation',
    summary: 'Contributed to an exploratory machine learning prototype evaluating synthetic multi-sensor scenarios for anomaly detection, and authored supporting technical documentation.',
    highlights: [
      'Built a multi-sensor safety-monitoring ML prototype in six weeks, using synthetic sensor scenarios to classify events such as falls and prolonged inactivity.',
      'Implemented reproducible LSTM and multimodal sensor-fusion experiments in Streamlit; used SHAP and feature importance to interpret predictions.',
      'Authored technical documentation for AI-driven products, supporting internal innovation filings.'
    ],
    skills: ['Python', 'LSTM', 'Sensor Fusion', 'SHAP', 'Streamlit', 'MLOps', 'System Architecture', 'Git/GitHub']
  },
  {
    id: 'codingjr',
    role: 'AI Research Engineer (Intern)',
    company: 'Codingjr Pvt Ltd',
    period: 'Apr 2025',
    type: 'Internship',
    badge: 'Research & Pitch Development',
    summary: 'Investigated developer workflow automation and AI copilot integrations, synthesizing market findings into technical outlines and pitch presentations.',
    highlights: [
      'Researched automation use cases and market opportunities for potential AI copilot integrations in developer workflows.',
      'Collaborated with team members and leadership to turn research findings into a pitch deck outlining proposed AI solutions and their business value.'
    ],
    skills: ['SQL', 'LLMs', 'RAG Concepts', 'Copilot Workflows', 'Market Research', 'Technical Presentation']
  }
];
