import {object, Output, boolean, array} from 'valibot';

import {RutinaSchema} from './rutina';

export const UserRoutineSchema = object({
  lunes: boolean(),
  martes: boolean(),
  miercoles: boolean(),
  jueves: boolean(),
  viernes: boolean(),
  sabado: boolean(),
  domingo: boolean(),
  rutina: array(RutinaSchema),
});

export const ListUserRoutineSchema = array(UserRoutineSchema);

export type UserRoutine = Output<typeof UserRoutineSchema>;

export type ListUserRoutine = Output<typeof ListUserRoutineSchema>;
