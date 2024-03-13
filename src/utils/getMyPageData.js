import pb from '@/api/pocketbase';
import getPbImage from '@/utils/getPbImage';

// 'album' 콜렉션에서 relation 연결된 'styles' 데이터 가져오기
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

// 'communityPage' 컬렉션에서 'styles' 데이터 가져오기
export async function fetchPostsData() {
  try {
    const postData = await pb.collection('communityPage').getList(1, 50);
    const reversedData = postData.items.reverse();
    const postsWithImagesAndStyles = await Promise.all(
      postData.items.map(async (post) => {
        let styleImageUrl = null;
        let postImageUrl = getPbImage({
          collectionId: 'communityPage',
          id: post.id,
          image: post.image[0],
        });

        // styles 컬렉션에서 copy 속성으로 데이터 조회
        if (post.copy) {
          try {
            const styleRecord = await pb.collection('styles').getOne(post.copy);
            styleImageUrl = getPbImage({
              collectionId: 'styles',
              id: styleRecord.id,
              image: styleRecord.image,
            });
          } catch (error) {
            console.error(`Error fetching style image for post ${post.id}:`, error);
            // 오류 발생 시 styleImageUrl을 null로 유지
          }
        }

        return {
          ...post,
          imageUrl: styleImageUrl,
          postImageUrl,
        };
      }),
    );

    return postsWithImagesAndStyles;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return []; // 오류 발생 시 빈 배열 반환
  }
}

// 'bookmark' 콜렉션에서 relation 연결된 'community' 데이터 가져오기
export async function fetchBookmarksData() {
  try {
    const bookmarkData = await pb.collection('bookmark').getList(1, 50);
    const bookmarksWithImages = await Promise.all(
      bookmarkData.items.map(async (bookmark) => {
        const relationedPostsPromises = bookmark.images.map((imageId) =>
          pb.collection('communityPage').getOne(imageId),
        );

        const relationedPosts = await Promise.all(relationedPostsPromises);
        const formattedPosts = await Promise.all(
          relationedPosts.map(async (postRecord) => {
            let postImageUrl = getPbImage({
              collectionId: 'communityPage',
              id: postRecord.id,
              image: postRecord.image[0],
            });
            let styleImageUrl = null;

            // styles 컬렉션에서 copy 속성으로 데이터 조회
            if (postRecord.copy) {
              try {
                const styleRecord = await pb.collection('styles').getOne(postRecord.copy);
                styleImageUrl = getPbImage({
                  collectionId: 'styles',
                  id: styleRecord.id,
                  image: styleRecord.image,
                });
              } catch (error) {
                console.error(`Error fetching style image for post ${postRecord.id}:`, error);
                // 오류 발생 시 styleImageUrl을 null로 유지
              }
            }

            return {
              ...postRecord,
              imageUrl: styleImageUrl, // 'styles' 컬렉션에서 가져온 이미지 URL
              postImageUrl, // 'communityPage' 컬렉션에서 가져온 이미지 URL
            };
          }),
        );

        return { ...bookmark, images: formattedPosts };
      }),
    );

    return bookmarksWithImages;
  } catch (error) {
    console.error('Error fetching bookmarks:', error);
    return []; // 오류 발생 시 빈 배열 반환
  }
}
