import {Output, boolean} from 'valibot';

export const RegisterResponseSchema = boolean();

export type RegisterResponse = Output<typeof RegisterResponseSchema>;
