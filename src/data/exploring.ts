export interface ExploringArea {
  id: string;
  number: string;
  title: string;
  description: string;
  accent: 'rose' | 'lilac' | 'plum';
}

export interface ExploringData {
  sectionTitle: string;
  introductoryText: string;
  areas: ExploringArea[];
  researchNote: {
    badge: string;
    text: string;
  };
}

export const exploringData: ExploringData = {
  sectionTitle: "What I'm Exploring",
  introductoryText: "Beyond individual projects, I'm interested in making AI systems useful, understandable and reliable.",
  areas: [
    {
      id: "reliable-ai",
      number: "01",
      title: "Reliable AI Applications",
      description: "Building applications where LLMs interact with real tools and APIs, with validation, error handling and appropriate human oversight.",
      accent: "rose"
    },
    {
      id: "grounded-ai",
      number: "02",
      title: "Grounded & Evaluable AI",
      description: "Exploring how retrieval quality, evidence selection and evaluation affect the reliability of LLM applications and agents.",
      accent: "lilac"
    },
    {
      id: "practical-ml",
      number: "03",
      title: "Practical Machine Learning",
      description: "Understanding how to train, evaluate and integrate ML models into usable software, with an interest in efficient and privacy-conscious inference.",
      accent: "plum"
    }
  ],
  researchNote: {
    badge: "Ongoing Exploration",
    text: "Currently exploring: Evidence-order sensitivity in tool-using LLM agents."
  }
};
