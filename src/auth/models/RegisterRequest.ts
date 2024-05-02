import {object, string, Output} from 'valibot';

export const RegisterRequestSchema = object({
  correo: string(),
  contrasena: string(),
  confirmarContrasena: string(),
  documento: string(),
  nombres: string(),
  apellidos: string(),
  genero: string(),
  birthDate: string(),
});

export type RegisterRequest = Output<typeof RegisterRequestSchema>;
