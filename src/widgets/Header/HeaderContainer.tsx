import HeaderView from "@widgets/Header/Header";
import NavPrimary from "@widgets/NavBar/NavPrimary";

const HeaderContainer = ({ data, additionalData }: { data: any, additionalData:any }) => {
  const navigationData = additionalData?.data?.find(
    (item:any) => item.title === "header"
  );
  return (
    <>
      <HeaderView data={data} additionalData={navigationData}/>;
      <div id="navbarPanel" className="navbar-panel">
        <div className="navbar-panel-scroll">
          <NavPrimary additionalData={navigationData} />
        </div>
      </div>
   </> 
  )
};

export default HeaderContainer;
