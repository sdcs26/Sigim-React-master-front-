import {FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa';
import {FaXTwitter} from 'react-icons/fa6';

export const Footer = () => {
  return (
    <div className="z-10 flex flex-col items-center justify-center space-y-8 py-12">
      <div className="flex w-full items-center justify-center space-x-8 lg:w-5/6">
        <div className="invisible h-2 w-full rounded-lg bg-yellow-400 lg:visible " />
        <i>
          <FaFacebook size={42} />
        </i>
        <i>
          <FaXTwitter size={42} />
        </i>
        <i>
          <FaInstagram size={42} />
        </i>
        <i>
          <FaYoutube size={42} />
        </i>
        <div className="invisible h-2 w-full rounded-lg bg-yellow-400 lg:visible " />
      </div>
      <div className="text-center">
        <h2 className="text-5xl font-bold">SIGIM</h2>
        <p className="text-lg font-thin">Copyright © {new Date().getFullYear()} SIGIM</p>
      </div>
      <div className="grid h-8 grid-cols-5">
        <span className="col-span-2 self-center text-right text-sm font-semibold">
          Información Legal
        </span>
        <div className="flex justify-center">
          <div className="h-full w-1 rounded-sm bg-yellow-400 " />
        </div>
        <span className="col-span-2 self-center text-sm font-semibold">Política de Privacidad</span>
      </div>
    </div>
  );
};
