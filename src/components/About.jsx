import React from "react";

export default function About() {
  return (
    <section id="about" className="mt-10">
      <h3 className="text-2xl font-semibold">About</h3>
      <div className="mt-4 space-y-4">
        <p className="text-gray-700">
          Computer Science student interested in software engineering, UI development, and collaborative tech projects. Experienced in building interactive games and responsive websites.
        </p>

        <div className="bg-white p-4 rounded shadow-sm">
          <h4 className="font-semibold">Education</h4>
          <ul className="mt-2 text-sm text-gray-700 space-y-2">
            <li>
              <strong>B.Tech Computer Science</strong> — Jain (Deemed-to-be University), Bangalore (Jul 2022 - Present) • CGPA: 9.3/10
            </li>
            <li>
              <strong>Trinity International SS & College</strong>, Kathmandu (2019 - 2021) • CGPA: 3.34/4
            </li>
            <li>
              <strong>Learning Realm International School</strong>, Kathmandu • GPA: 3.65/4
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}