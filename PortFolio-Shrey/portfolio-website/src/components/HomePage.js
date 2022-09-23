import React from "react";
import ProjectSection from "./ProjectSection";
import BlogSection from "./BlogSection";
import SkillsSection from "./SkillsSection";
import RecommendationSection from "./RecommendationSection";
import Title from "./Title";
import About from "./About";

function HomePage() {
  return (
    <div>
      <Title name="Shreeyash Pandey" leadText="I am a Undergrad student from India " />
      <RecommendationSection />
      <SkillsSection />
      <ProjectSection />
      <About />
      <BlogSection />
    </div>
  );
}

export default HomePage;
