import React from 'react';
import TapeBanner from '@widgets/TapeBanner/index';
import Header from '@widgets/Header/index';
import Footer from '@widgets/Footer/index';
import BannerCarousel from '@widgets/BannerCarousel/view';
import Grid4 from '@widgets/Grid4/index';
import Products from '@widgets/Products/index';
import SingleBanner from '@widgets/SingleBanner/view';
import GridR2R4 from '@widgets/GridR2R4/view';
import NavBarContainer from '@widgets/Navbar/NavbarContainer';

const components: Record<string, React.ElementType> = {
  TapeBanner,
  Header,
  Footer,
  BannerCarousel,
  Grid4,
  Products,
  SingleBanner,
  GridR2R4,
  NavBarContainer
};

interface ComponentData {
  component: string;
  props: Record<string, any>;
  directive?: string;
}

interface Props {
  components: ComponentData[];
}

const DynamicRenderer: React.FC<Props> = ({ components: componentList }) => {
  return (
    <>
      {componentList.map((item, index) => {
        const Component = components[item.component];

        if (!Component) {
          console.warn(`Component "${item.component}" not found.`);
          return null;
        }

        return <Component key={index} {...item.props} />;
      })}
    </>
  );
};

export default DynamicRenderer;
