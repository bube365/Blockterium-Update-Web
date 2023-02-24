import React from "react";
import {
  Hero,
  ReviewQuestions,
  Sponsors,
  IntegrateWallet,
  BlockteriumAdvantanges,
  BlockteriumAim,
  PopularUseCase,
  BlockteriumUse,
  BlockChainEmpowering,
  BlockteriumProducts,
  Pricing,
  Footer,
} from "../Components/home/index";
import Navbar from "./navigation/Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Sponsors />
      <IntegrateWallet />
      <BlockteriumUse />
      <BlockteriumAim />
      <BlockteriumProducts />
      <BlockteriumAdvantanges />
      <PopularUseCase />
      <Pricing />
      <ReviewQuestions />
      <BlockChainEmpowering />
      <Footer />
    </div>
  );
};

export default HomePage;
