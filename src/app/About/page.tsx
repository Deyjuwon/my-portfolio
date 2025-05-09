"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import jay from '../../../public/jay2M.png'
import '../fonts.css';

export default function About() {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 2000); // 2s animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isAnimating && (
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-full bg-black z-50"
          />
        )}
      </AnimatePresence>

      <div className="bg-[#FFDBDB]  px-5 py-14 flex overflow-hidden">
        <div className="w-[5%] h-full fixed left-0 top-0 flex flex-col justify-between items-center py-12 z-10">
            <div className="flex flex-col gap-8 items-center">
            <p className="-rotate-90 text-[#1d1d1d] text-[14px] font-montserrat font-medium tracking-widest">
                Index
            </p>
            <div className="h-[150px] w-[1px] bg-[#1d1d1d]" />
            </div>
            <div className="-rotate-90">
            <p className="text-[#1d1d1d] text-[14px] font-montserrat font-medium tracking-widest">
                &copy; / 2025
            </p>
            </div>
        </div>

        <div className="flex flex-col w-[55%] pl-32 py-20 ">
          <p className="text-[200px] text-[#644A07] font-bold tracking-wider leading-[1.2]" style={{ fontFamily: "GrandSlang" }}>About</p>
          <p  style={{ fontFamily: "GrandSlang" }} className="text-[32px] text-[#1d1d1d] font-semibold tracking-wider">I'm Adejuwon. A creative developer, problem solver and data analyst.</p>
          <div className="flex flex-col gap-7 pt-10 text font-montserrat font-medium text-[14px] text-[#1d1d1d]">
            <p>My name is Adejuwon Oshindoro, and my journey into tech didn’t start with a computer — it started with curiosity. Growing up, I was always the one asking “Why does this work the way it does?” That curiosity led me to study Biochemistry at the University of Lagos, where I graduated with first-class honors. But somewhere between analyzing chemical reactions and long hours in the lab, I discovered something else: the thrill of building things digitally. A website here. A small app there. Before long, what started as a side interest became a passion I couldn’t ignore.</p>
            <p>I dove into the world of frontend development, teaching myself tools like React, TypeScript, and TailwindCSS. The more I built, the more I realized how much I loved turning ideas into interactive experiences. Whether it was designing a landing page for a local business, creating a ticketing system for event organizers, or building tools to help people navigate their day-to-day lives — I found purpose in solving problems through code.</p>
            <p>But it didn’t stop at my screen. I’ve had the privilege of teaching software development to children in underserved communities and working with teams that believe in creating meaningful change. I also explore data analytics and AI, constantly learning new ways to make my work smarter and more impactful.</p>
            <p>Today, I’m a software engineer focused on creating clean, thoughtful, and scalable web experiences. I still ask “Why?” — but now I use that question to build, to teach, and to help others do more with technology.</p>
          </div>
          
        </div>

        <div
          className="w-[40%] py-20 flex justify-end pr-20"
        >
            <div className="w-[90%] h-[50px]">
                <Image src={jay} alt="Image of Adejuwon" className="h-[460px] object-cover"/>
            </div>
            
          
        </div>

      </div>
    </>
  );
}
