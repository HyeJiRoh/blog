import React from "react";
import { useDarkMode } from "../hook/usedarkmode";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";
import { Moon, Sun } from "lucide-react";

export default function IndexPage() {
  const { isDarkMode, toggle } = useDarkMode();
  return (
    <>
      <div
        style={{ position: "fixed", bottom: 40, right: 40, cursor: "pointer" }}
        onClick={toggle}
      >
        {isDarkMode ? <Moon /> : <Sun />}
      </div>
      <Seo title="Gatsby Starter for Portfolio Minimal" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <ArticlesSection
          sectionId="articles"
          heading="Latest Articles"
          sources={["Blog"]}
        />
        <AboutSection sectionId="about" heading="여기 바꾸기." />
        <InterestsSection sectionId="details" heading="Details" />
        <ProjectsSection sectionId="features" heading="Built-in Features" />
        <ContactSection sectionId="github" heading="Issues?" />
      </Page>
    </>
  );
}
