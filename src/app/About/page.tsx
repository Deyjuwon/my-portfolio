"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import jay from '../../../public/jay2M.png'
import '../fonts.css';
import Link from "next/link";
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
            <div className="flex flex-col gap-16 items-center">
             
                <Link href="/" passHref className="-rotate-90 cursor-pointer text-[#1d1d1d] text-[14px] font-montserrat font-medium tracking-widest hover:line-through">
                    Index
                </Link>
         
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
          <p  style={{ fontFamily: "GrandSlang" }} className="text-[32px] text-[#1d1d1d] font-semibold tracking-wider">I'm Adejuwon. A creative developer, problem solver and tech lover.</p>
          <div className="flex flex-col gap-7 pt-10 text font-montserrat font-medium text-[14px] text-[#1d1d1d] text-justify">
            <p className="leading-6">My journey into tech didn’t start with a computer — it started with curiosity. While studying Biochemistry at the University of Lagos, I stumbled upon Python and data analysis during a long school break. What started as a curiosity quickly became a passion. I was fascinated by how a few lines of code could uncover patterns, solve problems, and tell meaningful stories through data. But I didn't want to just analyze — I wanted to build.</p>
            <p className="leading-6">That drive led me into web development, where I began turning static ideas into interactive experiences using tools like React, Tailwind, and TypeScript. As I gained more confidence, I naturally expanded into mobile app development, bringing solutions closer to users’ hands and everyday lives. The creative process of moving an idea from thought to screen is something I’ve come to truly enjoy — and it’s what keeps me going.</p>
            <p className="leading-6">Along the way, I also developed a deep interest in the business side of technology — from tech sales to business development. I became curious about how great products not only get built but also reach the right people. That curiosity led me to my current role at Tix.africa, where I work in business development and tech sales, helping the company grow and connect with the right users. For me, it's not just about writing good code — it's about building things people need and making sure they actually find and use them.</p>
            <p className="leading-6">This is one of my favourite quotes: </p>
            <p className=" italic text-[40px] font-semibold" style={{ fontFamily: "GrandSlang" }}>“What’s the point of building something great if no one ever sees it?”</p>
            <p className="leading-6">Today, I’m a general tech lover: a builder, a thinker, and a problem-solver who enjoys learning new things and working on meaningful projects — whether it’s writing clean code, pitching a product, or collaborating with a team to launch something great.</p>
          </div>

          <div className="pt-10 flex flex-col gap-5">
            <p className=" text-[24px] font-semibold tracking-widest" style={{ fontFamily: "GrandSlang" }}>SKILLS</p>
            <p className="font-montserrat text-[14px] leading-6 font-medium">React.js / Next.js / TypeScript/ Tailwind CSS / React Native / Python / Microsoft Excel / FireBase / Git / Figma / Business development</p>
            <button
                className="mt-10 h-16 w-fit px-10 rounded-3xl border font-semibold text-[#594100] bg-[#FFC6C6] text-2xl transform transition-transform duration-300 hover:translate-x-2 cursor-pointer"
                style={{ fontFamily: "GrandSlang" }}
                >
                Contact me
            </button>
          </div>
          
        </div>

        <div
          className="w-[40%] py-20 flex justify-end pl-20"
        >
            <div className="w-[90%] h-[50px]">
                <Image src={jay} alt="Image of Adejuwon" className="h-[460px] object-cover"/>
            </div>
            
          
        </div>

      </div>
    </>
  );
}
