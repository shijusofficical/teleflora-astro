/**
 * Copyright(c) 2024 Valoriz Digital Pvt. Ltd.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Valoriz
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * contract agreement you entered into with Valoriz.
 *
 * AppHeader
 *
 * @author Valoriz UI Team
 *
 */

import React, { useState } from "react";
import NavSm from "@widgets/NavBar/NavSm";
import NavSecondary from "@widgets/NavBar/NavSecondary";
import NavIcons from "@widgets/NavBar/NavIcons";
import IconSearch from "@icons/IconSearch";
import SearchList from "@widgets/Header/SearchList";
import SearchSm from "@widgets/Header/SearchSm";

const Header = ({ data, additionalData }: { data: any, additionalData:any }) => {
  const navSecondaryData = {phoneNumber: data?.phoneNumber, needHelp: data?.needHelp, intDelivery: data?.internationalDelivery}
  const [showNavigation, setShowNavigation] = useState(true);
  const [navSmVisible, setNavSmVisible] = useState(true);
  const toggleNavigation = () => {
    setShowNavigation(!showNavigation);
    setNavSmVisible(!navSmVisible);
  };
  const [showLogin, setShowLogin] = useState(false);
  const handleToggle = () => {
    setShowLogin(!showLogin);
  };

  //search
  const [searchActive, setSearchActive] = useState(false);
  const [searchListActive, setSearchListActive] = useState(false);
  const [isSearchSmActive, setIsSearchSmActive] = useState(false);
  const handleSearchToggle = () => {
    setSearchActive(true);
    setTimeout(() => {
      setSearchListActive(true);
    }, 200);
  };
  const handleCloseSearch = () => {
    setSearchActive(false);
    setSearchListActive(false);
  };
  const handleSearchSmClick = () => {
    setIsSearchSmActive(!isSearchSmActive);
  };
  const handleCloseSmClick = () => {
    setIsSearchSmActive(false);
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              <nav className="navbar navbar-expand-xl">
                <div className="nav-sm-start">
                  <button className="navbar-toggler" onClick={toggleNavigation}>
                    <span className="navbar-toggler-icon nav-icon"></span>
                  </button>
                  <button className="nav-link" onClick={handleSearchSmClick}>
                    <div className="nav-icon">
                      <IconSearch className="icon md" />
                    </div>
                  </button>
                  <SearchSm
                    isActive={isSearchSmActive}
                    onClose={handleCloseSmClick}
                  />
                </div>
                <div
                  className={`navbar-collapse ${showNavigation ? "" : "show"}`}
                >
                  <NavSm
                    toggleNavigation={toggleNavigation}
                    setShowNavigation={setShowNavigation}
                    setShowLogin={setShowLogin}
                    data={navSecondaryData}
                    additionalData={additionalData}
                  />
                </div>
                <div
                  className={`nav-backdrop${!showNavigation ? " show" : ""}`}
                  onClick={toggleNavigation}
                />
                <div className="nav-secondary">
                  <NavSecondary data={navSecondaryData} />
                </div>
              </nav>
            </div>
            <div className="col-auto text-center">
              <a className="navbar-brand" href="/">
                <img src={data?.logo?.url} fill={true} alt="" />
              </a>
            </div>
            <div className="col d-flex justify-content-end">
              <div className="nav-search">
                <div
                  className={`search d-none d-xl-flex align-items-center ${
                    searchActive ? "active" : ""
                  }`}
                >
                  <div className="search-input w-100">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                    <button className="btn-search px-3 h-100">
                      <IconSearch className="icon md" />
                    </button>
                  </div>
                  <div className="search-close d-flex justify-content-end">
                    <button className="btn-close" onClick={handleCloseSearch} />
                  </div>
                </div>
                <div className="navbar-icons">
                  <NavIcons
                    handleToggle={handleToggle}
                    handleSearchToggle={handleSearchToggle}
                  />
                </div>
              </div>
              <SearchList active={searchListActive} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
