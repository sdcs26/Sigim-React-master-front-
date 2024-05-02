import {BiLoader} from 'react-icons/bi';
export const Spinner = () => {
  return (
    <BiLoader
      className={`animate-infinite animate-duration-[2000ms] animate-ease-out animate-spin`}
    />
  );
};
