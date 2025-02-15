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
import IconArrowLeft from "@icons/IconArrowLeft";

const NavSmSubmenu = ({ show, hideMenu }) => {
  return (
    <>
      <div className={`nav-submenu ${show ? "show" : ""}`}>
        <button className="nav-back" onClick={hideMenu}>
          <IconArrowLeft className="icon sm me-2" />
          Back
        </button>
        <div className="navbar-image">
          <img
            src="/images/navbar/flowers-md.webp"
            width={603}
            height={180}
            alt=""
          />
          <div className="content">Flowers</div>
        </div>
        <div className="nav-link-list">
          <a href=" " className="link-item">
            <span className="item">
              <span className="nav-link-image">
                <img
                  src="/images/navbar/flowers-1.webp"
                  width={1080}
                  height={540}
                  alt=""
                />
              </span>
              <span>Green Flowers</span>
            </span>
          </a>
          <a href=" " className="link-item">
            <span className="item">
              <span className="nav-link-image">
                <img
                  src="/images/navbar/flowers-2.webp"
                  width={40}
                  height={40}
                  alt=""
                />
              </span>
              <span>Blue Flowers</span>
            </span>
          </a>
          <a href=" " className="link-item">
            <span className="item">
              <span className="nav-link-image">
                <img
                  src="/images/navbar/flowers-1.webp"
                  width={40}
                  height={40}
                  alt=""
                />
              </span>
              <span>Neutral Flowers</span>
            </span>
          </a>
          <a href=" " className="link-item">
            <span className="item">
              <span className="nav-link-image">
                <img
                  src="/images/navbar/flowers-2.webp"
                  width={40}
                  height={40}
                  alt=""
                />
              </span>
              <span>Orange Flowers</span>
            </span>
          </a>
          <a href=" " className="link-item">
            <span className="item">
              <span className="nav-link-image">
                <img
                  src="/images/navbar/flowers-1.webp"
                  width={40}
                  height={40}
                  alt=""
                />
              </span>
              <span>Red Flowers</span>
            </span>
          </a>
        </div>
        <div className="mt-8">
          <div className="navbar-image">
            <img
              src="/images/navbar/image-md.webp"
              width={600}
              height={276}
              alt=""
            />
          </div>
          <div className="nav-title mt-2">Edit Name</div>
        </div>
      </div>
    </>
  );
};

export default NavSmSubmenu;
