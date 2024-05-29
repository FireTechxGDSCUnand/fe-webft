import {
  useEffect,
  useState,
} from 'react';

import ft from '/public/ft.svg';
import ua from '/public/ua.svg';

import Auth from './auth';
import Button from './Button';
import Dropdown from './DropDown';
import NavbarMobile from './NavbarMobile';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginInitial, setIsLoginInitial] = useState(true);
  const menuItems = [
    { name: 'Beranda', link: 'beranda' },
    { name: 'Event', link: 'event' },
    { name: 'Tentang Kami', link: 'tentangkami' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 10;
      setIsScrolled(show);
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  const openAuthModal = (isLogin) => {
    setIsLoginInitial(isLogin);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className={`fixed z-50 w-full ${
          isScrolled
            ? 'backdrop-blur-sm border-b-2 border-white border-opacity-20 bg-white bg-opacity-40'
            : 'bg-white bg-opacity-0'
        }`}
      >
        <nav className="hidden md:flex my-3 relative mx-20 items-center justify-between">
          <section className="flex">
            <img src={ft} alt="ft" className="w-14" />
            <img src={ua} alt="ua" className="w-14" />
          </section>
          <section className="flex gap-4 items-center">
            {menuItems.map((item, i) =>
              item.name.toLowerCase() === 'event' ? (
                <Dropdown title="Event" key={i} />
              ) : (
                <button
                  onClick={() => scrollTo(item.link)}
                  className="font-medium text-md cursor-pointer mr-4"
                  key={i}
                >
                  {item.name}
                </button>
              )
            )}
            <Button onClick={() => openAuthModal(false)} variant="primary">
              Daftar
            </Button>
          </section>
        </nav>
      </div>
      <div className="md:hidden">
        <NavbarMobile />
      </div>
      {isModalOpen && <Auth onClose={closeModal} isLoginInitial={isLoginInitial} />}
    </>
  );
}
