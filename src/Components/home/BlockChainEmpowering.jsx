import React from "react";
import { dashboarb } from "../../assets/index";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const BlockChainEmpowering = () => {
  return (
    <section className="purpleBlackGradient text-white pt-[6rem] text-center w-full xsm:px-[10rem] px-3 ss:px-6 sm:px-12 pb-0">
      <h1 className="font-bold text-[28px] xsm:text-[36px] tracking-tighter">
        Empowering Web3 developers <br /> to build the apps of their dreams
      </h1>
      <p className="md:w-[45%] w-full text-[20px] xsm:mx-auto my-6 text-grey">
        Our solutions include wallet as a service solution (Custodial and
        Non-Custodial for wallet creation, send and receive), Defi yield
        Interoperability solution and decentralized peer - 2 - peer
        infrastructure.
      </p>
      <Link to={"./sign-up"}>
        <button className="bg-darkestGrey text-[13px] flex justify-center items-center mb-12 sm:mb-24 m-auto w-full py-2 md:py-1  xsm:w-[10rem] lg:w-[12rem]">
          Start for free <HiOutlineArrowRight className="animatedIcon" />
        </button>
      </Link>
      <div className="empowerImg rounded-xl sm:hidden"></div>
      <div className="empowerImgSm rounded-xl hidden sm:block"></div>
      {/* <img src={dashboarb} className=" rounded-xl " alt="" /> */}
    </section>
  );
};

export default BlockChainEmpowering;
