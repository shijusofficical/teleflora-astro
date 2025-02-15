/**
 * Copyright(c) 2024 Valoriz Digital Pvt. Ltd.
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
import Dropdown from "@components/Dropdown";
import DropdownToggle from "@components/DropdownToggle";
import DropdownMenu from "@components/DropdownMenu";
import DropdownItem from "@components/DropdownItem";

const NavPrimary = ({ ...args }) => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const handleMouseEnter = (index) => {
    setDropdownOpen(index);
  };
  const handleMouseLeave = () => {
    setDropdownOpen(null);
  };
  const handleaClick = () => {
    setDropdownOpen(null);
  };

  const [dropdown2Open, setDropdown2Open] = useState(false);
  const toggle2 = () => setDropdown2Open((prevState) => !prevState);

  return (
    <>
      <div className="navbar navbar-expand nav-lg">
        <ul className="navbar-nav">
          <li
            className={`nav-item dropdown ${dropdownOpen === 0 ? "show" : ""}`}
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
          >
            <a href="/plp" className="nav-link" onClick={handleaClick}>
              Same Day
            </a>
          </li>
          <li
            className={`nav-item dropdown ${dropdownOpen === 1 ? "show" : ""}`}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <a href=" " className="nav-link">
              Christmas
            </a>
            <div
              className={`dropdown-menu ${dropdownOpen === 1 ? "show" : ""}`}
            >
              <div className="container">
                <div className="row justify-content-xl-between">
                  <div className="col-8 col-xl-7">
                    <div className="row gx-12">
                      <div className="col-3">
                        <div className="navbar-image mb-7">
                          <img
                            src="/images/navbar/christmas.webp"
                            width={400}
                            height={286}
                            alt=""
                          />
                        </div>
                        <h5 className="nav-title mb-3">Collections</h5>
                        <a href=" " className="dropdown-item">
                          Christmas Bestsellers
                        </a>
                        <a href=" " className="dropdown-item">
                          Christmas Centerpieces
                        </a>
                        <a href=" " className="dropdown-item">
                          Wreaths & Trees
                        </a>
                      </div>
                      <div className="col-3">
                        <div className="navbar-image mb-7">
                          <img
                            src="/images/navbar/christmas-2.webp"
                            width={400}
                            height={286}
                            alt=""
                          />
                        </div>
                        <h5 className="nav-title mb-3">Featured</h5>
                        <a href=" " className="dropdown-item">
                          Gifts Under $60
                        </a>
                        <a href=" " className="dropdown-item">
                          Make-A-Wish Collection
                        </a>
                        <a href=" " className="dropdown-item">
                          Same-Day Delivery
                        </a>
                        <a href=" " className="dropdown-item">
                          Winter Collection
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 col-xl-4">
                    <div>
                      <div className="navbar-image md">
                        <img
                          src="/images/navbar/image-md.webp"
                          width={600}
                          height={276}
                          alt=""
                        />
                      </div>
                      <div className="row justify-content-between mt-3">
                        <div className="col-auto">
                          <div className="nav-title">Edit Name</div>
                        </div>
                        <div className="col-auto">
                          <a href=" " className="link link-item">
                            Shop All Christmas
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li
            className={`nav-item dropdown ${dropdownOpen === 2 ? "show" : ""}`}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <a href=" " className="nav-link">
              Birthday
            </a>
            <div
              className={`dropdown-menu ${dropdownOpen === 2 ? "show" : ""}`}
            >
              <div className="container">
                <div className="row justify-content-xl-between">
                  <div className="col-8 col-xl-7">
                    <div className="row gx-12">
                      <div className="col-3">
                        <div className="navbar-image mb-7">
                          <img
                            src="/images/navbar/birthday-1.webp"
                            width={400}
                            height={286}
                            alt=""
                          />
                        </div>
                        <h5 className="nav-title mb-3">Gifts by Recipient</h5>
                        <a href=" " className="dropdown-item">
                          Birthday For Her
                        </a>
                        <a href=" " className="dropdown-item">
                          Birthday For Him
                        </a>
                        <a href=" " className="dropdown-item">
                          Birthday For Kids
                        </a>
                        <a href=" " className="dropdown-item">
                          Sweet 16
                        </a>
                        <a href=" " className="dropdown-item">
                          Quinceañera
                        </a>
                      </div>
                      <div className="col-3">
                        <div className="navbar-image mb-7">
                          <img
                            src="/images/navbar/birthday-2.webp"
                            width={400}
                            height={286}
                            alt=""
                          />
                        </div>
                        <h5 className="nav-title mb-3">Collections</h5>
                        <a href=" " className="dropdown-item">
                          Bestsellers
                        </a>
                        <a href=" " className="dropdown-item">
                          Christmas Flowers
                        </a>
                        <a href=" " className="dropdown-item">
                          Holiday Collection
                        </a>
                        <a href=" " className="dropdown-item">
                          New Arrivals
                        </a>
                        <a href=" " className="dropdown-item">
                          Plants
                        </a>
                        <a href=" " className="dropdown-item">
                          Same-Day Delivery
                        </a>
                        <a href=" " className="dropdown-item">
                          Winter Flowers
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 col-xl-4">
                    <div>
                      <div className="navbar-image md">
                        <img
                          src="/images/navbar/birthday-md.webp"
                          width={600}
                          height={276}
                          alt=""
                        />
                      </div>
                      <div className="row justify-content-between mt-3">
                        <div className="col-auto">
                          <div className="nav-title">Edit Name</div>
                        </div>
                        <div className="col-auto">
                          <a href=" " className="link link-item">
                            Shop All Birthday
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li
            className={`nav-item dropdown ${dropdownOpen === 3 ? "show" : ""}`}
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            <a className="nav-link" href=" ">
              Sympathy
            </a>
            <div
              className={`dropdown-menu ${dropdownOpen === 3 ? "show" : ""}`}
            >
              <div className="container">
                <div className="row justify-content-xl-between">
                  <div className="col-8 col-xl-7">
                    <div className="row gx-12">
                      <div className="col-3">
                        <div className="navbar-image mb-7">
                          <img
                            src="/images/navbar/sympathy-1.webp"
                            width={400}
                            height={286}
                            alt=""
                          />
                        </div>
                        <h5 className="nav-title mb-3">For Services</h5>
                        <a href=" " className="dropdown-item">
                          Funeral Sprays & Wreaths
                        </a>
                        <a href=" " className="dropdown-item">
                          Funeral Service Bouquets
                        </a>
                        <a href=" " className="dropdown-item">
                          Funeral Casket Flowers
                        </a>
                        <a href=" " className="dropdown-item">
                          Cremation Flowers
                        </a>
                        <a href=" " className="dropdown-item">
                          Quinceañera
                        </a>
                      </div>
                      <div className="col-3">
                        <div className="navbar-image mb-7">
                          <img
                            src="/images/navbar/sympathy-2.webp"
                            width={400}
                            height={286}
                            alt=""
                          />
                        </div>
                        <h5 className="nav-title mb-3">For the Home</h5>
                        <a href=" " className="dropdown-item">
                          Sympathy Bouquets
                        </a>
                        <a href=" " className="dropdown-item">
                          Sympathy Plants
                        </a>
                        <a href=" " className="dropdown-item">
                          Sympathy Floral Baskets
                        </a>
                        <a href=" " className="dropdown-item">
                          Pet Sympathy Gifts
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 col-xl-4">
                    <div>
                      <div className="navbar-image md">
                        <img
                          src="/images/navbar/sympathy-md.webp"
                          width={600}
                          height={276}
                          alt=""
                        />
                      </div>
                      <div className="row justify-content-between mt-3">
                        <div className="col-auto">
                          <div className="nav-title">Edit Name</div>
                        </div>
                        <div className="col-auto">
                          <a href=" " className="link link-item">
                            Shop All Funeral & Sympathy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li
            className={`nav-item dropdown ${dropdownOpen === 4 ? "show" : ""}`}
            onMouseEnter={() => handleMouseEnter(4)}
            onMouseLeave={handleMouseLeave}
          >
            <a className="nav-link" href=" ">
              Get Well
            </a>
            <div
              className={`dropdown-menu ${dropdownOpen === 4 ? "show" : ""}`}
            >
              <div className="container">
                <div className="row justify-content-xl-between">
                  <div className="col-8 col-xl-7">
                    <div className="row gx-12">
                      <div className="col-3">
                        <div className="navbar-image mb-7">
                          <img
                            src="/images/navbar/get-well-1.webp"
                            width={400}
                            height={286}
                            alt=""
                          />
                        </div>
                        <h5 className="nav-title mb-3">Collections</h5>
                        <a href=" " className="dropdown-item">
                          Get Well For Her
                        </a>
                        <a href=" " className="dropdown-item">
                          Get Well For Him
                        </a>
                        <a href=" " className="dropdown-item">
                          Get Well For Kids
                        </a>
                        <a href=" " className="dropdown-item">
                          Plants
                        </a>
                        <a href=" " className="dropdown-item">
                          Same-Day Delivery
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 col-xl-4">
                    <div>
                      <div className="navbar-image md">
                        <img
                          src="/images/navbar/get-well-md.webp"
                          width={600}
                          height={276}
                          alt=""
                        />
                      </div>
                      <div className="row justify-content-between mt-3">
                        <div className="col-auto">
                          <div className="nav-title">Edit Name</div>
                        </div>
                        <div className="col-auto">
                          <a href=" " className="link link-item">
                            Shop All Get Well
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li
            className={`nav-item dropdown ${dropdownOpen === 5 ? "show" : ""}`}
            onMouseEnter={() => handleMouseEnter(5)}
            onMouseLeave={handleMouseLeave}
          >
            <a className="nav-link" href=" ">
              Flowers
            </a>
            <div
              className={`dropdown-menu ${dropdownOpen === 5 ? "show" : ""}`}
            >
              <div className="container">
                <div className="row justify-content-xl-between">
                  <div className="col-8 col-xl-7">
                    <div className="row gx-12">
                      <div className="col-3">
                        <div className="navbar-image mb-7">
                          <img
                            src="/images/navbar/flowers-1.webp"
                            width={400}
                            height={286}
                            alt=""
                          />
                        </div>
                        <h5 className="nav-title mb-3">Collections</h5>
                        <a href=" " className="dropdown-item">
                          Bestsellers
                        </a>
                        <a href=" " className="dropdown-item">
                          Christmas Flowers
                        </a>
                        <a href=" " className="dropdown-item">
                          Deal of the Day
                        </a>
                        <a href=" " className="dropdown-item">
                          Hanukkah Flowers
                        </a>
                        <a href=" " className="dropdown-item">
                          Holiday Collection
                        </a>
                        <a href=" " className="dropdown-item">
                          New Arrivals
                        </a>
                        <a href=" " className="dropdown-item">
                          Plants
                        </a>
                        <a href=" " className="dropdown-item">
                          Same-Day Delivery
                        </a>
                        <a href=" " className="dropdown-item">
                          Shop by Vase
                        </a>
                        <a href=" " className="dropdown-item">
                          Winter Flowers
                        </a>
                      </div>
                      <div className="col-3">
                        <div className="navbar-image mb-7">
                          <img
                            src="/images/navbar/flowers-2.webp"
                            width={400}
                            height={286}
                            alt=""
                          />
                        </div>
                        <h5 className="nav-title mb-3">Color</h5>
                        <a href=" " className="dropdown-item">
                          Blue Flowers
                        </a>
                        <a href=" " className="dropdown-item">
                          Green Flowers
                        </a>
                        <a href=" " className="dropdown-item">
                          Neutral Flowers
                        </a>
                        <a href=" " className="dropdown-item">
                          Orange Flowers
                        </a>
                        <a href=" " className="dropdown-item">
                          Pastel Flowers
                        </a>
                        <a href=" " className="dropdown-item">
                          Pink Flowers
                        </a>
                        <a href=" " className="dropdown-item">
                          Purple Flowers
                        </a>
                        <a href=" " className="dropdown-item">
                          Red Flowers
                        </a>
                        <a href=" " className="dropdown-item">
                          White Flowers
                        </a>
                        <a href=" " className="dropdown-item">
                          Yellow Flowers
                        </a>
                      </div>
                      <div className="col-3">
                        <div className="navbar-image mb-7">
                          <img
                            src="/images/navbar/flowers-3.webp"
                            width={400}
                            height={286}
                            alt=""
                          />
                        </div>
                        <h5 className="nav-title mb-3">Flower Type</h5>
                        <a href=" " className="dropdown-item">
                          Alstroemeria
                        </a>
                        <a href=" " className="dropdown-item">
                          Carnations
                        </a>
                        <a href=" " className="dropdown-item">
                          Chrysanthemums
                        </a>
                        <a href=" " className="dropdown-item">
                          Daisies
                        </a>
                        <a href=" " className="dropdown-item">
                          Lilies
                        </a>
                        <a href=" " className="dropdown-item">
                          Orchids
                        </a>
                        <a href=" " className="dropdown-item">
                          Roses
                        </a>
                        <a href=" " className="dropdown-item">
                          Stock
                        </a>
                        <a href=" " className="dropdown-item">
                          Sunflowers
                        </a>
                        <a href=" " className="dropdown-item">
                          Tropicals
                        </a>
                        <a href=" " className="dropdown-item">
                          Tulips
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 col-xl-4">
                    <div>
                      <div className="navbar-image md">
                        <img
                          src="/images/navbar/flowers-md.webp"
                          width={600}
                          height={276}
                          alt=""
                        />
                      </div>
                      <div className="row justify-content-between mt-3">
                        <div className="col-auto">
                          <div className="nav-title">Edit Name</div>
                        </div>
                        <div className="col-auto">
                          <a href=" " className="link link-item">
                            Shop All Flowers
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li
            className={`nav-item dropdown ${dropdownOpen === 6 ? "show" : ""}`}
            onMouseEnter={() => handleMouseEnter(6)}
            onMouseLeave={handleMouseLeave}
          >
            <a className="nav-link sale-link" href=" ">
              Occasions
            </a>
            <div
              className={`dropdown-menu ${dropdownOpen === 6 ? "show" : ""}`}
            >
              <div className="container">
                <div className="row justify-content-xl-between">
                  <div className="col-8 col-xl-7">
                    <div className="row gx-12">
                      <div className="col-3">
                        <div className="navbar-image mb-7">
                          <img
                            src="/images/navbar/occasion-1.webp"
                            width={400}
                            height={286}
                            alt=""
                          />
                        </div>
                        <h5 className="nav-title mb-3">Featured Occasions</h5>
                        <a href=" " className="dropdown-item">
                          Anniversary
                        </a>
                        <a href=" " className="dropdown-item">
                          Christmas Flowers
                        </a>
                        <a href=" " className="dropdown-item">
                          Congratulations
                        </a>
                        <a href=" " className="dropdown-item">
                          Corporate Gifting
                        </a>
                        <a href=" " className="dropdown-item">
                          Get Well
                        </a>
                        <a href=" " className="dropdown-item">
                          I&apos;m Sorry
                        </a>
                        <a href=" " className="dropdown-item">
                          Just Because
                        </a>
                        <a href=" " className="dropdown-item">
                          Love & Romance
                        </a>
                        <a href=" " className="dropdown-item">
                          New Baby
                        </a>
                        <a href=" " className="dropdown-item">
                          Retirement
                        </a>
                        <a href=" " className="dropdown-item">
                          Sympathy & Funeral
                        </a>
                        <a href=" " className="dropdown-item">
                          Thank You
                        </a>
                        <a href=" " className="dropdown-item">
                          Thinking of You
                        </a>
                      </div>
                      <div className="col-3">
                        <div className="navbar-image mb-7">
                          <img
                            src="/images/navbar/occasion-2.webp"
                            width={400}
                            height={286}
                            alt=""
                          />
                        </div>
                        <h5 className="nav-title mb-3">Upcoming Occasions</h5>
                        <a href=" " className="dropdown-item">
                          Christmas
                        </a>
                        <a href=" " className="dropdown-item">
                          Hanukkah
                        </a>
                        <a href=" " className="dropdown-item">
                          Kwanzaa
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 col-xl-4">
                    <div>
                      <div className="navbar-image md">
                        <img
                          src="/images/navbar/flowers-md.webp"
                          width={600}
                          height={276}
                          alt=""
                        />
                      </div>
                      <div className="row justify-content-between mt-3">
                        <div className="col-auto">
                          <div className="nav-title">Edit Name</div>
                        </div>
                        <div className="col-auto">
                          <a href=" " className="link link-item">
                            Shop All Occasions
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li
            className={`nav-item dropdown d-none d-xl-block ${
              dropdownOpen === 7 ? "show" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(7)}
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
              className={`dropdown-menu ${dropdownOpen === 7 ? "show" : ""}`}
            >
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-8 col-xl-4">
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
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavPrimary;
