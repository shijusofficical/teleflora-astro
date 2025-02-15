/**
 * Copyright(c) 2023 Valoriz Digital Pvt. Ltd.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Valoriz
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * contract agreement you entered into with Valoriz.
 *
 * Navbar Container
 *
 * @author Valoriz UI Team
 *
 */
import React, { useEffect } from "react";
import Navbar from "@widgets/NavBar/Navbar";
import NavbarThumbnails from "@widgets/NavBar/NavbarThumbnails";

const NavbarContainer = () => {
  useEffect(() => {
    const isHiddenPage =
      window.location.pathname === "/checkout" ||
      window.location.pathname === "/eyetest-booking" ||
      window.location.pathname === "/eyetest-date" ||
      window.location.pathname === "/eyetest-my-info" ||
      window.location.pathname === "/eyetest-success" ||
      window.location.pathname === "/eyetest-store" ||
      window.location.pathname === "/forgot-password" ||
      window.location.pathname === "/transaction-error" ||
      window.location.pathname === "/transaction-pending" ||
      window.location.pathname === "/sitemap";
    const nav = document.querySelector("#navbarPanel");
    const navThumb = document.querySelector("#navbarPanelThumb");
    if (nav) {
      if (isHiddenPage) {
        nav.classList.add("hide-nav");
        navThumb.classList.add("hide-nav");
      } else {
        nav.classList.remove("hide-nav");
        navThumb.classList.remove("hide-nav");
      }
    }
  }, []);

  return (
    <>
      {/* <div id="navbarPanel" className="navbar-panel">
        <Navbar />
      </div> */}

      {/* Below are the navigation with thumbnail in Mobile and normal in desktop */}
      {/*
        TODO: Add collapsed class to navbar-panel:
        No need to display in desktop view: use class "d-xl-none"
        className="navbar-panel navbar-thumbnail-panel d-xl-none collapsed" 
      */}
      <div
        id="navbarPanelThumb"
        className="navbar-panel navbar-thumbnail-panel d-none"
      >
        <NavbarThumbnails />
      </div>
      {/* 
      TODO: If navbar-thumbnail-panel is enabled add "d-none d-xl-block" classes to "navbar-panel"
      <div id="navbarPanel" className="navbar-panel d-none d-xl-block"> 
      */}
      <div id="navbarPanel" className="navbar-panel">
        <Navbar />
      </div>
    </>
  );
};

NavbarContainer.propTypes = {};

export default NavbarContainer;
