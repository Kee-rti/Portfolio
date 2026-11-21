export interface SkillCategory {
  title: string;
  subtitle: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    subtitle: 'Core languages used in coursework, projects, and prototypes',
    skills: ['Python', 'C', 'C++', 'JavaScript', 'TypeScript', 'SQL']
  },
  {
    title: 'Machine Learning',
    subtitle: 'Data analysis, classical algorithms, and model evaluation',
    skills: ['Scikit-Learn', 'XGBoost', 'TensorFlow', 'Pandas', 'NumPy', 'LSTM', 'SHAP', 'Streamlit']
  },
  {
    title: 'LLM & AI Engineering',
    subtitle: 'Tool orchestration, retrieval systems, and prompt design',
    skills: ['Gemini API', 'Tool Calling / Function Calling', 'RAG Pipelines', 'Sentence-Transformers', 'Prompt Engineering', 'Hugging Face']
  },
  {
    title: 'Backend Development',
    subtitle: 'RESTful services, authentication, and database schemas',
    skills: ['Django', 'Django REST Framework', 'FastAPI', 'Flask', 'PostgreSQL', 'MySQL', 'SQLite', 'OAuth 2.0 PKCE']
  },
  {
    title: 'Tools & Engineering Practices',
    subtitle: 'Development workflow, version control, and testing',
    skills: ['Git', 'GitHub', 'GitHub Actions', 'Docker', 'Postman', 'Linux Basics', 'Unit Testing']
  }
];
