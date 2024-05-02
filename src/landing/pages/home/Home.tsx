import {AboutUs} from '@/landing/components/about-us/AboutUs';
import {HeadQuarters} from '@/landing/components/headquarters/HeadQuarters';
import {Hero} from '@/landing/components/hero/Hero';
import {OwnGym} from '@/landing/components/own-gym/OwnGym';
import {Coaches} from '@/landing/components/coaches/Coaches';
const Home = () => {
  return (
    <div className="space-y-12">
      <Hero />
      <AboutUs />
      <OwnGym />
      <Coaches />
      <HeadQuarters />
    </div>
  );
};

export default Home;
