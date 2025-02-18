import React, { useState } from "react";
import Collapse from "@components/Collapse";
import Dropdown from "@components/Dropdown";
import DropdownToggle from "@components/DropdownToggle";
import DropdownMenu from "@components/DropdownMenu";
import DropdownItem from "@components/DropdownItem";
import IconChevronRight from "@icons/IconChevronRight";
// import IconFacebook from "@widgets/Icons/IconFacebook";
import IconFacebook from "@icons/IconFacebook";
import IconInstagram from "@icons/IconInstagram";
import IconTiktok from "@icons/IconTiktok";
import IconYoutube from "@icons/IconYoutube";
import NavSmSubmenu from "@widgets/NavBar/NavSmSubmenu";

const NavSm = ({
  toggleNavigation,
  direction,
  data,
  additionalData
}:{
  toggleNavigation: any,
  direction: any,
  data: any,
  additionalData: any,
}) => {
  //menu collapse
  const [isOpenNav, setIsOpenNav] = useState<number | null>(null);
  const [submenuData, setSubmenuData] = useState<any>([])
  const toggleNav = (index: number, submenuData: any) => {
    if(index == isOpenNav){
      setIsOpenNav(null)
      setSubmenuData(null)
    } else {
      setIsOpenNav(index)
      setSubmenuData(submenuData)
    }
  };
  //dropdown
  const [dropdown2Open, setDropdown2Open] = useState(false);
  const toggle2 = () => setDropdown2Open((prevState) => !prevState);

  //nav sub menu
  const [showMenu, setShowMenu] = useState(false);
  const [navSmVisible, setNavSmVisible] = useState(true);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setNavSmVisible(!navSmVisible);
  };
  const hideMenu = () => {
    setShowMenu(false);
    setNavSmVisible(true);
  };

  //language
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const handleMouseEnter = (index:any) => {
    setDropdownOpen(index);
  };
  const handleMouseLeave = () => {
    setDropdownOpen(null);
  };

  return (
    <>
      <div className="nav-header">
        <div className="mb-5">
          <button className="btn-close" onClick={toggleNavigation} />
        </div>
        <div className="btn-panel mb-5">
          <div className="row align-items-center gx-4">
            <div className="col-5">
              <button
                className="btn btn-outline-primary btn-sm w-100"
                id="loginToggleButton"
              >
                Sign-in/Register
              </button>
            </div>
            <div className="col-7">
              <button className="btn btn-primary btn-sm w-100">
                ORDER STATUS
              </button>
            </div>
          </div>
        </div>
        <div
          className={`nav-item dropdown mb-5 ${
            dropdownOpen === 1 ? "show" : ""
          }`}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="input-group phone">
            <span className="input-group-text">In a hurry?</span>
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Recipient Zip"
            />
          </div>
          <div
            className={`dropdown-menu w-100 ${
              dropdownOpen === 1 ? "show" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12">
                  <div className="mb-8">
                    <label className="form-label">Get Well</label>
                    <Dropdown
                      isOpen={dropdown2Open}
                      toggle={toggle2}
                      direction="down"
                      className="position-relative p-0"
                    >
                      <DropdownToggle color="light" className="w-100" caret>
                        <span className="dropdown-placeholder">
                          Select Occasion
                        </span>
                      </DropdownToggle>
                      <DropdownMenu className="w-100 p-3">
                        <div className="pb-4">
                          <input
                            type="text"
                            className="form-control bg-white"
                          />
                        </div>
                        <DropdownItem>Christmas</DropdownItem>
                        <DropdownItem>Birthday</DropdownItem>
                        <DropdownItem>Sympathy</DropdownItem>
                        <DropdownItem>Congratulations</DropdownItem>
                        <DropdownItem>Get Well</DropdownItem>
                        <DropdownItem>Love & Romance</DropdownItem>
                        <DropdownItem>Thinking Of You</DropdownItem>
                        <DropdownItem>Other</DropdownItem>
                        {/* <div className="fw-bold text-center py-4">
                  &quot;No result found&quot;
                </div> */}
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                  <div className="mb-8">
                    <label className="form-label">Delivery Date</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="MM / YY"
                    />
                  </div>
                  <button className="btn btn-primary w-100">
                    Find Bouquets
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-scroll">
        <div className="nav-sm">
          <div className={`nav-menu ${navSmVisible ? "" : "hide"}`}>
            <ul className="navbar-nav">
              {additionalData?.menu?.map((item: any, index: number) => (
                <React.Fragment key={`navbar_${index}`}>
                  {item?.subMenu.length == 0 ? (
                    <li className="nav-item">
                      <a href="/plp" className="nav-link">
                        {item?.name}
                      </a>
                    </li>
                  ):(
                    <li className="nav-item dropdown">
                      <span
                        className={`nav-link ${isOpenNav} ? "active" : ""}`}
                        onClick={()=>toggleNav(index, item?.subMenu)}
                      >
                        {item?.name}
                      </span>
                      <Collapse isOpen={isOpenNav == index}>
                        <div className="nav-link-list">
                          {item?.subMenu?.map((subMenuItem: any, i: any) => (
                            <button className="link-item" key={`navbar_item_${i}`} onClick={toggleMenu}>
                              <span className="item">
                                {subMenuItem.image ? (
                                  <span className="nav-link-image">
                                    <img
                                      src={subMenuItem?.image?.url}
                                      width={40}
                                      height={40}
                                      alt=""
                                      loading="lazy"
                                    />
                                  </span>
                                ):""}
                                <span>{subMenuItem?.name}</span>
                              </span>
                              <IconChevronRight className="icon xxs" />
                            </button>
                          ))}
                        </div>
                      </Collapse>
                    </li>
                  )}
                </React.Fragment>
              ))}
            </ul>
          </div>
          <NavSmSubmenu show={showMenu} hideMenu={hideMenu} data={submenuData} />
        </div>
        <div className="nav-footer">
          <div className="footer-link">
            <div className="row justify-content-center gx-10 gy-3">
              <div className="col-12">
                <a href=" " className="link">
                  {data?.intDelivery?.title}
                </a>
              </div>
              <div className="col-12">
                <a href=" " className="link">
                  {data?.phoneNumber?.title}
                </a>
              </div>
              <div className="col-12">
                <a href=" " className="link">
                  {data?.needHelp?.title}
                </a>
              </div>
            </div>
          </div>
          <div className="language-country">
            <div className="row gx-4 my-8">
              <div className="col-12">
                <Dropdown
                  isOpen={dropdown2Open}
                  toggle={toggle2}
                  direction={direction}
                  className="dropdown-light"
                >
                  <DropdownToggle color="light" className="w-100" caret>
                    Select Language
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      English
                    </DropdownItem>
                    <DropdownItem>
                      <span>French</span>
                    </DropdownItem>
                    <DropdownItem>
                      <span>Spanish</span>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
          </div>
          <div className="social-media">
            <div className="row justify-content-center gx-10 gy-4">
              <div className="col-auto">
                <a href="https://www.facebook.com/teleflora">
                  <IconFacebook className="icon md" />
                </a>
              </div>
              <div className="col-auto">
                <a href="https://www.instagram.com/">
                  <IconInstagram className="icon md" />
                </a>
              </div>
              <div className="col-auto">
                <a href="https://www.tiktok.com">
                  <IconTiktok className="icon md" />
                </a>
              </div>
              <div className="col-auto">
                <a href="https://www.youtube.com/teleflora">
                  <IconYoutube className="icon md" />
                </a>
              </div>
              <div className="col-auto">
                <a href="https://apps.apple.com/us/app/teleflora-flower-delivery/id6443734812">
                  <img
                    src="/images/social/app-store.png"
                    width={112}
                    height={46}
                    alt=""
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavSm;
