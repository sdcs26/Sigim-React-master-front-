import {NavLink, Outlet, useNavigate} from 'react-router-dom';
import {useEffect} from 'react';

import {MENUS} from './constants/menus';

import {useAuthStore} from '@/auth/store/authStore';
import {cn} from '@/shared/utils';

const DashboardLayout = () => {
  const {profile} = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!profile) navigate('/');
  }, [profile, navigate]);

  return (
    profile && (
      <div>
        <header className="bg-custom-gray-900">
          <img
            alt={`${profile?.rol} header`}
            className="h-36 w-full object-cover object-top lg:h-56 lg:object-[0px,-180px]"
            src={
              profile?.rol === 'Deportista'
                ? '/assets/deportistaHeaderImage.webp'
                : '/assets/AdminHeaderImage.webp'
            }
          />
          <div className="-translate-y-24">
            <h4 className="p-3 text-4xl font-bold uppercase">{'Mi Perfil'}</h4>
            <nav className="flex max-w-[48rem] space-x-4 rounded-br-lg bg-yellow-500 px-4 py-3 text-xl font-bold text-black lg:rounded-r-lg">
              <ul className="flex space-x-2">
                {MENUS.map(
                  (menu) =>
                    menu.roles.includes(profile.rol) && (
                      <li key={menu.href}>
                        <NavLink
                          end
                          className={({isActive}) =>
                            cn(isActive && 'text-white underline underline-offset-2')
                          }
                          to={menu.href}
                        >
                          {menu.title}
                        </NavLink>
                      </li>
                    ),
                )}
              </ul>
            </nav>
          </div>
        </header>
        <main className="bg-custom-gray-900 -translate-y-12 pb-24">
          <Outlet />
        </main>
      </div>
    )
  );
};

export default DashboardLayout;

/*
profile && (
      <>
        <header>
          <img
            alt={`${profile.rol} header`}
            className="h-28 w-full scale-150 object-cover object-[0px,25px] lg:h-56 lg:scale-0 lg:object-[0px,-180px]"
            src={
              profile.rol === 'Deportista'
                ? '/assets/deportistaHeaderImage.webp'
                : '/assets/AdminHeaderImage.webp'
            }
          />
          <nav>
            {MENUS.map((menu) => (
              <div key={menu.href}>
                {menu.roles.includes(profile.rol) && (
                  <li>
                    <NavLink to={menu.href}>{menu.title}</NavLink>
                  </li>
                )}
              </div>
            ))}
          </nav>
        </header>
        <Outlet />
      </>
    )
*/
