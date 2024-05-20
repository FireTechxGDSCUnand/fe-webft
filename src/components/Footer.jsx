import logo from "/public/ft.svg";
import { Instagram } from "lucide-react";
import { Twitter } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Youtube } from "lucide-react";

export default function Footer() {
  return (
    <div
      id="tentangkami"
      className="px-20 py-10 bg-neutral-800  grid grid-cols-2"
    >
      <section className="flex items-center">
        <img src={logo} alt="logi" className="w-64" />
        <figcaption>
          <h1 className="font-bold text-white text-5xl ">FIRETECH</h1>
          <p className="font-semibold text-red ">LIFE GETS EASIER WITH IT</p>
        </figcaption>
      </section>
      <section className="flex items-start pt-20 justify-between">
        <div>
          <h1 className="font-bold text-white text-3xl ">About Us</h1>
          <p className="font-semibold text-neutral-500 leading-tight">
            Limau Manis, Kec. Pauh, Kota Padang, <br />
            Sumatera Barat 25176
          </p>
          <div className="mt-4 font-semibold text-neutral-200 text-xl">
            Narahubung:
          </div>
          <p className="text-neutral-500">Name (+624768585759)</p>
          <p className="text-neutral-500">Name +624768585759</p>
        </div>
        <div>
          <h1 className="font-bold text-white text-3xl mb-4">Follow Us</h1>
          <div className="flex gap-4 items-center">
            <Linkedin size={32} color="white" />
            <Instagram size={32} color="white" />
            <Twitter size={32} color="white" />
            <Youtube size={32} color="white" />
          </div>
        </div>
      </section>
    </div>
  );
}
