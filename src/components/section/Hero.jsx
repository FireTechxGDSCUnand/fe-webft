import o2 from "/public/02.svg";
import ft from "/public/rs.svg";
import CardHero from "../CardHero";
import Button from "../Button";
import { redirect } from "react-router-dom";

export default function Hero() {
  const handleRedirect = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div id="beranda" className="mx-20">
      <div className="relative">
        <div className="absolute w-[600px] h-[600px] bg-blue opacity-10 rounded-full top-0  right-0 blur-[150px] -z-10"></div>
        <div className="absolute w-[600px] h-[600px] bg-red opacity-20 rounded-full -top-[128px] -left-40 blur-[200px] -z-10"></div>
      </div>
      <section className="grid grid-cols-2 py-32">
        <section className="flex items-center gap-16">
          <img src={o2} alt="o" />
          <section>
            <div>
              <h1 className="text-5xl font-bold">FIRETECH</h1>
              <p className="text-red mt-2 text-md  font-semibold tracking-wider">
                LIFE GETS EASIER WITH IT
              </p>
            </div>
            <h3 className="text-lg leading-normali text-neutral-800 my-4">
              Merupakan Acara IT Terbesar Tahunan yang <br /> diselenggarakan
              oleh Unit Kegiatan Mahasiswa <br /> (UKM) Neo Telemetri,
              Universitas Andalas.
            </h3>
            <div className="space-x-3 mt-8">
              <Button onClick={() => handleRedirect("event")} variant="primary">
                selengkapnya
              </Button>
              <Button variant="outline">Masuk</Button>
            </div>
          </section>
        </section>
        <section className="flex relatif justify-center">
          <img src={ft} alt="f" className="w-[400px]" />
          <CardHero
            title="Hackton"
            tanggal="11 - 16 Mei 2024"
            custom="top-48 right-20 shadow-md"
          />
          <CardHero
            title="Seminar IT"
            tanggal="11 - 16 Mei 2024"
            custom="bottom-48 right-96"
          />
        </section>
      </section>
    </div>
  );
}