// 'album' 콜렉션에서 relation 연결된 'styles' 데이터 가져오기
import pb from '@/api/pocketbase';
import getPbImage from '@/utils/getPbImage';

export async function fetchAlbumsData() {
  const albumData = await pb.collection('album').getList(1, 50);
  const albumsWithImages = await Promise.all(
    albumData.items.map(async (album) => {
      const relationedStyles = await Promise.all(
        album.images.map(async (imageId) => {
          const styleRecord = await pb.collection('styles').getOne(imageId);
          return {
            id: styleRecord.id,
            category: styleRecord.category,
            alt: styleRecord.alt,
            imageUrl: getPbImage(styleRecord),
          };
        }),
      );
      return { ...album, images: relationedStyles };
    }),
  );
  return albumsWithImages;
}

// 'board' 콜렉션에서 relation 연결된 'styles' 데이터 가져오기
export async function fetchBoardsData() {
  const boardData = await pb.collection('board').getList(1, 50);
  const boardsWithImages = await Promise.all(
    boardData.items.map(async (board) => {
      const relationedStyles = await Promise.all(
        board.images.map(async (imageId) => {
          const styleRecord = await pb.collection('styles').getOne(imageId);
          return {
            id: styleRecord.id,
            category: styleRecord.category,
            alt: styleRecord.alt,
            imageUrl: getPbImage(styleRecord),
          };
        }),
      );
      return { ...board, images: relationedStyles };
    }),
  );
  return boardsWithImages;
}
