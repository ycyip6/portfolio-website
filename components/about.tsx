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
        Hello there! I'm a versatile software engineer with expertise in{" "}
        <span className="font-medium">
          TypeScript, Node.js, Next.js, React, Vue.js, and Python
        </span>
        . With a knack for building robust and innovative solutions, I've
        contributed significantly to various projects across different domains.
      </p>

      <p>
        My experience spans from developing comprehensive solutions for dental
        practices to enhancing media platforms and crafting efficient web
        crawlers. I excel in designing and implementing backend systems using
        Node.js and Python, while also delving into frontend technologies like
        React, Vue.js, and Next.js to create seamless user experiences.
      </p>
    </motion.section>
  );
}
