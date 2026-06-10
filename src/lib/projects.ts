export type ProjectCategory = "personal" | "course";

export type Project = {
  title: string;
  description: string;
  tech: string[];
  category: ProjectCategory;
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "Personal Website",
    description:
      "This site — built with Next.js App Router, Tailwind CSS, and a markdown-powered blog with tag filtering.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "personal",
    github: "https://github.com/kaiwei/personal-website",
  },
  {
    title: "LeaseLens",
    description:
      "An AI lease analysis tool that uses RAG and citation-grounded reasoning to review residential lease clauses and flag potential tenant-law issues.",
    tech: ["Next.js", "TypeScript", "RAG", "SQLite"],
    category: "personal",
    github: "https://github.com/zane-wan/LeaseLens",
    demo: "https://leaselens.website/",
  },
  {
    title: "ESP32 BPM Monitor",
    description:
      "An ESP32-based heart rate monitoring system that samples ECG/PPG sensor data, detects heartbeat peaks, calculates BPM, and streams timestamped readings to Firebase Realtime Database.",
    tech: ["ESP32", "Arduino", "Firebase", "WiFi", "NTP"],
    category: "personal",
    github: "",
    demo: "",
  },
  {
    title: "CS140 Pintos Operating System",
    description:
      "An instructional operating system extended with priority scheduling, user program support with system calls, and virtual memory with demand paging.",
    tech: ["C", "x86", "QEMU"],
    category: "course",
  },
  {
    title: "Course Hub",
    description:
      "A cloud-native course resource management platform with role-based access control, secure file uploads, metadata search, and admin monitoring.",
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Kubernetes"],
    category: "personal",
    github: "https://github.com/kwei-zhang/CourseHub",
    // demo: "https://chalatus.com/login",
  },
  {
    title: "SpheriChem",
    description:
      "A deep learning project for molecular property prediction that compares CNN, graph neural network, and spherical convolution approaches on the QM7b dataset.",
    tech: ["Python", "PyTorch", "Pandas", "Jupyter"],
    category: "personal",
    github: "https://github.com/njzfjiang/SpheriChem",
    demo: "",
  },
  {
    title: "Project Momentum",
    description:
      "An AI-powered productivity platform that organizes tasks into personalized schedules, integrates with Google Calendar, and supports real-time video collaboration.",
    tech: ["Vue", "TypeScript", "Express", "Redis", "MySQL"],
    github: "https://github.com/chaunguyenm/project-momentum",
    // demo: "https://momentum-app.ca",
    category: "personal",
  },
  {
    title: "CS336 Language Modeling from Scratch",
    description:
      "A from-scratch language modeling project implementing core LLM components, including tokenization, transformer modules, training utilities, and evaluation workflows.",
    tech: ["Python", "PyTorch", "Fine-tuning", "LLM"],
    github: "https://github.com/kwei-learning/",
    demo: "",
    category: "course",
  }

];
