import CommunityCategory from "@/molecules/CommunityCategory/CommunityCategory";
import SearchBar from "@/molecules/SearchBar/SearchBar";
import { Outlet, useMatch } from "react-router-dom";

const Community = () => {

  // const isDetailPage = useMatch("/community/detail/:imageId")

  return (
    <>
      <div className="flex relative bg-red-200">
        <SearchBar />
        {/* {!isDetailPage && <CommunityCategory />} */}
        <CommunityCategory />
        <Outlet />
      </div>
    </>
  );
};

export default Community;

// 주석을 해제하면 ui 유지 O 사진 연동 X
// 현재 코드에서는 ui 유지 X 사진 연동 O