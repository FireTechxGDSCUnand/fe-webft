import { useEffect, useRef, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

import ft from '/public/ft.svg';
import ua from '/public/ua.svg';
import gd from '/public/gdsc.png';
import { ChevronDown, ChevronUp, Menu } from 'lucide-react';

import Auth from './auth';
import Button from './Button';

export default function NavbarMobile() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginInitial, setIsLoginInitial] = useState(true);
  const [isEventDropdownOpen, setIsEventDropdownOpen] = useState(false);
  const menuRef = useRef(null);

  const menuItems = [
    { name: "Beranda", link: "beranda" },
    {
      name: "Event",
      link: "event",
      submenu: [
        { name: "Hackathon", link: "/event/hackathon" },
        { name: "Seminar IT", link: "/event/seminarIT" },
      ],
    },
    { name: "Tentang Kami", link: "tentangkami" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 10;
      setIsScrolled(show);
    };

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        setIsEventDropdownOpen(false);
      }
    };

    document.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const openAuthModal = (isLogin) => {
    setIsLoginInitial(isLogin);
    setIsModalOpen(true);
    setIsMenuOpen(false);
    setIsEventDropdownOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleEventDropdown = () => {
    setIsEventDropdownOpen(!isEventDropdownOpen);
  };

  return (
    <>
      <div
        className={`fixed z-40 flex justify-between items-center mx-4 py-4 w-full ${
          isScrolled
            ? "backdrop-blur-sm border-b-2 border-white border-opacity-20 bg-white bg-opacity-40"
            : "bg-white bg-opacity-0"
        }`}
      >
       <Link to='/' className="flex items-center">
            <img src={ft} alt="ft" className="w-14" />
            <img src={ua} alt="ua" className="w-14" />
            <img src={gd} alt="ua" className="h-8 ml-4 " />
          </Link>
        <section className='mr-8'>
          <Menu onClick={() => setIsMenuOpen(!isMenuOpen)} />
        </section>
      </div>
      {isMenuOpen && (
        <section className="fixed z-50 inset-0 flex items-start justify-center bg-white bg-opacity-70 backdrop-blur-[2px]">
          <div
            ref={menuRef}
            className="bg-white shadow-sm border-2 text-center border-neutral-100 backdrop-blur-sm m-8 w-full bg-opacity-75 rounded-2xl p-8"
          >
            {menuItems.map((item, i) => (
              <div key={i}>
                {item.name.toLowerCase() === 'event' ? (
                  <>
                    <div
                      className='flex justify-center items-center hover:bg-neutral-200 py-2 ts rounded-md  cursor-pointer'
                      onClick={toggleEventDropdown}
                    >
                      {item.name}
                      {isEventDropdownOpen ? <ChevronUp /> : <ChevronDown />}
                    </div>
                    {isEventDropdownOpen && (
                      <div className="ml-4">
                        {item.submenu.map((subItem, subIndex) => (
                          <a
                            className='flex hover:bg-neutral-200 py-2 ts rounded-md flex-col'
                            href={subItem.link}
                            key={subIndex}
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <ScrollLink
                    to={item.link}
                    smooth={true}
                    duration={500}
                    className='flex hover:bg-neutral-200 py-2 ts rounded-md flex-col cursor-pointer'
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </ScrollLink>
                )}
              </div>
            ))}
            <div className="flex flex-col mt-4">
              <Button
                variant="primary"
                onClick={() => openAuthModal(false)}
              >
                Daftar
              </Button>
            </div>
          </div>
        </section>
      )}
      {isModalOpen && <Auth onClose={closeModal} isLoginInitial={isLoginInitial} />}
    </>
  );
}
