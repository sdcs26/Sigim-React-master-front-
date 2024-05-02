import {WHY_SELECT_US} from '@/landing/constants/whySelectUs';
import {Card} from '@/shared/components/ui/Card';

export const AboutUs = () => {
  return (
    <div className="container mx-auto mt-12 w-4/5 space-y-12 lg:w-full xl:px-48">
      <h3 className="text-center text-3xl font-bold text-white lg:text-left lg:text-6xl">
        ¿Por qué elegirnos?
      </h3>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        {WHY_SELECT_US.map((item) => (
          <Card key={item.href} className={item.className}>
            <img />
            <p>{item.body}</p>
            <button className="mr-12 self-end font-bold uppercase  decoration-solid decoration-2 underline-offset-4 hover:underline">
              Más Información
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
};
