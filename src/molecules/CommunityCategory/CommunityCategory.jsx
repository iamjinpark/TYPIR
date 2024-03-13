import pb from '@/api/pocketbase';
import { useEffect, useState } from 'react';
import { NavLink, useLocation, useMatch, useNavigate } from 'react-router-dom';
import CommunityImageTemplate from '../CommunityImageTemplate/CommunityImageTemplate';
import CommunityDetail from '@/pages/CommunityDetail/CommunityDetail';
import { useCommunityStore } from '@/zustand/useCommunityStore';
import { fetchPostsData } from '@/utils/getMyPageData';
import MyPostTemplate from '../MyPostTemplate/MyPostTemplate';

const CATEGORIES = ['all', 'simple', 'daily', 'vintage'];

function getPbImageURL(item, fileName = 'image') {
  return `${import.meta.env.VITE_PB_API}/api/files/${item.collectionId}/${item.id}/${item[fileName]}`;
}

const CommunityCategory = ({ gap = 'gap-3' }) => {
  const [images, setImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const location = useLocation(); // 현재 정보 가져오기
  const searchParams = new URLSearchParams(location.search); // URLSearchParams 객체 : URL에서 쿼리 파라미터 추출

  const categoryImageMatch = useMatch('/community/detail/:imageId');
  const layoutId = categoryImageMatch?.params.imageId;
  const styles = useCommunityStore((state) => state.styles);
  const setStyles = useCommunityStore((state) => state.setStyles);
  const styleData = styles.find((style) => style.id === layoutId);

  const imageSrc = styleData?.image; // 이미지
  const context = styleData?.context; // 텍스트
  const imageId = styleData?.imageId; // 아이디

  // useEffect(() => {
  //   async function fetchImage() {
  //     try {
  //       const styles = await pb.collection('communityPage').getFullList();
  //       const stylesWithImages = styles.map((style) => {
  //         const imageURL = getPbImageURL(style);

  //         return { ...style, image: imageURL, context: style.context };
  //       });
  //       useCommunityStore.getState().setStyles(stylesWithImages);

  //       setImages(stylesWithImages);
  //     } catch (err) {
  //       console.error('Error fetching images : ', err);
  //     }
  //   }
  //   fetchImage();
  // }, []);

  useEffect(() => {
    async function loadStyles() {
      const stylesData = await fetchPostsData();
      setStyles(stylesData);
    }

    loadStyles();
  }, [setStyles]);

  useEffect(() => {
    const categoryParam = searchParams.get('category');

    if (categoryParam && CATEGORIES.includes(categoryParam)) {
      setSelectedCategory(categoryParam);
    }
  }, [location.search]); // location.search => URL이 변경될 때마다 쿼리 변경

  const filteredImages =
    selectedCategory === 'all' ? styles : styles.filter((image) => image.category === selectedCategory);

  console.log(filteredImages);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="w-full h-auto min-h-[570px] bg-white mt-4 mb-8">
      <div className="mt-[5px] mb-[15px] w-full ">
        <ul className={`flex flex-row ${gap} font-serif mx-4`}>
          {CATEGORIES.map((category) => (
            <li
              key={category}
              className={`cursor-pointer px-[0.5625rem] border border-gray-200 rounded-xl ${selectedCategory === category ? 'bg-black text-white' : 'bg-white text-gray-200'}`}
            >
              <NavLink to={`/community?category=${category}`} onClick={() => handleCategoryClick(category)}>
                {category[0].toUpperCase() + category.slice(1)}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex flex-col items-center mt-8 h-auto">
          <MyPostTemplate images={filteredImages} />
        </div>
        {/* <CommunityDetail imageSrc={imageSrc}/> */}
        {categoryImageMatch && <CommunityDetail imageSrc={imageSrc} context={context} imageId={imageId} />}
      </div>
    </div>
  );
};

export default CommunityCategory;
