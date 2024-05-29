import { Calendar, CodeSquare, MonitorDot } from "lucide-react";

export default function CardHero({ title, tanggal, custom = "" }) {
  return (
    <div className={`${custom} absolute`}>
      <section className="relative px-6 py-4  rounded-lg flex border-2 border-opacity-70 border-white items-center gap-3 bg-opacity-50 backdrop-blur-sm bg-white">
        {title === "Hackton" ? (
          <CodeSquare size={40} />
        ) : (
          <MonitorDot size={40} />
        )}
        <div>
          <h1 className="text-xl font-bold "> {title}</h1>
          <figcaption className="flex items-center">
            <Calendar size={16} />
            <p className="text-sm font-semibold">{tanggal} </p>
          </figcaption>
        </div>
      </section>
    </div>
  );
}
