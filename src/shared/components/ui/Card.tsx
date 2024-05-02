import {ReactNode} from 'react';
import {twMerge} from 'tailwind-merge';

interface PropsCard {
  children: ReactNode;
  className?: string;
}
export const Card = ({children, className}: PropsCard) => {
  return (
    <div
      className={twMerge(
        `bg-custom-gray-900 flex flex-col space-y-5 rounded-md px-4 py-8 text-white`,
        className,
      )}
    >
      {children}
    </div>
  );
};
