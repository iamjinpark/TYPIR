import { create } from 'zustand';

export const useCommunityStore = create((set) => ({
  styles: [],
  setStyles: (data) => set({ styles: data }),
}));