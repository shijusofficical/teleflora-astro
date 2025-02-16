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

const NavSecondary = ({ data }: { data: any}) => {
  return (
    <>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href=" ">
            {data?.intDelivery?.title}
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href=" ">
          {data?.phoneNumber?.title}
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href=" ">
            {data?.needHelp?.title}
          </a>
        </li>
      </ul>
    </>
  );
};

export default NavSecondary;
