import { create } from 'zustand';
export const useUserStore = create((set) => ({
  user: null,
  setUser: (userInfo) => set({ user: userInfo }),
  updateUser: (newUserInfo) => set((state) => ({ user: { ...state.user, ...newUserInfo } })),
  setImage: (imageFile) => set((state) => ({ user: { ...state.user, image: imageFile } })),
  logoutUser: () => set({ user: null }),
}));
