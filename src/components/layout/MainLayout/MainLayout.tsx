import React from 'react';
import Header from '../Header/Header';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../../assets/theme/GlobalStyle';
import { theme } from '../../../assets/theme/theme';
import { Container } from '../../../assets/Flexbox/index';
import Footer from '../Footer/Footer';
import UserStore from 'src/store/UserStore';
import ProductStore from 'src/store/ProductStore';

export interface Props {
  children: React.ReactNode | JSX.Element | JSX.Element[]; // best, accepts everything React can render
  childrenElement?: JSX.Element; // A single React element
  style?: React.CSSProperties; // to pass through style props
}

const MainLayout = ({ children }: Props) => {
  const lang = 'en';

  return (
    <>
      <Helmet title="Manipura - Fine Jewellery" htmlAttributes={{ lang }}>
        <meta name="description" content="Exquisitely Handcrafted Jewellery" />
        <meta name="keywords" content="Jewellery, Gold, Silver, 3D" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Catamaran:wght@100;300&family=Raleway:wght@200;300&family=Jost:wght@100;200;300&family=Playfair+Display:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <UserStore>
        <ProductStore>
          <Header />
          <Container>
            <ThemeProvider theme={theme}>
              <main>{children}</main>
            </ThemeProvider>
          </Container>
          <Footer />
        </ProductStore>
      </UserStore>
    </>
  );
};

MainLayout.propTypes = {};

export default MainLayout;
