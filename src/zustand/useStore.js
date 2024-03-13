import { create } from 'zustand';
import { persist } from 'zustand/middleware';

/* 마이 페이지, 헤더 관련 */
/* 640px 이하 헤더 - SelectCategory 모달 (햄버거버튼) */
export const useSelectCategoryStore = create((set) => ({
  isModalOpen: false,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
}));

/* 헤더 - NewPost 모달 */
export const useNewPostModalStore = create((set) => ({
  isModalOpen: false,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
}));

/* 삭제 모달 */
export const useDeleteModalStore = create((set) => ({
  isModalOpen: false,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
}));

export const useMessageModalStore = create((set) => ({
  isModalOpen: false,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
}));

/* 프로필 파일 선택 */
export const useFileStore = create((set) => ({
  selectedFile: null,
  setSelectedFile: (file) => set({ selectedFile: file }),
}));

/* 포켓베이스 데이터 관련 */
/* 이미지 url 저장 - MyImageTemplate 에서 사용 */
export const useImageStore = create((set) => ({
  imageUrls: [],
  setImageUrls: (urls) => set({ imageUrls: urls }),
  selectedImageUrl: null,
  setSelectedImageUrl: (url) => set({ selectedImageUrl: url }),
}));

/* 마이 페이지 유저 프로필 */
export const useProfileStore = create(
  persist(
    (set) => ({
      userList: [],
      setUserList: (userList) => set({ userList }),
      profiles: [],
      setProfiles: (profiles) => set({ profiles }),
      username: '',
      setUserName: (username) => set({ username }),
      handle: '',
      setHandle: (handle) => set({ handle }),
      isPrivate: false,
      setIsPrivate: (isPrivate) => set({ isPrivate }),
      isProtect: false,
      setIsProtect: (isProtect) => set({ isProtect }),
      imageUrl: '',
      setImageUrl: (imageUrl) => set({ imageUrl }),
      /* 미리 보기용 로컬 URL */
      tempSelectedImage: null,
      setTempSelectedImage: (image) => set({ tempSelectedImage: image }),
      /* 서버 전송용 이미지 객체 */
      tempSelectedFile: null,
      setTempSelectedFile: (file) => set({ tempSelectedFile: file }),
    }),
    {
      name: 'profile-storage',
      getStorage: () => sessionStorage,
    },
  ),
);

/* 마이 페이지 앨범 */
export const useAlbumStore = create(
  persist(
    (set) => ({
      albums: [],
      setAlbums: (albums) => set({ albums }),
    }),
    {
      name: 'album-storage',
      getStorage: () => sessionStorage,
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
      name: 'board-storage',
      getStorage: () => sessionStorage,
    },
  ),
);

/* 보드 필터 */
export const useFilteredBoardsStore = create((set) => ({
  boardsToShow: [],
  setBoardsToShow: (boards) => set({ boardsToShow: boards }),
}));

/* 마이 페이지 게시물 */
export const usePostStore = create((set) => ({
  posts: [],
  setPosts: (posts) => set({ posts }),
  userPosts: [],
  setUserPosts: (userPosts) => set({ userPosts }),
}));

/* 마이 페이지 북마크 */
export const useBookmarkStore = create((set) => ({
  bookmarks: [],
  setBookmarks: (bookmarks) => set({ bookmarks }),
}));
/* 북마크 필터 */
export const useAllBookmarkStore = create((set) => ({
  allImages: [],
  setAllImages: (images) => set({ allImages: images }),
}));

export const useCustomBookmarkStore = create((set) => ({
  customImages: [],
  setCustomImages: (images) => set({ customImages: images }),
}));

/* 커뮤니티 프로필 사진 */
export const useProfileImageStore = create((set) => ({
  image: null,
  preview: '',
  setPreview: (preview) => set({ preview }),
  setImage: (image) => set({ image }),
}));
