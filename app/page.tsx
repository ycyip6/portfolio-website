import About from "@/components/about";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import { Qualifications } from "@/components/qualifications";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 overflow-x-hidden">
      <Intro />
      <SectionDivider />
      <About />
      <Qualifications />
      <Projects />
      <Skills />
      <Experience />
    </main>
  );
}
