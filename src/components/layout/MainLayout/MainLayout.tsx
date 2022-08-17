import React from 'react'
import Header from '../Header/Header';
import { Helmet } from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../../assets/theme/GlobalStyle';
import { theme } from '../../../assets/theme/theme';
import { Col, Container, Row } from '../../../assets/Flexbox/index';

export interface Props {
  children: React.ReactNode | JSX.Element | JSX.Element[]; // best, accepts everything React can render
  childrenElement?: JSX.Element; // A single React element
  style?: React.CSSProperties; // to pass through style props
}


const MainLayout = ({ children }: Props) => {
  const lang = "en";

  return (
    <>
      <Helmet title="Jewellery Store" htmlAttributes={{lang}}>
        <meta
          name="description"
          content="Exquisitely Handcrafted Jewellery"
        />
        <meta
          name="keywords"
          content="Jewellery, Gold, Silver, 3D"
        />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Catamaran:wght@100;300&family=Raleway:wght@200;300&family=Jost:wght@100;200;300&family=Playfair+Display:ital@0;1&display=swap" rel="stylesheet" />
      </Helmet>
      <GlobalStyle />
      <Header />
      <Container>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Container>
    </>
  )
}

MainLayout.propTypes = {}

export default MainLayout
