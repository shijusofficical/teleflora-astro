import HeaderView from "./Header";
import NavBarContainer from '@widgets/NavBar/NavbarContainer';

const Header = ({ data, additionalData }: { data: any, additionalData:any }) => {
  return (
    <>
      <HeaderView data={data} additionalData={additionalData}/>;
      <NavBarContainer/>
   </> 
  )
};

export default Header;
