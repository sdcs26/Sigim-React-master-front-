import {Button} from '@/shared/components/ui/Button';

export const OwnGym = () => {
  return (
    <div className=" bg-custom-gray-900 py-12">
      <div className="mx-auto w-4/5 space-y-6 lg:container lg:mx-auto lg:px-72">
        <h3 className="text-center text-3xl font-bold lg:text-right lg:text-6xl">
          Sobre Nuestro Gym
        </h3>
        <img className="rounded-xl object-cover object-center" src="/assets/ownGymImage.webp" />
        <div className="space-y-6 lg:flex lg:space-y-0">
          <p className="mx-2 max-w-[70ch] text-pretty">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate consectetur expedita
            delectus a sapiente voluptatum sed ea reprehenderit commodi, in soluta ipsa excepturi!
            A, placeat laboriosam sit perspiciatis mollitia optio.
          </p>
          <div className="flex items-center justify-center lg:w-full">
            <Button>Comienza ya</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
