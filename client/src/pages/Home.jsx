import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import StickyHeaderLanding from "../components/StickyHeaderLanding";

const Home = () => {
  return (
    <>
      <div className="h-screen w-full bg-gradient-to-br from-indigo-500 to-purple-600 flex flex-col items-center justify-center text-white text-center p-4">
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          Welcome to MyApp!
        </motion.h1>

        <motion.p
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl max-w-xl"
        >
          A modern microservices-based app with authentication, role access, and
          secure data handling.
        </motion.p>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-8 flex gap-4"
        >
          <Link
            to="/login"
            className="bg-white text-purple-600 px-6 py-2 rounded-full font-semibold shadow hover:bg-gray-100 transition"
          >
            Get Started
          </Link>
          <Link
            to="/register"
            className="border border-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition"
          >
            Register
          </Link>
        </motion.div>
      </div>

      {/* <StickyHeaderLanding /> */}
    </>
  );
};

export default Home;
