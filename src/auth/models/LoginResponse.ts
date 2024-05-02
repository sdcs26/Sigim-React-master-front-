import {object, string, Output, optional} from 'valibot';

import {rolSchema} from './Rol';

export const LoginResponseSchema = object({
  documento: string(),
  nombres: string(),
  apellidos: string(),
  correo: string(),
  rol: optional(rolSchema, 'Deportista'),
  token: string(),
});

export type LoginResponse = Output<typeof LoginResponseSchema>;
