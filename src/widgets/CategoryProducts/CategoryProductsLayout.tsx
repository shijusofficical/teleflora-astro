import CategoryProductItem from "@widgets/CategoryProducts/CategoryProductItem";

const CategoryProductsLayout = () => {
  return (
    <div className="new-arrivals-panel">
      <div className="container">
        <h2 className="title">Warm Winter Wishes</h2>
        <h5 className="sub-title">
          Share the beauty of the season with flowers from local florists.
        </h5>
        <div className="row gy-8">
          <div className="col-md-3">
            <div className="new-arrival">
              <div>
                <div className="item-image">
                  <img
                    src="/images/products/new-arrivals.png"
                    width={256}
                    height={256}
                    loading="lazy"
                    alt=""
                  />
                </div>
                <h5 className="title">New Arrivals</h5>
                <button className="btn btn-outline-primary btn-sm">
                  View All
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <CategoryProductItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryProductsLayout;
