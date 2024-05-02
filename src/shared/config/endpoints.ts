const URL_API = import.meta.env.VITE_API_URL;

//Auth
export const LOGIN = () => `${URL_API}/Auth/Login`;
export const REGISTER = () => `${URL_API}/Auth/Register`;

//Exercise
export const EXERCISE = () => `${URL_API}/Exercise`;
export const EXERCISE_ID = (id: string) => `${URL_API}/Exercise/${id}`;
