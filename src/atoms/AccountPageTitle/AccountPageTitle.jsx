function AccountPageTitle({ text = '로그인', className }) {
  return <h1 className={`text-[25px] bold ${className}`}>{text}</h1>;
}

export default AccountPageTitle;
