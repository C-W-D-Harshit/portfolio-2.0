import React, { ReactNode } from "react";
import Header from "./Header";
import NextTopLoader from "nextjs-toploader";
import Footer from "./Footer";

const LayoutProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NextTopLoader showSpinner={false} color="#5b46af" />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default LayoutProvider;
