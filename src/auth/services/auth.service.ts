import {parse} from 'valibot';

import {LoginRequest, LoginRequestSchema} from '../models/LoginRequest';
import {LoginResponse, LoginResponseSchema} from '../models/LoginResponse';
import {RegisterRequest, RegisterRequestSchema} from '../models/RegisterRequest';
import {RegisterResponse, RegisterResponseSchema} from '../models/RegisterResponse';

import {LOGIN, REGISTER} from '@/endpoints';
import {baseService} from '@/shared/services/baseService';
import {apiResultSchema} from '@/shared/models/ApiResultModel';

export const loginService = async (credentials: LoginRequest) => {
  credentials = parse(LoginRequestSchema, credentials);
  const result = await baseService<LoginResponse, LoginRequest>(LOGIN(), 'POST', credentials);

  return parse(apiResultSchema(LoginResponseSchema), result);
};

export const registerService = async (request: RegisterRequest) => {
  request = parse(RegisterRequestSchema, request);
  const result = await baseService<RegisterResponse, RegisterRequest>(REGISTER(), 'POST', request);

  return parse(apiResultSchema(RegisterResponseSchema), result);
};
