import {create} from 'zustand';
import {persist, devtools} from 'zustand/middleware';
import Cookies from 'js-cookie';

import {LoginResponse} from '../models/LoginResponse';

interface State {
  profile: LoginResponse | undefined;
  login: (profile: LoginResponse) => void;
  logout: () => void;
}

export const useAuthStore = create<State>()(
  devtools(
    persist(
      (set) => {
        return {
          profile: undefined,
          login: (profile: LoginResponse) => {
            Cookies.set('user-token', profile.token);

            return set(() => ({profile}));
          },
          logout: () => {
            Cookies.remove('user-token');

            return set(() => ({profile: undefined}));
          },
        };
      },
      {
        name: 'auth',
      },
    ),
  ),
);
