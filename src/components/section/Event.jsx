import v from "/public/Vector.svg";
import CardEvent from "../CardEvent";
import o1 from "/public/o1.svg";
export default function Event() {
  return (
    <div id="event" className="mx-20 mt-48">
      <div className="relative ">
        <div className="absolute w-[600px] h-[600px] bg-blue opacity-10 rounded-full bottom-96  right-0 blur-[150px] -z-10"></div>
        <div className="absolute w-[600px] h-[500px] bg-red opacity-30 rounded-full top-[200px] left-1/4 blur-[200px] -z-10"></div>

        <img
          src={o1}
          alt="o"
          className="absolute -left-20 rotate-180 -top-32"
        />
        <img src={o1} alt="o" className="absolute -right-20 top-[550px]" />
      </div>
      <section className="mt-12 flex flex-col items-center relative text-center">
        <h1 className="text-5xl font-bold text-red">Event</h1>
        <img src={v} className="w-1/12 mb-2" />
        <p className="font-normal text-neutral-600 leading-tight text-lg">
          Firetech tahun ini memiliki 2 acara utama <br />
          yang berbeda dari Firetech sebelumnya,
          <br /> yaitu Hacktahon dan Seminar IT
        </p>
      </section>
      <section className="flex my-12 gap-4">
        <CardEvent
         title="Hackton"
         desc="Lorem ipsum dolor sit amet consectetur. Fermentum quam fringilla augue
         amet ut. Tortor aliquet tristique integer quisque consectetur. Eu arcu
         ultrices eget justo et molestie. Quam libero."
        />
        <CardEvent 
         title="Seminar IT"
         desc="Lorem ipsum dolor sit amet consectetur. Fermentum quam fringilla augue
         amet ut. Tortor aliquet tristique integer quisque consectetur. Eu arcu
         ultrices eget justo et molestie. Quam libero."
        />
      </section>
    </div>
  );
}
