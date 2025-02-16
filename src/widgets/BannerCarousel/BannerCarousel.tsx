import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useEffect, useRef } from "react";

const BannerCarouselView = ({ data }: { data: any }) => {
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    const swiperInstance = swiperRef.current?.swiper;
    
    if (swiperInstance) {
      swiperInstance.on("slideChange", () => {
        const activeIndex = swiperInstance.realIndex;
        const activeSlide = data?.slides?.[activeIndex];

        if (activeSlide) {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: "banner_swipe",
            slide_index: activeIndex + 1, // 1-based index
            slide_title: activeSlide.title || "Unknown",
          });
        }
      });
    }
  }, [data]);

  return (
    <div className="hero-banner custom-controls">
      <Swiper
        ref={swiperRef}
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
        {data?.slides?.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="hero-item">
              <a
                href={slide?.link}
                onClick={() => {
                  window.dataLayer = window.dataLayer || [];
                  window.dataLayer.push({
                    event: "banner_click",
                    slide_index: index + 1,
                    slide_title: slide?.title || "Unknown",
                    slide_url: slide?.link || "N/A",
                  });
                }}
                onMouseEnter={() => {
                  window.dataLayer = window.dataLayer || [];
                  window.dataLayer.push({
                    event: "banner_hover",
                    slide_index: index + 1,
                    slide_title: slide?.title || "Unknown",
                  });
                }}
              >
                <img
                  loading={index !== 0 ? "lazy" : "eager"}
                  src={slide?.backgroundImage?.md?.url}
                  width={slide?.backgroundImage?.md?.width}
                  height={slide?.backgroundImage?.md?.height}
                  alt=""
                  className="d-none d-md-block"
                />
                <img
                  loading={index !== 0 ? "lazy" : "eager"}
                  src={slide?.backgroundImage?.sm?.url}
                  width={slide?.backgroundImage?.md?.width}
                  height={slide?.backgroundImage?.md?.height}
                  alt=""
                  className="d-md-none"
                />
              </a>
            </div>
            <div className="container">
              <div className="content">
                <div className="title">{slide?.title}</div>
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

