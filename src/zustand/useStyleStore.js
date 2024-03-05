import { create } from 'zustand';

export const useStyleStore = create((set) => ({
  styles: [],
  setStyles: (data) => set({ styles: data }),
}));
