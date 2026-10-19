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
  url: "https://akakarantzas.com",
  location: "Athens, Greece",
  locationLink: "https://www.google.com/maps/place/Athens,+Greece",
  description: "Builder.",
  summary:
    "I'm a Greek-Australian Homo sapiens trying to make machines a little smarter.\n\nI've always been drawn to building things: businesses, communities, and now intelligent systems. At 14, that curiosity became my first business: a skateboard griptape brand where I imported products directly from manufacturing companies in Hong Kong and handled the core parts of running a small company before finishing school.\n\nA year later, I moved into content creation. From 15 to 18, I grew a YouTube channel to 12K+ subscribers and over 1M views, built an audience of 40K+ followers across social platforms, and livestreamed daily to hundreds of viewers. Along the way, I met Themis “Reit” Chrysafidis and became a founding member of Aeva, a Dubai-based group of companies focused on creativity, technology, and cultural innovation.\n\nEventually, the same builder’s mindset led me to AI. Today, I'm focused on machine learning, applied AI, and end-to-end systems, from messy data and feature engineering to model training, optimization, and deployment.\n\nHong Kong first entered my life through business. Now, through my Summer 2026 study abroad program at Hong Kong Baptist University, it has become part of my academic and personal journey too. I'm excited to experience the city from the inside: its culture, its people, and the innovation ecosystem that first caught my attention from thousands of kilometres away.\n\nDifferent chapters, same pattern: curiosity, execution, and a need to create something meaningful.\n\nWhen I'm not coding, you'll find me golfing, playing tennis, or watching F1. I thought machine learning models were unpredictable until I became a Ferrari fan.",
  avatarUrl: "/me.jpg",
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
      company: "The American College of Greece",
      href: "https://www.acg.edu/",
      badges: [],
      location: "Athens, Greece",
      title: "Artificial Intelligence Research Assistant",
      logoUrl: "/acg.jpg",
      start: "Apr 2026",
      end: "Present",
      description:
        "Conducting research at the Artificial Intelligence Lab, supervised by Dr. Ioannis Christou.\nProjects include multilingual streaming ASR with NVIDIA Nemotron 3.5 (fine-tuning, latency benchmarking, and GPU profiling on DGX Spark), combinatorial optimization for VLSI macro placement and AI applications in domain-specific systems.",
    },
    {
      company: "Viohalco",
      href: "https://www.viohalco.com/",
      badges: [],
      location: "Greece",
      title: "Software Engineer Intern",
      logoUrl: "/viohalco.webp",
      start: "Oct 2025",
      end: "Nov 2025",
      description:
        "• Implemented Python REST API integrations with automated tests and structured logging for 50+ devices\n• Wrote and optimized SQL queries for logging pipelines, reducing troubleshooting time by ~30%\n• Automated user provisioning and device management across 30+ devices using PowerShell, Microsoft Azure and Intune, reducing manual provisioning time by 40%",
    },
    {
      company: "Pensatori Irrazionali",
      href: "https://pensatori-irrazionali.com/",
      badges: [],
      location: "International",
      title: "Founding Engineer",
      logoUrl: "/pensatori.jpg",
      start: "Mar 2026",
      end: "Present",
      description: "",
    },
    {
      company: "AEVA Team",
      href: "https://aevateam.com/",
      badges: [],
      location: "Remote",
      title: "Co-Founder",
      logoUrl: "/aeva-white.png",
      start: "Oct 2019",
      end: "Present",
      description: "",
    },
    {
      company: "YouTube",
      href: "https://www.youtube.com/@aevagnarly",
      badges: [],
      location: "Self-employed",
      title: "Content Creator | @aevagnarly",
      logoUrl: "/youtube_logo.jfif",
      start: "Jan 2019",
      end: "Dec 2023",
      description:
        "Built and scaled a YouTube channel to 12K+ subscribers and 1M+ views, maintained a multi-year partnership with SteelSeries Greece.",
    },
  ],
  education: [
    {
      school: "The American College of Greece",
      href: "https://www.acg.edu/",
      degree:
        "BSc in Information Technology (Intelligent Systems & Automation)",
      logoUrl: "/acg.jpg",
      start: "",
      end: "Present",
    },
    {
      school: "Hong Kong Baptist University",
      href: "https://www.hkbu.edu.hk/",
      degree: "Summer Programme",
      logoUrl: "/hkbu.png",
      start: "Jul 2026",
      end: "Aug 2026",
    },
  ],
  projects: [
    {
      title: "ChicaneAI",
      href: "https://github.com/akakarantzas/chicane-ai",
      dates: "Updated Oct 14, 2026",
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
      image: "/chicane.png",
      video: "",
    },
    {
      title: "Soft-Overlap SA Macro Placer",
      href: "https://github.com/akakarantzas/soft-overlap-sa-macro-placer",
      dates: "Updated May 22, 2026",
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
      image: "/hrt-x-partcl.png",
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
      image: "/claude-code-counter-black-banner.png",
      video: "",
    },
    {
      title: "Deadlift - Gym Booking System",
      href: "https://github.com/akakarantzas/deadlift-gym-booking-system",
      dates: "Updated Jun 22, 2026",
      active: true,
      description:
        "Console-based Python gym booking system with browsing, booking, cancellation, rescheduling, and admin management.",
      technologies: ["Python"],
      links: [
        {
          type: "Source",
          href: "https://github.com/akakarantzas/deadlift-gym-booking-system",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/deadlift_logo.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "3rd Place, Florent Venture Partners x Panathēnea Hackathon",
      dates: "May 2026 - Jun 2026",
      location: "On-site",
      description:
        "Selected from 100+ applicants as one of 25 teams admitted to the Florent VC x Panathēnea Hackathon and advanced to the top 3 finalist stage.",
      detail:
        "Built Syntheci, an AI-powered maritime operations workspace enabling cited document retrieval, voyage-risk monitoring, and workflow automation for shipping teams.",
      note:
        "Judged by former GitHub CEO Thomas Dohmke, Google Maps co-founder Lars Rasmussen, and Siri founding CPO Mads Rydahl.",
      image: "/florent-logo.jpg",
      featuredImage: "/florent-hackathon.jpg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/socratesomiliadis/syntheci-shipping",
        },
      ],
    },
    {
      title: "Hudson River Trading x Partcl Macro Placement Challenge",
      dates: "Apr 2026 - May 2026",
      location: "Remote",
      description:
        "Built macro-placement optimization submissions using spectral initialization, simulated annealing, soft-overlap legalization, and numerical optimization techniques.",
      image: "/hrt-partcl.png",
      featuredImage: "/hrt.jpg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/akakarantzas/soft-overlap-sa-macro-placer",
        },
      ],
    },
    {
      title: "UniAI Makeathon",
      dates: "May 2026",
      location: "On-site",
      description:
        "Created an analytics platform for land viability analysis using satellite data, infrastructure signals, and macroeconomic risk factors.",
      image: "/uniai.jfif",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/akakarantzas/makeathon-2026-talos-real-estate-beyond-rgb",
        },
      ],
    },
    {
      title: "1st Place, Netcompany Hackathon",
      dates: "Feb 2025",
      location: "",
      description: "Autonomous AI Agents track",
      detail:
        "Led a team of three to win 1st place and a €3,000 prize among 37 teams and 110+ undergraduate participants.",
      image: "/netcompany.png",
      links: [],
    },
  ],
} as const;
