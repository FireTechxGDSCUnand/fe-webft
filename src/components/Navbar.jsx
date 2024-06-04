import { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

import ft from '/public/ft.svg';
import ua from '/public/ua.svg';
import gd from '/public/gdsc.png';


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
    { name: 'Event', link: '/event' },
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
          <Link to='/' className="flex items-center">
            <img src={ft} alt="ft" className="w-14" />
            <img src={ua} alt="ua" className="w-14" />
            <img src={gd} alt="ua" className="h-8 ml-4" />
          </Link>
          <section className="flex gap-4 items-center">
            {menuItems.map((item, i) =>
              item.name.toLowerCase() === 'event' ? (
                <Dropdown title="Event" key={i} />
              ) : (
                <ScrollLink
                  to={item.link}
                  smooth={true}
                  duration={500}
                  className="font-medium text-md cursor-pointer mr-4"
                  key={i}
                >
                  {item.name}
                </ScrollLink>
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
