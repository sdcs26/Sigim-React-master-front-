import {Rol} from '@/auth/models/Rol';

interface menu {
  href: string;
  title: string;
  roles: Rol[];
}

export const MENUS: menu[] = [
  {
    href: '/dashboard',
    title: 'Perfil',
    roles: ['Administrador', 'Deportista', 'Entrenador'],
  },
  {
    href: '/dashboard/rutina',
    title: 'Rutina',
    roles: ['Administrador', 'Deportista', 'Entrenador'],
  },
  {
    href: '/dashboard/crearRutina',
    title: 'Crear rutina',
    roles: ['Administrador', 'Entrenador'],
  },
  {
    href: '/dashboard/rutina',
    title: 'Consultar rutina',
    roles: ['Administrador'],
  },
  {
    href: '/dashboard/entradas',
    title: 'Entradas',
    roles: ['Deportista'],
  },
  {
    href: '/dashboard/usuarios',
    title: 'Usuarios',
    roles: ['Deportista'],
  },
  {
    href: '/dashboard/reportes',
    title: 'Reportes',
    roles: ['Administrador'],
  },
];
