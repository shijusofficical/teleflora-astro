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

import React from "react";
import IconSearch from "@icons/IconSearch";
import IconHeart from "@icons/IconHeart";
import IconCart from "@icons/IconCart";

const NavIcons = ({ handleToggle, handleSearchToggle }) => {
  // offcanvas

  return (
    <>
      <ul className="navbar-nav">
        <li className="nav-item d-none d-xl-block">
          <span className="nav-link" onClick={handleSearchToggle}>
            <div className="nav-icon">
              <IconSearch className="icon md" />
            </div>
          </span>
        </li>
        <li className="nav-item d-none d-xl-block">
          <button className="btn btn-primary btn-sm">ORDER STATUS</button>
        </li>
        <li className="nav-item d-none d-xl-block">
          <a
            className="nav-link"
            href=" "
            id="loginToggleButton"
          >
            Sign In
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href=" ">
            <div className="nav-icon">
              <IconHeart className="icon md" />
            </div>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link nav-cart active" href="/cart">
            <span className="nav-icon">
              <IconCart className="icon md" />
            </span>
            <span className="count">99</span>
          </a>
        </li>
      </ul>
      {/* <LoginRegister show={show} onClose={() => setShow(false)} /> */}
    </>
  );
};

export default NavIcons;
