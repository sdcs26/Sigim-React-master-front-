import {IoMenuOutline} from 'react-icons/io5';
import {NavLink, useNavigate} from 'react-router-dom';

import Navbar from './Navbar';

import {useLandingStore} from '@/landing/store/landingStore';
import {Button} from '@/shared/components/ui/Button';
import {useAuthStore} from '@/auth/store/authStore';

export const Header = () => {
  const {openMenu} = useLandingStore();
  const {profile, logout} = useAuthStore();
  const navigate = useNavigate();

  return (
    <div className="fixed z-10 flex w-full items-center justify-between bg-black bg-opacity-20 p-3 px-2 text-white">
      <div className="flex space-x-16">
        <span>
          <NavLink to="/">StarkFit</NavLink>
        </span>
        <Navbar className="hidden lg:flex" />
      </div>
      <i
        className="block cursor-pointer rounded-full p-1 transition-colors hover:bg-gray-500 lg:hidden"
        onClick={openMenu}
      >
        <IoMenuOutline className="size-12" />
      </i>
      <div className="hidden space-x-5 lg:block">
        {profile ? (
          <>
            <Button variant="outline" onClick={() => navigate('/dashboard')}>
              Dashboard
            </Button>
            <Button onClick={logout}>Logout</Button>
          </>
        ) : (
          <>
            <Button variant="outline" onClick={() => navigate('/signin')}>
              Sign-Up
            </Button>
            <Button onClick={() => navigate('/login')}>Sign-In</Button>
          </>
        )}
      </div>
    </div>
  );
};
