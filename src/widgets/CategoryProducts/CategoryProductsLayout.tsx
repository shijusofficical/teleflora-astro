import CategoryProductItem from "@widgets/CategoryProducts/CategoryProductItem";

const CategoryProductsLayout = ({ data, additionalData }: { data: any, additionalData:any }) => {
  return (
    <div className="new-arrivals-panel">
      <div className="container">
        <h2 className="title">{data?.heading}</h2>
        <h5 className="sub-title">
          {data?.subheading}
        </h5>
        <div className="row gy-8">
          <div className="col-md-3">
            <div className="new-arrival">
              <div>
                <div className="item-image">
                  <img
                    src={data?.image?.url}
                    width={data?.image?.width}
                    height={data?.image?.height}
                    loading="lazy"
                    alt=""
                  />
                </div>
                <h5 className="title">{data?.categoryName}</h5>
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
