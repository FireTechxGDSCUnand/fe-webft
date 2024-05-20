import { useState } from "react";
import { ArrowLeftCircle } from "lucide-react";
import { ArrowRightCircle } from "lucide-react";

export default function Slideshow({ images }) {
  const [current, setCurrent] = useState(0);

  function goNext() {
    setCurrent((current + 1) % images.length);
  }

  function goPrev() {
    setCurrent((current - 1 + images.length) % images.length);
  }

  return (
    <div className="relative flex">
      <button
        className="absolute ml-2  ts active:scale-105 top-1/2 left-0 z-50"
        onClick={goPrev}
      >
        <ArrowLeftCircle color="white" className="text-2xl" />
      </button>
      <img
        src={images[current]}
        alt="slideshow"
        className="h-[500px] w-full rounded-md object-cover"
      />
      <button
        className="absolute mr-2 ts active:scale-105 z-50 top-1/2 right-0"
        onClick={goNext}
      >
        <ArrowRightCircle color="white" className="text-2xl" />
      </button>
    </div>
  );
}
