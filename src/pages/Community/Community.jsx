import CommunityCategory from '@/molecules/CommunityCategory/CommunityCategory';
import SearchBar from '@/molecules/SearchBar/SearchBar';
import { Outlet, useMatch } from 'react-router-dom';

const Community = () => {

  return (
    <>
      <div className="flex relative">
        <CommunityCategory />
      </div>
    </>
  );
};

export default Community;
