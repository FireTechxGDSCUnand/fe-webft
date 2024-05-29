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
    description="Lorem ipsum dolor sit amet consectetur. Sed malesuada adipiscing nec sed velit quam in id cras. Fames orci nullam platea venenatis tincidunt. Ut risus orci turpis aenean. Fringilla tellus ultrices lorem eleifend nulla eu elit. Tortor tincidunt mauris amet massa vel pellentesque cras."
    countdownText="3 HARI LAGI!!"
    buttonText="DAFTAR SEKARANG!!"
    buttonVariant="second"  
    iconColor="red"         
  />        <CardCostum
    dateText="11 Mei - 11 Mei 2024"
    categoryText="Kategori Mahasiswa"
    teamText="Bertim"
    feeText="Insert 100k"
    detailText="Detail acara dapat diunduh pada link disamping ini"
    downloadText="Unduh"
    bgImage={bg1} // Jika ingin menggunakan gambar background yang berbeda
  />
        </section>
    <Timeline />
    <Footer />
  </div>
  );
}
