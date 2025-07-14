import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

const StickyHeaderLanding = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-700 text-white">
      {/* Sticky Header */}
      <motion.header
        className="fixed top-0 left-0 w-full bg-indigo-700 shadow z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-2xl font-bold">MyApp</span>
          <nav className="flex gap-6 text-sm font-medium">
            <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-gray-300">
              Home
            </Link>
            <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-gray-300">
              About
            </Link>
            <Link to="features" smooth={true} duration={500} className="cursor-pointer hover:text-gray-300">
              Features
            </Link>
            <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-gray-300">
              Register
            </Link>
            <button
              onClick={() => navigate("/login")}
              className="bg-white text-indigo-700 px-3 py-1 rounded hover:bg-gray-100"
            >
              Login
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Sections */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center px-4"
        >
          <h1 className="text-5xl font-bold mb-4">Welcome to MyApp</h1>
          <p className="text-lg max-w-xl mx-auto">
            A modern microservices-based platform with full authentication and data access.
          </p>
        </motion.div>
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center bg-indigo-600 px-4">
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-2">About Us</h2>
          <p className="text-lg">This is a fullstack SaaS app with React, Node.js, MongoDB, and Redis microservices.</p>
        </div>
      </section>

      <section id="features" className="min-h-screen flex items-center justify-center bg-purple-600 px-4">
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-2">Features</h2>
          <ul className="text-lg space-y-2">
            <li>✔️ JWT Auth & Role-based Access</li>
            <li>✔️ Redis-powered Microservice Communication</li>
            <li>✔️ Stripe Billing Integration</li>
          </ul>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center bg-indigo-800 px-4 pb-20">
        <div className="max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-2">Contact</h2>
          <p className="text-lg">Reach us at support@myapp.com or join our community!</p>
        </div>
      </section>
    </div>
  );
};

export default StickyHeaderLanding;
