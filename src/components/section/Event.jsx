import { useState } from 'react';

import o1 from '/public/o1.svg';
import v from '/public/Vector.svg';

import Auth from '../auth';
import CardEvent from '../CardEvent';

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
        <img src={o1} alt="o" className="max-md:hidden absolute -right-20 top-[550px]" />
      </div>
      <section className="mt-12 flex flex-col items-center relative text-center">
        <h1 className="text-5xl font-bold text-red">Event</h1>
        <img src={v} className="lg:w-1/12  mb-2" />
        <p className="font-normal text-neutral-600 leading-tight text-lg">
          Firetech tahun ini memiliki 2 acara utama 
          yang berbeda dari Firetech sebelumnya,
          yaitu Hacktahon dan Seminar IT
        </p>
      </section>
      <section className="flex lg:my-12 flex max-md:flex-col max-md:mt-12 gap-4">
        <CardEvent
          title="Hackton"
          desc="Lorem ipsum dolor sit amet consectetur. Fermentum quam fringilla augue
         amet ut. Tortor aliquet tristique integer quisque consectetur. Eu arcu
         ultrices eget justo et molestie. Quam libero."
          href="/event/hackathon"
          onDaftarClick={() => openAuthModal(false)}
        />
        <CardEvent
          title="Seminar IT"
          desc="Lorem ipsum dolor sit amet consectetur. Fermentum quam fringilla augue
         amet ut. Tortor aliquet tristique integer quisque consectetur. Eu arcu
         ultrices eget justo et molestie. Quam libero."
          href="/event/seminarIT"
          onDaftarClick={() => openAuthModal(false)}
        />
        {isModalOpen && (
          <Auth onClose={closeModal} isLoginInitial={isLoginInitial} />
        )}
      </section>
    </div>
  );
}
