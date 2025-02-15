
import IconPlus from "@icons/IconPlus";

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation } from "swiper/modules";

const ProductCarousel = () => {
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
        <SwiperSlide>
          <div className="card product">
            <div className="product-image-panel">
              <a href=" " onClick={(e) => e.preventDefault()} className="product-image">
                <img src="/images/dummy/product-1.webp" width={253} height={301} alt="" />
                <button className="btn btn-light btn-favourite" />
                <button className="btn btn-light btn-rounded">
                  <IconPlus className="icon" />
                </button>
              </a>
            </div>
            <div className="card-body">
              <a href=" ">
                <div className="product-name">Teleflora&apos;s Timeless Treasure Bouquet</div>
              </a>
              <div className="product-price offer">
                <div className="price-original">$44.99</div>
                <div className="price">$40.49</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card product">
            <div className="product-image-panel">
              <a href=" " onClick={(e) => e.preventDefault()} className="product-image">
                <img src="/images/dummy/product-2.webp" width={253} height={301} alt="" />
                <button className="btn btn-light btn-favourite" />
                <button className="btn btn-light btn-rounded">
                  <IconPlus className="icon" />
                </button>
              </a>
            </div>
            <div className="card-body">
              <a href=" ">
                <div className="product-name">Teleflora&apos;s Timeless Treasure Bouquet</div>
              </a>
              <div className="product-price offer">
                <div className="price-original">$44.99</div>
                <div className="price">$40.49</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card product">
            <div className="product-image-panel">
              <a href=" " onClick={(e) => e.preventDefault()} className="product-image">
                <img src="/images/dummy/product-3.webp" width={253} height={301} alt="" />
                <button className="btn btn-light btn-favourite" />
                <button className="btn btn-light btn-rounded">
                  <IconPlus className="icon" />
                </button>
              </a>
            </div>
            <div className="card-body">
              <a href=" ">
                <div className="product-name">Teleflora&apos;s Timeless Treasure Bouquet</div>
              </a>
              <div className="product-price offer">
                <div className="price-original">$44.99</div>
                <div className="price">$40.49</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card product">
            <div className="product-image-panel">
              <a href=" " onClick={(e) => e.preventDefault()} className="product-image">
                <img src="/images/dummy/product-4.webp" width={253} height={301} alt="" />
                <button className="btn btn-light btn-favourite" />
                <button className="btn btn-light btn-rounded">
                  <IconPlus className="icon" />
                </button>
              </a>
            </div>
            <div className="card-body">
              <a href=" ">
                <div className="product-name">Teleflora&apos;s Timeless Treasure Bouquet</div>
              </a>
              <div className="product-price offer">
                <div className="price-original">$44.99</div>
                <div className="price">$40.49</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card product">
            <div className="product-image-panel">
              <a href=" " onClick={(e) => e.preventDefault()} className="product-image">
                <img src="/images/dummy/product-5.webp" width={253} height={301} alt="" />
                <button className="btn btn-light btn-favourite" />
                <button className="btn btn-light btn-rounded">
                  <IconPlus className="icon" />
                </button>
              </a>
            </div>
            <div className="card-body">
              <a href=" ">
                <div className="product-name">Teleflora&apos;s Timeless Treasure Bouquet</div>
              </a>
              <div className="product-price offer">
                <div className="price-original">$44.99</div>
                <div className="price">$40.49</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card product">
            <div className="product-image-panel">
              <a href=" " onClick={(e) => e.preventDefault()} className="product-image">
                <img src="/images/dummy/product-6.webp" width={253} height={301} alt="" />
                <button className="btn btn-light btn-favourite" />
                <button className="btn btn-light btn-rounded">
                  <IconPlus className="icon" />
                </button>
              </a>
            </div>
            <div className="card-body">
              <a href=" ">
                <div className="product-name">Teleflora&apos;s Timeless Treasure Bouquet</div>
              </a>
              <div className="product-price offer">
                <div className="price-original">$44.99</div>
                <div className="price">$40.49</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      {navigationEnabled && <div className="swiper-button-next swiper-reco-next" />}
    </div>
  );
};

export default ProductCarousel;
