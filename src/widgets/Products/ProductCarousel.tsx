import { useEffect, useState } from "react";
import IconPlus from "@icons/IconPlus";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation } from "swiper/modules";

const ProductCarousel = ({productDetails}:{productDetails:any}) => {
  const navigationEnabled = true;
  return (
    <div className="swiper-sm nav-outside">
      {navigationEnabled && <div className="swiper-button-prev swiper-reco-prev" />}
      <Swiper
        slidesPerView={1.8}
        spaceBetween={20}
        scrollbar={{
          draggable: true,
        }}
        navigation={
          navigationEnabled
            ? {
                prevEl: ".swiper-reco-prev",
                nextEl: ".swiper-reco-next",
              }
            : false
        }
        breakpoints={{
          768: {
            slidesPerView: 4,
          },
          992: {
            slidesPerView: 5,
            scrollbar: false,
          },
        }}
        modules={[Scrollbar, Navigation]}
      >
          {productDetails?.map((product: any)=>(
            <SwiperSlide>
              <div className="card product">
                <div className="product-image-panel">
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="product-image"
                  >
                    <img
                      src={product?.product?.largeImageUrl}
                      width={253}
                      height={301}
                      loading="lazy"
                      alt={product?.product?.displayName}
                    />
                    <button className="btn btn-light btn-favourite" />
                    <button className="btn btn-light btn-rounded">
                      <IconPlus className="icon" />
                    </button>
                  </a>
                </div>
                <div className="card-body">
                  <a href="#">
                    <div className="product-name">{product?.product?.displayName}</div>
                  </a>
                  <div className="product-price offer">
                    <div className="price-original">${(product?.product?.highestSalePrice + 5)?.toFixed(2)}</div>
                    <div className="price">${product?.product?.lowestSalePrice?.toFixed(2)}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      {navigationEnabled && <div className="swiper-button-next swiper-reco-next" />}
    </div>
  );
};

export default ProductCarousel;
