import {Outlet, ScrollRestoration} from 'react-router-dom';

import {Header} from './components/header/Header';
import LeftMenu from './components/header/LeftMenu';
import {Footer} from './components/footer/Footer';

const Layout = () => {
  return (
    <div className="bg-black text-white">
      <LeftMenu />
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default Layout;
