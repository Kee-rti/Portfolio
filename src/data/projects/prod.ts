import { Project } from './types';

export const prodProject: Project = {
  id: 'prod',
  title: 'Prod — Edge Behavioral ML',
  oneLiner: 'A privacy-conscious Chrome extension that classifies browsing focus using client-side decision logic evaluated in the browser.',
  problemSummary: 'Screen time monitors often rely on rigid domain blacklists or send sensitive browsing activity to external cloud servers, compromising privacy.',
  category: 'Machine Learning, Inference & Browser Execution',
  status: 'Working Prototype',
  year: '2025',
  accent: 'lilac',
  technologies: ['XGBoost', 'Scikit-Learn', 'JavaScript AST', 'Chrome Extensions API', 'Python'],
  links: {
    github: 'https://github.com/Kee-rti/prod',
  },
  hasInteractiveDemo: true,
  interactiveDemoId: 'prod-demo',
  caseStudy: {
    problemStatement: 'Tracking productivity online is difficult because naive domain blocking treats productive research on sites like YouTube or StackOverflow as distraction. Uploading raw browsing history or keystrokes to a cloud server creates unacceptable privacy risks. Prod was built to test whether a machine learning classifier could run entirely client-side inside a browser extension using only anonymized interaction patterns.',
    workflowDiagram: `[User Interactions in Active Tab]
 (Active Duration, Scroll Percentage, Keystrokes)
       │
       ▼
[Chrome Content Script]
       │  Collects kinetic counters (never records typed text or URLs)
       ▼
[Extension Background Worker]
       │  Passes [duration, scroll, keys, 0] to compiled predictor
       ▼
[Compiled XGBoost Predictor (predictXGB)]
       │  Evaluates decision trees locally in RAM
       ├── Computes focus probability
       └── Applies 0.86 decision boundary threshold
       ▼
[Local Chrome Storage Output]
       │  (FOCUSED vs DISTRACTED, evaluated locally in RAM without network requests)`,
    architectureDescription: 'An offline-capable browser extension. Models were trained in Python using XGBoost and Logistic Regression baselines, with client-side decision logic and tree exports compiled to JavaScript for local evaluation in the browser without network requests.',
    keyComponents: [
      { name: 'Telemetry Collector', purpose: 'A content script that measures passive interaction signals (typing count, scroll distance, duration) without inspecting sensitive page contents or keystroke characters.' },
      { name: 'ML Training Pipeline (ml_lab)', purpose: 'Python scripts training XGBoost and Logistic Regression baselines on synthetic behavioural interaction data with stratified k-fold cross-validation.' },
      { name: 'Tree Compilation Pipeline', purpose: 'Script (compile_xgb_js.py) converting tree exports into nested JavaScript expressions for local extension runtime evaluation.' },
      { name: 'Decision Threshold Layer', purpose: 'Applies an explicit 0.86 decision boundary to the compiled tree output to prioritize high precision in real-world browsing.' }
    ],
    engineeringDecisions: [
      {
        title: 'Client-Side JavaScript Execution vs. Heavy Runtime Libraries',
        context: 'Embedding machine learning models in browser extensions often relies on ONNX Runtime Web or TensorFlow.js, which add large bundle sizes and initialization delays.',
        choice: 'Compiled model decision logic into lightweight native JavaScript functions.',
        rationale: 'Runs immediately inside the Chrome extension worker without external runtime dependencies or multi-megabyte bundle overhead.',
        tradeOff: 'Tree traversal logic is fixed at compile time and requires re-compilation when retraining.'
      },
      {
        title: 'XGBoost Classifier vs. Logistic Regression Baseline',
        context: 'Initial experiments used a Logistic Regression baseline to see if linear boundaries could separate focus from distraction.',
        choice: 'Evaluated both approaches in ml_lab, benchmarking XGBoost against the linear baseline.',
        rationale: 'Interaction patterns are non-linear; for example, high scroll depth with zero typing indicates passive browsing, whereas high duration combined with keystrokes indicates active focus.',
        tradeOff: 'Tree ensemble logic requires more branching operations than a single linear dot product.'
      },
      {
        title: 'Calibrated Decision Threshold (0.86) vs. Default 0.5',
        context: 'A default 0.5 decision threshold results in frequent false distraction alerts during brief reading pauses.',
        choice: 'Conducted a precision-recall threshold sweep in ml_lab, selecting an 0.86 cutoff for classifying focused sessions.',
        rationale: 'Prioritizes high precision so the extension avoids false distraction warnings during focused work.',
        tradeOff: 'A conservative threshold requires stronger sustained signals before classifying sessions as focused.'
      }
    ],
    implementationDetails: [
      'Trained in Python using Scikit-Learn, Pandas, and XGBoost with stratified k-fold cross-validation.',
      'A threshold sweep established an optimal decision boundary at 0.86 confidence for high precision in real-world browsing.',
      'Communication between content script and background worker uses standard chrome.runtime messaging.',
      'Chrome local storage stores session history for popup charts without transmitting any data over the internet.'
    ],
    validationAndMetrics: [
      { metric: 'Decision Threshold', value: '0.86', note: 'Calibrated cutoff boundary chosen via threshold sweep on synthetic training data.', status: 'verified' },
      { metric: 'Inference Runtime', value: 'Client-Side RAM', note: 'Runs compiled decision trees directly in the browser worker with zero network requests.', status: 'verified' },
      { metric: 'Dataset Source', value: 'Synthetic Corpus', note: 'Trained on simulated session data; does not establish real-world generalization.', status: 'synthetic-baseline' }
    ],
    limitationsAndFutureWork: [
      'Evaluation was conducted on a synthetic dataset without strict out-of-sample holdout separation; performance figures have been removed until re-evaluated against an untouched test split.',
      'Synthetic interaction data does not establish real-world generalization; real browsing behavior exhibits significantly higher noise and domain complexity.',
      'Browser extensions cannot monitor external desktop applications (like code editors or terminal windows).',
      'Does not distinguish different types of reading (e.g. documentation vs social media articles).'
    ]
  }
};
