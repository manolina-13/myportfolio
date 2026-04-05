import React from "react";

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">

      {/* Navbar */}
      <nav className="flex justify-between p-6 border-b border-gray-800">
        <h1 className="text-xl font-bold">Manolina</h1>
        <div className="space-x-6">
          <a href="#about" className="hover:text-gray-400">About</a>
          <a href="#projects" className="hover:text-gray-400">Projects</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center h-[80vh] px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm Manolina 👋
        </h1>
        <p className="text-gray-400 max-w-xl">
          Final Year CSE Student | Machine Learning & Computer Vision Enthusiast  
          Building intelligent systems for real-world problems.
        </p>
        <a
          href="#projects"
          className="mt-6 px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition"
        >
          View Projects
        </a>
      </section>

      {/* About */}
      <section id="about" className="px-8 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-400">
          I am a final-year Computer Science student at University of Kalyani.
          My interests include Machine Learning, Computer Vision, and building
          assistive technologies. Currently working on a gesture-to-speech system
          for people with speech impairments.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="px-8 py-16 bg-gray-900">
        <h2 className="text-3xl font-semibold mb-8 text-center">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="border border-gray-700 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-bold">Gesture-to-Speech System</h3>
            <p className="text-gray-400 mt-2">
              ML-based system using MediaPipe + KNN to convert hand gestures into speech.
            </p>
          </div>

          <div className="border border-gray-700 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-bold">Bank Management System</h3>
            <p className="text-gray-400 mt-2">
              Java Servlet-based system with authentication and database integration.
            </p>
          </div>

        </div>
      </section>

      {/* Skills */}
      <section className="px-8 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {["Python", "Java", "Machine Learning", "OpenCV", "React", "SQL"].map(skill => (
            <span
              key={skill}
              className="px-4 py-2 border border-gray-700 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-8 py-16 text-center bg-gray-900">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-400">manolina@example.com</p>
        <p className="text-gray-400 mt-2">GitHub: github.com/yourprofile</p>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-gray-800 text-gray-500">
        © 2026 Manolina
      </footer>

    </div>
  );
}
