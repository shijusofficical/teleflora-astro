import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const BannerCarouselView = ({ data }: { data: any }) => {
  return (
    <div className="hero-banner custom-controls">
      <Swiper
        navigation={{
          prevEl: ".swiper-hero-prev",
          nextEl: ".swiper-hero-next",
        }}
        loop={true}
        autoplay={{
          delay: 9000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={1000}
        modules={[Autoplay, Navigation]}
      >
        {data?.slides?.map((slide,index):any => (
          <SwiperSlide>
            <div className="hero-item">
              <a href={slide?.link}>
                <img loading={index != 0 ? "lazy" : "eager"} src={slide?.backgroundImage?.md?.url} width={slide?.backgroundImage?.md?.width} height={slide?.backgroundImage?.md?.height} alt="" className="d-none d-md-block" />
                <img loading={index != 0 ? "lazy" : "eager"} src={slide?.backgroundImage?.sm?.url} width={slide?.backgroundImage?.md?.width} height={slide?.backgroundImage?.md?.height} alt="" className="d-md-none" />
              </a>
            </div>
            <div className="container">
              <div className="content">
                <div className="title">
                  {slide?.title}
                </div>
                <div className="text my-4">{slide?.subtitle}</div>
                <button className="btn btn-primary px-8">{slide?.buttonText}</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev swiper-hero-prev" />
        <div className="swiper-button-next swiper-hero-next" />
      </Swiper>
    </div>
  );
};

export default BannerCarouselView;
