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
 (Active Duration, Scroll Distance, Keystrokes, Tab Switches)
       │
       ▼
[Chrome Content Script]
       │  Collects kinetic counters (never records typed text or URLs)
       ▼
[Extension Background Worker]
       │
       ▼
[Feature Normalizer & Decision Engine]
       │  Normalizes inputs against training distribution
       ├── Computes classification score (Model Score)
       └── Determines dominant contributing feature
       ▼
[Local Chrome Storage Output]
       │  (FOCUSED vs DISTRACTED + Explanation, entirely local in RAM)`,
    architectureDescription: 'An offline-capable browser extension. Models were trained in Python using XGBoost and Logistic Regression baselines, with client-side decision logic and tree exports compiled to JavaScript for local evaluation in the browser without network requests.',
    keyComponents: [
      { name: 'Telemetry Collector', purpose: 'A content script that measures passive interaction signals (typing count, scroll distance, duration) without inspecting sensitive page contents or keystroke characters.' },
      { name: 'ML Training Pipeline (ml_lab)', purpose: 'Python scripts training XGBoost and Logistic Regression baselines on synthetic behavioural interaction data with stratified k-fold cross-validation.' },
      { name: 'Tree Compilation Pipeline', purpose: 'Script (compile_xgb_js.py) converting tree exports into nested JavaScript expressions for local extension runtime evaluation.' },
      { name: 'Explanation Engine', purpose: 'Ranks feature weights and contributions to provide clear feedback (e.g. "Sustained Typing" or "High Tab Switching").' }
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
        title: 'Feature Contribution Explanations',
        context: 'Giving users a binary label without context makes the tool feel opaque and untrustworthy.',
        choice: 'Implemented a feature contribution resolver that isolates the dominant positive or negative signal.',
        rationale: 'Users can understand why a session was marked as focused or distracted and adjust their habits accordingly.',
        tradeOff: 'Requires heuristic boundaries, such as ignoring short sessions under 30 seconds from citing duration as positive.'
      }
    ],
    implementationDetails: [
      'Trained in Python using Scikit-Learn, Pandas, and XGBoost with stratified k-fold cross-validation.',
      'A threshold sweep established an optimal decision boundary at 0.86 confidence for high precision in real-world browsing.',
      'Communication between content script and background worker uses standard chrome.runtime messaging.',
      'Chrome local storage stores session history for popup charts without transmitting any data over the internet.'
    ],
    validationAndMetrics: [
      { metric: 'Synthetic Test Accuracy', value: '98.57%', note: 'Evaluated on synthetic dataset in ml_lab (does not establish real-world generalization).', status: 'synthetic-baseline' },
      { metric: 'Synthetic Test Precision', value: '98.56%', note: 'Minimizes false distraction alerts on focused sessions in synthetic splits.', status: 'synthetic-baseline' },
      { metric: 'Synthetic Test Recall', value: '99.04%', note: 'Captures focused patterns in synthetic scenarios.', status: 'synthetic-baseline' },
      { metric: 'Local Execution', value: 'Client-Side RAM', note: 'Runs in the browser background worker with no external network calls.', status: 'verified' }
    ],
    limitationsAndFutureWork: [
      'The reported 98.57% accuracy was evaluated on synthetic behavioural data; real-world browsing is far noisier and requires continuous user-level personalization.',
      'Browser extensions cannot monitor external desktop apps (like code editors or terminal windows).',
      'Does not distinguish different types of reading (e.g. documentation vs social media articles).'
    ]
  }
};
