import Image from "next/image";
import twitter from '../../public/twitter.svg';
import instagram from '../../public/instagram.svg';
import linkedin from '../../public/linkedin.svg';

export default function Home() {
  return (
    <div className="bg-[#FFDBDB] h-dvh px-5 py-8 flex ">
      <div  className="flex flex-col items-center w-[5%] justify-between">
        <div className="flex flex-col gap-8 items-center">
          <Image src={twitter} alt="icon" className="h-[15px] w-[15px]" />
          <Image src={instagram} alt="icon" className="h-[20px] w-[20px]"  />
          <Image src={linkedin} alt="icon" className="h-[20px] w-[20px]"  />
          <div className="h-[150px] w-[1px] bg-[#1d1d1d] "></div>
        </div>
        <div className="transform -rotate-90">
          <p className="text-[#1d1d1d] text-[12px]">&copy; / 2025</p>
        </div>
        

      </div>

      <div className="flex flex-col justify-end w-[35%] pl-22 pb-16 font-montserrat text[#1d1d1d]">
        <p className="font-bold text-[20px] pb-3">ADEJUWON OSHINDORO</p>
        <p className="text-base pb-2">Creative developer / Mobile developer / <br />
        AI lover.</p>
        <p className="text-base">Currently working as a software enginner <br />
        at Stark42 studio.</p>
      </div>

      <div className="w-[60%] font-bebas text-[#644A07] leading-[0.8] flex flex-col">
        <p className="text-[200px] tracking-widest">INDEX</p>
        <p className="text-[200px] tracking-widest">WORK</p>
        <p className="text-[200px] tracking-widest">ABOUT</p>
        <p className="text-[200px] tracking-widest">CONTACT</p>
      </div>

    </div>
  );
}
