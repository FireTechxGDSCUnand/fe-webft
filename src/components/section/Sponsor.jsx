import React from 'react';
import vectorImage from "/public/Vector.svg";
import sponsorImage1 from "/public/sp1.png";
import sponsorImage2 from "/public/sp2.png";
import sponsorImage3 from "/public/sp3.png";
import sponsorImage4 from "/public/sp.png";

const sponsorImages = [sponsorImage1, sponsorImage2, sponsorImage3, sponsorImage4];

const Sponsor = () => (
  <section className="my-12 mx-4 u lg:mx-20">
    <div className="mt-12 flex flex-col items-center text-center">
      <h1 className="text-5xl font-bold text-red">Sponsorship</h1>
      <img src={vectorImage} alt="Vector" className="lg:w-1/12 mb-2" />
    </div>
    <div className="grid  md:grid-cols-4  gap-12 justify-center items-center">
      {sponsorImages.map((image, index) => (
        <img className='md:w-48 w-28 ' key={index} src={image} alt={`Sponsor ${index + 1}`} />
      ))}
    </div>
  </section>
);

export default Sponsor;