import { create } from 'zustand';
export const useUserStore = create((set) => ({
  user: null,
  file: null,
  image: null,
  preview: '',
  setUser: (userInfo) => set({ user: userInfo }),
  updateUser: (newUserInfo) => set((state) => ({ user: { ...state.user, ...newUserInfo } })),
  setPreview: (preview) => set({ preview }),
  setImage: (image) => set({ image }),
  // setImage: (imageFile) => set((state) => ({ user: { ...state.user, image: imageFile } })),
  logoutUser: () => set({ user: null }),
}));
