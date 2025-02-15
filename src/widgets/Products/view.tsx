
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

const Products = () => {
  return (
    <div className="my-16">
      <div className="recommended-products">
        <div className="container">
          <h4 className="title">Just For You</h4>
          <ProductCarousel />
        </div>
      </div>
    </div>
  );
};

export default Products;
