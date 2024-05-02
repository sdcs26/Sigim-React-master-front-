import {Button} from '@/shared/components/ui/Button';

export const Hero = () => {
  return (
    <section className="flex flex-col lg:h-screen">
      <figure className="relative flex flex-col overflow-hidden ">
        <img
          className="scale-125 overflow-hidden object-cover object-center"
          src={'/assets/hero.webp'}
        />
        <div className="absolute flex h-full w-full flex-col items-center justify-center space-y-6 text-white">
          <h1 className="max-w-[82rem] text-balance text-center text-4xl font-bold lg:text-8xl">
            Entrena con pasión, vive con energía
          </h1>
          <Button className="uppercase">Comienza ya</Button>
        </div>
      </figure>
      <span className="w-full bg-yellow-400 text-center text-xl font-bold text-black lg:text-2xl">
        Encuentra tu fuerza interior, transforma tu cuerpo.
      </span>
    </section>
  );
};
