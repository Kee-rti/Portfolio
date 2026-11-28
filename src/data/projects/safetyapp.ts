import { Project } from './types';

export const safetyAppProject: Project = {
  id: 'safetyapp',
  title: 'SafetyApp ML Prototype',
  oneLiner: 'A software-only ML prototype exploring multimodal sensor fusion across simulated safety-monitoring scenarios.',
  problemSummary: 'Safety events can be difficult to distinguish from routine activity using one signal alone; this prototype explores combining simulated motion, thermal, radar, environmental, audio and door-state signals.',
  category: 'Temporal Modelling & Multimodal ML Experimentation',
  status: 'Research Prototype',
  year: '2025',
  accent: 'plum',
  technologies: ['Python', 'LSTM', 'Multimodal Sensor Fusion', 'Streamlit', 'Synthetic Data'],
  links: {
    docs: '#experience',
  },
  caseStudy: {
    problemStatement: 'This project explored whether complementary sensor streams could help classify safety-monitoring scenarios such as falls, prolonged inactivity, medical emergencies, open doors and environmental hazards. The prototype uses synthetic data representing PIR motion, an 8×8 thermal array, radar, environmental, audio and door sensors. It is a software simulation—not a deployment on physical hardware—so its results do not establish real-world sensor performance.',
    workflowDiagram: `[Synthetic Safety-Scenario Generator]
 (Normal activity, fall, medical emergency, no movement,
  trapped, door left open, environmental hazard)
       │
       ▼
[Simulated Sensor Streams]
 (4× PIR | 8×8 thermal | radar | environmental
  | multi-channel audio | magnetic door state)
       │
       ▼
[Sensor-Specific Preprocessing & Feature Extraction]
       │
       ▼
[Model and Fusion Experiments]
 (LSTM | Transformer | multimodal fusion)
 (Early | feature-level | late | gated fusion)
       │
       ▼
[Scenario / Risk Classification]
       │
       ├──► [Streamlit Experiment Dashboard]
       │       Scenario inspection and evaluation
       │
       └──► [Model Analysis & ONNX Export]
               Prototype-level inspection and export
       │
       ▼
[Documented Limitations & Future Hardware Validation]`,
    architectureDescription: 'A Python/Streamlit research prototype built around synthetic multi-sensor scenarios. It explores sensor-specific preprocessing, temporal modelling and fusion strategies; it does not claim to be a calibrated or deployed physical safety system.',
    keyComponents: [
      { name: 'Synthetic Scenario Simulator', purpose: 'Generates parameterized examples for normal activity, falls, medical emergencies, no movement, trapped scenarios, doors left open and environmental hazards.' },
      { name: 'Multi-Sensor Inputs', purpose: 'Models PIR motion, an 8×8 thermal array, radar, environmental readings, multi-channel audio and magnetic door-state signals.' },
      { name: 'Temporal and Fusion Models', purpose: 'Provides LSTM, Transformer and multimodal-fusion experiments with multiple fusion strategies; these are research options, not a claim that one model is production-ready.' },
      { name: 'Experiment & Export Workflow', purpose: 'Uses Streamlit to inspect scenarios and evaluation outputs, with support for model analysis and ONNX export experiments.' }
    ],
    engineeringDecisions: [
      {
        title: 'Synthetic Scenarios vs. Claims of Real-World Detection',
        context: 'The prototype needed repeatable scenarios for exploring a multi-sensor pipeline without representing that a physical device had been tested.',
        choice: 'Used generated sensor streams to exercise the scenario-generation, preprocessing, modelling and evaluation workflow.',
        rationale: 'Synthetic inputs make controlled scenario variation and repeatable experiments possible within a software prototype.',
        tradeOff: 'Synthetic data cannot establish real-world generalization, sensor reliability or safety-critical performance.'
      },
      {
        title: 'Sensor-Specific Processing Before Fusion',
        context: 'PIR, thermal, radar, environmental, audio and door-state signals have different structures and value ranges.',
        choice: 'Kept modality-specific data generation and feature handling before combining information in fusion experiments.',
        rationale: 'This preserves the distinct meaning of each simulated sensor type instead of treating every input as interchangeable.',
        tradeOff: 'Multiple preprocessing paths increase implementation and validation complexity.'
      },
      {
        title: 'Experimenting with Temporal and Fusion Architectures',
        context: 'Safety scenarios can involve changes over time and signals from more than one modality.',
        choice: 'Explored LSTM, Transformer and multimodal-fusion approaches rather than presenting one architecture as a validated final solution.',
        rationale: 'Comparing modelling and fusion options supports investigation of temporal patterns and complementary sensor information.',
        tradeOff: 'A broader experiment space increases tuning and evaluation effort, and still requires validation against real sensor data.'
      }
    ],
    implementationDetails: [
      'Built as a Python and Streamlit software prototype using synthetic sensor scenarios.',
      'Includes simulated PIR, thermal, radar, environmental, audio and door-state modalities.',
      'Explores temporal architectures and early, feature-level, late and gated fusion approaches.',
      'Includes evaluation tooling and ONNX export support for experimentation; no physical hardware deployment is claimed.'
    ],
    validationAndMetrics: [
      { metric: 'Scenario Coverage', value: '7 Synthetic Classes', note: 'Normal activity, fall, medical emergency, no movement, trapped, door left open and environmental hazard.', status: 'verified' },
      { metric: 'Sensor Modalities', value: '6 Simulated Types', note: 'PIR, thermal, radar, environmental, audio and door-state inputs.', status: 'verified' },
      { metric: 'Prototype Scope', value: 'Software Only', note: 'Synthetic-data experiments and a Streamlit workflow; not validated on physical sensors.', status: 'verified' }
    ],
    limitationsAndFutureWork: [
      'The prototype uses synthetic sensor streams; its evaluation does not establish real-world accuracy or generalization.',
      'No physical sensor hardware was integrated or calibrated as part of this software prototype.',
      'A real deployment would require hardware integration, sensor calibration, representative data collection and independent validation before any safety-related use.'
    ]
  }
};
