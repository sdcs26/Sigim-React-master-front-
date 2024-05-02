import {ButtonHTMLAttributes, ReactNode} from 'react';
import {tv, VariantProps} from 'tailwind-variants';

import {cn} from '@/shared/utils';

const button = tv({
  base: 'rounded-lg px-4 py-1 font-bold transition-colors ',
  variants: {
    variant: {
      default: 'bg-yellow-400 hover:bg-yellow-500 text-black',
      outline:
        'border bg-transparent border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type ButtonVariants = VariantProps<typeof button>;

interface PropsButton extends ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariants {
  children: ReactNode;
}
export const Button = ({children, className, variant, ...props}: PropsButton) => {
  return (
    <button {...props} className={cn(button({variant}), className)}>
      {children}
    </button>
  );
};
