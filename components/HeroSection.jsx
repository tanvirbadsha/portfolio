"use client";
import { motion } from "motion/react";
function HeroSection() {
  return (
    <section className="h-screen bg-gradient-to-b from-violet-900 to-black flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative overflow-hidden">
      {/* left side */}
      <div className="z-40 xl:mb-0 mb-[20%]">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.3,
            duration: 1.5,
          }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold z-10 mb-6"
        >
          Building Fast <br /> Reliable Results
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.8,
            duration: 1.5,
          }}
          className="text-xl md:text-1xl lg:text-2xl text-purple-200 max-w-2xl"
        >
          I deliver robust, production-ready websites and web apps with speed
          and precision. Every project is backed by clean code, clear
          communication, and a commitment to getting it done, on time, every
          time.
        </motion.p>
      </div>
      {/* Right Side */}
      <div className=" ">
        <div className=" rounded-lg overflow-hidden">
          <motion.img
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{
              type: "spring",
              damping: 40,
              stiffness: 50,
              delay: 2,
              duration: 2,
            }}
            className="w-full h-full object-cover relative bottom-30 z-100"
            src="/images/my_photo.png"
            alt="my_photo"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
