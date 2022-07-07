import Head from "next/head";
import Hero from "../components/Hero";
import Header from "../components/Header";
import SmallCard from "../components/SmallCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";
import Image from "next/image";
import heroImg from "../public/assets/Background/heroImg.png";

export default function Home({ cardsData }) {
  return (
    <div>
      <Head>
        <title>airKrypto</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <Hero />

      <main className='max-w-7xl mx-auto px-8 sm:px-16 pb-16'>
        <section className='pt-6'>
          <h2 className='text-4xl  font-mono font-extrabold py-8'>
            Destinations
          </h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
            {cardsData?.map((item) => {
              return <SmallCard key={item.img} {...item} />;
            })}
          </div>
        </section>
      </main>
      <div className='bg-black pb-8'>
        <main className='max-w-7xl mx-auto px-8 sm:px-16 pb-24'>
          <section className='pt-6'>
            <h2 className='text-white font-mono text-4xl font-extrabold py-8'>
              Find Yourself
            </h2>
            <LargeCard
              img='https://images.squarespace-cdn.com/content/v1/58b0fc3337c5814e3bcb0d0b/1488329783420-ESM6K1JMKKURM1XLNCKO/image-asset.jpeg'
              title='Build Memories that Will Last Forever.'
              description='Escape your routine'
              buttonText='Get Inspired'
            />
          </section>
        </main>
        <div className='bg-white'>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const cardsData = await fetch("https://jsonkeeper.com/b/WTXM").then((res) =>
    res.json()
  );

  return {
    props: {
      cardsData,
    },
  };
}
