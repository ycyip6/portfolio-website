import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaPython, FaReact, FaVuejs } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import etaTrackerV2Img from "@/public/eta-tracker-v2.png";
import patientLoopImg from "@/public/patient-loop-page.svg";
import dashBoardImg from "@/public/dashboard.png";
import scmpImg from "@/public/scmp.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduate Engineer",
    location: "Hong Kong",
    description:
      "Graduated from CUHK with a degree in Information Engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Software Developer @ Prisec",
    location: "Hong Kong",
    description:
      "Developed an authenticator application on top of the OIDC protocol.",
    icon: React.createElement(FaPython),
    date: "2019 - 2020",
  },
  {
    title: "Full-Stack Developer @ SCMP",
    location: "Hong Kong",
    description:
      "Designed and built a customized collaborative online editing system similar to Google Docs.",
    icon: React.createElement(FaVuejs),
    date: "2020 - 2022",
  },
  {
    title: "Software Engineer @ LassoMd",
    location: "Toronto, ON",
    description:
      "Built a comprehensive solution from scratch to elevate dental practice’s patient acquisition and lead management",
    icon: React.createElement(FaReact),
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "ETA Tracker v2",
    description:
      "A simple web app for tracking the ETA of a TTC buses. Bookmarked ETA could be checked instantly without researching the stop number again.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Radix"],
    imageUrl: etaTrackerV2Img,
    link: "https://ttc-next-v2.vercel.app/",
  },
  {
    title: "PatientLoop",
    description:
      "A lead & schedule management tools for dental practices. It helps dentists to visualize their leads and appointments, and to track their marketing efforts.",
    tags: ["Python", "PostgreSQL", "React", "TypeScript", "Next.js", "Docker"],
    imageUrl: patientLoopImg,
    link: "https://www.lassomd.com/",
  },
  {
    title: "Compose - Rich Text Editor",
    description:
      "A rich text editor built from scratch, it supports various text formatting, image sourcing, and link embedding.",
    tags: ["Vue", "Node.js", "MongoDB", "TypeScript", "RabbitMQ"],
    imageUrl: scmpImg,
    link: "https://www.scmp.com/sport/rugby/hk-sevens/article/3198601/hong-kong-sevens-2022-live-coverage-day-3-quarter-finals-get-under-way",
  },
  {
    title: "Core Web Vitals and SEO Tracker",
    description:
      "An internal dashboard for tracking Core Web Vitals and SEO metrics of websites. It helps to monitor the performance of websites.",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "PostgreSQL",
      "Prisma",
    ],
    imageUrl: dashBoardImg,
    link: "https://cstool.dev.lmdplatform.com/domain",
  },
] as const;

export const skillsData = [
  "TypeScript",
  "React",
  "Vue",
  "Next.js",
  "Node.js",
  "Python",
  "Tailwind",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "GCP",
  "Vercel",
] as const;
