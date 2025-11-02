import React from "react";

const projects = [
  {
    title: "Mitho Xa — Restaurant Website",
    stack: "HTML, CSS, JavaScript",
    desc: "Responsive restaurant site with 10+ sections, optimized for mobile and fast load times.",
    github: "https://github.com/Esayadav/restaurant"
  },
  {
    title: "Hangman Game",
    stack: "C",
    desc: "Text-based Hangman with 50+ words and a clue system to improve guess accuracy.",
    github: ""
  },
  {
    title: "Ball Falling Game",
    stack: "HTML, CSS, JavaScript",
    desc: "Browser game with collision detection and dynamic obstacles.",
    github: ""
  }
];

export default function Projects() {
  return (
    <section id="projects" className="mt-10">
      <h3 className="text-2xl font-semibold">Projects</h3>
      <div className="mt-4 space-y-4">
        {projects.map((p) => (
          <div key={p.title} className="bg-white p-4 rounded shadow-sm hover:shadow-md transition">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-semibold">{p.title}</h4>
                <p className="text-sm text-gray-600">{p.stack}</p>
                <p className="mt-2 text-gray-700 text-sm">{p.desc}</p>
              </div>
              {p.github ? (
                <a className="ml-4 text-indigo-600 hover:text-indigo-700 transition text-sm" href={p.github} target="_blank" rel="noreferrer">GitHub ↗</a>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}