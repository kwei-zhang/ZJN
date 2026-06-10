export type Experience = {
  role: string;
  organization: string;
  location: string;
  start: string;
  end: string;
  highlights: string[];
  tech: string[];
};

export const experiences: Experience[] = [
  {
    role: "Software Engineer Intern",
    organization: "Canadian Museums",
    location: "Toronto, Canada",
    start: "May 2026",
    end: "Present",
    highlights: [
      "Implemented a Stripe-based checkout flow with temporary ticket reservation and automatic expiration release, preventing overselling while recovering unpaid reserved inventory.",
      "Built QR-code ticket generation and staff scanner validation flows, enabling secure on-site admission checks with scan history tracking for auditability.",
      "Developed refund and payout workflows with Stripe Connect, payout reserves, and ledger records, supporting financial reconciliation across orders, refunds, and organizer transfers.",
    ],
    tech: ["TypeScript", "Node.js", "Stripe", "PostgreSQL"],
  },
  {
    role: "Software Engineer Intern",
    organization: "Ministry of Education",
    location: "Toronto, Canada",
    start: "Sep 2024",
    end: "Apr 2025",
    highlights: [
      "Reduced semantic search query latency by optimizing retrieval and indexing pipelines, including chunking strategies, relevance filtering, and vector search configuration.",
      "Improved answer accuracy by 12% on a human-evaluated benchmark by refining retrieval quality, document preprocessing, and context selection for RAG responses.",
      "Reduced deployment time by 80% by implementing Azure DevOps CI/CD pipelines with automated JUnit testing, achieving 90%+ test coverage across release workflows.",
    ],
    tech: ["Python", "Java", "Azure", "RAG", "CI/CD"],
  },
  {
    role: "Software Engineer, Open Source",
    organization: "LangChain-AI",
    location: "Remote",
    start: "Sep 2024",
    end: "Dec 2024",
    highlights: [
      "Engineered performance optimizations for FAISS metadata filtering using lazy condition evaluation, achieving a 51% improvement in filter computation efficiency over the initial implementation.",
      "Implemented context caching for the @langchain/google-genai package by integrating Google's File and Cache Manager APIs, enabling reuse of cached inputs across Gemini model invocations to reduce redundant token processing.",
    ],
    tech: ["Python", "TypeScript", "FAISS", "Gemini API"],
  },
  {
    role: "Software Engineer Intern",
    organization: "Changchun Construction Investment",
    location: "JiLin, China",
    start: "May 2023",
    end: "Aug 2023",
    highlights: [
      "Developed an executive dashboard with Streamlit, Pandas, and Spark tracking sales conversion and retention across 20k+ users, replacing manual Excel reporting and adopted by business units for weekly reviews.",
    ],
    tech: ["Python", "Streamlit", "Pandas", "Spark"],
  },
];
