import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";

export const DATA = {
  name: "Apostolos Kakarantzas",
  initials: "AK",
  url: "https://aeva.ae",
  location: "Athens, Greece",
  locationLink: "https://www.google.com/maps/place/Athens,+Greece",
  description:
    "AI/ML builder working on predictive modeling, optimization, data products, and end-to-end software systems.",
  summary:
    "Apostolos Kakarantzas is a Greece-based AI/ML-focused builder with experience across predictive modeling, optimization, applied software projects, data products, and full-stack ML applications.\n\nHis work includes Formula 1 race prediction tools, machine learning models, hackathon projects, developer utilities, and software engineering projects built with modern Python and web technologies. He is especially interested in building practical systems that connect data, models, and product execution.",
  avatarUrl: "/apostolos.jpg",
  skills: [
    { name: "Python", icon: Python },
    { name: "Machine Learning", icon: Python },
    { name: "Data Analysis", icon: Python },
    { name: "scikit-learn", icon: Python },
    { name: "PyTorch", icon: Python },
    { name: "pandas", icon: Python },
    { name: "NumPy", icon: Python },
    { name: "FastAPI", icon: Python },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "SQL", icon: Postgresql },
    { name: "Azure", icon: Nodejs },
    { name: "Optimization", icon: Python },
    { name: "Software Engineering", icon: Docker },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "exegnarly@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/akakarantzas",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "http://linkedin.com/in/akakarantzas/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Twitter: {
        name: "Twitter",
        url: "https://x.com/AevaGnarly",
        icon: Icons.x,
        navbar: true,
      },
      Website: {
        name: "Website",
        url: "https://aeva.ae/",
        icon: Icons.globe,
        navbar: true,
      },
      AEVA: {
        name: "AEVA Team",
        url: "https://aevateam.com/",
        icon: Icons.globe,
        navbar: false,
      },
      PensatoriIrrazionali: {
        name: "Pensatori Irrazionali",
        url: "https://pensatori-irrazionali.com/",
        icon: Icons.globe,
        navbar: false,
      },
      Twitch: {
        name: "Twitch",
        url: "https://twitch.tv/aevagnarly",
        icon: Icons.globe,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:exegnarly@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Pensatori Irrazionali",
      href: "https://pensatori-irrazionali.com/",
      badges: [],
      location: "International",
      title: "Business Development & Sales Associate",
      logoUrl: "/pensatori.jpg",
      start: "Mar 2026",
      end: "Present",
      description:
        "Business development and international sales work for Pensatori Irrazionali, connecting growth, partnerships, and market-facing execution.",
    },
    {
      company: "AEVA Team",
      href: "https://aevateam.com/",
      badges: [],
      location: "Remote",
      title: "Founding Member",
      logoUrl: "/aeva-black.png",
      start: "Oct 2019",
      end: "Present",
      description:
        "Founding member of AEVA Team, contributing across technical direction, project execution, community presence, and product-oriented initiatives.",
    },
    {
      company: "Viohalco",
      href: "https://www.viohalco.com/",
      badges: [],
      location: "Greece",
      title: "IT Intern",
      logoUrl: "/viohalco.webp",
      start: "Oct 2025",
      end: "Nov 2025",
      description:
        "IT internship experience supporting technical operations, internal systems, and software-related workflows.",
    },
    {
      company: "YouTube",
      href: "https://www.youtube.com/@aevagnarly",
      badges: [],
      location: "Self-employed",
      title: "Content Creator | @aevagnarly",
      logoUrl: "/youtube.jpg",
      start: "Jan 2019",
      end: "Dec 2023",
      description:
        "Built and scaled a YouTube channel to 12K+ subscribers and 1M+ views. Maintained a multi-year partnership with SteelSeries Greece.",
    },
  ],
  education: [
    {
      school: "Hong Kong Baptist University",
      href: "https://www.hkbu.edu.hk/",
      degree: "HKBU Summer 2026",
      logoUrl: "/hkbu.png",
      start: "",
      end: "2026",
    },
    {
      school: "Deree - The American College of Greece",
      href: "https://www.acg.edu/",
      degree: "Undergraduate studies",
      logoUrl: "/acg.jpg",
      start: "",
      end: "Present",
    },
  ],
  projects: [
    {
      title: "ChicaneAI",
      href: "https://github.com/akakarantzas/chicane-ai",
      dates: "Updated May 25, 2026",
      active: true,
      description:
        "AI-powered Formula 1 analytics and race prediction web app with race predictions, head-to-head driver comparisons, prediction history, and a season calendar.",
      technologies: [
        "React",
        "Tailwind CSS",
        "FastAPI",
        "Python",
        "scikit-learn",
        "FastF1",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/akakarantzas/chicane-ai",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "F1 2026 Miami GP Winner Prediction",
      href: "https://github.com/akakarantzas/f1-2026-miami-grand-prix-winner-prediction",
      dates: "Updated May 6, 2026",
      active: true,
      description:
        "Gradient Boosting model for race winner prediction using historical performance data and driver/team form features.",
      technologies: [
        "Python",
        "FastF1",
        "scikit-learn",
        "Gradient Boosting",
        "pandas",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/akakarantzas/f1-2026-miami-grand-prix-winner-prediction",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "F1 2025 Monaco GP Winner Prediction",
      href: "https://github.com/akakarantzas/f1-2025-monaco-grand-prix-winner-prediction",
      dates: "Updated May 6, 2026",
      active: true,
      description:
        "Random Forest model trained on historical race, qualifying, pit stop, lap time, driver, and constructor data.",
      technologies: [
        "Python",
        "scikit-learn",
        "Random Forest",
        "pandas",
        "Jupyter Notebook",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/akakarantzas/f1-2025-monaco-grand-prix-winner-prediction",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Terrasset / UniAI Makeathon 2026",
      href: "https://github.com/akakarantzas/makeathon-2026-talos-real-estate-beyond-rgb",
      dates: "Updated May 17, 2026",
      active: true,
      description:
        "Analytics platform evaluating land viability using satellite data, infrastructure signals, and macroeconomic risk factors.",
      technologies: ["Python", "JavaScript", "FastAPI", "React"],
      links: [
        {
          type: "Source",
          href: "https://github.com/akakarantzas/makeathon-2026-talos-real-estate-beyond-rgb",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Soft-Overlap SA Macro Placer (Final Submission)",
      href: "https://github.com/akakarantzas/soft-overlap-sa-macro-placer",
      dates: "Updated May 21, 2026",
      active: true,
      description:
        "Macro-placement submission using soft-overlap legalization and simulated annealing refinement.",
      technologies: ["Python", "NumPy", "PyTorch", "Numba", "SciPy"],
      links: [
        {
          type: "Source",
          href: "https://github.com/akakarantzas/soft-overlap-sa-macro-placer",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Spectral-SA Macro Placer (Initial Submission)",
      href: "https://github.com/akakarantzas/spectral-sa-macro-placer",
      dates: "Updated Apr 9, 2026",
      active: true,
      description:
        "Macro-placement engine for the Partcl x Hudson River Trading Macro Placement Challenge 2026 using spectral graph initialization and simulated annealing.",
      technologies: ["Python", "NumPy", "SciPy", "PyTorch"],
      links: [
        {
          type: "Source",
          href: "https://github.com/akakarantzas/spectral-sa-macro-placer",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Vehicle Price Prediction",
      href: "https://github.com/akakarantzas/vehicle-price-prediction",
      dates: "Updated May 6, 2026",
      active: true,
      description:
        "ML project predicting vehicle selling prices and comparing Linear Regression, Random Forest, and XGBoost models.",
      technologies: [
        "Python",
        "scikit-learn",
        "XGBoost",
        "pandas",
        "Jupyter Notebook",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/akakarantzas/vehicle-price-prediction",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Claude Code Counter",
      href: "https://github.com/akakarantzas/claude-code-counter",
      dates: "Updated May 22, 2026",
      active: true,
      description:
        "Chrome extension and native host for locally tracking Claude Code token usage, session stats, cache stats, tool calls, and context-window usage.",
      technologies: [
        "JavaScript",
        "Python",
        "Chrome Extension",
        "Native Messaging",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/akakarantzas/claude-code-counter",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Deadlift - Gym Booking System",
      href: "https://github.com/akakarantzas/deadlift-gym-booking-system",
      dates: "Updated May 19, 2026",
      active: true,
      description:
        "Console-based Python gym booking system with browsing, booking, cancellation, rescheduling, admin management, and local JSON storage.",
      technologies: ["Python", "JSON"],
      links: [
        {
          type: "Source",
          href: "https://github.com/akakarantzas/deadlift-gym-booking-system",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Personal Website",
      href: "https://github.com/akakarantzas/website",
      dates: "Updated May 25, 2026",
      active: true,
      description:
        "Personal website with an Obsidian-like knowledge graph, built from a modern Next.js portfolio template.",
      technologies: ["TypeScript", "Next.js", "React", "Tailwind CSS", "MDX"],
      links: [
        {
          type: "Source",
          href: "https://github.com/akakarantzas/website",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Partcl x Hudson River Trading Macro Placement Challenge 2026",
      dates: "2026",
      location: "Remote",
      description:
        "Built macro-placement optimization submissions using spectral initialization, simulated annealing, soft-overlap legalization, and numerical optimization techniques.",
      image: "",
      links: [
        {
          title: "Soft-Overlap SA",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/akakarantzas/soft-overlap-sa-macro-placer",
        },
        {
          title: "Spectral-SA",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/akakarantzas/spectral-sa-macro-placer",
        },
      ],
    },
    {
      title: "UniAI Makeathon 2026 / Talos Real Estate Beyond RGB",
      dates: "2026",
      location: "On-site",
      description:
        "Created an analytics platform for land viability analysis using satellite data, infrastructure signals, and macroeconomic risk factors.",
      image: "",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/akakarantzas/makeathon-2026-talos-real-estate-beyond-rgb",
        },
      ],
    },
  ],
} as const;
