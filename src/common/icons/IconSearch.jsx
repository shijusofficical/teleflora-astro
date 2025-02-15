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



const IconSearch = (props) => {
  const { className } = props;

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" className={className} width="32" height="32" viewBox="0 0 32 32">
        <defs>
          <clipPath id="clip-search">
            <rect width="32" height="32" />
          </clipPath>
        </defs>
        <g id="search" clipPath="url(#clip-search)">
          <g id="search-2" data-name="search" transform="translate(-6 -6)">
            <path
              id="Path_15"
              data-name="Path 15"
              // eslint-disable-next-line max-len
              d="M19.423,29.491A10.068,10.068,0,1,0,9.356,19.423,10.068,10.068,0,0,0,19.423,29.491Zm0,3.356A13.423,13.423,0,1,0,6,19.423,13.423,13.423,0,0,0,19.423,32.847Z"
              fillRule="evenodd"
            />
            <path id="Path_16" data-name="Path 16" d="M20.373,18l9.492,9.492-2.373,2.373L18,20.373Z" transform="translate(8.135 8.135)" />
          </g>
        </g>
      </svg>
    </>
  );
};

export default IconSearch;
