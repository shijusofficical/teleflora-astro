const SingleBannerView = ({ data }: { data: any }) => {
  return (
    <div className="my-16">
      <div className="promotional-banner-panel">
        <div className="container">
          <div className="promotional-banner lg">
            <div className="promo-image">
              <a href={data?.link}>
                <img src={data?.backgroundImage?.md?.url} width={data?.backgroundImage?.md?.width} height={data?.backgroundImage?.md?.height} alt="" className="d-none d-md-block" />
                <img src={data?.backgroundImage?.sm?.url} width={data?.backgroundImage?.sm?.width} height={data?.backgroundImage?.md?.height} alt="" className="d-md-none" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBannerView;
