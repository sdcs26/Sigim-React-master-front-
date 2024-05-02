const API_URL = import.meta.env.VITE_API_URL;

//Auth
export const LOGIN = () => `${API_URL}/Auth/Login`;
export const REGISTER = () => `${API_URL}/Auth/Register`;

//Excercise
export const EXPERCISE = (id?: string) => `${API_URL}/Exercise/${id}`;

//History
export const HISTORY = () => `${API_URL}/History`;

//Income
export const INCOME = (id?: string) => `${API_URL}/Income/${id}`;
export const GET_INCOME_DATES = () => `${API_URL}/Income/Dates`;

//Routine
export const ROUTINE = (id?: string) => `${API_URL}/Routine/${id}`;

//RoutineExercise
export const ROUTINE_EXERCISE = (id?: string) => `${API_URL}/RoutineExercise/${id}`;

//User
export const USER = () => `${API_URL}/User`;

//UserRoutine
export const USER_ROUTINE = () => `${API_URL}/UserRoutine`;
export const USER_ROUTINE_LIST = () => `${API_URL}/UserRoutine/List`;
