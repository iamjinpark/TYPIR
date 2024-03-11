import { create } from 'zustand';

// 스타일 페이지 이미지
export const useStyleStore = create((set) => ({
  styles: [],
  setStyles: (data) => set({ styles: data }),
}));

// 디테일 모달
export const useDetailModalStore = create((set) => ({
  showBoardModal: false,
  showShareModal: false,
  setShowBoardModal: (value) => set({ showBoardModal: value }),
  setShowShareModal: (value) => set({ showShareModal: value }),
}));

// 보드 페이지
// 1. 파일 이미지
// export const useDetailImageFileStore = create((set) => ({
//   imageSrc: null,
//   setImageSrc: (src) => set({ imageSrc: src }),
// }));

// 2. 업로드한 파일 이미지
export const useFileInputStore = create((set) => ({
  image: null,
  preview: '',
  setImage: (image) => set({ image }),
  setPreview: (preview) => set({ preview }),
}));

// 3. input 태그들
export const useBoardInputStore = create((set) => ({
  image: null,
  preview: '',
  title: '',
  context: '',
  selectedCategory: 'all',
  setImage: (image) => set({ image }),
  setPreview: (preview) => set({ preview }),
  setTitle: (title) => set({ title }),
  setContent: (context) => set({ context }),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
}));

// 4. 카테고리
// export const useCategoryStore = create((set) => ({
//   selectedCategory: 'all',
//   setSelectedCategory: (category) => set({ selectedCategory: category }),
// }));
