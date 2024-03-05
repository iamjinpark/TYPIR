import { useEffect, useState } from 'react';
import { NavLink, useSearchParams, useLocation } from 'react-router-dom';
import { getPbImage } from '@/utils';
import pb from '@/api/pocketbase';
import ImageTemplate from '../ImageTemplate/ImageTemplate';

const CATEGORIES = ['all', 'simple', 'daily', 'vintage'];

function getPbImageURL(item, fileName = 'images') {
  return `${import.meta.env.VITE_PB_URL}/api/files/${item.collectionId}/${item.id}/${item[fileName]}`;
}

async function getData() {
  const styles = await pb.collection('communityPage').getFullList();
  console.log(styles)

  const stylesWithImages = styles.map((style) => {
    const imageURL = getPbImage(style);
    // console.log(style)
    return { ...style, image: imageURL };
  });

  // console.log(stylesWithImages);
  return stylesWithImages;
}

const CommunityCategory = ({ gap = 'gap-3' }) => {
  const [data, setData] = useState(null);
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category');

  useEffect(() => {
    getData().then(setData);
  }, []);

  if (!data) {
    return <p>로딩 중...</p>;
  }

  const filteredCategoryData =
    selectedCategory === 'all' ? data : data.filter((item) => item.category === selectedCategory);
    
  return (
    <div className="mt-[5px] mb-[15px] w-full">
      <ul className={`flex flex-row ${gap} font-serif`}>
        {CATEGORIES.map((category) => (
          <li
            key={category}
            className={`cursor-pointer px-[0.5625rem] border border-gray-200 rounded-xl ${selectedCategory === category ? 'bg-black text-white' : 'bg-white text-gray-200'}`}
          >
            <NavLink to={`/category?category=${category}`}>{category[0].toUpperCase() + category.slice(1)}</NavLink>
          </li>
        ))}
      </ul>
      <ImageTemplate data={filteredCategoryData} margin="mt-[15px]" />
    </div>
  );
};
export default CommunityCategory;
