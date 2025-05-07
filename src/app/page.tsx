"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import twitter from '../../public/twitter.svg';
import instagram from '../../public/instagram.svg';
import linkedin from '../../public/linkedin.svg';
import './fonts.css';

export default function Home() {
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

      <div className="bg-[#FFDBDB] h-dvh px-5 py-8 flex overflow-hidden">
        <div className="flex flex-col items-center w-[5%] justify-between ">
          <div className="flex flex-col gap-8 items-center">
            <Image src={twitter} alt="icon" className="h-[20px] w-[20px]" />
            <Image src={instagram} alt="icon" className="h-[25px] w-[25px]" />
            <Image src={linkedin} alt="icon" className="h-[25px] w-[25px]" />
            <div className="h-[150px] w-[1px] bg-[#1d1d1d] "></div>
          </div>
          <div className="transform -rotate-90">
            <p className="text-[#1d1d1d] text-[12px] font-montserrat font-semibold">
              &copy; / 2025
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-end w-[35%] pl-20 pb-16 font-montserrat text-[#232b2b]">
          <p className="font-semibold text-[18px] pb-3">ADEJUWON OSHINDORO</p>
          <p className="text-[14px] pb-2">
            Creative Developer / Mobile Developer / <br />
            AI Lover.
          </p>
          <p className="text-[14px]">
            Currently Working as a Software Engineer <br />
            at Stark42 Studio.
          </p>
        </div>

        <div
          className="w-[60%] text-[#644A07] leading-[0.9] flex flex-col gap-5 "
          style={{ fontFamily: "GrandSlang" }}
        >
          {["INDEX", "WORK", "ABOUT", "CONTACT"].map((text, index) => (
            <motion.p
              key={index}
              className="w-fit text-[160px] tracking-wide cursor-pointer hover:italic"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {text}
            </motion.p>
          ))}
        </div>

      </div>
    </>
  );
}
