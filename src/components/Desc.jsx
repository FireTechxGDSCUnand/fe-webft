import { Hourglass } from 'lucide-react';

import Button from './Button';

export default function Desc({
  title,
  description,
  countdownText,
  onClick,
  buttonText,
  buttonVariant = "second",
  iconColor = "red",
}) {
  return (
    <div className="lg:p-8 max-md:my-8">
      <section className="space-y-3">
        <h1 className="text-4xl font-bold ">{title}</h1>
        <p className="leading-snu text-neutral-500">
          {description}
        </p>
      </section>

      <section className="flex items-center gap-2 my-4">
        <Hourglass color={iconColor} />
        <h3 className="font-bold text-xl" style={{ color: iconColor }}>{countdownText}</h3>
      </section>
      <div>
        <Button onClick={onClick} variant={buttonVariant}>{buttonText}</Button>
      </div>
    </div>
  );
}
