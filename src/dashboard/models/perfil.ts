import {object, string, Output} from 'valibot';

export const PerfilSchema = object({
  documento: string(),
  nombres: string(),
  apellidos: string(),
  correo: string(),
});

export type Perfil = Output<typeof PerfilSchema>;
