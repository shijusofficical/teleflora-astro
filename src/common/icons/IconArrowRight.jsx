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

import React from "react";
import PropTypes from "prop-types";

const Icon = (props) => {
  const { className } = props;

  return (
    <>
      <svg
        className={className}
        width="16"
        height="12"
        viewBox="0 0 16 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.63604 10.5858L14.5858 4.63604L16 6.05025L10.0503 12L8.63604 10.5858Z"
          fill="black"
        />
        <path
          d="M8.63604 1.51472L10.0503 0.100506L16 6.05025L14.5858 7.46447L8.63604 1.51472Z"
          fill="black"
        />
        <path
          d="M14 7.00001L4.19617e-05 7.00001V5.00001L14 5.00001V7.00001Z"
          fill="black"
        />
      </svg>
    </>
  );
};

Icon.propTypes = {
  className: PropTypes.string,
};

export default Icon;
