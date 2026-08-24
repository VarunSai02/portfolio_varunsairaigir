// -----------------------------------------------------------------------------
// Site content. Edit this file to update the portfolio. Components read from
// here and shouldn't need to change.
// -----------------------------------------------------------------------------

export const site = {
  name: "Varun Sai Raigir",
  title: "AI/ML Engineer",
  location: "Raritan, NJ",
  availability: "Open to relocation (US) or remote",
  email: "varunraigir@gmail.com",
  phone: "+1-945-273-0734",
  url: "https://varunsairaigir.com",
  tagline:
    "I build AI systems that ship: clinical AI in active physician pilot, edge ML running on real hardware, and production applications people use every day.",
  about: `I'm an AI/ML engineer focused on systems that reach real users, not just benchmarks. My research in clinical machine learning is published, and day to day I'm building edge AI for health wearables and a clinical documentation platform physicians already rely on. That experience is clinical, but my interest isn't limited to it: I'm equally comfortable across general software and AI engineering, from backend systems and APIs to production ML pipelines, and I'm open to roles beyond healthcare. What draws me in is the harder version of the problem, whether that's ML meeting constrained hardware, a regulated environment where getting it wrong has real consequences, or just a system that needs to actually ship and hold up in production. Originally from Hyderabad, India, now based in New Jersey.`,
  resumeUrl: "/Varun_Sai_Raigir_Resume.pdf",
} as const;

export const social = {
  linkedin: "https://linkedin.com/in/varun-sai-raigir",
  github: "https://github.com/VarunSai02",
  scholar: "https://scholar.google.com/citations?user=6VsLmZ4AAAAJ",
  email: `mailto:${site.email}`,
} as const;

export type Experience = {
  role: string;
  org: string;
  location?: string;
  start: string;
  end: string;
  summary: string;
  stack?: string[];
};

export const experience: Experience[] = [
  {
    role: "AI/ML Engineer",
    org: "INVIZA Health",
    start: "Jan 2025",
    end: "Present",
    summary:
      "Building production edge AI algorithms for smart insole wearables: step count detection, gait analysis, and fall detection using sensor fusion and lightweight ML models compiled with TFLite Micro for on-device, real-time inference without cloud dependency. Own the full pipeline from raw IMU sensor data collection through model training in PyTorch and TensorFlow, quantization-aware optimization, and embedded deployment on constrained hardware. Benchmark accuracy and latency trade-offs across quantization levels to hit target performance budgets.",
    stack: ["PyTorch", "TensorFlow", "TFLite Micro", "IMU sensor fusion", "Embedded C/C++"],
  },
  {
    role: "AI/ML Engineer",
    org: "mednabdh.ai",
    start: "Mar 2025",
    end: "Aug 2026",
    summary:
      "Designed and deployed a clinical AI platform now in active pilot with physicians. Real-time speech-to-text transcription, LangGraph-orchestrated multi-step LLM reasoning, RAG retrieval over a Pinecone vector store, structured SOAP note generation, and automated EMR field population via REST API. Physicians accept output with zero manual edits. Built the eval infrastructure that made clinical deployment possible: offline golden-set evaluation against clinician-reviewed cases, LLM-as-judge scoring against clinical documentation standards, CI-integrated regression tests gating every pipeline version, and responsible AI guardrails catching hallucinations before output reaches physicians. Deployed on Azure and GCP using Vertex AI and Gemini APIs, with Docker, CI/CD, structured logging, observability dashboards, role-based access controls, and audit logging for PHI compliance.",
    stack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "React",
      "LangChain",
      "LangGraph",
      "MCP servers",
      "Pinecone",
      "Vertex AI",
      "Gemini",
      "Azure",
      "GCP",
      "Docker",
    ],
  },
  {
    role: "ML Research Associate",
    org: "University of South Florida",
    start: "Dec 2023",
    end: "Dec 2025",
    summary:
      "Designed a Graph Attention Network ensemble for precision medicine treatment stratification on multi-omics cancer data, achieving 92% accuracy across patient subgroups by modeling genomic, transcriptomic, and clinical features as a graph rather than independent variables. Used PySpark for distributed data processing across multi-node GPU clusters. Built automated data extraction and preprocessing pipelines with Python, Selenium, and NoSQL to integrate heterogeneous clinical datasets under strict quality and provenance controls. Also taught Operating Systems, guiding students through implementing core OS commands in C and C++ on Linux, covering file systems, process scheduling, and shell scripting.",
    stack: ["PyTorch Geometric", "PySpark", "Python", "Selenium", "NoSQL"],
  },
  {
    role: "IT Enterprise Services Intern",
    org: "Regeneron Pharmaceuticals",
    start: "May 2024",
    end: "Aug 2024",
    summary:
      "Automated ECR-to-Nexus container migration using Jenkins pipelines and Python scripts, cutting deployment-related costs by over 15% by removing manual steps from the release process. Built interactive Splunk dashboards monitoring AWS asset utilization and compliance metrics, giving infrastructure teams real-time visibility into cloud security posture. Used Terraform for infrastructure-as-code provisioning.",
    stack: ["Jenkins", "Python", "Splunk", "AWS", "Terraform"],
  },
  {
    role: "Software Developer",
    org: "Amadeus",
    start: "Feb 2022",
    end: "Aug 2023",
    summary:
      "Built modular Java Spring Boot microservices with MySQL and MSSQL backends for enterprise travel clients, exposing REST APIs consumed by Angular frontends. Designed scalable API contracts and optimized query performance. Diagnosed and resolved core-level production issues, including memory leaks, thread deadlocks, and connection pool exhaustion, using heap dumps, thread dumps, and query execution plans. Led testing with JUnit and PyTest. Reduced production bugs by 10% and response time by 5%.",
    stack: ["Java", "Spring Boot", "MySQL", "MSSQL", "Angular", "JUnit", "PyTest"],
  },
  {
    role: "Data Scientist Intern",
    org: "Facedapter",
    start: "Jan 2021",
    end: "Jul 2021",
    summary:
      "Developed a CNN-based deep learning system to detect mask-based spoofing and presentation attacks in biometric authentication, increasing model accuracy to 89% through iterative architecture tuning. Engineered and curated training datasets by aggregating diverse image sources, improving generalization to real-world attack scenarios.",
    stack: ["CNN", "PyTorch", "Computer Vision"],
  },
];

export type Project = {
  name: string;
  slug: string;
  description: string;
  stack: string[];
  status: "Live" | "Active" | "Research";
  url?: string;
  githubUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "EdgeShield AI",
    slug: "edgeshield-ai",
    description:
      "Behavioral anomaly detection for networked medical devices. Simulates an infusion pump streaming telemetry at 1Hz, running Isolation Forest plus a TrendAnalyzer over rolling-window regression to catch gradual mechanical degradation before threshold breaches. Enforces a hard human-in-the-loop constraint at the API layer: every alert payload explicitly carries device_action_taken: none and requires clinician acknowledgment, escalation, or authorization. This constraint is built directly from FDA 524B guidance on human oversight in software-assisted clinical systems. Detects flow rate tampering, network flood attacks, and mechanical faults. Currently simulated, moving toward real hardware.",
    stack: ["Python", "Isolation Forest", "FastAPI", "FDA 524B"],
    status: "Active",
    githubUrl: "https://github.com/VarunSai02/EdgeShieldAI",
    featured: true,
  },
  {
    name: "mednabdh.ai",
    slug: "mednabdh-ai",
    description:
      "Clinical AI documentation platform in active pilot with physicians, featuring real-time transcription, LangGraph-orchestrated reasoning, RAG over Pinecone, and automated EMR population. See work experience for the full build.",
    stack: ["LangGraph", "RAG", "Pinecone", "FastAPI", "Vertex AI"],
    status: "Active",
    url: "https://mednabdh.ai",
    featured: true,
  },
  {
    name: "Toothfairy Dental Insurance Advisor",
    slug: "toothfairy",
    description:
      "Production RAG application for dental insurance plan recommendation. Document ingestion pipeline, FAISS vector index, OpenAI embeddings, a retrieval and ranking layer, and LLM generation with source-grounded recommendations. Built evaluation harnesses measuring plan-to-user match accuracy across iterations.",
    stack: ["Python", "Flask", "LangChain", "FAISS", "OpenAI", "PostgreSQL", "React"],
    status: "Live",
    url: "https://toothfairydentalinsurance.netlify.app",
    featured: true,
  },
  {
    name: "Shri AI",
    slug: "shri-ai",
    description:
      "Deployed MIT's Mirai breast cancer risk prediction model as a production REST API, making a research-grade predictive model accessible to clinicians. Ported the model from CUDA to MPS and CPU backends, resolving hardware-specific numerical inconsistencies through PyTorch kernel-level analysis to achieve consistent inference across GPU and CPU runtimes.",
    stack: ["PyTorch", "Docker", "AWS EC2", "React"],
    status: "Live",
    url: "https://shri-ai.org",
    featured: true,
  },
  {
    name: "OwnerConnect",
    slug: "ownerconnect",
    description:
      "Full-stack real estate agent workflow platform. Independently architected and shipped the REST API backend, Supabase PostgreSQL data layer with schema design, authentication, and React frontend, owning the entire system from database design through production deployment.",
    stack: ["React", "Supabase", "PostgreSQL", "REST APIs"],
    status: "Live",
    url: "https://ownerconnect.net",
    featured: true,
  },
  {
    name: "LongRAG Dual-Perspective Medical QA",
    slug: "longrag-medical-qa",
    description:
      "Fine-tuned LongRAG on the PubMedQA dataset using FAISS for vector retrieval and LangChain for orchestration. Built a full agentic pipeline covering query understanding, multi-document retrieval, dual-perspective reasoning over conflicting evidence, and answer generation. Improved QA accuracy from 55% to 57% through iterative prompt engineering and retrieval tuning.",
    stack: ["LangChain", "FAISS", "PubMedQA"],
    status: "Research",
  },
  {
    name: "Edge AI Health Monitor",
    slug: "edge-ai-health-monitor",
    description:
      "Real-time physiological tracking pipeline using Liquid Neural Networks, CNN, and GRU models. Compiled to ONNX and optimized with TinyML quantization for deployment on resource-constrained hardware, profiling inference latency and memory footprint across optimization levels.",
    stack: ["LNN", "CNN", "GRU", "ONNX", "TinyML"],
    status: "Research",
  },
  {
    name: "Voice AI Hackathon: Audio-Based Disease Detection",
    slug: "voice-ai-disease-detection",
    description:
      "Audio ML pipeline for respiratory disease detection using librosa, torchaudio, and SpeechBrain. Trained classification models on acoustic voice features to determine the minimum number of audio samples needed for maximum disease prediction accuracy, reducing clinical data collection burden.",
    stack: ["librosa", "torchaudio", "SpeechBrain"],
    status: "Research",
  },
  {
    name: "Shield: Concussion Severity Detection",
    slug: "shield-concussion-detection",
    description:
      "Audio ML application assessing concussion severity from voice recordings combined with questionnaire responses. Used torchaudio and librosa for acoustic feature extraction, trained a classifier on voice biomarkers correlated with concussion severity, optimized for point-of-care use without cloud dependency.",
    stack: ["torchaudio", "librosa", "Point-of-care ML"],
    status: "Research",
  },
  {
    name: "FOON Recipe Identification System",
    slug: "foon-recipe-identification",
    description:
      "Knowledge graph ML system for recipe prediction in Python, applying graph-based reasoning to model entity relationships. Achieved 90% accuracy and improved processing efficiency by 25% through automated pipeline design.",
    stack: ["Python", "Knowledge graphs"],
    status: "Research",
  },
  {
    name: "Blockchain Federated COVID-19 Detection",
    slug: "federated-covid-detection",
    description:
      "CNN model for COVID-19 detection from CT scans in a federated learning setup, coordinating distributed training across nodes without centralizing sensitive patient data.",
    stack: ["CNN", "Federated learning", "Blockchain"],
    status: "Research",
  },
];

export type Publication = {
  citation: string;
  venue: string;
  year: string;
  url: string;
};

export const publications: Publication[] = [
  {
    citation:
      "E. Zhang, V.S. Raigir et al., \"MADSurv: An Uncertainty-Aware Framework for Multimodal Cancer Survival Analysis.\"",
    venue: "ACM International Conference on Bioinformatics, Computational Biology, and Health Informatics (ACM BCB)",
    year: "2025",
    url: social.scholar,
  },
  {
    citation:
      "V.S. Raigir, \"Integrative Multi-Omics and Clinical Data Analysis for Predicting Recurrence and Survival in Uterine Cancer.\"",
    venue: "M.S. Thesis, University of South Florida",
    year: "2025",
    url: social.scholar,
  },
];

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Python", "Java", "C++", "SQL", "TypeScript", "JavaScript", "R"],
  },
  {
    category: "ML & Deep Learning",
    items: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "CNN", "GAT", "GRU", "LNN", "Fine-tuning", "Transfer learning"],
  },
  {
    category: "GenAI & Agentic AI",
    items: [
      "LangChain",
      "LangGraph",
      "LlamaIndex",
      "RAG pipelines",
      "FAISS",
      "Pinecone",
      "OpenAI GPT",
      "Anthropic Claude",
      "Google Gemini",
      "Prompt engineering",
      "Model Context Protocol",
    ],
  },
  {
    category: "Edge AI",
    items: ["ONNX Runtime", "TinyML", "TFLite Micro", "Quantization", "Pruning", "CUDA", "MPS", "On-device inference"],
  },
  {
    category: "Audio ML",
    items: ["librosa", "torchaudio", "SpeechBrain", "Speech-to-text", "Acoustic feature extraction"],
  },
  {
    category: "Backend",
    items: ["FastAPI", "Flask", "Django", "Spring Boot", "Node.js", "REST APIs", "Microservices"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Angular", "HTML/CSS"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "MSSQL", "MongoDB", "Supabase", "NoSQL", "Vector databases"],
  },
  {
    category: "Cloud",
    items: ["AWS (S3, EC2, Lambda, Glue, SageMaker)", "Azure", "GCP (Vertex AI, Gemini, Cloud Run, BigQuery)"],
  },
  {
    category: "DevOps",
    items: ["Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions", "Azure DevOps", "CI/CD"],
  },
  {
    category: "Data",
    items: ["PySpark", "Pandas", "NumPy", "Selenium", "ETL pipelines", "Snowflake"],
  },
  {
    category: "Systems",
    items: ["Linux", "QNX", "Shell scripting", "GDB"],
  },
];

export type EducationEntry = {
  degree: string;
  school: string;
};

export const education: EducationEntry[] = [
  { degree: "M.S., Computer Science", school: "University of South Florida" },
  { degree: "B.S., Computer Science", school: "GITAM University, India" },
];
