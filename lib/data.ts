import React from "react";
import {
  FaAppStore,
  FaHouseUser,
  FaPython,
  FaReact,
  FaVolleyballBall,
} from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import hitchbondImg from "@/public/hitchbond.png";
import mmkImg from "@/public/mmk.png";

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
    title: "Account Manager",
    institution: "Taknology(Canada) Inc",
    institutionLink: "https://taknology.ca/",
    description:
      "Leading marketing strategies, including branding development and SEO optimization, boosting product sales and market impact.",
    icon: React.createElement(FaHouseUser),
    date: "Nov 2023 - Current",
  },
  {
    title: "Assoicate Product Manager",
    institution: "MMK Trading",
    institutionLink: "https://www.monmonkeygroup.com/",
    description:
      "Directed the development of a mobile trading app and internal admin portal, managing the entire project lifecycle.",
    icon: React.createElement(FaAppStore),
    date: "Jun 2021 - Jun 2023",
  },
  {
    title: "Web Developer",
    institution: "Hitchbond",
    institutionLink: "https://hitchbond.com/",
    description:
      "Developed front-end solutions for social enterprise projects, including chat rooms (Twilio), purchasing systems (Stripe), and booking systems.",
    icon: React.createElement(FaReact),
    date: "Feb 2020 - Jun 2021",
  },
  {
    title: "Graduate",
    institution: "CUHK",
    institutionLink: "https://www.cuhk.edu.hk/english/index.html",
    description:
      "Graduated with a Bachelor degree in System Engineering and Engineering Management with focus on FinTech & Information System.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Product Intern",
    institution: "China Renaissance",
    institutionLink: "https://www.huaxing.com/",
    description:
      "Contributed to the design and development of a robust Human Resource system architecture, leveraging advanced data analysis techniques and collaborative problem-solving skills.",
    icon: React.createElement(FaPython),
    date: " Aug 2018 - Aug 2019",
  },
  {
    title: "Global IT Intern | Product Assistant",
    institution: "Adidas",
    institutionLink: "https://www.adidas.ca/en",
    description:
      "Developed a VBA-based system for generating Ticket Trend Analysis Reports and provided ongoing support. Assisted in the redesign Ticket Supporting system project and participated in testing efforts.",
    icon: React.createElement(FaVolleyballBall),
    date: "Feb - Aug 2018",
  },
] as const;

export const projectsData = [
  {
    title: "Hitchbond",
    description:
      "A promotion platform focused on social enterprises and NGOs. It helps to connect service providers with potential clients.",
    tags: ["React", "Typescript", "UI/UX", "Product Engagement", "SEO"],
    imageUrl: hitchbondImg,
    link: "https://www.hitchbond.com/",
  },
  {
    title: "MMK Trading app",
    description:
      "A web & mobile app for trading stocks, I was working as product manager during the development.",
    tags: [
      "Prioritization",
      "RoadMap",
      "Scrum",
      "Agile",
      "Engagement",
      "PRD",
      "Stakeholder Engagement",
    ],
    imageUrl: mmkImg,
    link: "https://www.monmonkeygroup.com/",
  },
] as const;

export const skillsData = [
  "Time Management",
  "Product Development",
  "Team Coordination",
  "Conflict Resolution",
  "Roadmap Planning",
  "Jira",
  "Software Development",
  "Task Prioritization",
  "Cross-Functional Collaboration",
  "Product Refinement",
] as const;
