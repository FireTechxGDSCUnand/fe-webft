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
    <div className="mx-20 mt-36 h-screen">
      <div className="relative mt-48">
        <img
          src={o1}
          alt="o"
          className="absolute -left-20 rotate-180 -top-32"
        />
      </div>
      <section className="grid grid-cols-3">
        <section className="col-span-1 p-6 border-2 rounded-xl ">
          <Slideshow images={imageUrls} />
        </section>

        <section className="col-span-2 flex flex-col gap-12 ml-8 relative">
          <div className="absolute w-[600px] h-[500px] bg-red opacity-20 rounded-full  top-12 blur-[200px] -z-10"></div>

          <div className="flex justify-between  items-center">
            <img src={o1} alt="o" className="rotate-180" />
            <Card count="3900+" desc="Peserta" />
          </div>
          <div className="flex justify-between items-center">
            <Card count="15+" desc="Event" />
            <img src={o2} alt="o" className="rotate-180" />
          </div>
          <div className="flex justify-between items-center">
            <img src={o1} alt="o" className="rotate-90" />
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
