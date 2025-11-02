import React from "react";

const skills = [
  "Python", "C", "Java", "JavaScript", "HTML", "CSS",
  "MySQL", "MongoDB", "Git", "GitHub", "VSCode",
  "OOP", "Data Structures", "Computer Networks", "Agile"
];

export default function Skills() {
  return (
    <section id="skills" className="mt-10">
      <h3 className="text-2xl font-semibold">Skills</h3>
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
        {skills.map((s) => (
          <div key={s} className="bg-white p-3 rounded shadow-sm text-sm text-gray-700 hover:shadow-md transition">
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}