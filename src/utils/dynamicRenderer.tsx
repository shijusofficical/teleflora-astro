import React from 'react';
import TapeBanner from '@widgets/TapeBanner/index';
import Header from '@widgets/Header/index';
import Footer from '@widgets/Footer/index';
import BannerCarousel from '@widgets/BannerCarousel/view';
import Grid4 from '@widgets/Grid4/view';
import Products from '@widgets/Products/index';
import SingleBanner from '@widgets/SingleBanner/view';
import GridR2R4 from '@widgets/GridR2R4/view';
import NavBarContainer from '@widgets/NavBar/NavbarContainer';

const components: Record<string, React.ElementType> = {
  "common.announcement-bar": TapeBanner,
  "common.header":Header,
  Footer,
  "carousel.carousel":BannerCarousel,
  "grid.four-card-grid":Grid4,
  Products,
  "banner.single-banner":SingleBanner,
  GridR2R4,
  NavBarContainer,
};

interface ComponentData {
  __component: string;
  props: Record<string, any>;
  directive?: string;
}

interface Props {
  components: ComponentData[];
}

const DynamicRenderer: React.FC<Props> = ({ components: componentList }) => {
  return (
    <>
      {componentList?.map((item, index) => {
        const Component = components[item.__component];
        if (!Component) {
          console.warn(`Component "${item.__component}" not found.`);
          return null;
        }
        return <Component key={index} data={item}/>;
      })}
    </>
  );
};

export default DynamicRenderer;