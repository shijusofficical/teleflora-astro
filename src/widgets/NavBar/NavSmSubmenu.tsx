import IconArrowLeft from "@icons/IconArrowLeft";
import React from "react";

const NavSmSubmenu = ({ show, hideMenu, data }:{ show:any, hideMenu:any, data:any }) => {
  return (
    <>
      <div className={`nav-submenu ${show ? "show" : ""}`}>
        <button className="nav-back" onClick={hideMenu}>
          <IconArrowLeft className="icon sm me-2" />
          Back
        </button>
        {data?.map((item: any, index: number) => (
          <React.Fragment key={`navbar_drop${index}`}>
            <div className="navbar-image">
              <img
                src={item?.image?.url}
                width={item?.image?.width}
                height={item?.image?.height}
                alt=""
              />
              <div className="content">{item?.name}</div>
            </div>
            <div className="nav-link-list">
              {item?.subMenu?.map((subMenuItem: any, i: any) => (
                <a href=" " className="link-item" key={`navbar_item_sub${index}`}>
                  <span className="item">
                    <span>{subMenuItem?.name}</span>
                  </span>
                </a>
              ))}
            </div>
            <div className="mt-8">
              <div className="navbar-image">
                <img
                  src={item?.navigationCard?.image?.url}
                  width={item?.navigationCard?.image?.width}
                  height={item?.navigationCard?.image?.height}
                  alt=""
                />
              </div>
              <div className="nav-title mt-2">{item?.navigationCard?.title}</div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default NavSmSubmenu;
