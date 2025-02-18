import React from 'react';
import TapeBanner from '@widgets/TapeBanner/TapeBanner';
import HeaderContainer from '@widgets/Header/HeaderContainer';
import Footer from '@widgets/Footer/Footer';
import BannerCarousel from '@widgets/BannerCarousel/BannerCarousel';
import Grid4 from '@widgets/Grid4/view';
import Products from '@widgets/Products/ProductGrid';
import SingleBanner from '@widgets/SingleBanner/SingleBanner';
import GridR2R4 from '@widgets/GridR2R4/GridR2R4';
import CategoryProductsLayout from '@widgets/CategoryProducts/CategoryProductsLayout';

const components: Record<string, React.ElementType> = {
  "common.announcement-bar": TapeBanner,
  "common.header":HeaderContainer,
  "common.footer":Footer,
  "carousel.carousel":BannerCarousel,
  "grid.four-card-grid":Grid4,
  "banner.product-banner":Products,
  "banner.single-banner":SingleBanner,
  "grid.six-cards-grid":GridR2R4,
  "banner.category-products":CategoryProductsLayout,
};

interface ComponentData {
  __component: string;
  props: Record<string, any>;
  directive?: string;
}

interface Props {
  components: ComponentData[];
  additionalData: unknown;
  productsWithDetails: any;

}

const DynamicRenderer: React.FC<Props> = ({ components: componentList, additionalData: additionalData, productsWithDetails: productsWithDetails  }) => {
  return (
    <>
      {componentList?.map((item, index) => {
        const Component = components[item.__component];
        if (!Component) {
          console.warn(`Component "${item.__component}" not found.`);
          return null;
        }
        return <Component key={index} data={item} additionalData={additionalData} productsWithDetails={productsWithDetails}/>;
      })}
    </>
  );
};

export default DynamicRenderer;