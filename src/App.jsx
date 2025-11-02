// Updated portfolio reflecting all details from Resume_Isha.pdf
// Isha Yadav — Personal Portfolio (React + Tailwind)

import React from 'react'
import { motion } from 'framer-motion'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 bg-white/80 backdrop-blur-md border-b z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">Isha Yadav</h1>
          <nav className="space-x-6 text-sm font-medium">
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#skills" className="hover:text-indigo-600">Skills</a>
            <a href="#projects" className="hover:text-indigo-600">Projects</a>
            <a href="#education" className="hover:text-indigo-600">Education</a>
            <a href="#certifications" className="hover:text-indigo-600">Certifications</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-50 to-sky-50 py-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <motion.div initial={{opacity: 0, y: 30}} animate={{opacity: 1, y: 0}} transition={{duration: 0.8}} className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">Hi, I'm <span className="text-indigo-600">Isha Yadav</span></h2>
            <p className="mt-4 text-lg text-gray-700 max-w-xl">A Computer Science student passionate about building responsive, user-friendly websites and creative games. Skilled in Python, C, JavaScript, and MySQL — aspiring frontend developer and software engineer.</p>
            <div className="mt-6 flex gap-4">
              <a href="#projects" className="px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">View Projects</a>
              <a href="mailto:ydvesa@gmail.com" className="px-5 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50">Contact</a>
            </div>
          </motion.div>
          <motion.div initial={{scale: 0.9, opacity: 0}} animate={{scale: 1, opacity: 1}} transition={{duration: 0.8}}>
            <img src="/avatar-placeholder.png" alt="Isha Yadav" className="w-64 h-64 rounded-full shadow-lg object-cover" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="text-gray-700 leading-relaxed">I’m a Computer Science student at Jain (Deemed-to-be University), Bangalore with a strong academic record (9.3/10 CGPA). I’m skilled in Python, C, JavaScript, and MySQL and have hands-on experience creating interactive games and responsive websites. I’m deeply interested in software engineering, UI development, and working in collaborative tech teams.</p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-8">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Skill title="Programming Languages" details="Python, C, Java, JavaScript, HTML, CSS" />
            <Skill title="Databases" details="MySQL, MongoDB" />
            <Skill title="Tools & Technologies" details="Git, GitHub, VSCode" />
            <Skill title="Software Concepts" details="OOP, Data Structures & Algorithms, Computer Networks" />
            <Skill title="Development Methodologies" details="Agile, Scrum" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard title="Mitho Xa – Restaurant Website" tech="HTML, CSS, JavaScript" desc="Designed and deployed a fully responsive restaurant website with animations, optimized for mobile and desktop. Reduced page load time to under 2 seconds and ensured 100% cross-browser compatibility." link="https://github.com/Esayadav/restaurant" />
          <ProjectCard title="Hangman Game" tech="C" desc="Built a text-based Hangman game with 50+ words, dynamic difficulty, and a clue system that improved average guess accuracy by 30%." />
          <ProjectCard title="Ball Falling Game" tech="HTML, CSS, JavaScript" desc="Developed a browser-based falling-ball game with real-time collision detection, dynamic obstacles, and zero logic errors after 200+ tests." />
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-8">Education</h2>
          <EduCard title="Bachelor of Technology in Computer Science" place="Jain (Deemed To Be University), Bangalore" details="CGPA: 9.3/10 | July 2022 - Present" />
          <EduCard title="Trinity International SS & College" place="Kathmandu, Nepal" details="CGPA: 3.34/4 | 2019 - 2021" />
          <EduCard title="Learning Realm International School" place="Kathmandu, Nepal" details="GPA: 3.65/4 | 2020" />
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-8">Courses & Certifications</h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          <li>Switching, Routing and Wireless Essentials - CCNAv7 (Hands-on with Cisco Packet Tracer) — <a href="https://drive.google.com/file/d/1wwQGEOs_rV4_6xLjio7hGD182ilDAu7H/view?usp=sharing" className="text-indigo-600 underline">View Certificate</a></li>
          <li>Artificial Intelligence Basics — <a href="https://drive.google.com/file/d/1mTCSQRiMTiASY5q2YzNZC3A_5RbGAEjL/view" className="text-indigo-600 underline">View Certificate</a></li>
          <li>Linux Fundamentals – Coursera (Hands-on with 20+ shell commands) — <a href="https://drive.google.com/file/d/1Fdvv4FpbJGbU372CPECszEIOHET19wjK/view" className="text-indigo-600 underline">View Certificate</a></li>
          <li>Python Basics — <a href="https://drive.google.com/file/d/1giC3PYKLCq5AsQOvbIfY_88k1GkxwGdr/view" className="text-indigo-600 underline">View Certificate</a></li>
          <li>HTML5 - Infosys — <a href="https://drive.google.com/file/d/1SqfY_bB4qraqlMMxDht81XUnCkE7QMHN/view" className="text-indigo-600 underline">View Certificate</a></li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-indigo-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
          <p className="text-gray-700 mb-6">Have a question or want to collaborate? Feel free to reach out!</p>
          <p><strong>Email:</strong> <a href="mailto:ydvesa@gmail.com" className="text-indigo-600 underline">ydvesa@gmail.com</a></p>
          <p className="mt-2"><strong>Phone:</strong> 6360681020</p>
          <div className="mt-4 space-x-4">
            <a href="https://www.linkedin.com/in/isha-yadav-a99a38256/" className="text-indigo-600 underline">LinkedIn</a>
            <a href="https://github.com/Esayadav" className="text-indigo-600 underline">GitHub</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-6 text-center text-sm">
        © {new Date().getFullYear()} Isha Yadav — All Rights Reserved. Built with React & TailwindCSS.
      </footer>
    </div>
  )
}

function Skill({title, details}){
  return (
    <div className="p-4 bg-white shadow-sm rounded-lg border">
      <h3 className="font-semibold text-lg mb-2 text-indigo-700">{title}</h3>
      <p className="text-gray-700 text-sm">{details}</p>
    </div>
  )
}

function ProjectCard({title, tech, desc, link}){
  return (
    <div className="p-5 bg-white border rounded-lg shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold text-indigo-700">{title}</h3>
      <p className="text-sm text-gray-600 mt-1">{tech}</p>
      <p className="mt-3 text-gray-700 text-sm">{desc}</p>
      {link && <a href={link} target="_blank" rel="noreferrer" className="inline-block mt-3 text-indigo-600 underline">View on GitHub</a>}
    </div>
  )
}

function EduCard({title, place, details}){
  return (
    <div className="p-5 bg-white border rounded-lg shadow-sm mb-4">
      <h3 className="text-lg font-semibold text-indigo-700">{title}</h3>
      <p className="text-sm text-gray-600">{place}</p>
      <p className="text-sm text-gray-700 mt-1">{details}</p>
    </div>
  )
}