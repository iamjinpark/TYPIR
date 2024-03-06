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
// export const useImageStore = create((set) => ({
//   images: [],
//   setImages: (data) => set({ images: data }),
// }));

export const useImageStore = create((set) => ({
  selectedImageUrl: null,
  setSelectedImageUrl: (url) => set({ selectedImageUrl: url }),
}));

export const useAlbumStore = create((set) => ({
  albums: [],
  setAlbums: (albums) => set({ albums }),
}));

export const useBoardStore = create((set) => ({
  boards: [],
  setBoards: (data) => set({ boards: data }),
}));
