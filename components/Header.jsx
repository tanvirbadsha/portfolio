"use client";
//import * as motion from "motion/react-client";
import { motion, AnimatePresence } from "motion/react"; //for client side
import { useState } from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { TfiMenu } from "react-icons/tfi";
import { FiX } from "react-icons/fi";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const toggleMenu = () => setIsOpen((p) => !p);
  const openContactForm = () => setFormOpen(true);
  const closeContactForm = () => setFormOpen(false);
  return (
    <header className="absolute w-full z-50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* logo name */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.3,
            duration: 1.2,
          }}
          className="flex items-center"
        >
          <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100 flex items-center justify-center text-purple-600 font-bold text-xl mr-3">
            T
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
            Tanvir
          </span>
        </motion.div>
        {/* desktop navigation */}
        <nav className="lg:flex hidden space-x-8">
          {["Home", "About", "Projects", "Experience", "Contact"].map(
            (item, index) => (
              <motion.a
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.7 * index * 0.2,
                }}
                key={index}
                className="relative
              text-gray-200 hover:via-violet-600
              dark:hover:text-violet-400 font-medium transition-colors duration-300 group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            )
          )}
        </nav>
        {/* social icons- desktop */}
        <div className="md:flex hidden items-center space-x-4">
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.3,
              duration: 0.8,
            }}
            className="text-grey-700 dark:text-grey-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
            href="#"
          >
            <FaGithub className="w-5 h-5" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.3,
              duration: 0.8,
            }}
            className="text-grey-700 dark:text-grey-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
            href="#"
          >
            <FaLinkedin className="w-5 h-5" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.3,
              duration: 0.8,
            }}
            className="text-grey-700 dark:text-grey-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
            href="#"
          >
            <FaSquareInstagram className="w-5 h-5" />
          </motion.a>
        </div>
        {/* hire me contact button */}
        <motion.button
          onClick={openContactForm}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 1.6,
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
          className="ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 font-bold hover:from-violet-700 hover:to-purple-700 hover:text-white transition-all duration-500"
        >
          Hire Me
        </motion.button>
        {/* mobile menu button */}
        <div className="md:hidden flex items-center ">
          <motion.button
            onClick={toggleMenu}
            whileTap={{ scale: 0.7 }}
            className="text-gray-300"
          >
            {isOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <TfiMenu className="h-6 w-6" />
            )}
          </motion.button>
        </div>
      </div>
      {/* mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className="md:hidden overflow-hidden bg-gray-900 shadow-lg px-4 py-5 space-y-5"
      >
        <nav className="flex flex-col space-y-3">
          {["Home", "About", "Projects", "Experience", "Contact"].map(
            (item, index) => (
              <a
                key={index}
                className="text-gray-300 font-medium py-2"
                href="#"
                onClick={toggleMenu}
              >
                {item}
              </a>
            )
          )}
        </nav>
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex space-x-5">
            <a href="#">
              <FaGithub className="h-5 w-5 text-gray-300" />
            </a>
            <a href="#">
              <FaLinkedin className="h-5 w-5 text-gray-300" />
            </a>
            <a href="#">
              <FaInstagram className="h-5 w-5 text-gray-300" />
            </a>
          </div>
          <button
            onClick={() => {
              toggleMenu();
              openContactForm();
            }}
            className="mt-4 bg-gradient-to-r from-violet-600 to-violet-400 block w-full px-4 py-2 rounded-lg font-bold"
          >
            Contact Me
          </button>
        </div>
      </motion.div>
      {/* contact form */}
      <AnimatePresence>
        {formOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 30 }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 200,
                duration: 0.8,
              }}
              className="bg-gray-800 rounded-xl shadow-lg w-full max-w-md p-6"
            >
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-gray-300 dark:text-white">
                  Get In Touch
                </h1>
                <button>
                  <FiX
                    className="w-5 h-5 text-gray-300 font-extrabold"
                    onClick={closeContactForm}
                  />
                </button>
              </div>
              {/* input forms */}
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="bock text-sm font-medium text-gray-300 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="your name..."
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="bock text-sm font-medium text-gray-300 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your email..."
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="bock text-sm font-medium text-gray-300 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="How can I help you?"
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full px-4 py-2 bg-gradient-to-r from-violet-600 to-violet-400 hover:from-violet-700 hover:to-purple-700 transition-all duration-300 rounded-lg shadow-md hover:shadow-lg hover:shadow-violet-600/50"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
