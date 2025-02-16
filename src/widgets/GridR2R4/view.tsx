const GridR2R4View = ({ data }: { data: any }) => {
  const [card0, card1, ...rest] = data?.cards;
  const r2Cards = [card0, card1];
  const r4Cards = rest;
  return (
    <div className="promotional-banner-panel">
      <div className="container">
        <div className="row g-4 g-lg-6">
          {r2Cards?.map((card)=>(
            <div className="col-12 col-md-6">
              <div className="promotional-banner shade md">
                <div className="promo-image">
                  <img loading="lazy" src={card?.backgroundImage?.url} width={card?.backgroundImage?.width} height={card?.backgroundImage?.height} alt="" />
                </div>
                <div className="promo-content">
                  <h5 className="title">{card?.title}</h5>
                  <button className="btn btn-light mt-2">{card?.button?.text}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row g-4 g-lg-6 mt-0">
          {r4Cards?.map((card)=>(
            <div className="col-6 col-md-3">
              <div className="promotional-banner shade md">
                <div className="promo-image">
                  <img loading="lazy" src={card?.backgroundImage?.url} width={card?.backgroundImage?.width} height={card?.backgroundImage?.height} alt="" />
                </div>
                <div className="promo-content">
                  <h5 className="title">{card?.title}</h5>
                  <button className="btn btn-light mt-2">{card?.button?.text}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GridR2R4View;
