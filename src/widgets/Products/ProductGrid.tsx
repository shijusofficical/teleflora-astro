
/**
 * Copyright(c) 2025 Valoriz Digital Private Ltd.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Valoriz ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Valoriz.
 *
 * @author  Indrajith C
 */



import ProductCarousel from "@widgets/Products/ProductCarousel";

const Products = ({ data, productsWithDetails }: { data: any, productsWithDetails:any }) => {
  const productData = productsWithDetails?.filter((product:any) => product?.id == data?.id && product.heading == data?.heading);
  return (
   <>
     {productData?.map((item:any)=>(
      <div className="my-16">
        <div className="recommended-products">
          <div className="container">
            <h4 className="title">{item?.heading}</h4>
              <ProductCarousel productDetails={item?.productDetails}/>
          </div>
        </div>
      </div>

    ))}
   </>
  );
};

export default Products;
