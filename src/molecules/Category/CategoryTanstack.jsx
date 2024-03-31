import { useState } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import pb from '@/api/pocketbase';
import { useStyleStore } from '@/zustand/useStyleStore';
import { useMatch } from 'react-router-dom';
import DetailImage from '../DetailImage/DetailImage';
import LoadingSpinner from '@/atoms/LoadingSpinner/LoadingSpinner';
import ImageTemplate from '../ImageTemplate/ImageTemplate';
import { getPbImage } from '@/utils';

const CATEGORIES = ['all', 'simple', 'daily', 'vintage'];

function getPbImageURL(item, fileName = 'images') {
  return `${import.meta.env.VITE_PB_URL}/api/files/${item.collectionId}/${item.id}/${item[fileName]}`;
}

const Category = ({ gap = 'gap-3' }) => {
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category') || 'all';

  const categoryImageMatch = useMatch('/style/detail/:imageId');
  const layoutId = categoryImageMatch?.params.imageId;
  const stylesQuery = useQuery({
    queryKey: 'styles',
    queryFn: async () => {
      const styles = await pb.collection('styles').getFullList({ sort: '-created' });
      const stylesWithImages = styles.map((style) => {
        const imageURL = getPbImage(style);
        return { ...style, image: imageURL };
      });
      return stylesWithImages;
    },
  });

  const styles = stylesQuery.data;
  const isLoading = stylesQuery.isLoading;

  const imageSrc = styles ? styles.find((style) => style.id === layoutId)?.image : null;

  if (isLoading) {
    return <LoadingSpinner />;
  }
  const filteredCategoryData =
    selectedCategory === 'all' ? styles : styles.filter((item) => item.category === selectedCategory);

  return (
    <>
      <div className="mt-[5px] mb-[15px] w-full ">
        <ul className={`flex flex-row ${gap} font-serif px-4 xs:px-8`}>
          {CATEGORIES.map((category) => (
            <li
              key={category}
              className={` cursor-pointer px-[0.5625rem] border border-gray-200 rounded-xl ${
                selectedCategory === category ? 'bg-black text-white' : 'bg-white text-gray-200'
              }`}
            >
              <NavLink to={`/style?category=${category}`}>{category[0].toUpperCase() + category.slice(1)}</NavLink>
            </li>
          ))}
        </ul>
        <ImageTemplate data={filteredCategoryData} />
        {categoryImageMatch && <DetailImage layoutId={layoutId} imageSrc={imageSrc} />}
      </div>
    </>
  );
};

export default Category;
