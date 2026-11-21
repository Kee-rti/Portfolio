export interface SiteConfig {
  name: string;
  pronouns: string;
  title: string;
  location: string;
  email: string;
  statusBadge: {
    text: string;
    available: boolean;
  };
  headline: string;
  intro: string;
  supportingText: string;
  bioLong: string[];
  links: {
    github: string;
    linkedin: string;
    leetcode: string;
    email: string;
    resume: string;
  };
  navigation: {
    label: string;
    href: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: "Kirti",
  pronouns: "she/her",
  title: "Computer Science Student & Aspiring AI/ML Engineer",
  location: "New Delhi, India",
  email: "kirtithakurrrr@gmail.com",
  statusBadge: {
    text: "Open to AI/ML & Software Roles",
    available: true,
  },
  headline: "Curious about technology. Passionate about building things.",
  intro: "I'm Kirti, a Computer Science student exploring AI, machine learning and software engineering.",
  supportingText: "I enjoy building LLM-powered applications, experimenting with machine learning and understanding what makes software reliable.",
  bioLong: [
    "I'm a final-year Computer Science and Engineering student at Lovely Professional University. Over the past few years, I've developed a genuine love for turning conceptual machine learning ideas into working, testable software.",
    "My recent projects include building an agentic Google Calendar assistant with Gemini tool-calling, architecting an inspectable RAG application with Django REST Framework and NumPy, and compiling an XGBoost model into JavaScript so it can run directly inside a Chrome extension without sending browsing data over the network.",
    "During my internships, I've contributed technical documentation supporting internal innovation filings for safety monitoring prototypes at NatureTech SimpleInventions and researched AI copilot integrations at Codingjr.",
    "I'm curious, self-driven, and looking for opportunities where I can learn from experienced engineers, build useful products, and contribute to thoughtful teams."
  ],
  links: {
    github: "https://github.com/kee-rti",
    linkedin: "https://linkedin.com/in/kee-rti",
    leetcode: "https://leetcode.com/u/kirti-thakur/",
    email: "mailto:kirtithakurrrr@gmail.com",
    resume: "/resume.pdf",
  },
  navigation: [
    { label: "Exploring", href: "#exploring" },
    { label: "Work", href: "#work" },
    { label: "ML Playground", href: "#interactive-lab" },
    { label: "Experience", href: "#experience" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
};
