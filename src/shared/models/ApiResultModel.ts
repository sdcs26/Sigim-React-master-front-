import {number, object, string} from 'valibot';

export interface ApiResultModel<T> {
  code: number;
  message: string;
  result: T;
}

export const apiResultSchema = (schema: any) =>
  object({
    code: number(),
    message: string(),
    result: schema,
  });
