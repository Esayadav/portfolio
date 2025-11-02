import React, { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white border-b sticky top-0 z-40">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold text-gray-900">Isha Yadav</h1>
          <p className="text-sm text-gray-500">Computer Science Student | Aspiring Software Engineer</p>
        </div>

        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="text-gray-600 hover:text-indigo-600 transition">About</a>
          <a href="#skills" className="text-gray-600 hover:text-indigo-600 transition">Skills</a>
          <a href="#projects" className="text-gray-600 hover:text-indigo-600 transition">Projects</a>
          <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition">Contact</a>
        </nav>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="menu">
          <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> 
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col px-6 py-4 space-y-2">
            <a href="#about" className="text-gray-600 hover:text-indigo-600 transition">About</a>
            <a href="#skills" className="text-gray-600 hover:text-indigo-600 transition">Skills</a>
            <a href="#projects" className="text-gray-600 hover:text-indigo-600 transition">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}