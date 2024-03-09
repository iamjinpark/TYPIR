import pb from "@/api/pocketbase";
import { useEffect, useState } from "react";
import { NavLink, useLocation, useMatch, useNavigate } from "react-router-dom";
import CommunityImageTemplate from "../CommunityImageTemplate/CommunityImageTemplate";
import CommunityDetail from "@/pages/CommunityDetail/CommunityDetail";
import { useStyleStore } from '@/zustand/useStyleStore';

const CATEGORIES = ["all", "simple", "daily", "vintage"]

function getPbImageURL (item, fileName = "image") {
  return `${import.meta.env.VITE_PB_API}/api/files/${item.collectionId}/${item.id}/${item[fileName]}`
}

const CommunityCategory = ({ gap = "gap-3" }) => {
  const [images, setImages] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("all")
  const location = useLocation()  // 현재 정보 가져오기
  const searchParams = new URLSearchParams(location.search) // URLSearchParams 객체 : URL에서 쿼리 파라미터 추출


  const categoryImageMatch = useMatch('/community/detail/:imageId');
  const layoutId = categoryImageMatch?.params.imageId;
  const styles = useStyleStore((state) => state.styles);
  const imageSrc = styles.find((style) => style.id === layoutId)?.image;
  
  console.log("categoryImageMatch : ", categoryImageMatch)
  console.log("layoutId : ", layoutId)
  console.log("styles : ", styles)
  console.log("imageSrc : ", imageSrc)

  useEffect(() => {
    async function fetchImage() {
      try {
        const styles = await pb.collection("communityPage").getFullList()
        const stylesWithImages = styles.map(style => {
          const imageURL = getPbImageURL(style)
          
          return {...style, image:imageURL}
        })
        useStyleStore.getState().setStyles(stylesWithImages)
        setImages(stylesWithImages)
      } catch (err) {
        console.error("Error fetching images : ", err)
      }
    }
    fetchImage()
  }, [])

  useEffect(() => {
    const categoryParam = searchParams.get("category")

    if (categoryParam && CATEGORIES.includes(categoryParam)) {
      setSelectedCategory(categoryParam)
    }
  }, [location.search]) // location.search => URL이 변경될 때마다 쿼리 변경

  const filteredImages = selectedCategory === "all" ? images : images.filter(image => image.category === selectedCategory)

  const handleCategoryClick = category => {
    setSelectedCategory(category)
  }


  return (
    <div className="template">
      <div className="mt-[5px] mb-[15px] w-full ">
      <ul className={`flex flex-row ${gap} font-serif `}>
        {CATEGORIES.map(category => (
          <li key={category} className={`cursor-pointer px-[0.5625rem] border border-gray-200 rounded-xl ${selectedCategory === category ? "bg-black text-white" : "bg-white text-gray-200"}`}>
            <NavLink to={`/community?category=${category}`} onClick={() => handleCategoryClick(category)}>
              {category[0].toUpperCase() + category.slice(1)}
            </NavLink>
          </li>
        ))}
      </ul>
      <CommunityImageTemplate data={filteredImages} />
      {/* <CommunityDetail imageSrc={imageSrc}/> */}
      {categoryImageMatch && <CommunityDetail imageSrc={imageSrc}/>}
      </div>
    </div>
  );
};

export default CommunityCategory;
