import { create } from 'zustand';

export const useUserStore = create((set) => ({
  user: null,
  setUser: (userInfo) => set({ user: userInfo }),
  updateUser: (newUserInfo) =>
    set((state) => ({
      user: { ...state.user, ...newUserInfo },
    })),
  logoutUser: () => set({ user: null }),
}));
