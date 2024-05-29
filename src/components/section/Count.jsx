import o1 from "/public/o1.svg";
import o2 from "/public/satu.svg";

import Slideshow from "../Slideshow";

export default function Count() {
  const imageUrls = [
    "https://i.pinimg.com/564x/be/28/3d/be283d1caffc0cee9bd10db5f7a2aa32.jpg",
    "https://i.pinimg.com/564x/7a/b5/9c/7ab59cbaa855a770d8285f3b075fac18.jpg",
    "https://i.pinimg.com/564x/ff/fd/f2/fffdf27ee3bc56078a4fa335e35ab87b.jpg",
  ];
  return (
    <div className="mx-4 lg:mx-20 lg:mb-12 lg:mt-36 ">
      <div className="relative mt-48">
        <img
          src={o1}
          alt="o"
          className="absolute -left-20 rotate-180 -top-32"
        />
      </div>
      <section className="lg:grid flex flex-col gap-8 lg:grid-cols-3">
        <section className="lg:col-span-1 p-6 border-2 rounded-xl ">
          <Slideshow images={imageUrls} />
        </section>

        <section className="lg:col-span-2 flex flex-col lg:gap-12 gap-4 lg:ml-8 max-md:my-8 relative">
          <div className="absolute lg:w-[600px] lg:h-[500px] bg-red opacity-20 rounded-full top-12 blur-[200px] -z-10"></div>

          <div className="flex max-md:border-2 justify-center max-md:rounded-xl lg:justify-between items-center">
            <img src={o1} alt="o" className="rotate-180 hidden md:block" />
            <Card count="3900+" desc="Peserta" />
          </div>
          <div className="flex max-md:border-2 justify-center max-md:rounded-xl lg:justify-between items-center">
            <Card count="15+" desc="Event" />
            <img src={o2} alt="o" className="rotate-180 hidden md:block" />
          </div>
          <div className="flex max-md:border-2 justify-center max-md:rounded-xl lg:justify-between items-center">
            <img src={o1} alt="o" className="rotate-90 hidden md:block" />
            <Card count="30+" desc="Media Partner" />
          </div>
        </section>
      </section>
    </div>
  );
}

const Card = ({ count, desc }) => {
  return (
    <div className="text-center bg-white bg-opacity-55 border-2 backdrop-blur-md rounded-lg border-white px-16 py-8">
      <h1 className="font-bold text-4xl">{count}</h1>
      <p className="font-semibold text-lg text-neutral-600">{desc}</p>
    </div>
  );
};
