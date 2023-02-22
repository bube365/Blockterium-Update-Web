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

const HomePage = () => {
  return (
    <div>
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
