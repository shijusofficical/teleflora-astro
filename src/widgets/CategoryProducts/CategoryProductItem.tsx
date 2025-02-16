import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation } from "swiper/modules";
import IconPlus from "@icons/IconPlus";

const CategoryProductItem = (props) => {
  const navigationEnabled = true;
  const { title } = props;

  return (
    <>
      <div className="new-arrival-products">
        <div className="container">
          <h3 className="title">{title}</h3>
          <div className="swiper-sm nav-outside">
            {navigationEnabled && (
              <div className="swiper-button-prev swiper-reco-prev" />
            )}
            <Swiper
              slidesPerView={2}
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
                  slidesPerView: 4,
                  scrollbar: false,
                },
              }}
              modules={[Scrollbar, Navigation]}
            >
              <SwiperSlide>
                <div className="card product">
                  <div className="product-image-panel">
                    <a
                      href=" "
                      onClick={(e) => e.preventDefault()}
                      className="product-image"
                    >
                      <img
                        src="/images/dummy/product-1.webp"
                        width={1080}
                        height={540}
                        loading="lazy"
                        alt=""
                      />
                      <button className="btn btn-light btn-favourite" />
                      <button className="btn btn-light btn-rounded">
                        <IconPlus className="icon" />
                      </button>
                    </a>
                  </div>
                  <div className="card-body">
                    <a href=" ">
                      <div className="product-name">
                        Teleflora&apos;s Timeless Treasure Bouquet
                      </div>
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
                    <a
                      href=" "
                      onClick={(e) => e.preventDefault()}
                      className="product-image"
                    >
                      <img
                        src="/images/dummy/product-1.webp"
                        width={1080}
                        height={540}
                        loading="lazy"
                        alt=""
                      />
                      <button className="btn btn-light btn-favourite" />
                      <button className="btn btn-light btn-rounded">
                        <IconPlus className="icon" />
                      </button>
                    </a>
                  </div>
                  <div className="card-body">
                    <a href=" ">
                      <div className="product-name">
                        Teleflora&apos;s Timeless Treasure Bouquet
                      </div>
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
                    <a
                      href=" "
                      onClick={(e) => e.preventDefault()}
                      className="product-image"
                    >
                      <img
                        src="/images/dummy/product-1.webp"
                        width={1080}
                        height={540}
                        loading="lazy"
                        alt=""
                      />
                      <button className="btn btn-light btn-favourite" />
                      <button className="btn btn-light btn-rounded">
                        <IconPlus className="icon" />
                      </button>
                    </a>
                  </div>
                  <div className="card-body">
                    <a href=" ">
                      <div className="product-name">
                        Teleflora&apos;s Timeless Treasure Bouquet
                      </div>
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
                    <a
                      href=" "
                      onClick={(e) => e.preventDefault()}
                      className="product-image"
                    >
                      <img
                        src="/images/dummy/product-1.webp"
                        width={1080}
                        height={540}
                        loading="lazy"
                        alt=""
                      />
                      <button className="btn btn-light btn-favourite" />
                      <button className="btn btn-light btn-rounded">
                        <IconPlus className="icon" />
                      </button>
                    </a>
                  </div>
                  <div className="card-body">
                    <a href=" ">
                      <div className="product-name">
                        Teleflora&apos;s Timeless Treasure Bouquet
                      </div>
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
                    <a
                      href=" "
                      onClick={(e) => e.preventDefault()}
                      className="product-image"
                    >
                      <img
                        src="/images/dummy/product-1.webp"
                        width={1080}
                        height={540}
                        loading="lazy"
                        alt=""
                      />
                      <button className="btn btn-light btn-favourite" />
                      <button className="btn btn-light btn-rounded">
                        <IconPlus className="icon" />
                      </button>
                    </a>
                  </div>
                  <div className="card-body">
                    <a href=" ">
                      <div className="product-name">
                        Teleflora&apos;s Timeless Treasure Bouquet
                      </div>
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
                    <a
                      href=" "
                      onClick={(e) => e.preventDefault()}
                      className="product-image"
                    >
                      <img
                        src="/images/dummy/product-1.webp"
                        width={1080}
                        height={540}
                        loading="lazy"
                        alt=""
                      />
                      <button className="btn btn-light btn-favourite" />
                      <button className="btn btn-light btn-rounded">
                        <IconPlus className="icon" />
                      </button>
                    </a>
                  </div>
                  <div className="card-body">
                    <a href=" ">
                      <div className="product-name">
                        Teleflora&apos;s Timeless Treasure Bouquet
                      </div>
                    </a>
                    <div className="product-price offer">
                      <div className="price-original">$44.99</div>
                      <div className="price">$40.49</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            {navigationEnabled && (
              <div className="swiper-button-next swiper-reco-next" />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default CategoryProductItem;
