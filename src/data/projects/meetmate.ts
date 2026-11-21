import { Project } from './types';

export const meetMateProject: Project = {
  id: 'meetmate',
  title: 'MeetMate',
  oneLiner: 'An agentic Google Calendar assistant that turns conversational scheduling requests into verified calendar events.',
  problemSummary: 'Scheduling by conversation often leads to misinterpreted times, missed conflicts, or accidental calendar edits when models execute actions without user confirmation.',
  category: 'Agent Workflows & API Integration',
  status: 'Working Application',
  year: '2026',
  accent: 'plum',
  technologies: ['Python', 'Gemini API', 'Google Calendar API', 'OAuth 2.0 PKCE', 'State Machine'],
  links: {
    github: 'https://github.com/Kee-rti/MeetMate',
  },
  caseStudy: {
    problemStatement: 'Most AI scheduling demos execute calendar mutations immediately after parsing a user prompt. In practice, this creates double bookings, timezone errors, or unwanted calendar invites. Scheduling requires a dependable multi-step flow: checking existing availability, identifying conflicts, suggesting alternative slots, and waiting for explicit user confirmation before creating any event.',
    workflowDiagram: `[User Request]
       │  "Schedule a 45-minute sync with Sarah next Tuesday afternoon"
       ▼
[Intent Extraction (Gemini)]
       │  Parses intent, resolves date relative to current time
       ▼
[Tool Call: check_availability]
       │  Queries Google Calendar API for busy intervals
       ▼
[Conflict & Slot Validation]
       ├── If Conflict: Generates alternative time suggestions
       └── If Free: Prepares structured meeting proposal
       ▼
[Human Approval Gate]
       │  Presents meeting preview (title, time, timezone) to user
       ├── If Cancelled: Discards proposal without API mutations
       └── If Confirmed: Proceeds to event creation
       ▼
[Calendar Execution (create_event)]
       │  Calls Google Calendar API v3
       ▼
[Post-Creation Verification]
       │  Reads back event ID and verifies start/end times
       ▼
[Final Confirmation to User]`,
    architectureDescription: 'MeetMate separates natural-language reasoning from calendar state mutation. Gemini acts as a decision planner that queries availability and proposes changes, while the execution layer enforces approval gates and validates outcomes.',
    keyComponents: [
      { name: 'Gemini Planner', purpose: 'Interprets conversational requests and selects appropriate tools (get_current_datetime, list_events, check_availability, propose_meeting, create_event).' },
      { name: 'Google Calendar Client', purpose: 'Communicates with Google Calendar API v3 using user-authorized credentials with timezone handling (defaulting to Asia/Kolkata).' },
      { name: 'OAuth 2.0 Handler (PKCE & State)', purpose: 'Manages authorization code flow with distinct cryptographic state validation and PKCE code verifier preservation across redirect callbacks.' },
      { name: 'Approval State Gate', purpose: 'Temporarily holds meeting proposals with a 10-minute TTL, requiring affirmative confirmation before calling create_event.' }
    ],
    engineeringDecisions: [
      {
        title: 'Two-Phase Proposal and Approval Workflow',
        context: 'Direct tool execution can inadvertently create overlapping or duplicate meetings from ambiguous prompts.',
        choice: 'Split scheduling into an uncommitted proposal step and an explicit execution step.',
        rationale: 'Requiring user confirmation before calling the write API eliminates unintended calendar modifications while keeping the scheduling conversational.',
        tradeOff: 'Adds one conversational turn before an event is finalized.'
      },
      {
        title: 'Distinguishing PKCE from State Parameter Validation',
        context: 'Connecting personal calendar data requires protecting against CSRF and authorization code interception.',
        choice: 'Implemented random state parameter matching alongside PKCE (RFC 7636) code challenge verification.',
        rationale: 'State parameters protect against cross-site request forgery, while the PKCE code verifier ensures that an intercepted authorization code cannot be exchanged without the original client secret verifier.',
        tradeOff: 'Requires temporary local storage (_pending_oauth.json) to preserve the verifier until the callback returns.'
      },
      {
        title: 'Post-Creation Event Read-Back Verification',
        context: 'Network drops or partial API responses can leave the assistant unsure whether an event was actually saved.',
        choice: 'Perform an immediate query for the returned event ID after execution to confirm title, timestamp, and attendees.',
        rationale: 'Prevents the assistant from falsely claiming an event was created if Google Calendar rejected or truncated the request.',
        tradeOff: 'Uses one additional read API call per scheduled event.'
      }
    ],
    implementationDetails: [
      'Executed via the official Google GenAI SDK. Configured via the GEMINI_MODEL environment variable (defaulting to gemini-3.8-flash, tested with gemini-3.5-flash-lite).',
      'Handles timezones with Python zoneinfo and stdlib UTC fallbacks to prevent date offsets on cross-timezone requests.',
      'Includes a standalone simulated demo mode to test scheduling logic and conflict handling without requiring live Google API credentials.',
      'Automatic token refresh handling when valid refresh tokens are present in local storage.'
    ],
    validationAndMetrics: [
      { metric: 'Approval Enforcement', value: 'Gate Verified in Code', note: 'create_event cannot be invoked without a confirmed proposal token.', status: 'verified' },
      { metric: 'OAuth Security', value: 'PKCE + State Matching', note: 'Independent verification of state parameter and code_verifier on redirect callback.', status: 'verified' },
      { metric: 'Conflict Resolution', value: 'Verified on Demo Scenarios', note: 'Detects overlapping calendar entries and proposes adjacent open slots.', status: 'verified' }
    ],
    limitationsAndFutureWork: [
      'Current prototype is designed as a single-user instance; multi-tenant credential storage is not yet implemented.',
      'Does not yet support natural-language recurring meeting rules (e.g. "every Tuesday for 4 weeks").',
      'Cannot check external attendees\' private calendar availability outside shared Google domains.'
    ]
  }
};
