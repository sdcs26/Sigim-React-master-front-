import {cn} from '@/shared/utils';

interface PropsInput extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({className, ...props}: PropsInput) => {
  return (
    <input
      {...props}
      className={cn([
        'w-full appearance-none rounded-lg border bg-transparent px-3 py-4 leading-tight text-white transition-transform placeholder:font-thin placeholder:text-white/60 focus:scale-[1.01] focus:outline-none focus:ring focus:ring-yellow-500',
        className,
      ])}
    />
  );
};
