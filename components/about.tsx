"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Greetings! I'm a dynamic product and project manager known for my
        proficiency in{" "}
        <span className="font-medium">
          Product Development, Team Coordination, and Agile Methodologies
        </span>
        . With a passion for crafting resilient and inventive solutions, I've
        made substantial contributions to numerous projects spanning diverse
        sectors.
      </p>

      <p>
        I was once a software developer, and I've since transitioned to a
        project manager role. This transition has equipped me with a unique
        perspective that allows me to understand the technical aspects of a
        project while also focusing on the big picture. My technical background
        has also enabled me to communicate effectively with developers and
        stakeholders alike.
      </p>
    </motion.section>
  );
}
