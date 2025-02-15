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
 *
 * @author Valoriz UI Team
 *
 */

import React from "react";

const ListNoResult = () => {
  return (
    <>
      <div className="container mt-6 mt-xl-11">
        <div className="row justify-content-center">
          <div className="col-8 col-xl-7">
            <p className="text-center">
              Sorry, we have no results for &quot;akscbak&quot;, but these
              searches have been popular lately:
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListNoResult;
