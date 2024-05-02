import {object, string, Output} from 'valibot';

export const RutinaSchema = object({
  id: string(),
  titulo: string(),
  descripcion: string(),
});

export type Rutina = Output<typeof RutinaSchema>;
