import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  PublicationType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "aviedb",
  title: "Hello World! I'm Avied",
  description: "I'm a passionate Frontend Developer with over 3 years of professional experience specializing in React.js and React Native technologies. I've successfully developed responsive, user-friendly web interfaces and mobile apps, focusing on performance and maintainability. I excel at collaborating with global teams and delivering high-quality projects.",
  resumeLink: "https://www.canva.com/design/DAFYqw5ekoQ/MCV1YgiTVPhrihp6t4tgPA/edit?utm_content=DAFYqw5ekoQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
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
  researchGate: "https://www.researchgate.net/profile/Muhammad-Bachmid-2",
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
  // {
  //   name: "Agriko",
  //   desc: "A web app for agricultural supply chain management, enhancing efficiency and traceability.",
  //   link: "http://agriko.com",
  // },
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

export const publications: PublicationType[] = [
  {
    title: "Performance Optimization of RouteSegmentation Algorithm Using Douglas-Peucker Line Simplification Approach",
    authors: "MA Bachmid, MR Mumtaz, MYA Haq, A Pinandito",
    journal: "9th International Conference on Sustainable Information Engineering and Technology (SIET)",
    year: "2024",
    abstract: "This paper investigates the optimization of the RouteSegmentation algorithm by integrating the Douglas-Peucker line simplification method in the context of intercity travel. The primary goal of the research is to enhance the algorithm's performance by effectively reducing the number of route pathway points while preserving the quality of perimeter area identification. The study focuses on a single pair of source and destination coordinates within East Java Province, analyzing up to 2,000 route pathway points. These points were divided into 20 subsets, each containing between 100 and 2,000 points with an increment of 100 points per subset. To optimize the RouteSegmentation process, a fixed threshold distance of 50 meters was applied using the Douglas-Peucker algorithm, which resulted in an average reduction of 96.84% in the number of points across all subsets. Importantly, this reduction was achieved without sacrificing the visual quality of the algorithm's output, as the perimeter area identification remained consistent and accurate. The experimental results, conducted within an Android application environment, demonstrate that the optimized RouteSegmentation algorithm significantly reduces processing time and memory usage compared to the non-simplified version. This substantial improvement underscores the effectiveness and efficiency of the Douglas-Peucker simplification in enhancing the RouteSegmentation algorithm's performance, offering a robust solution for efficient and scalable navigation systems, particularly in mobile applications.",
    link: "https://www.researchgate.net/publication/387141931_Performance_Optimization_of_RouteSegmentation_Algorithm_Using_Douglas-Peucker_Line_Simplification_Approach",
  },
  {
    title: "Performance Analysis of RouteSegmentation Algorithm in Identifying Perimeter Area Around Travel Route",
    authors: "MA Bachmid, MYA Haq, MR Mumtaz, A Pinandito",
    journal: "16th International Conference on Information Technology and Electrical Engineering (ICITEE)",
    year: "2024",
    abstract: "Prior study has developed the RouteSegmentation algorithm to identify the perimeter area surrounding a route. In this study, a comparative experiment was carried out to investigate the performance of the RouteSegmentation algorithm implementation in contrast to the RouteBoxer algorithm. Both algorithms play a crucial role in geographical information systems (GIS), particularly in enhancing navigational tools by identifying points of interest along specified routes. Through systematic experimentation using various perimeter distance values and types of route, the trade-offs between processing efficiency and the granularity of the area identified by these algorithms were evaluated. The results demonstrate that RouteSegmentation maintained relatively consistent performance across different perimeter distance values and statistically significantly faster processing time than RouteBoxer. Furthermore, while the RouteBoxer algorithm benefits from larger perimeter distance values by reducing processing time, it compromises the coverage results of the algorithm and potentially undermines its usefulness in practical scenarios. This study not only provides insights into the optimal use of perimeter distance values for each algorithm but also guides users in selecting the appropriate algorithm based on their specific application needs, balancing detailed geographical analysis and runtime efficiency.",
    link: "https://doi.org/10.1109/ICITEE62483.2024.10808610",
  },
  {
    title: "RouteSegmentation Algorithm to Identify Perimeter Area Surrounding Travel Path for Improved Navigation and POI Detection",
    authors: "MA Bachmid, MYA Haq, MR Mumtaz, A Pinandito",
    journal: "3rd International Conference On Multidisciplinary Applications of Information Technology (ICOMIT)",
    year: "2024",
    abstract: "This paper introduces RouteSegmentation, an algorithm to identify the perimeter area that surrounds a travel route. RouteSegmentation, which is suggested in this study, consists of two main processes: generating the segment polygons and merging all the segment polygons into a single polygon depicting the perimeter area surrounding the route. A comprehensive performance analysis of RouteSegmentation, including a comparison of three different polygon union methods for the second process of the algorithm, is presented. The results demonstrate that for the first process, which is generating segment polygons, RouteSegmentation maintains consistent performance across a range of numbers of points. The second process, with the comparison of three different polygon union methods, results in a tie between the Unary Union and Cascaded Union, and both outperform the Overlay Union in terms of performance. Therefore, the Unary Union or Cascaded Union method is a fine choice for the second process to apply in RouteSegmentation.",
    link: "https://www.researchgate.net/publication/387141598_RouteSegmentation_Algorithm_to_Identify_Perimeter_Area_Surrounding_Travel_Path_for_Improved_Navigation_and_POI_Detection",
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
