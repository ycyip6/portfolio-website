"use client";

import Image, { StaticImageData } from "next/image";
import { orgainizationCerts, skillsCerts } from "@/lib/data";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

interface QualificationListProps {
  certs: StaticImageData[];
  animateDirection: string;
}

const QualificationList = ({
  certs,
  animateDirection,
}: QualificationListProps) => {
  return (
    <ul
      className={`py-12 animate-marquee whitespace-nowrap flex ${animateDirection}`}
    >
      {certs.map((qualification, index) => (
        <li
          key={index}
          className="mx-2 flex items-center justify-center min-w-[20rem]"
        >
          <Image width={480} src={qualification} alt="qualification" />
        </li>
      ))}
    </ul>
  );
};

export const Qualifications = () => {
  const { ref } = useSectionInView("Qualifications");

  return (
    <div ref={ref} id="qualifications" className="scroll-mt-28">
      <SectionHeading>My Qualifications</SectionHeading>
      <motion.section
        className="relative overflow-x-hidden max-w-[64rem] text-center leading-8 sm:mb-40"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
      >
        <div>
          <QualificationList
            certs={orgainizationCerts}
            animateDirection="animate-marquee"
          />
          <QualificationList
            certs={orgainizationCerts}
            animateDirection="animate-marquee2 absolute top-0"
          />
        </div>
        <div>
          <QualificationList
            certs={skillsCerts}
            animateDirection="animate-marquee"
          />
          <QualificationList
            certs={skillsCerts}
            animateDirection="animate-marquee2 absolute bottom-0"
          />
        </div>
      </motion.section>
    </div>
  );
};
