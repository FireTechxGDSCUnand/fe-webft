import React from 'react';

import { MapPin } from 'lucide-react';

const Timeline = () => {
  const events = [
    {
      date: "5 Juni - 19 Juni 2024",
      buttonText: "Pendaftaran",
    },
    {
      date: "21 Juni 2024",
      buttonText: "Technical Meeting",
    },
    {
      date: "22 Juni - 23 Juni 2024",
      buttonText: "Pelaksanaan",
    },
    {
      date: "23 Juni 2024",
      buttonText: "Closing Ceremony",
    },
  ];

  return (
    <div className="flex justify-center mb-24 mx-4">
      <div className="relative flex flex-col items-center">
        <div className="absolute w-1 h-full bg-black opacity-20 left-1/2 transform -translate-x-1/2"></div>
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <div className=" text-black px-3 py-1 rounded-full text-xs mb-8">
            <MapPin size={48} />
          </div>
        </div>
        <div className="relative  w-full  mt-8">
          {events.map((event, index) => (
            <div key={index} className="flex 7 items-center mb-8">
              <div className="flex-1 text-right pr-4">
                <div className="bg-gray-200 px-3 py-2 rounded-lg w-full">
                  {event.date}
                </div>
              </div>
              <div className="relative">
                <div className="w-4 h-4 bg-black rounded-full"></div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-1 bg-black h-full"></div>
              </div>
              <div className="flex-1 pl-4">
                <button className="border-2 border-black px-4 py-2 rounded-lg">
                  {event.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
