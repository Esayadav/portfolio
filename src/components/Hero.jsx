import React from "react";

export default function Hero() {
  return (
    <section className="py-12">
      <div className="rounded-lg bg-white p-8 shadow-sm">
        <h2 className="text-3xl font-bold text-gray-900">Hi, I'm Isha.</h2>
        <p className="mt-2 text-gray-600">Computer Science student skilled in Python, C, JavaScript, GitHub, and MySQL. Building responsive, user-centric websites and interactive games.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#projects" className="inline-block px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition">View My Work</a>
          <a href="#contact" className="inline-block px-4 py-2 border border-gray-200 rounded hover:bg-gray-50 transition">Contact Me</a>
        </div>
      </div>
    </section>
  );
}