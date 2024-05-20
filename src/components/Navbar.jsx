import { useState, useEffect } from "react";
import ua from "/public/ua.svg";
import ft from "/public/ft.svg";
import Button from "./Button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const menuItems = [
    { name: "Beranda", link: "beranda" },
    { name: "Event", link: "event" },
    { name: "Tentang Kami", link: "tentangkami" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 10;
      if (show) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`fixed z-50 bg-white w-full ${
        isScrolled
          ? "backdrop-blur-sm border-b-2 border-white border-opacity-20 bg-opacity-40"
          : "bg-opacity-0"
      }`}
    >
      <nav className="my-3 relative mx-20 flex  items-center justify-between">
        <section className="flex">
          <img src={ft} alt="ft" className="w-14" />
          <img src={ua} alt="ua" className="w-14" />
        </section>
        <section className="flex gap-4 items-center ">
          {menuItems.map((item, i) => (
            <button
              onClick={() => scrollTo(item.link)}
              className="font-medium text-md cursor-pointer mr-4"
              key={i}
            >
              {item.name}
            </button>
          ))}
          <Button variant="primary">Daftar</Button>
        </section>
      </nav>
    </div>
  );
}
