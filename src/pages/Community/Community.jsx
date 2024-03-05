import CommunityCategory from "@/molecules/CommunityCategory/CommunityCategory";
import SearchBar from "@/molecules/SearchBar/SearchBar";
import { useMatch } from "react-router-dom";
import CommunityDetail from "../CommunityDetail/CommunityDetail";
import ImageTemplate from "@/molecules/ImageTemplate/ImageTemplate";

const Community = () => {
  const categoryImageMatch = useMatch("/category/detail/:imageId")
  const layoutId = categoryImageMatch?.params.imageId



  return (
    <div>
      <div className="flex justify-center">
        <CommunityCategory />
        <SearchBar />
      </div>
      {categoryImageMatch ? <CommunityDetail layoutId={layoutId} /> : null}
      <ImageTemplate />
    </div>
  );
};

export default Community;
