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
        width="16"
        height="12"
        viewBox="0 0 16 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.36396 1.41421L1.41421 7.36396L0 5.94975L5.94975 0L7.36396 1.41421Z"
          fill="black"
        />
        <path
          d="M7.36396 10.4853L5.94975 11.8995L0 5.94975L1.41421 4.53553L7.36396 10.4853Z"
          fill="black"
        />
        <path
          d="M1.99996 4.99999L16 4.99999V6.99999L1.99996 6.99999L1.99996 4.99999Z"
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
