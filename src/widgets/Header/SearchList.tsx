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
import ListContentDefault from "@widgets/Header/ListContentDefault";
// import ListContentDefault2 from "@widgets/Header/components/ListContentDefault2";
// import ListContent from "@widgets/Header/components/ListContent";
// import ListNoResult from "@widgets/Header/components/ListNoResult";

const SearchList = ({ active }) => {
  return (
    <>
      <div
        className={`search-list d-none d-xl-block ${active ? "active" : ""}`}
      >
        {/* TODO: on click search button on Header.jsx show <ListContentDefault /> initially */}
        <div className="container py-11">
          <ListContentDefault />
          {/* <ListContentDefault2 /> */}
        </div>
        {/* TODO: When user start typing keyword in search field, show: <ListContent /> */}
        {/* <ListContent /> */}
        {/* TODO: If keyword not matching, show: <ListNoResult /> */}
        {/* <ListNoResult /> */}
      </div>
    </>
  );
};
export default SearchList;
