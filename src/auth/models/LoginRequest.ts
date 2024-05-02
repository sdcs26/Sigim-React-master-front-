import {object, string, Output} from 'valibot';

export const LoginRequestSchema = object({
  correo: string(),
  contrasena: string(),
});

export type LoginRequest = Output<typeof LoginRequestSchema>;
