import {useLandingStore} from '@/landing/store/landingStore';

const LeftMenu = () => {
  const {menu, closeMenu} = useLandingStore();

  return (
    <>
      <div
        className={`fixed h-screen w-screen bg-black/30 ${menu ? 'z-20' : 'hidden'}`}
        onClick={closeMenu}
      />
      <div
        className={`fixed z-20 h-screen min-w-80 max-w-96 bg-white transition-transform duration-500 ${menu ? 'translate-x-0' : '-translate-x-full'}`}
      >
        asd
      </div>
    </>
  );
};

export default LeftMenu;
