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
import PropTypes from "prop-types";

const Icon = (props) => {
  const { className } = props;

  return (
    <>
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
      >
        <defs>
          <clipPath id="clip-right">
            <rect width="32" height="32" />
          </clipPath>
        </defs>
        <g id="right" clipPath="url(#clip-right)">
          <g
            id="Group_1"
            data-name="Group 1"
            transform="translate(26.299 31.991) rotate(180)"
          >
            <g id="Vector" transform="translate(0 0)">
              <path
                id="Path_5"
                data-name="Path 5"
                d="M20.3,18.577,4.446,2.724,0,7.335,15.852,23.187Z"
                transform="translate(0 8.803)"
              />
              <path
                id="Path_6"
                data-name="Path 6"
                d="M20.092,4.529,15.562,0,0,16.137l4.529,4.529Z"
                transform="translate(0 0)"
              />
            </g>
          </g>
        </g>
      </svg>
    </>
  );
};

Icon.propTypes = {
  className: PropTypes.string,
};

export default Icon;
