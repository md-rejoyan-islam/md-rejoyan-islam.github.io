import { AboutMe } from "@/components/home/about/about-me";
import { ContactWithMe } from "@/components/home/contact-with-me";
import Hero from "@/components/home/hero";
import LearningTechnologies from "@/components/home/learning-technologies";
import ProvideServices from "@/components/home/provide-services";
import ShowcaseBlogs from "@/components/home/showcase-blogs";
import ShowcaseProjects from "@/components/home/showcase-projects";
import WorkingProcesses from "@/components/home/working-process/working-process";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <AboutMe />
      <LearningTechnologies />
      <ProvideServices />
      <WorkingProcesses />
      <ShowcaseProjects />
      <ShowcaseBlogs />
      <ContactWithMe />
    </div>
  );
}
