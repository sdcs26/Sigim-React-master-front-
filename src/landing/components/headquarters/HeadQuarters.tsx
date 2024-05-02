import {Button} from '@/shared/components/ui/Button';

export const HeadQuarters = () => {
  return (
    <div className="relative ">
      <figure className="left-0 top-0 h-full w-full overflow-hidden lg:h-[32rem]">
        <img
          alt="Imagen sedes"
          className="w-full object-cover object-bottom"
          src="/assets/headQueartersImage.webp"
        />
        <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
          <div className="space-y-8 text-center">
            <h3 className="text-3xl font-bold">Sedes SIGIM</h3>
            <p className="max-w-80 font-semibold">
              Conoce todas nuestras sedes, descubre cual te conviene, habrá una siempre cerca de ti!
            </p>
            <Button>Explorar</Button>
          </div>
        </div>
      </figure>
    </div>
  );
};
