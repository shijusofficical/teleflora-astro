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

import IconSearch from "@icons/IconSearch";
import ListContentDefault from "@widgets/Header/ListContentDefault";
// import ListContentDefault2 from "@widgets/Header/components/ListContentDefault2";
// import ListContent from "@widgets/Header/components/ListContent";
// import ListNoResult from "@widgets/Header/components/ListNoResult";

const SearchSm = ({ isActive, onClose }) => {
  return (
    <>
      <div className={`search-list ${isActive ? "active" : ""}`}>
        <div className="container mt-4">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="search d-flex align-items-center">
                <div className="search-input w-100">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                  <button className="btn-search px-3 h-100">
                    <IconSearch className="icon md" />
                  </button>
                </div>
                <div className="search-close d-flex justify-content-end">
                  <button className="btn-close" onClick={onClose} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="list-content-sm">
          <div className="container my-6">
            <ListContentDefault />
            {/* <ListContentDefault2 /> */}
          </div>
          {/* <ListContent /> */}
          {/* <div className="d-flex flex-column justify-content-center h-100">
            <ListNoResult />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default SearchSm;
