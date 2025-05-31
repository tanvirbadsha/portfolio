import Link from "next/link";
import React from "react";
import * as motion from "motion/react-client";
const projects = [
  {
    projectTitle: "Bengal LMS",
    imgSrc: "/images/projects/bengal_lms.webp",
    features: [
      "Sign in, Enroll, Watch Course Videos, Download course resources.",
      "self-evaluate through quizzes, view their profile.",
    ],
    link: "https://bengallms.netlify.app/",
  },
  {
    projectTitle: "Crickball.xyz",
    imgSrc: "/images/projects/crickball.webp",
    features: [
      "Get live scores of football, cricket, show fixtures of upcoming, recent and live data",
      "watch live game of football, cricket (premium subscription)",
    ],
    link: "https://cricball.xyz/",
  },
];
function Projects() {
  return (
    <section id="Projects">
      <motion.h1
        initial={{ opacity: 0, display: "none" }}
        animate={{ opacity: 1, display: "block" }}
        transition={{
          delay: 2,
          duration: 6,
        }}
        className="text-1xl md:text-2xl lg:text-5xl text-gray-300 text-center mb-4 p-1"
      >
        Projects
      </motion.h1>
      {/* card container */}
      <div className="flex justify-center gap-10">
        {/* Single Card Item */}
        {projects?.map((project, index) => (
          <a target="_blank" href={project.link}>
            <motion.div
              initial={{ opacity: 0, x: -70 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 10,
                delay: 2,
                damping: 25,
                duration: 4,
              }}
              className="w-80 bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105 duration-500 cursor-pointer mb-8"
            >
              <img
                className="h-40 w-full object-cover"
                src={project.imgSrc}
                alt="Bengal LMS Screenshot"
              />
              <div className="p-4 text-white">
                <h3 className="text-lg font-semibold mb-2">
                  Project Title: {project.projectTitle}
                </h3>

                <p className="text-sm mb-1 font-medium text-amber-400">
                  Features:
                </p>

                <ul className="list-disc list-inside text-sm space-y-1">
                  {project.features.map((feature, idx) => (
                    <li>{feature}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
