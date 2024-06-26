import bg1 from '/public/gb1.svg';

import CardCostum from '../CardCostum';
import Desc from '../Desc';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Timeline from '../Timeline';

export default function SeminatIT() {
  return (
    <div>
      <div className="max-md:hidden relative">
        <div className="absolute w-[600px] h-[600px] bg-red opacity-10 rounded-full -top-[128px] -left-40 blur-[200px] -z-10"></div>
        <div className="absolute w-[600px] h-[600px] bg-red opacity-10 rounded-full top-0 right-0 blur-[150px] -z-10"></div>
      </div>
      <Navbar />
      <section className="lg:mx-20 max-md:mx-4 lg:grid lg:grid-cols-2 min-h-screen max-md:py-24 lg:pt-32">
      <Desc
      title="Hackathon"
      description="Hackathon adalah kompetisi tim untuk menciptakan solusi inovatif dalam waktu terbatas. Acara ini memberikan kesempatan bagi peserta untuk belajar hal baru dan memperluas jaringan profesional, dengan hadiah menarik bagi tim terbaik. Ayo bergabung dan tunjukkan kreativitas serta keahlianmu!"
      countdownText="3 HARI LAGI!!"
      buttonText="DAFTAR SEKARANG!!"
      onClick={() => (window.location.href = 'https://forms.gle/K542NfbzyHDzNiZS7')}
      buttonVariant="second"  
      iconColor="red"         
    />        <CardCostum
      dateText="5 Juni - 19 Juni 2024"
      categoryText="Kategori Mahasiswa"
      teamText="Bertim"
      feeText="Free"
      detailText="Detail acara dapat diunduh pada link disamping ini"
      downloadText="Unduh"
      bgImage={bg1} 
    />
          </section>
      <Timeline />
      <Footer />
    </div>
  );
}
