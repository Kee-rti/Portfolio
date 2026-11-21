import { Project } from './types';

export const safetyAppProject: Project = {
  id: 'safetyapp',
  title: 'SafetyApp ML Prototype',
  oneLiner: 'A 6-week machine learning research prototype exploring multimodal sensor fusion for safety anomaly detection.',
  problemSummary: 'Detecting sudden falls and prolonged inactivity using single-sensor streams produces frequent false positives, while capturing real physical fall data is dangerous and sparse.',
  category: 'Temporal Modelling & Multimodal ML Experimentation',
  status: 'Research Prototype',
  year: '2025',
  accent: 'plum',
  technologies: ['Python', 'LSTM', 'Multimodal Sensor Fusion', 'Streamlit', 'SHAP'],
  links: {
    docs: '#experience',
  },
  caseStudy: {
    problemStatement: 'Safety monitoring in physical environments requires distinguishing between everyday movements, sudden shock events like falls, and subsequent prolonged immobility. Single sensor streams like basic accelerometers often trigger false alarms on dropped devices. During my internship at NatureTech SimpleInventions, I built a 6-week software prototype to explore how combining simulated multi-sensor signals with recurrent neural architectures could improve event classification.',
    workflowDiagram: `[Synthetic Multi-Sensor Scenario Generator]
 (Simulated Accelerometer, Gyroscope & Pressure Time-Series)
       │
       ▼
[Temporal Sliding-Window & Feature Extraction]
       │
       ▼
[Multimodal Recurrent Model (LSTM)]
       │  Evaluates sequential acceleration spikes & rest states
       ▼
[Event Classification (Fall / Prolonged Inactivity / Normal)]
       │
       ├──► [Streamlit Evaluation Dashboard]
       │       Interactive playback and prediction curves
       │
       └──► [SHAP Feature Attribution Analysis]
               Examines channel contributions during event windows
       │
       ▼
[Technical Documentation for AI-Driven Products]
 (Supports internal corporate innovation filings)`,
    architectureDescription: 'A software prototype designed to test whether temporal neural models could reliably classify synthetic sensor scenarios representing hazardous falls and inactivity patterns.',
    keyComponents: [
      { name: 'Synthetic Scenario Simulator', purpose: 'Generated parameterized multi-sensor time-series reflecting acceleration spikes, rotational changes, and subsequent stationary phases.' },
      { name: 'Recurrent Model (LSTM)', purpose: 'Captured temporal dependencies across sequential sensor readings to distinguish momentary drops from sustained falls.' },
      { name: 'SHAP Interpretability Workbench', purpose: 'Explored feature importances in Streamlit to verify that classifications were driven by impact spikes rather than baseline noise.' },
      { name: 'Technical Documentation', purpose: 'Authored technical documentation detailing sensor fusion concepts to support internal innovation filings.' }
    ],
    engineeringDecisions: [
      {
        title: 'Synthetic Sensor Scenarios vs. Real-World Fall Data',
        context: 'Gathering physical data of elderly or industrial falls is hazardous, sparse, and ethically constrained.',
        choice: 'Used synthetic sensor simulations with parameterized kinematic profiles and injected noise.',
        rationale: 'Allowed rapid exploration of edge-case scenarios (gradual slides vs sudden drops vs prolonged immobility) within the 6-week prototype timeline.',
        tradeOff: 'Simulated sensor data lacks the physical noise and unpredictable contact dynamics of real-world wearable hardware.'
      },
      {
        title: 'Sequential Temporal Modeling with LSTMs',
        context: 'Static point-in-time classifiers fail because a fall is a sequential event: free-fall, shock impact, and stationary rest.',
        choice: 'Trained LSTM recurrent layers over temporal sliding windows.',
        rationale: 'LSTMs naturally capture the transition from rapid acceleration to prolonged stillness.',
        tradeOff: 'Requires temporal window buffering before classification can be evaluated.'
      },
      {
        title: 'SHAP Feature Attribution for Model Interpretability',
        context: 'Understanding why a safety prototype made a prediction is essential when writing technical disclosures.',
        choice: 'Integrated SHAP analysis into the Streamlit dashboard.',
        rationale: 'Allowed visual inspection of which sensor channels and time steps contributed most heavily to anomaly labels.',
        tradeOff: 'SHAP value calculations add computational overhead during batch validation.'
      }
    ],
    implementationDetails: [
      'Delivered as an end-to-end Python prototype within a focused 6-week internship sprint at NatureTech SimpleInventions.',
      'Experimented with multimodal sensor combinations and temporal models in Streamlit for visual stakeholder reviews.',
      'Authored technical documentation detailing system design and data-flow concepts for internal innovation filings.',
      'Experiment code versioned and maintained using Git and GitHub.'
    ],
    validationAndMetrics: [
      { metric: 'Prototype Delivery', value: '6-Week Sprint', note: 'Completed scenario simulation, model training, and Streamlit UI within the designated timeline.', status: 'verified' },
      { metric: 'Evaluation Environment', value: 'Streamlit Dashboard', note: 'Interactive interface for testing simulated sensor scenarios.', status: 'verified' },
      { metric: 'Documentation Output', value: 'Technical Disclosures', note: 'Authored technical documentation supporting internal innovation filings.', status: 'verified' }
    ],
    limitationsAndFutureWork: [
      'This was an exploratory software prototype evaluated on synthetic sensor scenarios, not on deployed wearable hardware.',
      'Real-world deployment requires physical hardware sensor calibration and on-device embedded quantization (e.g. TensorFlow Lite Micro).'
    ]
  }
};
