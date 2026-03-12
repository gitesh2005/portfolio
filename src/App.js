import React, { useState } from "react";
import { motion } from "framer-motion";

const skills = [
  "SQL",
  "Python",
  "Excel",
  "Power BI",
  "Pandas",
  "NumPy",
  "HTML",
  "CSS",
  "JavaScript",
  "Node.js",
  "Express.js",
  "Machine Learning",
  "Java",
  "DSA"
];

// Project data array with your GitHub links
const projects = [
  {
  title: "Healthcare Data Analysis (Power BI)",
  description: "Built a Power BI dashboard to analyze hospital inpatient discharge data focusing on hip replacement trends, costs, and regional patterns.",
  tools: "Power BI, CSV Dataset, Data Cleaning, Visualization",

  liveLink: "https://app.powerbi.com/reportEmbed?reportId=2e155d9f-16d9-4318-a3e8-9d1857de41b8&autoAuth=true&ctid=b5f86f36-3df0-46d1-beb7-50fa19e96f79",

  caseStudy: {
    problem: "Hospitals need to understand trends in patient discharges...",
    process: [
      "Data Cleaning using Pandas",
      "Data Modeling in Power BI",
      "DAX Measures Creation"
    ],
    results: "Identified 15% higher cost trend in Western region."
  }
},

  {
    title: "🌳 Plant Disease Prediction (Streamlit)",
    description: "Built a machine learning web app to predict if a plant is diseased using a decision tree algorithm and Streamlit deployment.",
    tools: "Python, Pandas, Scikit-Learn, Streamlit",
    githubLink: "https://github.com/gitesh2005/plant-disease-prediction",
    liveLink: "https://plant-disease-prediction-by-gitesh.streamlit.app/",
    caseStudy: {
      problem: "Farmers, especially in remote areas, need a quick and accessible way to identify plant diseases without waiting for experts. This tool aims to provide an instant diagnosis from an image of a plant leaf.",
      process: [
        "Data Collection: Aggregated an image dataset of healthy and diseased plant leaves.",
        "Model Training: Trained a Decision Tree classification model using Scikit-Learn, achieving over 92% accuracy on the test set.",
        "Web App Deployment: Built a user-friendly interface using Streamlit that allows a user to upload an image and receive an instant prediction."
      ],
      results: "A deployed web application that successfully classifies plant diseases from user-uploaded images, providing a valuable tool for agriculture."
    }
  },
  {
  title: "💼 Employee Payroll Management System",
  description: "Developed a full-stack employee payroll management system to manage employee records and perform CRUD operations efficiently.",
  tools: "HTML, CSS, JavaScript, Node.js, Express.js, JSON",
  githubLink: "https://github.com/gitesh2005/Employee-PayRoll-System",
  liveLink: "https://employee-payroll-system-frontend.netlify.app/",
  caseStudy: {
    problem: "Managing employee records manually can be time-consuming and difficult to organize efficiently.",
    process: [
      "Built a responsive frontend using HTML, CSS, and JavaScript for employee data management.",
      "Implemented backend functionality using Node.js and Express.js to handle CRUD operations.",
      "Used JSON as a data source to store and manage employee details."
    ],
    results: "Created a working web application that allows adding, viewing, updating, and deleting employee records."
  }
},
  {
    title: "🔥 Calorie Burned Prediction (Streamlit)",
    description: "Developed a machine learning web app to estimate calories burned based on user activity data using regression models and deployed with Streamlit.",
    tools: "Python, Pandas, Scikit-Learn, Streamlit",
    githubLink: "https://github.com/gitesh2005/calorie_burned_predicition",
    liveLink: "https://gitesh2005-calorie-burned-predicition-app-0wwpso.streamlit.app/",
    caseStudy: {
      problem: "Fitness enthusiasts and individuals tracking their health often want a quick way to estimate calories burned from various activities without relying on expensive devices. This app provides an instant, data-driven calorie estimation.",
      process: [
        "Data Collection: Used a dataset containing personal details (age, gender, height, weight) and activity metrics (duration, heart rate, body temperature, etc.).",
    "Model Training: Trained a regression model using Scikit-Learn to predict calories burned, achieving high accuracy on the test set.",
    "Web App Deployment: Built an interactive Streamlit interface where users can input their details and activity stats to receive a calorie burn prediction instantly."
      ],
      results: "A live web app that quickly predicts calories burned for different activities, helping users monitor and manage their fitness goals."
    }
  }
];

const Section = ({ title, id, children }) => (
  <section className="py-16 px-6 max-w-6xl mx-auto" id={id || title.toLowerCase()}>
    <motion.h2 className="text-3xl font-bold text-white mb-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      {title}
    </motion.h2>
    {children}
  </section>
);

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4"
      onClick={onClose}
    >
      <motion.div
        className="bg-[#1f1f1f] text-white max-w-3xl w-full rounded-lg shadow-2xl p-8 relative overflow-y-auto max-h-[90vh]"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl">&times;</button>
        
        <h2 className="text-3xl font-bold text-red-400 mb-4">{project.title}</h2>
        
        <h3 className="text-xl font-semibold text-white mt-6 mb-2">Problem Statement</h3>
        <p className="text-gray-300 leading-relaxed">{project.caseStudy.problem}</p>
        
        <h3 className="text-xl font-semibold text-white mt-6 mb-2">My Process</h3>
        <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2">
          {project.caseStudy.process.map((step, index) => <li key={index}>{step}</li>)}
        </ul>

        <h3 className="text-xl font-semibold text-white mt-6 mb-2">Results & Key Findings</h3>
        <p className="text-gray-300 leading-relaxed">{project.caseStudy.results}</p>

        <div className="mt-8 flex gap-4 flex-wrap">
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full transition shadow-md">
              🚀 Launch App
            </a>
          )}
          {/* UPDATED: This button only shows if a githubLink exists */}
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="border border-red-500 text-red-500 px-4 py-2 rounded-full hover:bg-red-900/30 transition">
              View Code on GitHub
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
};


export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <main className="bg-[#0f0f0f] text-white font-sans scroll-smooth">
      <nav className="fixed top-0 left-0 w-full z-40 backdrop-blur-sm bg-black/70 shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-widest text-red-500">Gitesh</h1>
          <ul className="flex gap-6 text-sm">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-red-500 transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24">
        <motion.h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
         Hi, I'm Gitesh
        </motion.h2>
        <motion.p className="mt-4 text-lg md:text-xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          B.Tech Student | Building Practical Solutions with Data and Development
          Focused on SQL, Python, Power BI, Web Development, and Problem Solving.
        </motion.p>
        <motion.div className="mt-6 flex gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
          <a href="#projects">
            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full transition shadow-md hover:shadow-red-500/40">
              View Projects
            </button>
          </a>
          <a href="gitesh resume March.pdf" download>
            <button className="border border-red-500 text-red-500 px-4 py-2 rounded-full hover:bg-red-900/30 transition">
              Download Resume
            </button>
          </a>
        </motion.div>
      </section>

      <Section title="About">
  <motion.div
    className="text-gray-300 leading-relaxed text-lg space-y-6"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.2 }}
  >
    <p>
      I am a B.Tech 3rd year student with a strong interest in technology and problem solving. During my academic journey, I have developed knowledge in data-related tools such as <span className="text-red-400">SQL, Excel, Power BI, Python, Pandas, and NumPy</span>, which I have used in academic and personal projects to understand and work with data effectively.
    </p>

    <p>
      I have also learned web development technologies including <span className="text-red-400">HTML, CSS, JavaScript, Node.js, Express.js, and File System concepts</span>, and I enjoy building practical projects that improve my understanding of how applications work.
    </p>

    <p>
      In addition, I have basic knowledge of <span className="text-red-400">Machine Learning, Supervised Learning, Unsupervised Learning, Java programming, and fundamental Data Structures and Algorithms</span>, which strengthen my logical thinking and coding skills.
    </p>

    <p>
      I am currently focused on improving my technical abilities, gaining practical experience through projects, and preparing myself for internship and placement opportunities where I can learn, contribute, and grow professionally.
    </p>
  </motion.div>
</Section>

      <Section title="Skills">
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
    {skills.map((skill, i) => (
      <motion.div
        key={skill}
        className="bg-[#1f1f1f] text-center py-3 rounded-lg text-red-400 shadow hover:shadow-red-600/50 transition"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: i * 0.1 }}
      >
        {skill}
      </motion.div>
    ))}
  </div>
</Section>

<Section title="Core Competencies" id="services">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      {
        title: "Data Analysis",
        desc: "Working with datasets using SQL, Excel, Python, and Power BI to extract useful insights."
      },
      {
        title: "Web Development",
        desc: "Building basic web applications using HTML, CSS, JavaScript, Node.js, and Express.js."
      },
      {
        title: "Problem Solving",
        desc: "Applying logical thinking through Java basics and Data Structures & Algorithms."
      },
      {
        title: "Dashboard Development",
        desc: "Creating interactive dashboards and reports for better data visualization."
      },
      {
        title: "Machine Learning Basics",
        desc: "Understanding supervised and unsupervised learning concepts through projects."
      },
      {
        title: "Project Development",
        desc: "Developing academic and personal projects to strengthen practical skills."
      }
    ].map((s, i) => (
      <motion.div
        key={i}
        whileHover={{ y: -5 }}
        className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg hover:shadow-red-500/40 transition"
      >
        <h4 className="text-red-400 font-semibold mb-2">{s.title}</h4>
        <p className="text-gray-300 text-sm">{s.desc}</p>
      </motion.div>
    ))}
  </div>
</Section>

      <Section title="Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div key={index} whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 200 }}>
              <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg hover:shadow-red-500/40 transition h-full flex flex-col">
                <h3 className="text-xl font-semibold text-red-400">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-300 flex-grow">
                  {project.description}
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  Tools: {project.tools}
                </p>
                <div className="mt-4 text-sm">
                  <button onClick={() => setSelectedProject(project)} className="text-blue-400 hover:underline">
                    Read Case Study →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title="Certificates">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Data Analyst in Power BI", platform: "DataCamp", link: "https://www.datacamp.com/statement-of-accomplishment/track/9b5aed4fb70ab980a2928ab4998a45de675911c3?raw=1" },
            { title: "Data Analytics & Visualization Job Simulation", platform: "Accenture (via Forage)", link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/T6kdcdKSTfg2aotxT/hzmoNKtzvAzXsEqx8_T6kdcdKSTfg2aotxT_AsLubtupozDyQxyTx_1751256684496_completion_certificate.pdf" },
            { title: "Data Analytics Job Simulation", platform: "Deloitte", link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_AsLubtupozDyQxyTx_1751256685736_completion_certificate.pdf" },
            { title: "Microsoft 5 Days Boot Camp SQL", platform: "Microsoft", link: "https://www.cert.devtown.in/verify/2iReRr" },
            { title: "Machine Learning with Generative AI (Summer Training)" , platform: "W3grads | GLA University", link: "https://drive.google.com/file/d/1Dm1Cio_uzmJXw4vEFdLpeZDnLWzpofHn/view?usp=sharing"}
          ].map((cert, i) => (
            <motion.a key={i} href={cert.link} target="_blank" rel="noopener noreferrer" whileHover={{ y: -4 }} className="block bg-[#1a1a1a] p-5 rounded-lg shadow hover:shadow-red-500/40 transition">
              <h4 className="text-red-400 font-semibold text-lg">{cert.title}</h4>
              <p className="text-gray-400 text-sm mt-1">Platform: {cert.platform}</p>
              <p className="text-blue-400 text-sm mt-2 hover:underline">View Certificate</p>
            </motion.a>
          ))}
        </div>
      </Section>

      <Section title="Contact">
        <motion.div
          className="flex justify-center gap-8 flex-wrap text-red-400 text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <a href="https://www.linkedin.com/in/gitesh-sorout-146697289/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">LinkedIn</a>
          {/* Your GitHub Profile Link */}
          <a href="https://github.com/gitesh2005" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub</a>
          <a href="https://wa.me/918307552640" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">WhatsApp</a>
          <a href="mailto:giteshsorout@gmail.com" className="hover:text-white transition">Email</a>
          <a href="https://leetcode.com/u/64yrbUHtGy/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Leetcode</a>
        </motion.div>
      </Section>

      <footer className="text-center text-xs text-gray-600 py-6 border-t border-gray-800">
        &copy; {new Date().getFullYear()} Gitesh. All rights reserved.
      </footer>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </main>
  );
}