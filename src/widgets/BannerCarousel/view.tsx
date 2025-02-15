import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const BannerCarouselView = () => {
  return (
    <div className="hero-banner custom-controls">
      <Swiper
        navigation={{
          prevEl: ".swiper-hero-prev",
          nextEl: ".swiper-hero-next",
        }}
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={1000}
        modules={[Autoplay, Navigation]}
      >
        <SwiperSlide>
          <div className="hero-item">
            <a href=" ">
              <img src="/images/dummy/banner-1.webp" width={1440} height={397} alt="" className="d-none d-md-block" />
              <img src="/images/dummy/banner-sm-1.webp" width={768} height={890} alt="" className="d-md-none" />
            </a>
          </div>
          <div className="container">
            <div className="content">
              <div className="title">
                CHECK OFF <br /> YOUR LIST
              </div>
              <div className="text my-4">Our festive flower arrangements make perfect holiday gifts.</div>
              <button className="btn btn-primary px-8">SHOP CHRISTMAS</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-item">
            <a href=" ">
              <img src="/images/dummy/banner-2.webp" width={1530} height={400} alt="" className="d-none d-md-block" />
              <img src="/images/dummy/banner-sm-2.webp" width={768} height={890} alt="" className="d-md-none" />
            </a>
          </div>
          <div className="container">
            <div className="content">
              <div className="title">
                CHECK OFF <br /> YOUR LIST
              </div>
              <div className="text my-4">Our festive flower arrangements make perfect holiday gifts.</div>
              <button className="btn btn-primary px-8">SHOP CHRISTMAS</button>
            </div>
          </div>
        </SwiperSlide>
        <div className="swiper-button-prev swiper-hero-prev" />
        <div className="swiper-button-next swiper-hero-next" />
      </Swiper>
    </div>
  );
};

export default BannerCarouselView;
