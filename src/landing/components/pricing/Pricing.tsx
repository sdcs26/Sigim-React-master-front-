import {PricingCard} from './PricingCard';

import {PRICES} from '@/landing/constants/Prices';

export const Pricing = () => {
  return (
    <div className="bg-hero-pricing flex h-full w-full items-center justify-center bg-cover bg-center bg-no-repeat p-11">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-6 lg:py-16">
        <h2 className="mx-auto mb-8 mt-11 text-center text-4xl font-normal tracking-widest text-white lg:mb-12">
          Elige una nueva membresía
        </h2>
        <div className="grid grid-cols-1 gap-12 space-y-8 overflow-hidden sm:gap-6 md:space-x-5 lg:grid lg:grid-cols-3 lg:space-y-0 xl:gap-10">
          {PRICES.map((item) => (
            <PricingCard>
              <h3 className="mb-4 text-xl font-semibold tracking-widest">{item.title}</h3>
              <span className="mr-2 mt-8 flex items-baseline justify-center text-4xl font-bold tracking-widest">
                {item.body}
              </span>
              <p className="font-light tracking-widest text-white sm:text-lg">{item.description}</p>
              <button className="focus:ring-primary-200 mt-8 rounded-lg bg-yellow-500 px-5 py-2.5 text-center text-base font-medium tracking-widest text-black hover:bg-yellow-400 focus:ring-4 ">
                ELIGE MEMBRESÍA
              </button>
            </PricingCard>
          ))}
        </div>
      </div>
    </div>
  );
};
