import Image from "next/image";
import twitter from '../../public/twitter.svg';
import instagram from '../../public/instagram.svg';
import linkedin from '../../public/linkedin.svg';
import './fonts.css'


export default function Home() {
  return (
    <div className="bg-[#FFDBDB] h-dvh px-5 py-8 flex ">
      <div  className="flex flex-col items-center w-[5%] justify-between ">
        <div className="flex flex-col gap-8 items-center">
          <Image src={twitter} alt="icon" className="h-[20px] w-[20px]" />
          <Image src={instagram} alt="icon" className="h-[25px] w-[25px]"  />
          <Image src={linkedin} alt="icon" className="h-[25px] w-[25px]"  />
          <div className="h-[150px] w-[1px] bg-[#1d1d1d] "></div>
        </div>
        <div className="transform -rotate-90">
          <p className="text-[#1d1d1d] text-[12px] font-montserrat font-semibold">&copy; / 2025</p>
        </div>
        

      </div>

      <div className="flex flex-col justify-end w-[35%] pl-20 pb-16 font-montserrat text-[#232b2b]">
        <p className="font-semibold text-[18px] pb-3" >ADEJUWON OSHINDORO</p>
        <p className="text-[14px] pb-2">Creative developer / Mobile developer / <br />
        AI lover.</p>
        <p className="text-[14px]">Currently working as a software enginner <br />
        at Stark42 studio.</p>
      </div>

      <div className="w-[60%] text-[#644A07] leading-[0.9] flex flex-col gap-5" style={{fontFamily: 'GrandSlang'}}>
        <p className="text-[160px] tracking-wide">INDEX</p>
        <p className="text-[160px] tracking-wide">WORK</p>
        <p className="text-[160px] tracking-wide">ABOUT</p>
        <p className="text-[160px] tracking-wide">CONTACT</p>
      </div>

    </div>
  );
}
