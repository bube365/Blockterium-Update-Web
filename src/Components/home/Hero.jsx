import React from "react";
import { HeroImg, africaLogo } from "../../assets/index";
import { HiOutlineArrowRight } from "react-icons/hi";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Link as AnchorLink } from "react-scroll";
import { Price } from "../../routes/navigation/navLinks/index";

const Hero = () => {
  return (
    <section className="w-full relative bg-black overflow-hidden py-[8rem] xsm:py-[12rem] text-white px-3 ss:px-6 sm:px-12 lg:px-[6rem] xl:px-[10rem] ">
      <div className="neww "></div>
      <div className="lightBg xsm:hidden"></div>
      {/* <div className=" miniLappy md:hidden"></div> */}
      <div className="flex flex-col xsm:flex-row justify-between xsm:items-center">
        <article className="z-[5]">
          <h2 className="font-bold text-[38px] ss:text-[42px] md:text-[46px] lg:text-[56px] xl:text-[72px] tracking-tighter leading-[55px] lg:leading-[80px]">
            Create your ideal dream <br className="hidden xs:block" />{" "}
            applications on Blockchain
          </h2>
          <p className="tracking-wide text-[20px]  sm:text-[22px] md:text-[20px] lg:text-[22px] xl:text-[24px] my-6">
            The quickest way to create, test, and use blockchain
            <br className="hidden md:block" /> apps is by using Blockterium.
          </p>

          <div className="flex ss:flex-row flex-col text-[18px] md:text-[14px] lg:text-[16px] xl:text-[18px]">
            <Link
              to={"./sign-up"}
              className="bg-blue xsm:hover:bg-white hover:text-black   flex items-center gap-2  justify-center py-2 md:py-1 w-full ss:w-[15rem] xsm:w-[10rem] lg:w-[12rem]"
            >
              Start for free <HiOutlineArrowRight className="animatedIcon" />
            </Link>
            <AnchorLink
              spy={true}
              smooth={true}
              to="pricesection"
              className="bg-white text-center text-black py-2 md:py-1  w-full ss:w-[15rem] xsm:w-[10rem] lg:w-[12rem] mt-3 ss:mt-0 ss:ml-3 cursor-pointer"
            >
              See Pricing
            </AnchorLink>
          </div>

          <Link
            to=""
            className="flex items-center gap-1 text-[14px]  lg:text-[16px] xl:text-[18px] my-12 "
          >
            <AiOutlineCloudDownload /> Download whitepaper/ deck
          </Link>
        </article>
        <div className="md:w-[50%] z-[5] object-center m-auto">
          <img
            src={africaLogo}
            alt=""
            className="h-[300px] sm:w-[500px] sm:h-[300px] md:h-[400px] md:w-[700px] lg:w-full lg:h-[400px] m-auto object-contain xsm:object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
