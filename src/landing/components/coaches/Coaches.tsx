import {COACHES} from '@/landing/constants/Coaches';
import {Card} from '@/shared/components/ui/Card';

export const Coaches = () => {
  return (
    <div className="mx-auto mt-12 w-full text-center lg:px-48">
      <h3 className="text-3xl font-bold text-white lg:text-6xl">Nuestros Coaches</h3>
      <div className="flex flex-wrap justify-center gap-4">
        {COACHES.map((item) => (
          <Card
            key={item.name}
            className={`bg-transparent ${item.className} h-80 w-64 flex-none overflow-hidden rounded-lg`}
          >
            <img
              alt={item.name}
              className="h-2/3 w-full rounded-t-lg object-cover"
              src={item.image}
            />
            <div className="p-4 text-left">
              <h4 className="text-lg font-bold">{item.name}</h4>
              <p className="text-sm">{item.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
