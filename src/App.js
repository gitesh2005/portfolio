import React, { useState } from "react";
import { motion } from "framer-motion";

const skills = [
  "SQL", "Python", "Pandas", "Numpy", 
  "Power BI", "Tableau", "Matplotlib", "Machine Learning"
];

// Project data array with your GitHub links
const projects = [
  {
    title: "Healthcare Data Analysis (Power BI)",
    description: "Built a Power BI dashboard to analyze hospital inpatient discharge data focusing on hip replacement trends, costs, and regional patterns.",
    tools: "Power BI, CSV Dataset, Data Cleaning, Visualization",
    githubLink: null, // Set to null as it has no repo
    liveLink: null, 
    caseStudy: {
      problem: "Hospitals need to understand trends in patient discharges to optimize resource allocation and reduce costs. The goal was to analyze inpatient discharge data to identify key patterns related to costs, procedures, and regional differences.",
      process: [
        "Data Cleaning: Used Python (Pandas) to clean and preprocess the raw CSV dataset, handling null values and standardizing formats.",
        "Data Modeling: Established relationships between different data tables within Power BI to create a robust and efficient model.",
        "Dashboard Development: Used DAX to write key measures like 'Average Cost per Discharge'. Built an interactive dashboard with slicers for region, year, and procedure type."
      ],
      results: "The final dashboard revealed that hip replacement procedures in the Western region had an average cost 15% higher than the national average, providing a clear area for administrators to investigate."
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
    title: "🤖 AI Resume Screener (Streamlit)",
    description: "Built an AI Resume Screener that automates resume evaluation using ML and GPT-based summary generation.",
    tools: "Python, Pandas, Scikit-Learn, Streamlit, Gen AI",
    githubLink: "https://github.com/gitesh2005/resume-screener",
    liveLink: "https://resume-screener-by-gitesh.streamlit.app/",
    caseStudy: {
      problem: "HR departments and recruiters spend countless hours manually screening resumes. This project aimed to automate the process by parsing resumes, matching them to a job description, and generating a summary.",
      process: [
        "PDF Parsing: Used Python libraries to extract raw text from uploaded PDF resumes.",
        "Keyword Matching: Implemented a scoring system based on keyword matching between the resume text and a given job description using Scikit-Learn's text analysis tools.",
        "AI Summary: Integrated a Generative AI model to provide a concise summary of the candidate's skills and a percentage match score."
      ],
      results: "A functional Streamlit application that significantly speeds up the initial screening process, allowing recruiters to focus on the most qualified candidates."
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
          Data Analyst | Turning Data into Decisions
        </motion.p>
        <motion.div className="mt-6 flex gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
          <a href="#projects">
            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full transition shadow-md hover:shadow-red-500/40">
              View Projects
            </button>
          </a>
          <a href="gitesh.pdf" download>
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
            My journey into data began in my Computer Science program, where I discovered a passion for uncovering the stories hidden within raw numbers. I quickly became fascinated with how tools like Python and Power BI could transform complex datasets into clear, actionable insights.
          </p>
          <p>
            In my projects, I have applied tools like <span className="text-red-400">Python, Excel, Power BI, SQL, Pandas, and Machine Learning</span> to turn raw data into meaningful insights. I've worked on real-world datasets, built interactive dashboards, and focused on solving problems with clarity and logic.
          </p>
          <p>
            I am eager to apply my skills in data cleaning, analysis, and visualization to help a company solve complex business challenges. My long-term dream is to start my own business that uses data to drive smart decisions.
          </p>
          <p>
            I believe in learning by doing, improving every day, and stepping outside my comfort zone. This portfolio reflects that mindset — and it's just the beginning.
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
              title: "Interactive BI Dashboards",
              desc: "Creating interactive dashboards for healthcare data using Power BI and Tableau.",
            },
            {
              title: "Data Cleaning & Preprocessing",
              desc: "Handling large datasets in Python and Excel for meaningful insights.",
            },
            {
              title: "Machine Learning Models",
              desc: "Building basic predictive models and performance evaluation."
            }
          ].map((s, i) => (
            <motion.div key={i} whileHover={{ y: -5 }} className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg hover:shadow-red-500/40 transition">
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
            { title: "Data Analytics Job Simulation", platform: "Deloitte (via Forage)", link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_AsLubtupozDyQxyTx_1751256685736_completion_certificate.pdf" },
            { title: "Microsoft 5 Days Boot Camp SQL", platform: "Microsoft", link: "https://www.cert.devtown.in/verify/2iReRr" }
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
        </motion.div>
      </Section>

      <footer className="text-center text-xs text-gray-600 py-6 border-t border-gray-800">
        &copy; {new Date().getFullYear()} Gitesh. All rights reserved.
      </footer>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </main>
  );
}