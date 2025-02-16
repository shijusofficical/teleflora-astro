/**
 * Copyright(c) 2025 Valoriz Digital Private Ltd.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Valoriz ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Valoriz.
 *
 * @author  Indrajith C
 */



const TapeBanner = ({ data }: { data: any }) => {
  return (
    <div className="header-notification">
      <div className="container-fluid">
        <div className="row text-center">
          <div className="col-12">{data?.announcement?.title}</div>
        </div>
      </div>
    </div>
  );
}

export default TapeBanner;