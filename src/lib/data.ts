import type {
  SkillCategory,
  Project,
  ExperienceItem,
  Education,
  Certification,
  NavLink,
  FunFact,
  Testimonial,
} from "@/types";

// ─── Navigation ───
export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

// ─── Hero ───
export const HERO = {
  greeting: "Hello, I'm",
  name: "Prathvi V Suvarna",
  roles: [
    "AI & Data Science Engineer",
    "Full-Stack Developer",
    "Deep Learning Enthusiast",
    "ETL Pipeline Builder",
  ],
  bio: "Final-year B.E. AI & Data Science graduate building production-grade systems across data engineering, full-stack development, and deep learning — from Docker-based ETL pipelines to real-time SaaS platforms and CNN-based medical image classifiers.",
  location: "Udupi, Karnataka, India",
  marqueeItems: [
    "Data Engineering",
    "Deep Learning",
    "Full-Stack",
    "Android",
    "ETL Pipelines",
    "SaaS",
    "Computer Vision",
    "NLP",
  ],
};

// ─── About ───
export const ABOUT = {
  paragraphs: [
    {
      text: "Final-year B.E. AI & Data Science graduate with a strong portfolio spanning production-grade data engineering, full-stack development, and deep learning.",
      highlights: [
        "Final-year B.E. AI & Data Science graduate",
        "production-grade data engineering",
        "deep learning",
      ],
    },
    {
      text: "Built a Docker-based ETL pipeline with PostgreSQL and FastAPI, a real-time Kanban SaaS with Supabase Realtime, a production Android app using MVVM + Clean Architecture, and a CNN + Transfer Learning medical image classifier.",
      highlights: [
        "Docker-based ETL pipeline",
        "real-time Kanban SaaS",
        "MVVM + Clean Architecture",
        "CNN + Transfer Learning",
      ],
    },
    {
      text: "Completed a 3.5-month GenAI internship at MindMatrix (VTU MoU partner), rated EXCELLENT. Proficient in Python, SQL, TensorFlow, React, Kotlin, and Docker.",
      highlights: [
        "3.5-month GenAI internship at MindMatrix",
        "EXCELLENT",
      ],
    },
    {
      text: "Seeking a Data Science / AI role to apply these skills at enterprise scale.",
      highlights: ["Data Science / AI role"],
    },
  ],
  currentlyExploring: ["LLM Agents", "MLOps", "System Design"],
  stats: [
    { value: 5, suffix: "+", label: "Projects" },
    { value: 5, suffix: "+", label: "Certifications" },
    { value: 1, suffix: "", label: "Internship" },
  ],
};

// ─── Skills ───
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "languages",
    label: "Languages",
    skills: [
      { name: "Python", level: "strong" },
      { name: "SQL", level: "strong" },
      { name: "TypeScript", level: "proficient" },
      { name: "JavaScript", level: "proficient" },
      { name: "Kotlin", level: "proficient" },
      { name: "Java", level: "proficient" },
      { name: "C++", level: "learning" },
      { name: "HTML/CSS", level: "strong" },
      { name: "Dart", level: "learning" },
    ],
  },
  {
    id: "ml-ai",
    label: "ML / AI",
    skills: [
      { name: "Scikit-learn", level: "strong" },
      { name: "TensorFlow", level: "strong" },
      { name: "Keras", level: "strong" },
      { name: "CNN", level: "proficient" },
      { name: "MobileNetV2", level: "proficient" },
      { name: "NLP (TF-IDF)", level: "proficient" },
      { name: "Logistic Regression", level: "strong" },
    ],
  },
  {
    id: "data-eng",
    label: "Data & Eng",
    skills: [
      { name: "Pandas", level: "strong" },
      { name: "NumPy", level: "strong" },
      { name: "Matplotlib", level: "proficient" },
      { name: "Seaborn", level: "proficient" },
      { name: "Power BI", level: "proficient" },
      { name: "ETL Pipelines", level: "strong" },
      { name: "Docker", level: "strong" },
      { name: "Alembic", level: "proficient" },
    ],
  },
  {
    id: "cloud-apis",
    label: "Cloud & APIs",
    skills: [
      { name: "Google Cloud", level: "proficient" },
      { name: "Firebase", level: "strong" },
      { name: "Google AI Studio", level: "proficient" },
      { name: "Supabase", level: "strong" },
      { name: "FastAPI", level: "strong" },
      { name: "REST APIs", level: "strong" },
      { name: "Git", level: "strong" },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    skills: [
      { name: "PostgreSQL", level: "strong" },
      { name: "MySQL", level: "proficient" },
      { name: "MongoDB", level: "proficient" },
      { name: "Room DB", level: "proficient" },
      { name: "SQL Server", level: "learning" },
      { name: "Hadoop", level: "learning" },
    ],
  },
  {
    id: "dev-mobile",
    label: "Dev / Mobile",
    skills: [
      { name: "React", level: "strong" },
      { name: "Next.js", level: "proficient" },
      { name: "Node.js", level: "proficient" },
      { name: "Android Studio", level: "strong" },
      { name: "Jetpack Compose", level: "strong" },
      { name: "MVVM", level: "proficient" },
      { name: "Dagger Hilt", level: "proficient" },
    ],
  },
];

// ─── Experience ───
export const EXPERIENCE: ExperienceItem[] = [
  {
    dateRange: "Feb 2026 – May 2026",
    title: "Android App Development Intern (Generative AI)",
    company: "MindMatrix",
    companyDetail: "VTU MoU Industry Partner",
    rating: "EXCELLENT",
    bullets: [
      "Designed OmniSight MedX, an Android app integrating Gemini AI via Google AI Studio for real-time medical data display and GenAI-powered diagnostic support.",
      "Built the full app lifecycle in Kotlin + Jetpack Compose, integrating Firebase Authentication, Firestore, and Google Cloud backend services.",
      "Completed UI/UX prototyping, feature development, and iterative QA — awarded EXCELLENT, the highest of 5 evaluation tiers.",
    ],
  },
];

// ─── Projects ───
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Mini Log Analytics Platform",
    techLine: "Python · Docker · PostgreSQL · FastAPI · Alembic · ETL",
    techChips: ["Python", "Docker", "PostgreSQL", "FastAPI", "Alembic", "ETL"],
    description:
      "Architected a production-grade, 4-microservice log analytics platform using Docker Compose: a continuous JSON log emitter, a checkpoint-based ETL pipeline, PostgreSQL 15 with Alembic migrations, and a FastAPI + Uvicorn query API — with pytest coverage across all service layers.",
    tags: ["Python", "All"],
    details: {
      problem: "Need for a scalable, maintainable log analytics system with clear service boundaries.",
      approach: "Designed a 4-microservice architecture with Docker Compose, implementing checkpoint-based ETL for reliability and Alembic for database migrations.",
      outcome: "Production-ready platform with full pytest coverage across all services, demonstrating microservice architecture expertise.",
    },
  },
  {
    id: 2,
    title: "Lextria Task Manager",
    techLine: "React · TypeScript · Supabase · PostgreSQL · @dnd-kit",
    techChips: ["React", "TypeScript", "Supabase", "PostgreSQL", "@dnd-kit"],
    description:
      "Built a real-time team Kanban dashboard with zero-latency optimistic UI and automatic rollback on failure. Integrated Supabase Realtime Channels for live PostgreSQL sync across all connected clients, with a relational schema and cascading FK constraints.",
    tags: ["Web", "All"],
    details: {
      problem: "Teams need a fast, real-time collaborative task management tool.",
      approach: "Implemented optimistic UI updates with rollback, and leveraged Supabase Realtime for live synchronization.",
      outcome: "Zero-latency user experience with real-time sync across all clients.",
    },
  },
  {
    id: 3,
    title: "Pneumonia Detection System",
    techLine: "Python · TensorFlow · Keras · MobileNetV2 · OpenCV · Streamlit",
    techChips: ["Python", "TensorFlow", "Keras", "MobileNetV2", "OpenCV", "Streamlit"],
    description:
      "Trained and benchmarked a custom CNN and a MobileNetV2 Transfer Learning model for chest X-ray classification, with data augmentation to address class imbalance. Deployed as an interactive Streamlit app for real-time predictions.",
    tags: ["Python", "ML", "All"],
    details: {
      problem: "Rapid pneumonia screening from chest X-rays to assist radiologists.",
      approach: "Built and compared a custom CNN vs MobileNetV2 transfer learning, with aggressive data augmentation to handle class imbalance.",
      outcome: "High-accuracy model deployed as an accessible Streamlit web interface for real-time diagnosis support.",
    },
  },
  {
    id: 4,
    title: "Fake News Detection System",
    techLine: "Python · Scikit-learn · TF-IDF · Logistic Regression · Streamlit",
    techChips: ["Python", "Scikit-learn", "TF-IDF", "Logistic Regression", "Streamlit"],
    description:
      "Built a complete NLP pipeline (preprocessing → TF-IDF → Logistic Regression) achieving 98.5% accuracy on a labeled news dataset, deployed as a live Streamlit web app.",
    tags: ["Python", "ML", "All"],
    details: {
      problem: "Detecting misinformation in news articles at scale.",
      approach: "End-to-end NLP pipeline with text preprocessing, TF-IDF vectorization, and Logistic Regression classification.",
      outcome: "98.5% accuracy with a live-deployed Streamlit app for real-time predictions.",
    },
  },
  {
    id: 5,
    title: "Sahyadri Samrakshane",
    techLine: "Kotlin · Jetpack Compose · MVVM · Dagger Hilt · Room · Supabase",
    techChips: ["Kotlin", "Jetpack Compose", "MVVM", "Dagger Hilt", "Room", "Supabase"],
    description:
      "Built a citizen-science Android app for wildlife incident reporting in the Western Ghats, with MVVM + Clean Architecture, offline-first Room Database, WorkManager background sync, and GPS location tracking for use in remote areas without connectivity.",
    tags: ["Android", "All"],
    details: {
      problem: "Wildlife incidents in remote Western Ghats areas with no connectivity need reliable offline reporting.",
      approach: "Offline-first architecture with Room DB, WorkManager sync, and GPS tracking. Clean Architecture with MVVM and Dagger Hilt DI.",
      outcome: "Fully functional citizen-science app with seamless offline/online sync for remote field use.",
    },
  },
];

// ─── Education ───
export const EDUCATION_DATA: Education = {
  degree: "B.E. in Artificial Intelligence & Data Science",
  institution: "SMVITM, Udupi (VTU)",
  period: "2022 – 2026",
  gpa: "7.44 / 10",
};

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Android App Development with Generative AI",
    issuer: "MindMatrix / VTU",
    year: "2026",
  },
  {
    title: "Exploratory Data Analysis for ML",
    issuer: "Great Learning",
    year: "2025",
  },
  {
    title: "UI/UX Design for Beginners",
    issuer: "Great Learning",
    year: "2025",
  },
  {
    title: "Python Programming Fundamentals",
    issuer: "Kakunje Software",
    year: "2025",
  },
  {
    title: "REST API Design Workshop",
    issuer: "SMVITM",
    year: "2025",
  },
];

// ─── Contact ───
export const CONTACT = { socials: [ { platform: "GitHub", url: "https://github.com/Prats0404" }, { platform: "LinkedIn", url: "https://www.linkedin.com/in/prathvi-v-suvarna-20a177330" }, { platform: "Portfolio", url: "https://Prats0404.github.io" } ],
  email: "prathvisvrna@gmail.com",
  phone: "+91 8792049744",
  github: "https://github.com/Prats0404",
  linkedin: "https://www.linkedin.com/in/prathvi-v-suvarna-20a177330",
  portfolio: "https://Prats0404.github.io",
  githubUsername: "Prats0404",
};

// ─── Fun Facts ───
export const FUN_FACTS: FunFact[] = [
  { emoji: "🎮", label: "Gaming" },
  { emoji: "📸", label: "Photography" },
  { emoji: "🌍", label: "Exploring Tech" },
  { emoji: "📚", label: "Tech Articles" },
  { emoji: "🎵", label: "Music" },
];

// ─── Testimonials (Placeholder) ───
export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Stay tuned — testimonials from mentors and colleagues coming soon.",
    author: "Coming Soon",
    role: "Mentors & Colleagues",
  },
];
