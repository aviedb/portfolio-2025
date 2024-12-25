import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "aviedb",
  title: "Hello World! I'm Avied",
  description:
    "I'm a passionate Frontend Developer with over 3 years of professional experience specializing in React.js and React Native technologies. I've successfully developed responsive, user-friendly web interfaces and mobile apps, focusing on performance and accessibility. I excel at collaborating with global teams and delivering high-quality projects.",
  resumeLink: "#",
};

export const openSource = {
  githubUserName: "aviedb",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:hello@aviedb.me",
  linkedin: "https://www.linkedin.com/in/aviedb/",
  github: "https://github.com/aviedb",
  instagram: "https://www.instagram.com/aviedb",
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "EXPERIENCED FRONTEND DEVELOPER EXPLORING MODERN TECH STACKS",
  data: [
    {
      title: "Frontend Development",
      lottieAnimationFile: "/lottie/skills/frontend.json",
      skills: [
        emoji("⚡ Building responsive web and mobile apps with React.js and React Native"),
        emoji("⚡ Creating Progressive Web Apps (PWA) with React.js"),
        emoji("⚡ Developing reusable and scalable frontend code"),
      ],
      softwareSkills: [
        {
          skillName: "ReactJS",
          iconifyTag: "logos:react",
        },
        {
          skillName: "NextJS",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "TypeScript",
          iconifyTag: "logos:typescript-icon",
        },
        {
          skillName: "Android",
          iconifyTag: "logos:android-icon",
        },
        {
          skillName: "iOS",
          iconifyTag: "logos:apple",
        },
        {
          skillName: "Flutter",
          iconifyTag: "logos:flutter",
        },
        {
          skillName: "NodeJS",
          iconifyTag: "logos:nodejs",
        },
        {
          skillName: "MongoDB",
          iconifyTag: "logos:mongodb-icon",
        },
        {
          skillName: "MySQL",
          iconifyTag: "logos:mysql",
        },
        {
          skillName: "GraphQL",
          iconifyTag: "logos:graphql",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend",
    progressPercentage: "90",
  },
  {
    Stack: "Backend",
    progressPercentage: "75",
  },
  {
    Stack: "Programming",
    progressPercentage: "85",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Universitas Brawijaya",
    subHeader: "Master's Degree in Computer Science",
    duration: "2023 - 2024",
    desc: "Specialized in optimizing mobile application performance. Part of Mobile, Game, and Media (MGM) Laboratory. Wrote 12 publications.",
    descBullets: [],
  },
  {
    schoolName: "Universitas Brawijaya",
    subHeader: "Bachelor's Degree in Informatics Engineering",
    duration: "2016 - 2022",
    desc: "Graduated with a GPA of 3.72 (Very Satisfactory). Lab Assistant for programming courses, contributing to student success.",
    descBullets: [],
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Frontend Developer",
    company: "Ginap Consulting",
    companyLogo: "/img/icons/common/ginap.png",
    date: "Aug 2023 - Present",
    desc: "Developed the Agriko web app and Go Coco AI mobile app using React.js and React Native. Contributed to CI/CD processes and enhanced user-centric designs.",
  },
  {
    role: "Frontend Developer",
    company: "Eftax Co., Ltd",
    companyLogo: "/img/icons/common/eftax.jpeg",
    date: "Jun 2020 - Dec 2021",
    desc: "Led the frontend development for Jobwher, a remote freelance job platform. Built reusable codebases to streamline future projects.",
  },
  {
    role: "Frontend Developer",
    company: "PT. Hash Rekayasa Teknologi",
    companyLogo: "/img/icons/common/hash.png",
    date: "Oct 2018 - Sep 2019",
    desc: "Handled PWA and mobile app development for Telin Malaysia and other projects, ensuring performance optimization and accessibility.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "Urban Echo",
    desc: "Urban Echo provides transport planners with a dynamic digital twin of city transport networks and individual population, powered by advanced agent-based simulations.",
    link: "https://urban-echo-demo.vercel.app/",
  },
  {
    name: "LA-Reflect",
    desc: "LA-Reflect aims to help teachers to create activities with multimedia content and helps tracking learning interactions and artefact created by their students.",
    link: "http://kyoto-u.amazing7studios.com/",
  },
  {
    name: "RouteSegmentation",
    desc: "RouteSegmentation is an algorithm designed to identify perimeter area surrounding travel path. This web demonstrate the algorithm for ICITEE 2024.",
    link: "https://routesegmentation-icitee.vercel.app",
  },
  {
    name: "Agriko",
    desc: "A web app for agricultural supply chain management, enhancing efficiency and traceability.",
    link: "http://agriko.com",
  },
  {
    name: "Go Coco AI",
    desc: "A mobile app for AI-driven art creation and print-on-demand services.",
    link: "https://apps.apple.com/us/app/go-coco-ai/id6469733391",
  },
  {
    name: "Jobhere (PWA)",
    desc: "A freelance job platform connecting freelancers and employers.",
    link: "https://jobhere.vercel.app",
  },
  {
    name: "myKedai",
    desc: "A mobile app facilitating sales for Telin Malaysia's internal departments.",
    link: "https://mykedai.com.my",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Grace K.",
    role: "Owner Urban Echo Project",
    feedback:
      "You are awesome!!!",
  },
];

export const seoData: SEODataType = {
  title: "Avied Bachmid",
  description: greetings.description,
  author: "Muhammad Avied Bachmid",
  image: "https://avatars.githubusercontent.com/u/22285186?v=4",
  url: "https://aviedb.me",
  jobtitle: experience[0].role,
  organization: experience[0].company,
  keywords: [
    "Avied",
    "Avied Bachmid",
    "Muhammad Avied Bachmid",
    "@aviedb",
    "aviedb",
    "Portfolio",
    "Avied Portfolio ",
    "Avied Bachmid Portfolio",
  ],
  links: [
    "https://github.com/aviedb",
    "https://www.linkedin.com/in/aviedb/",
    "https://www.instagram.com/aviedb"
  ]
};
