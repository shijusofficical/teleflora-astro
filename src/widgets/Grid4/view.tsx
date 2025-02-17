
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
const Grid4View = ({ data }: { data: any }) => {
  return (
    <div className="home-category">
      <div className="container">
        <div className="row justify-content-center gy-8">
          {data?.cards?.map((card:any, index:number):any=>(
            <div className="col-6 col-md-3" key={`carousel_${index}`}>
            <div className="item">
              <div className="item-image">
                <img loading="lazy" src={card?.backgroundImage?.url} width={card?.backgroundImage?.width} height={card?.backgroundImage?.height} alt="" />
              </div>
              <button className="btn btn-sm btn-outline-primary mt-4">{card?.button?.text}</button>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Grid4View;
