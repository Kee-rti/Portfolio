export interface EngineeringDecision {
  title: string;
  context: string;
  choice: string;
  rationale: string;
  tradeOff: string;
}

export interface MetricItem {
  metric: string;
  value: string;
  note: string;
  status: 'verified' | 'synthetic-baseline' | 'measured' | 'design-constraint';
}

export interface CaseStudyData {
  problemStatement: string;
  workflowDiagram?: string;
  architectureDescription: string;
  keyComponents: { name: string; purpose: string }[];
  engineeringDecisions: EngineeringDecision[];
  implementationDetails: string[];
  validationAndMetrics: MetricItem[];
  limitationsAndFutureWork: string[];
}

export interface Project {
  id: string;
  title: string;
  oneLiner: string;
  problemSummary: string;
  category: string;
  status: string;
  year: string;
  accent: 'rose' | 'lilac' | 'plum';
  technologies: string[];
  links: {
    github?: string;
    live?: string;
    docs?: string;
  };
  hasInteractiveDemo?: boolean;
  interactiveDemoId?: string;
  caseStudy: CaseStudyData;
}
