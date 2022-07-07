import Image from "next/image";

function SmallCard({ img, title }) {
  console.log(img);
  return (
    <div className='cursor-pointer hover:scale-105 transition duration-300 ease-out'>
      <div className='relative h-80 w-80'>
        <Image src={img} layout='fill' className='rounded-xl' alt='/' />
      </div>
      <h3 className='font-mono text-2xl mt-3'>{title}</h3>
    
    </div>
  );
}

export default SmallCard;
