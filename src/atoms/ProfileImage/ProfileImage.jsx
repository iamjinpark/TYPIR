function ProfileImage({ width = 'w-[120px]', height = 'h-[120px]', border = 'rounded-full', bgColor = 'bg-gray-100' }) {
  return <div className={`${width} ${height} ${border} ${bgColor}`}></div>;
}
export default ProfileImage;
