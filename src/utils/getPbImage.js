const PB_AP = import.meta.env.VITE_PB_API;

export default function getPbImage({ collectionId, id, image }) {
  return `${PB_AP}/api/files/${collectionId}/${id}/${image}`;
}

export function getPbImages({ collectionId, id, images }) {
  // 이미지가 배열인 경우 각 이미지에 대해 URL을 생성
  if (Array.isArray(images)) {
    return images.map((image) => `${PB_AP}/api/files/${collectionId}/${id}/${image}`);
  }
  // 단일 이미지인 경우
  return `${PB_AP}/api/files/${collectionId}/${id}/${images}`;
}
