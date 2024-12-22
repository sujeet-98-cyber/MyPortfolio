/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Aakash Shewale",
  title: "Hi all, I'm Aakash",
  subTitle: emoji(
    "With over 3 years of experience as an AWS/DevOps Engineer, I specialize in automating, building, deploying, managing, and releasing code across various environments. I ensure robust Continuous Integration, Continuous Delivery, and Continuous Deployment processes across multiple environments, including DEV, TEST, STAGE, and PROD. "
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Za-hEY_7t_a63iADopID1M0MIpu7lbnu/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/akash08-ak",
  linkedin: "https://www.linkedin.com/in/akash-shewale-070b95152/",
  gmail: "akashshewale0802@gmail.com",
  hackerrank: "https://www.hackerrank.com/akashshewale0801",
  instagram: "https://www.instagram.com/_aakash__ak_?igsh=dHFsMjhjdWZoY2Fq",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY DEVOPS ENGINEER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡Design and Manage Cloud Infrastructure."),
    emoji("⚡Implement CI/CD Pipeline."),
    emoji("⚡Orchestrate and Administer Containers."),
    emoji("⚡Automate Infrastructure and Configuration Management."),
    emoji("⚡Enhance Cloud Monitoring and Disaster Recovery.")


  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://icon-sets.iconify.design/devicon/?query=az */

  softwareSkills: [
    {
      skillName: "Linux",
      fontAwesomeClassname: "devicon:linux",
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "devicon:amazonwebservices-wordmark",
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "devicon:azure",
    },
    {
      skillName: "Nexus",
      fontAwesomeClassname: "mdi:hexagon-outline",
    },
    {
      skillName: "Sonar Qube",
      fontAwesomeClassname: "devicon:sonarqube-wordmark",
    },
    {
      skillName: "Shell Scripting",
      fontAwesomeClassname: "devicon:powershell",
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "devicon:git",
    },
    {
      skillName: "Git Hub",
      fontAwesomeClassname: "devicon:github",
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "devicon:jenkins",
    },
    {
      skillName: "Ansible",
      fontAwesomeClassname: "devicon:ansible",
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "devicon:docker",
    },
    {
      skillName: "Terraform",
      fontAwesomeClassname: "devicon:terraform",
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "devicon:kubernetes",
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Savitribai Phule Pune University",
      logo: require("./assets/images/SppuLogo.png"),
      subHeader: "Bachelor of Engineering in Computer Engineering",
      duration: "September 2018 - August 2021",


    },
    {
      schoolName: "Maharashtra State Board of Technical Education",
      logo: require("./assets/images/MsbteLogo.png"),
      subHeader: "Diploma in Computer Engineering",
      duration: "May 2015 - June 2018",

    },
    {
      schoolName: "Ravindranath Vidyalaya",
      logo: require("./assets/images/RavindranathLogo.jpeg"),
      subHeader: "Secondary School Certificate",
      duration: "June 2014 - March 2015",

    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "AWS", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Azure",
      progressPercentage: "60%"
    },
    {
      Stack: "Scripting",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Associate Software Engineer",
      company: "Cognizant",
      companylogo: require("./assets/images/Cognizant.jpg"),
      date: "Sep 2021 – Present",
      descBullets: [
        "⚡Proficient in creating secure and scalable infrastructure. ",
        "⚡Experienced in setting up and automating CI/CD pipelines.",
        "⚡Integrated code quality and security checks into deployment processes. ",
        "⚡Skilled in managing containerized applications and orchestration.",
        "⚡Configured artifact storage for streamlined access and management. ",
        "⚡Deployed applications for reliable and scalable performance."
      ],
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/Cog_Project.png"),
      projectName: "Cognizant Internal Apps",
      projectDesc: "Azure CI/CD Automation: Experienced in setting up and configuring Azure Pipelines to automate CI/CD processes, ensuring efficient build and deployment workflows. Security Integration: Integrated SAST, DAST, and OSS scans into Azure Pipelines to enhance application security and perform comprehensive vulnerability assessments. Artifact and Configuration Management: Stored build artifacts on servers using different agents and set up shared paths to manage pipeline-related XML files, ensuring seamless accessibility and organization. Azure Deployments: Deployed applications on Azure servers, ensuring reliability, scalability, and performance optimization."
      
    },
    {
      image: require("./assets/images/Cyguns.png"),
      projectName: "Cygnus Home Service, LLC",
      projectDesc: "AWS Expertise: Proficient in AWS services, including creating custom AMIs for streamlined deployments, managing IAM for secure access control, and configuring VPCs for robust and secure networking. CI/CD Implementation: Experienced in setting up and configuring Jenkins to build and manage CI/CD pipelines, ensuring seamless code integration and deployment. Code Quality Management: Integrated SonarQube into CI/CD pipelines to automate code quality checks, enhancing security and reducing technical debt. Containerization and Orchestration: Skilled in managing Docker containers and deploying them at scale using Kubernetes clusters for high availability and efficiency."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    
    {
      title: "Microsoft",
      subtitle:
        "Azure Solutions Architect",
      image: require("./assets/images/CertificationAzureSolutionsArchitectExpert.jpg"),
      footerLink: [
        {
          name: "View Certification",
          url: "https://drive.google.com/file/d/1NsalRvcu_2FVgLwm2VGZBYYnJZdwZppS/view?usp=drive_link"
        }
      ]
    },

    {
      title: "AWS",
      subtitle: "Solutions Architect",
      image: require("./assets/images/AWSCertifiedSolutionsArchitectAssociate.jpg"),
      footerLink: [
        { name: "View Certification", 
          url: "https://drive.google.com/file/d/1aIau5KyPgH7p6Xr7_QcDjMirxLHunlVi/view?usp=drive_link" 
        },

      ]
    },

    {
      title: "Microsoft",
      subtitle:
        "Azure Administrator Associate",
      image: require("./assets/images/CertificationAzureAdministratorAssociate.jpg"),
      footerLink: [
        {
          name: "View Certification",
          url: "https://drive.google.com/file/d/1NAEkBjA7QZZzK0EI90-5ZYVZGhUgYedG/view?usp=drive_link"
        }

      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: emoji("Discuss a project or just want to say hi 👋. My Inbox is open for all."),
  number: "+92-8862003531",
  email_address: "akashshewale0802@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
