import React, { ReactNode } from "react";
import Head from "next/head";
import MainNav from "./Navbars/MainNav";
import Footer from "./Footer/Footer";
import CantFindStore from "./forms/contact";
import SupportedStores from "./Footer/SupportedStores";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Pricetrack" }: Props) => (
  <div className="body-wrap boxed-container">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css?family=Muli" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Didact+Gothic&family=PT+Sans:wght@400;700&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300&display=swap" rel="stylesheet"></link>
    </Head>
    <MainNav />
    {children}
    <SupportedStores/>
    <CantFindStore/>
    <Footer />
  </div>
);

export default Layout;
