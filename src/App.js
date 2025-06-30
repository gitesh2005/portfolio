import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";

const skills = [
  "Excel", "Python", "Pandas", "Matplotlib", "Java",
  "Power BI", "Tableau", "Machine Learning", "SQL","Numpy"
];

const Section = ({ title, children }) => (
  <section className="py-16 px-6 max-w-6xl mx-auto" id={title.toLowerCase()}>
    <motion.h2 className="text-3xl font-bold text-white mb-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      {title}
    </motion.h2>
    {children}
  </section>
);

export default function App() {
  return (
    <main className="bg-[#0f0f0f] text-white font-sans scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-black/70 shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-widest text-red-500">GITESH</h1>
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

      {/* Hero */}
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
          Aspiring Data Analyst | Turning Data into Decisions
        </motion.p>
        <motion.div className="mt-6 flex gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
          <a href="/Gitesh.pdf" download>
            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full transition shadow-md hover:shadow-red-500/40">
              Download Resume
            </button>
          </a>
          <a href="#projects">
            <button className="border border-red-500 text-red-500 px-4 py-2 rounded-full hover:bg-red-900/30 transition">
              View Projects
            </button>
          </a>
        </motion.div>
      </section>

      <Section title="About">
  <motion.p
    className="text-gray-300 leading-relaxed text-lg"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.2 }}
  >
    I'm Gitesh, a passionate and self-driven learner currently pursuing a degree in Computer Science, with a growing expertise in Data Analytics.

    <br /><br />
    My academic journey started strong — I scored <span className="text-red-400 font-semibold">88%</span> in 10th grade and <span className="text-red-400 font-semibold">86%</span> in 12th with a PCM background.
    These early years built my analytical mindset and laid the foundation for my interest in data and tech.

    <br /><br />
    In college, I've been actively exploring tools like <span className="text-red-400">Python, Excel, Power BI, SQL, Pandas, and Machine Learning</span> to turn raw data into meaningful insights.
    I've worked on real-world datasets, built interactive dashboards, and focused on solving problems with clarity and logic.

    <br /><br />
    I'm currently looking for an opportunity in an international company where I can grow technically and professionally by working on real-world data challenges.
    My long-term dream is to start my own business that uses data to drive smart decisions.

    <br /><br />
    I believe in learning by doing, improving every day, and stepping outside my comfort zone.
    This portfolio reflects that mindset — and it's just the beginning.
  </motion.p>
</Section>


      {/* Skills */}
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

      {/* Services */}
<Section title="Services">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      {
        title: "Web Analytics Reports",
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
    ].map((s,i)=>(
      <motion.div key={i} whileHover={{ y:-5 }} className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg hover:shadow-red-500/40 transition">
        <h4 className="text-red-400 font-semibold mb-2">{s.title}</h4>
        <p className="text-gray-300 text-sm">{s.desc}</p>
      </motion.div>
    ))}
  </div>
</Section>


      <Section title="Projects">
  <motion.div
    whileHover={{ scale: 1.02 }}
    transition={{ type: 'spring', stiffness: 200 }}
  >
    <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg hover:shadow-red-500/40 transition">
      <h3 className="text-xl font-semibold text-red-400">
        Healthcare Data Analysis (Power BI)
      </h3>
      <p className="mt-2 text-gray-300">
        Built a Power BI dashboard to analyze hospital inpatient discharge data focusing on hip replacement trends, costs, and regional patterns.
      </p>
      <p className="mt-2 text-sm text-gray-500">
        Tools: Power BI, CSV Dataset, Data Cleaning, Visualization
      </p>

      {/* Download Links */}
      <div className="mt-4 flex gap-6 flex-wrap text-sm">
        <a
          href="/hospital_inpatient_discharges_totalhipreplacement.csv"
          download
          className="text-blue-400 hover:underline"
        >
          📥 Download Dataset (.csv)
        </a>
        <a
          href="/healthcare_dashboard.pbix"
          download
          className="text-blue-400 hover:underline"
        >
          📊 Download Final Report (.pbix)
        </a>
      </div>
    </div>
  </motion.div>
</Section>

{/* Certificates */}
<Section title="Certificates">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      {
        title: "Data Analyst in Power BI",
        platform: "DataCamp",
        link: "https://www.datacamp.com/statement-of-accomplishment/track/9b5aed4fb70ab980a2928ab4998a45de675911c3?raw=1"
      },
      {
        title: "Data Analytics & Visualization Job Simulation",
        platform: "Accenture (via Forage)",
        link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/T6kdcdKSTfg2aotxT/hzmoNKtzvAzXsEqx8_T6kdcdKSTfg2aotxT_AsLubtupozDyQxyTx_1751256684496_completion_certificate.pdf"
      },
      {
        title: "Data Analytics Job Simulation",
        platform: "Deloitte (via Forage)",
        link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_AsLubtupozDyQxyTx_1751256685736_completion_certificate.pdf"
      }
    ].map((cert, i) => (
      <motion.a
        key={i}
        href={cert.link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -4 }}
        className="block bg-[#1a1a1a] p-5 rounded-lg shadow hover:shadow-red-500/40 transition"
      >
        <h4 className="text-red-400 font-semibold text-lg">{cert.title}</h4>
        <p className="text-gray-400 text-sm mt-1">Platform: {cert.platform}</p>
        <p className="text-blue-400 text-sm mt-2 hover:underline">View Certificate</p>
      </motion.a>
    ))}
  </div>
</Section>



      {/* Contact */}
<Section title="Contact">
  <motion.div
    className="flex justify-center gap-8 flex-wrap text-red-400 text-base"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.3 }}
  >
    <a
      href="https://www.linkedin.com/in/gitesh-sorout-146697289/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-white transition"
    >
      LinkedIn
    </a>
    <a
      href="https://wa.me/918307552640"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-white transition"
    >
      WhatsApp
    </a>
    <a
      href="mailto:giteshsorout@gmail.com"
      className="hover:text-white transition"
    >
      Email
    </a>
  </motion.div>
</Section>



      {/* Footer */}
      <footer className="text-center text-xs text-gray-600 py-6 border-t border-gray-800">
        &copy; {new Date().getFullYear()} Gitesh. All rights reserved.
      </footer>
    </main>
  );
}
