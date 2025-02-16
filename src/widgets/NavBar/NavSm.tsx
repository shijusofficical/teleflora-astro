/**
 * Copyright(c) 2023 Valoriz Digital Pvt. Ltd.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Valoriz ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Valoriz.
 *
 * @author Valoriz UI Team
 */

import React, { useState } from "react";
import Collapse from "@components/Collapse";
import Dropdown from "@components/Dropdown";
import DropdownToggle from "@components/DropdownToggle";
import DropdownMenu from "@components/DropdownMenu";
import DropdownItem from "@components/DropdownItem";
import IconChevronRight from "@icons/IconChevronRight";
// import IconFacebook from "@widgets/Icons/IconFacebook";
import IconInstagram from "@icons/IconInstagram";
import IconYoutube from "@icons/IconYoutube";
import IconTiktok from "@icons/IconTiktok";
import NavSmSubmenu from "@widgets/NavBar/NavSmSubmenu";

const NavSm = ({
  toggleNavigation,
  direction,
  setShowNavigation,
  setShowLogin,
  ...args
}) => {
  //menu collapse
  const [isOpenNav, setIsOpenNav] = useState(false);
  const toggleNav = () => setIsOpenNav(!isOpenNav);
  const [isOpenNav2, setIsOpenNav2] = useState(false);
  const toggleNav2 = () => setIsOpenNav2(!isOpenNav2);
  const [isOpenNav3, setIsOpenNav3] = useState(false);
  const toggleNav3 = () => setIsOpenNav3(!isOpenNav3);
  const [isOpenNav4, setIsOpenNav4] = useState(false);
  const toggleNav4 = () => setIsOpenNav4(!isOpenNav4);
  const [isOpenNav5, setIsOpenNav5] = useState(false);
  const toggleNav5 = () => setIsOpenNav5(!isOpenNav5);
  const [isOpenNav6, setIsOpenNav6] = useState(false);
  const toggleNav6 = () => setIsOpenNav6(!isOpenNav6);
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

  const showLogins = () => {
    setShowLogin(true);
    setShowNavigation(true);
  };

  //language
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const handleMouseEnter = (index) => {
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
                onClick={showLogins}
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
                      <DropdownMenu className="w-100 p-3" {...args}>
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
              <li className="nav-item">
                <a href="/plp" class="nav-link">
                  Same Day
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  href=" "
                  className={`nav-link ${isOpenNav ? "active" : ""}`}
                  onClick={toggleNav}
                >
                  Christmas
                </a>
                <Collapse isOpen={isOpenNav}>
                  <div className="nav-link-list">
                    <button className="link-item" onClick={toggleMenu}>
                      <span className="item">
                        <span className="nav-link-image">
                          <img
                            src="/images/navbar/christmas.webp"
                            width={40}
                            height={40}
                            alt=""
                          />
                        </span>
                        <span>Christmas Bestsellers</span>
                      </span>
                      <IconChevronRight className="icon xxs" />
                    </button>
                    <button className="link-item" onClick={toggleMenu}>
                      <span className="item">
                        <span className="nav-link-image">
                          <img
                            src="/images/navbar/christmas-2.webp"
                            width={40}
                            height={40}
                            alt=""
                          />
                        </span>
                        <span>Christmas Centerpieces</span>
                      </span>
                      <IconChevronRight className="icon xxs" />
                    </button>
                    <button className="link-item" onClick={toggleMenu}>
                      <span className="item">
                        <span className="nav-link-image">
                          <img
                            src="/images/navbar/christmas.webp"
                            width={40}
                            height={40}
                            alt=""
                          />
                        </span>
                        <span>Wreaths & Trees</span>
                      </span>
                      <IconChevronRight className="icon xxs" />
                    </button>
                    <button className="link-item" onClick={toggleMenu}>
                      <span className="item">
                        <span className="nav-link-image">
                          <img
                            src="/images/navbar/christmas-2.webp"
                            width={40}
                            height={40}
                            alt=""
                          />
                        </span>
                        <span>Gifts Under $60</span>
                      </span>
                      <IconChevronRight className="icon xxs" />
                    </button>
                    <button className="link-item" onClick={toggleMenu}>
                      <span className="item">
                        <span className="nav-link-image">
                          <img
                            src="/images/navbar/christmas.webp"
                            width={40}
                            height={40}
                            alt=""
                          />
                        </span>
                        <span>Make-A-Wish Collection</span>
                      </span>
                      <IconChevronRight className="icon xxs" />
                    </button>
                    <button className="link-item" onClick={toggleMenu}>
                      <span className="item">
                        <span className="nav-link-image">
                          <img
                            src="/images/navbar/christmas-2.webp"
                            width={40}
                            height={40}
                            alt=""
                          />
                        </span>
                        <span>Same-Day Delivery</span>
                      </span>
                      <IconChevronRight className="icon xxs" />
                    </button>
                    <button className="link-item" onClick={toggleMenu}>
                      <span className="item">
                        <span className="nav-link-image">
                          <img
                            src="/images/navbar/christmas.webp"
                            width={40}
                            height={40}
                            alt=""
                          />
                        </span>
                        <span>Winter Collection</span>
                      </span>
                      <IconChevronRight className="icon xxs" />
                    </button>
                  </div>
                </Collapse>
              </li>
              <li className="nav-item dropdown">
                <a
                  href=" "
                  className={`nav-link ${isOpenNav2 ? "active" : ""}`}
                  onClick={toggleNav2}
                >
                  Birthday
                </a>
                <Collapse isOpen={isOpenNav2}>
                  <div className="nav-link-list">
                    <button className="link-item" onClick={toggleMenu}>
                      <span className="item">
                        <span>Birthday For Her</span>
                      </span>
                      <IconChevronRight className="icon xxs" />
                    </button>
                    <button className="link-item" onClick={toggleMenu}>
                      <span className="item">
                        <span>Birthday For Him</span>
                      </span>
                      <IconChevronRight className="icon xxs" />
                    </button>
                    <button className="link-item" onClick={toggleMenu}>
                      <span className="item">
                        <span>Birthday For Kids</span>
                      </span>
                      <IconChevronRight className="icon xxs" />
                    </button>
                    <button className="link-item" onClick={toggleMenu}>
                      <span className="item">
                        <span>Sweet 16</span>
                      </span>
                      <IconChevronRight className="icon xxs" />
                    </button>
                    <button className="link-item" onClick={toggleMenu}>
                      <span className="item">
                        <span>Quinceañera</span>
                      </span>
                      <IconChevronRight className="icon xxs" />
                    </button>
                  </div>
                </Collapse>
              </li>
              <li className="nav-item dropdown">
                <a
                  href=" "
                  className={`nav-link ${isOpenNav3 ? "active" : ""}`}
                  onClick={toggleNav3}
                >
                  Sympathy
                </a>
                <Collapse isOpen={isOpenNav3}>
                  <div className="nav-link-list">
                    <button className="link-item" onClick={toggleMenu}>
                      <span className="item">
                        <span className="nav-link-image">
                          <img
                            src="/images/navbar/birthday-1.webp"
                            width={40}
                            height={40}
                            alt=""
                          />
                        </span>
                        <span>Funeral Sprays & Wreaths</span>
                      </span>
                      <IconChevronRight className="icon xxs" />
                    </button>
                    <button className="link-item" onClick={toggleMenu}>
                      <span className="item">
                        <span className="nav-link-image">
                          <img
                            src="/images/navbar/birthday-2.webp"
                            width={40}
                            height={40}
                            alt=""
                          />
                        </span>
                        <span>Funeral Service Bouquets</span>
                      </span>
                      <IconChevronRight className="icon xxs" />
                    </button>
                    <button className="link-item" onClick={toggleMenu}>
                      <span className="item">
                        <span className="nav-link-image">
                          <img
                            src="/images/navbar/birthday.webp"
                            width={40}
                            height={40}
                            alt=""
                          />
                        </span>
                        <span>Funeral Casket Flowers</span>
                      </span>
                      <IconChevronRight className="icon xxs" />
                    </button>
                  </div>
                </Collapse>
              </li>
              <li className="nav-item dropdown">
                <a
                  href=" "
                  className={`nav-link ${isOpenNav4 ? "active" : ""}`}
                  onClick={toggleNav4}
                >
                  Get Well
                </a>
                <Collapse isOpen={isOpenNav4}>
                  <div className="nav-link-list">
                    <button className="link-item" onClick={toggleMenu}>
                      <span className="item">
                        <span className="nav-link-image">
                          <img
                            src="/images/navbar/get-well-1.webp"
                            width={40}
                            height={40}
                            alt=""
                          />
                        </span>
                        <span>Get Well For Her</span>
                      </span>
                      <IconChevronRight className="icon xxs" />
                    </button>
                    <button className="link-item" onClick={toggleMenu}>
                      <span className="item">
                        <span className="nav-link-image">
                          <img
                            src="/images/navbar/get-well-2.webp"
                            width={40}
                            height={40}
                            alt=""
                          />
                        </span>
                        <span>Get Well For Him</span>
                      </span>
                      <IconChevronRight className="icon xxs" />
                    </button>
                    <button className="link-item" onClick={toggleMenu}>
                      <span className="item">
                        <span className="nav-link-image">
                          <img
                            src="/images/navbar/get-well-1.webp"
                            width={40}
                            height={40}
                            alt=""
                          />
                        </span>
                        <span>Get Well For Kids</span>
                      </span>
                      <IconChevronRight className="icon xxs" />
                    </button>
                    <button className="link-item" onClick={toggleMenu}>
                      <span className="item">
                        <span className="nav-link-image">
                          <img
                            src="/images/navbar/get-well-2.webp"
                            width={40}
                            height={40}
                            alt=""
                          />
                        </span>
                        <span>Plants</span>
                      </span>
                      <IconChevronRight className="icon xxs" />
                    </button>
                    <button className="link-item" onClick={toggleMenu}>
                      <span className="item">
                        <span className="nav-link-image">
                          <img
                            src="/images/navbar/get-well-1.webp"
                            width={40}
                            height={40}
                            alt=""
                          />
                        </span>
                        <span>Same-Day Delivery</span>
                      </span>
                      <IconChevronRight className="icon xxs" />
                    </button>
                  </div>
                </Collapse>
              </li>
              <li className="nav-item dropdown">
                <a
                  href=" "
                  className={`nav-link ${isOpenNav5 ? "active" : ""}`}
                  onClick={toggleNav5}
                >
                  Flowers
                </a>
                <Collapse isOpen={isOpenNav5}>
                  <div className="nav-link-list">
                    <button className="link-item" onClick={toggleMenu}>
                      <span className="item">
                        <span className="nav-link-image">
                          <img
                            src="/images/navbar/flowers-1.webp"
                            width={40}
                            height={40}
                            alt=""
                          />
                        </span>
                        <span>Bestsellers</span>
                      </span>
                      <IconChevronRight className="icon xxs" />
                    </button>
                    <button className="link-item" onClick={toggleMenu}>
                      <span className="item">
                        <span className="nav-link-image">
                          <img
                            src="/images/navbar/flowers-2.webp"
                            width={40}
                            height={40}
                            alt=""
                          />
                        </span>
                        <span>Christmas Flowers</span>
                      </span>
                      <IconChevronRight className="icon xxs" />
                    </button>
                  </div>
                </Collapse>
              </li>
              <li className="nav-item dropdown">
                <a
                  href=" "
                  className={`nav-link ${isOpenNav6 ? "active" : ""}`}
                  onClick={toggleNav6}
                >
                  Occasions
                </a>
                <Collapse isOpen={isOpenNav6}>
                  <div className="nav-link-list">
                    <button className="link-item" onClick={toggleMenu}>
                      <span className="item">
                        <span className="nav-link-image">
                          <img
                            src="/images/navbar/occasion-1.webp"
                            width={40}
                            height={40}
                            alt=""
                          />
                        </span>
                        <span>Anniversary</span>
                      </span>
                      <IconChevronRight className="icon xxs" />
                    </button>
                    <button className="link-item" onClick={toggleMenu}>
                      <span className="item">
                        <span className="nav-link-image">
                          <img
                            src="/images/navbar/occasion-2.webp"
                            width={40}
                            height={40}
                            alt=""
                          />
                        </span>
                        <span>Christmas Flowers</span>
                      </span>
                      <IconChevronRight className="icon xxs" />
                    </button>
                  </div>
                </Collapse>
              </li>
            </ul>
          </div>
          <NavSmSubmenu show={showMenu} hideMenu={hideMenu} />
        </div>
        <div className="nav-footer">
          <div className="footer-link">
            <div className="row justify-content-center gx-10 gy-3">
              <div className="col-12">
                <a href=" " className="link">
                  International Delivery
                </a>
              </div>
              <div className="col-12">
                <a href=" " className="link">
                  (800) 493-5610
                </a>
              </div>
              <div className="col-12">
                <a href=" " className="link">
                  Need Help?
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
                {/* sample image for social media icon */}
                <a href="https://www.facebook.com/teleflora">
                  <img
                    src="/images/social-media/facebook.svg"
                    width={20}
                    height={20}
                    alt=""
                  />
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
                    src="/images/app-store.png"
                    width={112}
                    height={46}
                    alt=""
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
