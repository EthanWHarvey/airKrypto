import Image from "next/image";
function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className='bg-black relative py-4 '>
      <div className='relative h-96 min-w-[300px]'>
        <Image
          src={img}
          layout='fill'
          objectFit='cover'
          className='rounded-xl'
          alt='/'
        />
      </div>
      <div className='absolute top-1/3 left-12'>
        <h3 className='text-4xl mb-3 w-64 font-semibold'>{title}</h3>
        <p>{description}</p>
        <button className='text-sm text-white bg-black rounded-lg mt-5 px-4 py-2'>
          {buttonText}
        </button>
      </div>
    </section>
    
  );
}

export default LargeCard;
