import CommunityCategory from "@/molecules/CommunityCategory/CommunityCategory";
import SearchBar from "@/molecules/SearchBar/SearchBar";

const Community = () => {

  return (
    <>
      <div className="flex relative">
        <CommunityCategory />
        <SearchBar />
      </div>
    </>
  );
};

export default Community;
