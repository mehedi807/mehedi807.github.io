export const aboutContent = {
  title: "The engineer behind the work.",
  introduction:
    "I’m Mehedi Hasan, a backend and applied AI engineer. I work on the systems that connect a product’s interface to its data, integrations, and intelligence.",
  background:
    "My work spans AI tools, publishing workflows, and commerce. Across those products, I’ve built APIs, connected payment providers, moved long-running work into background jobs, and integrated language models into application workflows.",
  expertise: [
    {
      title: "Backend engineering",
      description:
        "APIs, authentication, data models, billing, and background processing—the application boundaries that keep a product understandable.",
      skills: [
        "Python, Django, and FastAPI",
        "PostgreSQL, Redis, and Celery",
        "JWT, OAuth, and role-based permissions",
        "Stripe, PayPal, Square, and bKash",
      ],
    },
    {
      title: "Applied AI",
      description:
        "Connecting model capabilities to product workflows, with application data and backend tools around them.",
      skills: [
        "Retrieval-augmented generation",
        "pgvector and Pinecone",
        "Agents calling backend tools",
        "Multimodal uploads and model integrations",
      ],
    },
  ],
  approach: [
    {
      title: "Understand the boundary",
      text: "Start with the behaviour a product needs, the people using it, and the systems it already depends on.",
    },
    {
      title: "Make the contracts clear",
      text: "Give APIs, data flows, integrations, and background work responsibilities that can be explained and inspected.",
    },
    {
      title: "Carry the work through",
      text: "Treat deployment, failure handling, and the handoff as part of delivering the product.",
    },
  ],
  experience: [
    {
      company: "Join Venture AI",
      role: "Backend Developer",
      period: "Apr 2026 — Sep 2026",
      details: [
        "Built Django and FastAPI APIs with authentication and permissions.",
        "Integrated subscription billing, verified webhooks, and renewal workflows.",
        "Worked on RAG pipelines and agents connected to backend tools.",
        "Moved long-running tasks to Celery and Redis, and automated delivery workflows.",
      ],
    },
  ],
  education: {
    institution: "Bangladesh University of Business and Technology",
    qualification: "BSc in Computer Science and Engineering",
    completed: "Apr 2026",
  },
} as const;
