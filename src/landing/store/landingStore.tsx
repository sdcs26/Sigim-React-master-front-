import {create} from 'zustand';
import {persist, devtools} from 'zustand/middleware';

interface State {
  menu: boolean;
  closeMenu: () => void;
  openMenu: () => void;
  bears: number;
  addBear: () => void;
}

export const useLandingStore = create<State>()(
  devtools(
    persist(
      (set) => {
        return {
          menu: false,
          bears: 0,
          closeMenu: () => set(() => ({menu: false})),
          openMenu: () => set(() => ({menu: true})),
          addBear: () => set((state) => ({bears: state.bears + 1})),
        };
      },
      {
        name: 'landing',
      },
    ),
  ),
);
