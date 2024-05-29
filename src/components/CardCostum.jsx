import {
  BadgeDollarSign,
  Clock5,
  FileDown,
  Medal,
  UserRound,
} from 'lucide-react';

import Button from './Button';

export default function CardCostum({
  dateText,
  categoryText,
  teamText,
  feeText,
  detailText,
  downloadText,
  bgImage ,
}) {
  return (
    <div className="border-2  lg:h-96 w-full rounded-3xl">
      <img src={bgImage} alt="Background" />
      <div className="p-4">
        <section className="flex gap-4">
          <section>
            <figure className="flex mb-3 gap-2">
              <Clock5 />
              <p className='text-sm'>{dateText}</p>
            </figure>
            <figure className="flex gap-2">
              <Medal />
              <p className='text-sm'>{categoryText}</p>
            </figure>
          </section>
          <section>
            <figure className="flex mb-3 gap-2">
              <UserRound />
              <p className='text-sm'>{teamText}</p>
            </figure>
            <figure className="flex gap-2">
              <BadgeDollarSign />
              <p className='text-sm'>{feeText}</p>
            </figure>
          </section>
        </section>
        <section className="grid my-4 grid-cols-2 gap-3 items-center">
          <Button
            custom="flex items-center justify-center gap-3"
            variant="outline"
          >
            <FileDown />
            {downloadText}
          </Button>
          <div>
            <p className="leading-tight text-sm text-slate-500">
              {detailText}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
