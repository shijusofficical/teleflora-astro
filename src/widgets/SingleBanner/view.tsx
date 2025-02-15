const SingleBannerView = () => {
  return (
    <div className="my-16">
      <div className="promotional-banner-panel">
        <div className="container">
          <div className="promotional-banner lg">
            <div className="promo-image">
              <a href="/">
                <img src="/images/dummy/promo-banner.webp" width={1344} height={660} alt="" className="d-none d-md-block" />
                <img src="/images/dummy/promo-banner-sm.webp" width={800} height={800} alt="" className="d-md-none" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBannerView;
