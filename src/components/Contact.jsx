import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="mt-10">
      <h3 className="text-2xl font-semibold">Contact</h3>
      <div className="mt-4 bg-white p-4 rounded shadow-sm">
        <p className="text-gray-700"><strong>Email:</strong> <a className="text-indigo-600 hover:underline" href="mailto:ydvesa@gmail.com">ydvesa@gmail.com</a></p>
        <p className="mt-2 text-gray-700"><strong>Phone:</strong> <a className="text-indigo-600 hover:underline" href="tel:+916360681020">6360681020</a></p>
        <p className="mt-2 text-gray-700"><strong>LinkedIn:</strong> <a className="text-indigo-600 hover:underline" href="https://www.linkedin.com/in/isha-yadav-a99a38256/" target="_blank" rel="noreferrer">linkedin.com/in/isha-yadav-a99a38256</a></p>
        <p className="mt-2 text-gray-700"><strong>GitHub:</strong> <a className="text-indigo-600 hover:underline" href="https://github.com/Esayadav" target="_blank" rel="noreferrer">github.com/Esayadav</a></p>
      </div>
    </section>
  );
}