import {NavLink} from 'react-router-dom';

import {cn} from '@/shared/utils';

interface NavbarProps {
  className: string;
}
const Navbar = ({className}: NavbarProps) => {
  return (
    <ul
      className={cn(
        'space-x-2 font-light hover:[&_li]:cursor-pointer hover:[&_li]:underline',
        className,
      )}
    >
      <li>
        <NavLink
          className={({isActive}) => (isActive ? 'underline underline-offset-2' : '')}
          to="/sedes"
        >
          Sedes
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({isActive}) => (isActive ? 'underline underline-offset-2' : '')}
          to="/servicios"
        >
          Servicios
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({isActive}) => (isActive ? 'underline underline-offset-2' : '')}
          to="/contactar"
        >
          Contactar
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({isActive}) => (isActive ? 'underline underline-offset-2' : '')}
          to="/pricing"
        >
          Precios
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
