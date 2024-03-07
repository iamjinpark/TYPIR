import { create } from 'zustand';
import { persist } from 'zustand/middleware';

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

/* 이미지 url 저장 */
export const useImageStore = create((set) => ({
  selectedImageUrl: null,
  setSelectedImageUrl: (url) => set({ selectedImageUrl: url }),
}));

/* 마이 페이지 앨범 */
export const useAlbumStore = create(
  persist(
    (set) => ({
      albums: [],
      setAlbums: (albums) => set({ albums }),
    }),
    {
      name: 'album-storage', // 세션 스토리지에 저장될 키 이름
      getStorage: () => sessionStorage, // 세션 스토리지 사용
    },
  ),
);

/* 마이 페이지 보드 */
export const useBoardStore = create(
  persist(
    (set) => ({
      boards: [],
      setBoards: (boards) => set({ boards }),
    }),
    {
      name: 'board-storage', // 세션 스토리지에 저장될 키 이름
      getStorage: () => sessionStorage, // 세션 스토리지 사용
    },
  ),
);

/* 보드 카테고리 필터 */
export const useFilteredImagesStore = create((set) => ({
  filteredImages: [],
  setFilteredImages: (images) => set({ filteredImages: images }),
}));
