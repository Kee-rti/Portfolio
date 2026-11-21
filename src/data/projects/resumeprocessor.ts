import { Project } from './types';

export const resumeProcessorProject: Project = {
  id: 'resumeprocessor',
  title: 'ResumeProcessor & Grounded RAG',
  oneLiner: 'A Django REST Framework RAG application that extracts, chunks, and inspects resume text for conversational retrieval.',
  problemSummary: 'Document search and Q&A tools often hide retrieval mechanics behind opaque frameworks, making it hard to see which text chunks were matched, how similarity was scored, or why an answer was generated.',
  category: 'Retrieval, Embeddings & Grounded Generation',
  status: 'Working Application',
  year: '2026',
  accent: 'rose',
  technologies: ['Django REST Framework', 'React', 'Sentence-Transformers', 'NumPy Vector Store', 'Gemini API'],
  links: {
    github: 'https://github.com/Kee-rti/ResumeProcessor',
  },
  caseStudy: {
    problemStatement: 'When building conversational document assistants, questions frequently fail because of poor chunking boundaries or irrelevant vector retrieval rather than the LLM itself. This project was built to understand every step of the RAG lifecycle from first principles: manually chunking documents, embedding them locally, computing cosine distances with NumPy, and passing inspectable retrieved chunks to the Gemini API.',
    workflowDiagram: `[Resume Upload (PDF / DOCX)]
       │
       ▼
[Text Extraction & Sliding-Window Chunker]
       │  500-char window, 100-char overlap, breaks at spaces/newlines
       ▼
[Embedding Generation (all-MiniLM-L6-v2)]
       │  Generates 384-dimensional dense vectors
       ▼
[In-Memory NumPy Vector Store]
       │  Stores embeddings and chunk texts per user session
       ▼
[User Question] ──► [Question Embedding]
                           │
                           ▼
             [Cosine Similarity Calculation (NumPy)]
                           │  dot(query, doc) / (||query|| * ||doc||)
                           ▼
             [Top-K Retrieved Chunks + Similarity Scores]
                           │
                           ▼
             [Grounded Prompt Injection]
                           │
                           ▼
             [Gemini 3.5 Flash-Lite API]
                           │
                           ▼
      [Answer + Inspectable Source Chunks & Scores]`,
    architectureDescription: 'A full-stack RAG pipeline with a React frontend and Django REST Framework backend. Instead of relying on all-in-one RAG abstractions, each stage (extraction, windowing, embedding, vector search, and prompting) is isolated into modular Python classes.',
    keyComponents: [
      { name: 'Sliding-Window Chunker', purpose: 'Custom text chunker (chunk_size: 500, overlap: 100) that looks for nearby spaces and newlines to preserve sentence readability.' },
      { name: 'all-MiniLM-L6-v2 Embedder', purpose: 'Uses sentence-transformers to convert text chunks into dense vector representations on CPU.' },
      { name: 'NumPy Vector Store', purpose: 'A transparent in-memory store that calculates exact cosine similarity via dot products and norms without external vector database dependencies.' },
      { name: 'Session Registry', purpose: 'Process-local session manager with automatic 1-hour expiration to keep candidate resumes isolated and ephemeral in memory.' }
    ],
    engineeringDecisions: [
      {
        title: 'Custom Sliding-Window Chunking vs. Heavy Framework Splitters',
        context: 'Standard recursive text splitters can split phrases unexpectedly across chunk boundaries.',
        choice: 'Built a manual sliding-window chunker with a 500-character window and 100-character overlap.',
        rationale: 'Writing the chunker directly made context preservation easy to inspect and debug during retrieval tests.',
        tradeOff: 'Does not adapt to unusual multi-column resume layouts without prior text sanitization.'
      },
      {
        title: 'NumPy Vector Store for Transparent Retrieval',
        context: 'Vector databases like Chroma or FAISS add setup complexity when prototyping single-session document Q&A.',
        choice: 'Implemented a lightweight NumPy vector store using standard matrix operations.',
        rationale: 'Allows developers to inspect the exact dot-product cosine similarity calculation and sort indices directly, making retrieval mechanics clear.',
        tradeOff: 'Not suitable for millions of vectors where approximate nearest-neighbor indexing (e.g. FAISS HNSW) becomes necessary.'
      },
      {
        title: 'Ephemeral Session Isolation for Uploaded Documents',
        context: 'Storing resumes indefinitely in a central database introduces user privacy risks and unbounded storage growth.',
        choice: 'Kept uploaded text and embeddings in an in-memory session registry with a 1-hour idle TTL.',
        rationale: 'Ensures uploaded candidate resumes remain private and are garbage-collected automatically when sessions expire.',
        tradeOff: 'Restarting the server clears active sessions; multi-worker scaling requires shared storage such as Redis.'
      }
    ],
    implementationDetails: [
      'REST endpoints: POST /api/rag/upload/ for multipart resume ingestion and POST /api/rag/chat/ for conversational questions.',
      'API responses return both the generated LLM response and the retrieved source chunks with their similarity scores.',
      'Uses Python truststore to inject native Windows certificates, cleanly resolving SSL verification for Hugging Face model downloads.',
      'Includes unit and pipeline tests covering chunking, embeddings, retrieval scoring, and prompt formatting.'
    ],
    validationAndMetrics: [
      { metric: 'Chunking Overlap', value: '100 characters', note: 'Maintains contextual continuity across 500-character windows.', status: 'verified' },
      { metric: 'Vector Store Type', value: 'NumPy Matrix', note: 'Cosine similarity computed via np.dot and np.linalg.norm.', status: 'verified' },
      { metric: 'Session Isolation', value: '1-Hour TTL', note: 'Process-local session registry with automatic expired session cleanup.', status: 'verified' }
    ],
    limitationsAndFutureWork: [
      'Requires text-layer documents; scanned image resumes need an OCR step before ingestion.',
      'NumPy linear scan scales well for single resumes (< 50 chunks) but requires FAISS or pgvector for multi-document databases.',
      'Process-local memory registry is not shared across multi-worker server deployments without an external cache like Redis.'
    ]
  }
};
