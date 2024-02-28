const Profile = ({ userName }) => {
  return (
    <div className="w-[320px] flex items-center">
      <img src="/images/profile.svg" className="w-[45px] h-[45px] ml-[15px]"/>
      <p className="ml-3">{userName}</p>
      <button className="ml-auto mr-[15px]">
        <img src="/images/plus.svg" className="w-[18px]"/>
      </button>
    </div>
  );
};

export default Profile;