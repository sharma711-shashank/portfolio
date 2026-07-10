export const siteConfig = {
  name: "Shashank Sharma",
  title: "Module Lead",
  description:
    "Results-driven Module Lead with extensive expertise in full-stack development, microservices architecture, and cloud platforms. Proficient in leveraging AI-assisted development tools and implementing AI workflows to boost productivity and accelerate software delivery.",
  url: "https://shashsharma.dev",
  linkedin: "https://www.linkedin.com/in/sharma--shashank",
  email: "sharma711.shashank@gmail.com",
};

export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    company: "BOLD Technology Systems Pvt Ltd",
    role: "Module Lead",
    duration: "Apr 2022 — Present",
    description:
      "Led the development of web applications using ReactJS and .NET Core, focusing on performance, scalability, and seamless integration of RESTful APIs.",
    responsibilities: [
      "Led cross-functional teams to deliver technical solutions, streamlining processes and improving project timelines",
      "Transitioned project to React JS, utilizing analytics tools (Mixpanel, Segment, GA4) and email platforms (HubSpot, Pinpoint, Iterable)",
      "Developed over 40 RESTful APIs, enhancing application capabilities and ensuring seamless integration",
      "Improved code deployment efficiency by automating processes with CI/CD pipelines",
      "Mentored junior developers in coding practices and software development techniques, fostering skill growth and knowledge sharing",
      "Facilitated Azure Cloud migration and implementation planning phases",
    ],
    technologies: [
      "React JS",
      "Redux",
      ".NET Core",
      "C#",
      "Azure",
      "SQL Server",
      "Microservices",
      "CI/CD",
      "Mixpanel",
      "Segment",
      "GA4",
    ],
  },
  {
    company: "Siemens Technology And Services Private Ltd",
    role: "Software Engineer",
    duration: "Jul 2018 — Apr 2022",
    description:
      "Collaborated with cross-functional teams to develop high-performance industrial software solutions, optimizing application performance and ensuring quality delivery.",
    responsibilities: [
      "Achieved 35-40% faster response times by optimizing application performance and scalability",
      "Reduced recurring system defects by 30% through diagnosing and resolving over 50 system issues",
      "Designed and developed 40+ RESTful APIs for system integration, expanding application functionality",
      "Increased test coverage by 70% using automated testing frameworks, reducing deployment issues",
      "Configured and optimized core MES logic in Siemens Opcenter using MDUi editor, BP flow, and signals application",
      "Created reusable UI components for Siemens Web Framework, providing building blocks for Siemens Opcenter Foundation",
      "Developed responsive web applications using Angular to enhance user experience and performance",
    ],
    technologies: [".NET", "C#", "REST APIs", "Automated Testing", "Performance Optimization", "Angular", "SQL Server", "Siemens Opcenter"],
  },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "career-documents-suite",
    title: "Career Documents Suite",
    description:
      `Architected and delivered high-impact, full-stack solutions leveraging React JS, Redux, JavaScript, C#.NET, and Microservices Architecture to power high-traffic global resume platforms, including ResumeGenius, MyPerfectResume, and Zety. Spearheaded the end-to-end development of critical user touchpoints and infrastructure, spanning high-conversion SEM Landing Pages, intuitive Resume and Cover Letter Builders, and a seamless, secure Payments frontend.

Engineered robust user ecosystems, including a comprehensive Dashboard and targeted retention features designed to maximize customer lifetime value. To ensure peak performance, scalability, and loose coupling, designed and deployed specialized BFF (Backend-for-Frontend) layers that seamlessly orchestrated communication between complex frontend applications and underlying microservices. Additionally, successfully pioneered high-quality resume templates, Public Resume Sites for social sharing, advanced job-matching algorithms, and an automated Resume Quality Score system. Championed technical excellence across fast-paced Agile environments, efficiently managing complex source code and cross-team collaboration.`,
    technologies: ["React JS", "Redux", "C#.NET", "ASP.NET MVC", "SQL Server", "Web APIs", "Microservices", "Git"],
    featured: true,
  },
  {
    id: "siemens-opcenter-mes-ui-framework",
    title: "Siemens Opcenter MES & UI Framework",
    description:
      "Contributed to the Siemens Web Framework providing UI foundation utilized across the Siemens Opcenter ecosystem. Designed and deployed critical system features including interactive Side Panel and Business/Process Workflow applications. Built the MDUI Editor (Solution/Design Editor) enabling end-users to seamlessly design, customize, and deploy independent applications. Designed a robust BPMN application for the Opcenter UAF product. Successfully integrated Manufacturing Execution Systems (MES) with broader industrial automation applications maximizing operational efficiency.",
    technologies: ["C#", ".NET", "Angular", "Siemens Opcenter", "BPMN", "MES", "UI Components"],
    featured: true,
  },
  {
    id: "cicd-pipeline-automation",
    title: "CI/CD Pipeline Automation",
    description:
      "Designed and implemented automated deployment pipelines improving code deployment efficiency and monitoring automated build and continuous software integration processes.",
    technologies: ["Azure DevOps", "CI/CD", "Git", "Docker"],
    featured: true,
  },
  {
    id: "analytics-email-platform-integration",
    title: "Analytics & Email Platform Integration",
    description:
      "Transitioned project analytics to modern tools including Mixpanel, Segment, GA4, and integrated email platforms like HubSpot, Pinpoint, and Iterable for user engagement.",
    technologies: ["Mixpanel", "Segment", "GA4", "HubSpot", "React JS"],
    featured: false,
  },
  {
    id: "restful-api-suite",
    title: "RESTful API Suite",
    description:
      "Designed and developed 40+ RESTful APIs for system integration at Siemens, expanding application functionality and improving inter-service communication.",
    technologies: [".NET", "C#", "REST APIs", "SQL Server"],
    featured: false,
  },
  {
    id: "azure-cloud-migration",
    title: "Azure Cloud Migration",
    description:
      "Facilitated seamless cloud migration by providing expert guidance during Azure Cloud implementation planning phases, ensuring zero-downtime transitions.",
    technologies: ["Azure", "Cloud Architecture", ".NET Core", "DevOps"],
    featured: false,
  },
];

export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      "React JS",
      "Redux",
      "Next JS",
      "Angular",
      "JavaScript (ES6)",
      "HTML5",
      "CSS3",
    ],
  },
  {
    name: "Backend",
    skills: [
      "C#",
      ".NET Core",
      "ASP.NET MVC",
      "RESTful APIs",
      "Node JS",
      "Python",
    ],
  },
  {
    name: "Databases and Cloud",
    skills: ["Azure", "AWS", "PostgreSQL", "SQL Server"],
  },
  {
    name: "AI & Machine Learning",
    skills: ["GitHub Copilot", "OpenAI APIs", "Prompt Engineering", "Agentic Workflows", "GenAI", "GitHub Actions", "RAG"],
  },
  {
    name: "Analytics & Marketing",
    skills: [
      "Google Analytics (GA4)",
      "GTM",
      "Segment",
      "Mixpanel",
      "HubSpot",
      "Pinpoint",
      "Iterable",
      "New Relic"
    ],
  },
  {
    name: "Tools & Practices",
    skills: [
      "Git",
      "Agile/Scrum",
      "CI/CD",
      "Azure DevOps",
      "Azure",
      "NGINX",
      "Cloudflare",
      "Microservices Architecture",
      "Mentoring",
      "Team Leadership",
      "Task Delegation",
    ],
  },
];

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export const certifications: Certification[] = [
  {
    name: "Generative AI and Machine Learning",
    issuer: "IIT Kanpur",
    date: "2026",
    credentialUrl: "https://verify.eicta.digitalcredentials.in/67d5d513-b6e1-41ea-b18b-f8d2d6a8f6d5",
  },
];

export interface Recommendation {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  linkedinUrl?: string;
}

export const recommendations: Recommendation[] = [
  {
    id: "pushker-tiwari",
    name: "Pushker Tiwari",
    role: "Senior Engineer",
    company: "SAVii (Ex-BOLD)",
    text: "Working with Shashank has been an absolute pleasure. He fosters a positive and collaborative team environment, communicates effectively, listens attentively, and values everyone's input. His deep expertise in creating AI features on resume-making websites was evident when he created AI resume summary, AI Resume Parser, and AI Writing help (similar to Grammerly). His analytical thinking helped us to integrate a highly efficient event tracking system which tracks all the user actions performed on the website like clicks, scrolls, swipes etc. He possesses thorough knowledge of Email Marketing tools like Hubspot, Iterable and Amazon Pinpoint. Beyond his technical skills, he is curious and always asks \"why\", ensuring well-thought-out solutions. His mentorship was invaluable—I learned best practices in state management through his detailed sessions. His collaboration and communication make him a true team player. Having worked with many full stack engineers, I can confidently say that Shashank is among the best.",
    linkedinUrl: "https://www.linkedin.com/in/pushkertiwari/",
  },
  {
    id: "mohamed-musthafa-ummer",
    name: "Mohamed Musthafa Ummer",
    role: "Senior Project Manager",
    company: "Siemens Healthineers",
    text: "I had the pleasure of working with Shashank at Siemens and was impressed by his straightforward approach and unique perspective. He consistently takes the time to understand the \"why\" behind tasks, bringing thoughtful and innovative ideas to the table. Shashank's growth mindset and eagerness to learn and experiment make him stand out. His willingness to embrace challenges and explore new approaches adds tremendous value to any project. I highly recommend Shashank for any role—his skills and attitude are a true asset to any team.",
    linkedinUrl: "https://www.linkedin.com/in/mohamed-musthafa-ummer-2986891b/",
  },
  {
    id: "amit-kumar-santra",
    name: "Amit Kumar Santra",
    role: "Engineering Leader @VSA | Test Engineering Manager | Automation & GenAI-Driven Testing",
    company: "VSA (Ex-Siemens)",
    text: "Shashank is an outstanding software engineer with expertise in front-end technologies like React, Redux, JavaScript, HTML, and CSS, as well as back-end development using C#, .Net Core, and Node.js. I had the pleasure of working with Shashank at Siemens, where he joined as a fresher and quickly grew into a highly skilled professional. Shashank consistently delivers robust and user-friendly applications, demonstrating a deep understanding of both front-end and back-end development. I highly recommend Shashank for any software engineering role.",
    linkedinUrl: "https://www.linkedin.com/in/amitkumarsantra9/",
  },
  {
    id: "vipin-kumar-dubey",
    name: "Vipin Kumar Dubey",
    role: "Associate Consultant",
    company: "Siemens",
    text: "I had the pleasure of working closely with Shashank, and I can confidently say he is an exceptional professional who stands out in many areas. Shashank is technically brilliant, with a deep understanding of complex concepts and the ability to quickly grasp new technologies. His technical expertise is only matched by his sharp analytical skills, allowing him to ask thought-provoking questions that push the team's thinking forward and lead to innovative solutions. One of the most impressive aspects of Shashank's work is his collaborative spirit. He has a natural ability to bring people together, facilitate effective communication, and drive consensus even in challenging situations. His open, honest approach fosters trust within the team, making them a go-to person for advice and support. In summary, Shashank is a highly skilled, intellectually curious, and collaborative professional who brings a rare combination of technical acumen, leadership, and integrity. He would be an invaluable asset to any team, and I wholeheartedly recommend them for any role that requires these qualities.",
    linkedinUrl: "https://www.linkedin.com/in/vkdvns/",
  },
  {
    id: "abhishek-khurana",
    name: "Abhishek Khurana",
    role: "Lead Software Engineer",
    company: "Siemens",
    text: "I had the pleasure of working closely with Shashank during his tenure at Siemens, and I can confidently say that he is one of the most talented and dedicated professionals I have ever had the privilege to work with. Shashank consistently demonstrated exceptional skills in product development. His ability to build good quality and scalable product was instrumental in achieving our team's objectives and driving the company's success. Shashank's positive attitude and proactive approach to problem-solving were contagious, fostering a collaborative and dynamic work environment. Furthermore, Shashank's commitment to continuous improvement and learning is truly commendable. He consistently sought out new challenges and opportunities to expand his skill set, which not only enhanced his own performance but also brought fresh perspectives and innovative ideas to the team. In addition to his professional expertise, Shashank is a person of high integrity and professionalism. He handles every task with the utmost responsibility and ensures that all deadlines are met without compromising on quality. His excellent communication skills and ability to articulate complex ideas clearly and effectively make him a valuable asset in any team setting. I have no doubt that Shashank will continue to excel and make significant contributions wherever he goes. I highly recommend Shashank for any position or opportunity that requires a dedicated, skilled, and dynamic professional. He would be a tremendous asset to any organization.",
    linkedinUrl: "https://www.linkedin.com/in/abhishek-khurana25101990/",
  },
];

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Certifications", href: "#certifications" },
  { name: "Recommendations", href: "#recommendations" },
  { name: "Contact", href: "#contact" },
];
