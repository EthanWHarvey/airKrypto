import Image from "next/image";

import heroImg from "../public/assets/Background/heroImg.png";

function Hero() {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
      <Image src={heroImg} layout='fill' objectFit='cover' alt='/' />

      <div className='absolute bottom-10 text-white w-full pl-24'>
        <p className='text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold'>
          Book your next
        </p>
        <p className='text-base sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl pl-8 font-bold'>
          trip with Crypto.
        </p>
      </div>
    </div>
  );
}

export default Hero;
