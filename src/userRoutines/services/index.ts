import {parse} from 'valibot';

import {ListUserRoutine, ListUserRoutineSchema} from '@/dashboard/models/UserRoutine';
import {USER_ROUTINE} from '@/endpoints';
import {apiResultSchema} from '@/shared/models/ApiResultModel';
import {baseService} from '@/shared/services/baseService';

export async function getRoutinePerUser() {
  const result = await baseService<ListUserRoutine, undefined>(USER_ROUTINE(), 'GET');

  return parse(apiResultSchema(ListUserRoutineSchema), result);
}
