import {ReactNode} from 'react';

interface PropsCard {
  children: ReactNode;
}
export const PricingCard = ({children}: PropsCard) => {
  return (
    <div className="from-custom-gray-900 mx-auto flex max-w-lg cursor-pointer flex-col rounded-2xl border bg-gradient-to-b to-transparent p-6 text-center text-white shadow hover:border-yellow-500 xl:p-8">
      {children}
    </div>
  );
};
