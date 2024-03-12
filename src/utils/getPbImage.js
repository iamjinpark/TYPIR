const PB_AP = import.meta.env.VITE_PB_API;

export default function getPbImage({ collectionId, id, image }) {
  return `${PB_AP}/api/files/${collectionId}/${id}/${image}`;
}
