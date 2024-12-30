import dynamic from "next/dynamic";
import SEO from "../components/SEO";
import { openSource } from "../portfolio";
import { GithubUserType } from "../types";

const Navigation = dynamic(() => import("../components/Navigation"), { ssr: true });
const Greetings = dynamic(() => import("../containers/Greetings"), { ssr: true });
const ParallaxBackground = dynamic(() => import("../containers/ParallaxBackground"), { ssr: false });
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
const GithubProfileCard = dynamic(() => import("../components/GithubProfileCard"));
const Publications = dynamic(() => import("../containers/Publications"));

export default function Home({ githubProfileData }: { githubProfileData: GithubUserType }) {
  return (
    <div>
      <SEO />
      <Navigation />
      <ParallaxBackground />
      <main>
        <Greetings />
        <Skills />
        <Proficiency />
        <Education />
        <Experience />
        <Feedbacks />
        <Projects />
        <Publications />
        <GithubProfileCard {...githubProfileData} />
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const githubProfileData: GithubUserType = await fetch(
    `https://api.github.com/users/${openSource.githubUserName}`
  ).then(res => res.json());

  return {
    props: { githubProfileData },
    revalidate: 60 * 60,
  };
}
