import React from "react";

const certs = [
  "Switching, Routing and Wireless Essentials – CCNAv7",
  "Artificial Intelligence Basics",
  "Linux Fundamentals – Coursera",
  "Python Basics",
  "HTML5 – Infosys"
];

export default function Certifications() {
  return (
    <section id="certifications" className="mt-10">
      <h3 className="text-2xl font-semibold">Certifications</h3>
      <ul className="mt-3 space-y-2 text-gray-700">
        {certs.map((c) => <li key={c} className="bg-white p-3 rounded shadow-sm text-sm">{c}</li>)}
      </ul>
    </section>
  );
}