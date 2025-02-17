import React, { useState } from "react";

const NavPrimary = ({ additionalData }: { additionalData: any }) => {
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
  const handleMouseEnter = (index:number) => {
    setDropdownOpen(index);
  };
  const handleMouseLeave = () => {
    setDropdownOpen(null);
  };
  return (
    <>
      <div className="navbar navbar-expand nav-lg">
        <ul className="navbar-nav">
          {additionalData?.menu.map((item: any, index: number) => (
            <li
              key={`navbar_${index}`}
              className={`nav-item dropdown ${
                dropdownOpen === index ? "show" : ""
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <a href=" " className="nav-link">
                {item?.name}
              </a>
              <div
                className={`dropdown-menu ${
                  dropdownOpen === index ? "show" : ""
                }`}
              >
                <div className="container">
                  <div className="row justify-content-xl-between">
                    <div className="col-8 col-xl-7">
                      <div className="row gx-12">
                        {item?.subMenu?.map((subMenuItem: any, i: any) => (
                          <div className="col-3" key={`navbar_item${i}`}>
                            <div className="navbar-image mb-7">
                              <img
                                src={subMenuItem?.image?.url}
                                width={subMenuItem?.image?.width}
                                height={subMenuItem?.image?.height}
                                alt=""
                              />
                            </div>
                            <h5 className="nav-title mb-3">
                              {subMenuItem?.name}
                            </h5>
                            {subMenuItem?.subMenu?.map((subMenuChild: any, j: any) => (
                              <a href=" " className="dropdown-item" key={`navbar_sub_item_${j}`}>
                                {subMenuChild?.name}
                              </a>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="col-4 col-xl-4">
                        <div>
                          <div className="navbar-image md">
                            <img
                              src={item?.navigationCard?.image?.url}
                              width={item?.navigationCard?.image?.width}
                              height={item?.navigationCard?.image?.height}
                              alt=""
                            />
                          </div>
                          <div className="row justify-content-between mt-3">
                            <div className="col-auto">
                              <div className="nav-title">{item?.navigationCard?.title}</div>
                            </div>
                            <div className="col-auto">
                              <a href=" " className="link link-item">
                              {item?.navigationCard?.linkTitle}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavPrimary;
