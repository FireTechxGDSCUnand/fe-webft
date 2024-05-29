import gb1 from '/public/gb1.svg';
import gb2 from '/public/gb2.svg';
import { Link } from 'react-router-dom';

import Button from './Button';

export default function CardEvent({ title, desc, href, onDaftarClick }) {
  return (
    <div className="bg-white border-2 ts hover:shadow-2xl border-white rounded-xl backdrop-blur-sm bg-opacity-30">
      <section>
        {title === 'Hackton' ? (
          <img src={gb1} alt="Hackton" />
        ) : (
          <img src={gb2} alt="Hackton" />
        )}
      </section>
      <section className="p-6">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="lg:text-lg  leading-snug max-md:leading-5 font-normal text-neutral-400">
          {desc}
        </p>
        <section className="lg:flex lg:items-center mt-8 gap-4">
          <Button variant="primary" custom="max-md:mb-4 w-full" onClick={onDaftarClick}>
            Daftar Sekarang
          </Button>
          <Button variant="outline" custom="w-full">
            <Link to={href}>Selengkapnya</Link>
          </Button>
        </section>
      </section>
    </div>
  );
}
