import {picklist, Output} from 'valibot';

//export const rolSchema = string([regex(/^Administrador$|^Deportista$|^Entrenador$/)]);
export const rolSchema = picklist(['Administrador', 'Deportista', 'Entrenador']);

export type Rol = Output<typeof rolSchema>;
