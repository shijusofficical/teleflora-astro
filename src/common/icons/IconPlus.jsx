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



const IconPlus = (props) => {
  const { className } = props;

  return (
    <>
      <svg className={className} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
        <defs>
          <clipPath id="clip-plus">
            <rect width="14" height="14" />
          </clipPath>
        </defs>
        <g id="plus" clipPath="url(#clip-plus)">
          <g id="Component_1_1" data-name="Component 1 – 1">
            <g id="Group_38122" data-name="Group 38122">
              <path
                id="Line_3"
                data-name="Line 3"
                d="M18,23.586a1,1,0,0,1-1-1V10.565a1,1,0,1,1,2,0V22.586A1,1,0,0,1,18,23.586Z"
                transform="translate(-11 -9.565)"
              />
              <path id="Line_4" data-name="Line 4" d="M24,17.576H12a1,1,0,0,1,0-2H24a1,1,0,1,1,0,2Z" transform="translate(-11 -9.565)" />
            </g>
          </g>
        </g>
      </svg>
    </>
  );
};

export default IconPlus;
