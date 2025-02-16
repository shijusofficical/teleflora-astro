import HeaderView from "@widgets/Header/Header";
import NavBarContainer from '@widgets/NavBar/NavbarContainer';

const HeaderContainer = ({ data, additionalData }: { data: any, additionalData:any }) => {
  return (
    <>
      <HeaderView data={data} additionalData={additionalData}/>;
      <NavBarContainer/>
   </> 
  )
};

export default HeaderContainer;
