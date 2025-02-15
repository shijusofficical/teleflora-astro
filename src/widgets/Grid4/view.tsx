
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




const Grid4View = () => {
  return (
    <div className="home-category">
      <div className="container">
        <div className="row justify-content-center gy-8">
          <div className="col-6 col-md-3">
            <div className="item">
              <div className="item-image">
                <img src="/images/dummy/same-day.png" width={90} height={90} alt="" />
              </div>
              <button className="btn btn-sm btn-outline-primary mt-4">SAME DAY</button>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="item">
              <div className="item-image">
                <img src="/images/dummy/birthday.png" width={90} height={90} alt="" />
              </div>
              <button className="btn btn-sm btn-outline-primary mt-4">BIRTHDAY</button>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="item">
              <div className="item-image">
                <img src="/images/dummy/get-well.png" width={90} height={90} alt="" />
              </div>
              <button className="btn btn-sm btn-outline-primary mt-4">GET WELL</button>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="item">
              <div className="item-image">
                <img src="/images/dummy/sympathy.png" width={90} height={90} alt="" />
              </div>
              <button className="btn btn-sm btn-outline-primary mt-4">SYMPATHY</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid4View;
