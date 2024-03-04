import { create } from 'zustand';

/* 마이 페이지, 헤더 관련 */
export const useSelectCategoryStore = create((set) => ({
  isModalOpen: false,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
}));

export const useDeleteModalStore = create((set) => ({
  isModalOpen: false,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
}));

export const useDetailModalStore = create((set) => ({
  isModalOpen: false,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
}));

export const useToggleStore = create((set) => ({
  isToggled: false,
  toggle: () => set((state) => ({ isToggled: !state.isToggled })),
}));

/* 포켓베이스 데이터 관련 */
export const useStylesStore = create((set) => ({
  styles: [],
  setStyles: (data) => set({ styles: data }),
}));
