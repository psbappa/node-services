import React, { useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import StickyHeaderLanding from "./StickyHeaderLanding";
import { getUser, logout } from "../auth"; // <-- import auth helpers

const Header = () => {
  const user = getUser();
  // console.log(user);
  const location = useLocation();
  const navigate = useNavigate();

  const isLanding = location.pathname === "/";

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 w-full bg-indigo-700 shadow z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">
          <span
            className="text-2xl font-bold cursor-pointer"
            onClick={() => navigate("/")}
          >
            MyApp
          </span>

          <nav className="flex gap-6 text-sm font-medium">
            {/* {isLanding ? ( */}
            {/* {true ? (
              <>
                <ScrollLink
                  to="home"
                  smooth
                  duration={500}
                  className="cursor-pointer hover:text-gray-300"
                >
                  Home
                </ScrollLink>
                <ScrollLink
                  to="about"
                  smooth
                  duration={500}
                  className="cursor-pointer hover:text-gray-300"
                >
                  About
                </ScrollLink>
                <ScrollLink
                  to="features"
                  smooth
                  duration={500}
                  className="cursor-pointer hover:text-gray-300"
                >
                  Features
                </ScrollLink>
                <ScrollLink
                  to="contact"
                  smooth
                  duration={500}
                  className="cursor-pointer hover:text-gray-300"
                >
                  Contact
                </ScrollLink>
              </>
            ) : (
              <>
                <Link to="/" className="hover:text-gray-300">
                  Home
                </Link>
              </>
            )}  */}

            

            <span>Welcome :</span>
            <Link to="/junky-bunky">Contacts</Link>
            <Link to="/redux">Redux</Link>
            <Link to="/news-feed">News Blog</Link>
            <Link to="/eCommerce">Ecommerce</Link>
            {user ? (
              <>
                <Link to="/admin-dashboard">Admin Dashboard</Link>
                <button onClick={handleLogout} className="text-red-500 underline">
                    Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => navigate("/login")}
                  className="bg-white text-indigo-700 px-3 py-1 rounded hover:bg-gray-100"
                >
                  Login
                </button>
              </>
            )}
          </nav>
        </div>
      </motion.header>

      {/* <StickyHeaderLanding /> */}
    </>
  );
};

export default Header;
