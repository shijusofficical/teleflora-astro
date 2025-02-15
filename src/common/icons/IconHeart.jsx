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



const IconHeart = (props) => {
  const { className } = props;

  return (
    <>
      <svg className={className} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
        <defs>
          <clipPath id="clip-heart">
            <rect width="32" height="32" />
          </clipPath>
        </defs>
        <g id="heart" clipPath="url(#clip-heart)">
          <path
            id="Vector_Stroke_"
            data-name="Vector (Stroke)"
            // eslint-disable-next-line max-len
            d="M32.1,9.24h0c5.873,0,10.011,5.4,10.011,10.693,0,6.268-4.039,11.218-7.414,14.315a39.034,39.034,0,0,1-4.783,3.723c-.65.431-1.2.765-1.588.995-.2.115-.353.2-.466.268l-.135.075-.041.022-.014.007-.005,0h0s0,0-1.506-2.812c0,0,12.762-6.821,12.762-16.6,0-3.892-3.054-7.5-6.821-7.5a6.655,6.655,0,0,0-3.711,1.136,6.947,6.947,0,0,0-2.23,2.456,6.946,6.946,0,0,0-2.229-2.456,6.655,6.655,0,0,0-3.711-1.136c-3.767,0-6.821,3.611-6.821,7.5,0,9.776,12.762,16.6,12.762,16.6-1.5,2.813-1.5,2.812-1.506,2.812h0l-.005,0-.014-.007-.041-.022-.135-.075c-.113-.063-.27-.153-.466-.268-.391-.23-.937-.564-1.588-.995a39.048,39.048,0,0,1-4.782-3.723,28.167,28.167,0,0,1-5.041-6.084,15.828,15.828,0,0,1-2.373-8.231c0-5.289,4.138-10.693,10.012-10.693h0a9.846,9.846,0,0,1,5.941,2A9.847,9.847,0,0,1,32.1,9.24ZM26.159,36.53l1.5,2.813-1.5.8-1.5-.8Z"
            transform="translate(-10.207 -8.24)"
            fillRule="evenodd"
          />
        </g>
      </svg>
    </>
  );
};

export default IconHeart;
