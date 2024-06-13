import { useState } from "react";

import o1 from "/public/o1.svg";
import v from "/public/Vector.svg";

import Auth from "../auth";
import CardEvent from "../CardEvent";

export default function Event() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginInitial, setIsLoginInitial] = useState(true);
  const openAuthModal = (isLogin) => {
    setIsLoginInitial(isLogin);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div id="event" className="lg:mx-20 mx-4  lg:mt-48">
      <div className="relative ">
        <div className="absolute lg:w-[600px] lg:h-[600px] bg-blue opacity-10 rounded-full bottom-96  right-0 blur-[150px] -z-10"></div>
        <div className="absolute lg:w-[600px] lg:h-[500px] bg-red opacity-30 rounded-full top-[200px] left-1/4 blur-[200px] -z-10"></div>

        <img
          src={o1}
          alt="o"
          className="absolute max-md:hidden -left-20 rotate-180 -top-32"
        />
        <img
          src={o1}
          alt="o"
          className="max-md:hidden absolute -right-20 top-[550px]"
        />
      </div>
      <section className="mt-12 flex flex-col items-center relative text-center">
        <h1 className="text-5xl font-bold text-red">Event</h1>
        <img src={v} className="lg:w-1/12  mb-2" />
        <p className="font-normal text-neutral-600 leading-tight md:w-1/3 text-lg">
          <span className="text-red font-semibold">Firetech</span> tahun ini
          memiliki 2 acara utama yang berbeda dari Firetech sebelumnya, yaitu
          Hackathon dan Seminar IT
        </p>
      </section>
      <section className="grid md:grid-cols-2  grid-cols-1 my-12 gap-4">
        <CardEvent
          title="Hackton"
          desc="Hackathon adalah kompetisi tim untuk menciptakan solusi inovatif dalam waktu terbatas. Acara ini memberikan kesempatan bagi peserta untuk belajar hal baru dan memperluas jaringan profesional, dengan hadiah menarik bagi tim terbaik. Ayo bergabung dan tunjukkan kreativitas serta keahlianmu!
          "
          href="/event/hackathon"
          onDaftarClick={() => (window.location.href = 'https://forms.gle/K542NfbzyHDzNiZS7')}

        />
        <CardEvent
          title="Seminar IT"
          desc='Seminar IT bertema "Becoming IT Freelancer in 2024" adalah acara inspiratif yang dirancang untuk membantu Anda memulai karier di bidang teknologi. Pelajari langkah praktis, strategi mendapatkan klien, dan tips sukses dari para ahli, serta berjejaring dengan profesional lain. Daftar sekarang dan mulailah karier Anda sebagai freelancer di 2024!'
          href="/event/seminarIT"
          onDaftarClick={() => (window.location.href = 'https://forms.gle/SiKGxmQKJC5zW6KZ9')}
        />
        {isModalOpen && (
          <Auth onClose={closeModal} isLoginInitial={isLoginInitial} />
        )}
      </section>
    </div>
  );
}
