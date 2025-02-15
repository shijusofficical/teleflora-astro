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



const IconCart = (props) => {
  const { className } = props;

  return (
    <>
      <svg className={className} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
        <defs>
          <clipPath id="clip-cart">
            <rect width="32" height="32" />
          </clipPath>
        </defs>
        <g id="cart" clipPath="url(#clip-cart)">
          <g id="IconCarts_bag" data-name="IconCarts/bag" transform="translate(-2.798 -1)">
            <g id="Vector" transform="translate(6 1)">
              <path
                id="Path_19"
                data-name="Path 19"
                d="M29.036,11.56H8.56V28.2H29.036ZM6,9V30.756H31.6V9Z"
                transform="translate(-6 1.238)"
                fillRule="evenodd"
              />
              <path
                id="Path_20"
                data-name="Path 20"
                d="M17.679,3.56A5.132,5.132,0,0,0,12.56,8.679v2.559H10V8.679a7.679,7.679,0,0,1,15.357,0v2.559H22.8V8.679A5.132,5.132,0,0,0,17.679,3.56Z"
                transform="translate(-4.881 -1)"
                fillRule="evenodd"
              />
              <path
                id="Path_21"
                data-name="Path 21"
                d="M20.849,14l-3.73,6.133L13.39,14H12V24.247h1.975v-5.71l2.457,4.026h1.375l2.457-4.026v5.71h1.974V14Z"
                transform="translate(-4.321 2.637)"
                fillRule="evenodd"
              />
            </g>
          </g>
        </g>
      </svg>
    </>
  );
};

export default IconCart;
