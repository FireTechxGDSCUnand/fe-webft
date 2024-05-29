import {
  useEffect,
  useRef,
  useState,
} from 'react';

import {
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { Link } from 'react-router-dom';

function Dropdown({ title }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const data = [
    { name: "Hackathon", link: "hackathon" },
    { name: "Seminar IT", link: "seminarIT" },
  ];

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center gap-2 px-3 font-semibold rounded cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title} {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-4 w-40 bg-white bg-opacity-50 backdrop-blur-md rounded shadow z-10">
          <ul className="p-4 ">
            {data.map((item, index) => (
              <Link to={`/event/${item.link}`} key={index}>
                {" "}
                <li
                  className="px-4 py-2 rounded-md font-semibold hover:bg-gray-100 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}{" "}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
