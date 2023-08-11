/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Lingaiah's Portfolio",
  description:
    "As a full stack developer with a Masters in Computer Science, set to graduate in May 2023, I am seeking full-time opportunities to further my career in the tech industry. I have a strong background in both front-end and back-end development, with experience working with latest technologies. I am a creative problem-solver with excellent communication and collaboration skills, and I am committed to staying up-to-date with industry trends to bring my best work to each project. Let's connect and explore the possibilities!",
  og: {
    title: "Lingaiah Danda Portfolio",
    type: "website",
    url: "http://lingaiahdanda.com/",
  },
};

//Home Page
const greeting = {
  title: "Lingaiah Danda",
  logo_name: "LingaiahDanda",
  nickname: "Linga",
  subTitle:
    "A passionate developer who loves to build web applications from  end to end  that create impact.",
  OpenTo:
    "Software Engineer, Juinor Software Engineer, Frontend Developer, Backend Developer, Java Fullstack Developer, Javascript FullStack Developer",
  resumeLink:
    "https://drive.google.com/file/d/1utDPHHKymAxv9dab7ClsxW5gYoi71sHb/view?usp=sharing",
  portfolio_repository: "https://github.com/lingaiahdanda",
  githubProfile: "https://github.com/lingaiahdanda",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/lingaiahdanda",
  // linkedin: "https://www.linkedin.com/in/lingaiahdanda/",
  // gmail: "dandalingaiah363@gmail.com",
  // instagram: "https://www.instagram.com/d.l.chowdary/"

  {
    name: "Github",
    link: "https://github.com/lingaiahdanda",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/lingaiahdanda/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:dandalingaiah363@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/d.l.chowdary/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React, Redux, Angular",
        "⚡ Creating application backend in Node, Express, Spring Framework ",
        "⚡ Worked with databases like  MySQL, MS SQL Server , MongoDB using ORMs like Mongoose,Hibernate",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Anguklar",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "red",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Spring Framework",
          fontAwesomeClassname: "simple-icons:spring",
          style: {
            color: "green",
          },
        },
        {
          skillName: "GraphQl API",
          fontAwesomeClassname: "simple-icons:graphql",
          style: {
            color: "pink",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "black",
          },
        },
        {
          skillName: "GitLab",
          fontAwesomeClassname: "simple-icons:gitlab",
          style: {
            color: "orange",
          },
        },
      ],
    },
    {
      title: "Cloud Technologies",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experienced in deploying applications to AWS",
        "⚡ Deployed applications on AWS S3, EC2 using AWS Code piepline and  Github Actions",
        "⚡ Knowledge on creating CI/CD pipeline",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/lingaiahdanda/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Texas Tech University",
      subtitle: "M.S. in Computer Science",
      logo_path: "ttu_logo.png",
      alt_name: "Indiana University Bloomington",
      duration: "Jan 2022 - May 2023",
      descriptions: [
        "⚡ I have taken courses related to AI, security, operating systems",
        "⚡ Apart from this, I am working as a Graduate Assistant. As part of it, I have worked on creating Web applications using Front End technologies such as HTML,CSS, Angular.js.",
        "⚡ I am also providing IT support to the university department. As a part of it, I work on imaging the windows OS to new computers, trouble shoot the Issues",
      ],
      website_link: "https://www.ttu.edu//",
    },
    {
      title: "Vasireddy Venkatadri Institute Of Technology",
      subtitle: "B.Tech. in Information Technology",
      logo_path: "vvit_logo.png",
      alt_name: "IIITDM Kurnool",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ I have participated in a Gloabl TCS Codevita Coding competion and secured 2217 rank among 55654 coders",
        "⚡ Certified as Infosys certified Software Engineer",
        "⚡ Got First Prize in MLH Local HackDay Sponsored by Microsoft at Google Developers Codelabs in our college",
      ],
      website_link: "https://www.vvitguntur.com/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "TCS Global Codevita",
      subtitle: "- Tata Consulatncy Services",
      logo_path: "codevita_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1QptaSIkwdscwbFNN8AtF-qjAlaLhMzXF/view?usp=sharing",
      alt_name: "Tata Consultancy Sservices",
      color_code: "#0C9D5899",
    },
    {
      title: "Infosys Certified Software Engineer",
      subtitle: "- Infosys",
      logo_path: "infosys_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1ZsxtHPOHn8NaamE_VyE8aMS34F3rnzXx/view?usp=sharing",
      alt_name: "Infosys",
      color_code: "#0C9D5899",
    },
    {
      title: "Front End Web Devloper Nanodegree",
      subtitle: "- Udacity",
      logo_path: "udacity_logo.jpeg",
      certificate_link: "https://confirm.udacity.com/DCTG9HQ5",
      alt_name: "udacity",
      color_code: "#00000099",
    },
    {
      title: "MLH Local Hack Day",
      subtitle: "- Sponsored by Microsoft",
      logo_path: "mlh_logo.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/1pTvTjuz9AkzVUHmaD9vkc7LjhIRrQV_X/view?usp=sharing",
      alt_name: "MLH",
      color_code: "#8C151599",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked as a Software Enginner for two years in a startup. Being in a startup culture I worked as a independent developer. A lot of learning was possible due to the startup environment. I was exposed to various full stack technologies which eventually led me to adapt to new technologies when needed",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Graduate Assistant",
          company: "Texas Tech Univeristy",
          company_url: "https://www.ttu.edu/",
          logo_path: "ttu_logo.png",
          duration: "Feb 2022 - Present",
          location: "Lubbock, Texas",
          description:
            "Involved in developing web application for university  using HTML, CSS, Bootstrap, and Angular.js. Implemented responsive design and cross-browser compatibility to ensure optimal user experience on all devices. Maintained and updated the application on a regular basis, including bug fixing and adding new features. Imaging the windows-based computers and troubleshooting the issues.",
          color: "#0879bf",
        },
        {
          title: "Software Engineer/Full Stack Developer",
          company: "Riktam Technologies",
          company_url: "https://www.riktamtech.com/",
          logo_path: "riktam_logo.png",
          duration: "Jan 2020 - Jan 2022",
          location: "Hyderabad, Telangana",
          description:
            "Contributed as a Full Stack Developer to a reliable courier service web application  with a focus on next day deliveries utilizing tech stack of React.js with Typescript, Node.js with Express framework and MongoDB with a team of four people. Achieved increased customer engagement by 13% and growth in client base through the development and deployment of a user-friendly application",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [],
    },
    {
      title: "Volunteerships",
      experiences: [],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description: "My projects includes various full stack technologies",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on publishing a research paper along with my professors.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "",
      name:
        "An Efficient Malaria Parasite Detection Using Convolution Neural Networks",
      createdAt: "2020",
      description: "Detecting the malaria parasited in blood cells using CNN",
      url: "http://sersc.org/journals/index.php/IJGDC/article/view/30797",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "linga.png",
    description: "I am available on almost every social media",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Currently in Lubbock,Texas, Email me at dandalingaiah363@gmail.com",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/place/Lubbock,+TX/data=!4m2!3m1!1s0x86fe12add37ddd39:0x1af0042922e84287?sa=X&ved=2ahUKEwiTp4CduoT9AhWEkmoFHc6IB-IQ8gF6BAgIEAI",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
