import React from "react";
import Navbar from "../../routes/navigation/Navbar";
import { Footer } from "./index";
import {
  friends,
  world,
  aboutCustomer,
  aboutStar,
  coreValuesbg,
  Logo,
  bitcoinIcon,
  solanaIcon,
  LfriendsIcon,
  friendsIcon,
} from "../../assets";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Company } from "../../routes/navigation/navLinks/index";

const AboutUs = () => {
  return (
    <>
      {/* <Navbar /> */}

      <nav className="bg-black w-full z-10 text-white fixed top-0 py-2 left-0 right-0 px-3 ss:px-6  sm:px-12 lg:px-[6rem] xl:px-[10rem] flex justify-between">
        <Link to={"/"}>
          <img
            src={Logo}
            alt=""
            className=" w-[8rem] md:w-[7rem] py-2 hover:cursor-pointer"
          />
        </Link>

        <div className="flex  gap-2">
          <Link
            to={"/login"}
            className="greyGradient py-2 md:py-1 sm:w-[10rem] hidden sm:flex items-center justify-center"
          >
            Login
          </Link>

          <Link
            to={"/sign-up"}
            className="BlueGradient gap-2 items-center justify-center py-2 md:py-1 ss:w-[10rem] hidden ss:flex"
          >
            Start for free <HiOutlineArrowRight className="animatedIcon" />
          </Link>
        </div>

        {/* <Link
          to="/sign-up"
          className="BlueGradient gap-2 items-center justify-center py-2 md:py-1 ss:w-[10rem] hidden ss:flex"
        >
          Get Started <HiOutlineArrowRight className="animatedIcon" />
        </Link> */}
      </nav>

      <section className="w-full relative bg-black overflow-hidden py-[8rem] xsm:py-[12rem] text-white ">
        <div className="neww "></div>
        <div className="lightBg xsm:hidden"></div>
        {/* <div className=" miniLappy md:hidden"></div> */}
        <div className="flex flex-col justify-center items-center  ">
          <article className="z-[5] mb-24 px-3 ss:px-6 sm:px-12 lg:px-[6rem] xl:px-[10rem]">
            <h2 className="font-bold text-[32px] sm:w-[70%] md:w-[50%] ss:text-[36px] xsm:text-[30px] md:text-[32px] lg:text-[36px] xl:text-[42px] tracking-tighter xsm:leading-[42px] lg:leading-[50px] text-center mx-auto">
              We are a blockchain infrastructure provider enabling businesses
              and enterprises to seamlessly utilize secure blockchain node
              protocols to set up, manage, and scale their digital
              assets-related operations.
            </h2>
            <Link
              to="/contact-us"
              className="BlueGradient flex gap-2 items-center justify-center py-2 md:py-1 ss:w-[10rem] mx-auto mt-2"
            >
              Contact Us <HiOutlineArrowRight className="animatedIcon" />
            </Link>
          </article>

          <div className="z-[5] flex flex-col sm:flex-row gap-4 my-24">
            <div>
              <img src={bitcoinIcon} alt="" className="h-12" />
              <img src={solanaIcon} alt="" className="h-12 ml-36  my-4" />
              <img src={world} alt="" className=" sm:h-[30rem]" />
            </div>

            <div>
              <img
                src={LfriendsIcon}
                alt=""
                className="h-12 ml-[80%] opacity-[0.5]"
              />
              <img src={friendsIcon} alt="" className="h-12 ml-36  my-4" />
              <img src={friends} alt="" className=" sm:h-[30rem]" />
            </div>
          </div>
        </div>

        <marquee width="100%" direction="left" height="100px">
          <div className="flex items-center">
            <img src={aboutCustomer} alt="" className="h-[7rem] mr-24" />
            <img src={aboutStar} alt="" className="h-[4rem] mr-24" />
            <p className="font-bold text-[78px] tracking-tight">
              20+ Blockchains
            </p>
          </div>
        </marquee>
      </section>
      <article className="bg-mainBlue text-white sm:hidden px-3 ss:px-6 sm:px-12 py-12">
        <h1 className="font-bold text-[42px]">Our Core Values</h1>
        <p>
          At Blocketerium, we have a great company culture and provide our
          customers with an unrivalled level of service. The bedrock of our
          identity is summed up in 3 values - Accountability, Priority and
          Integrity. <br className="my-2" /> These values form the Acronym{" "}
          <strong>API</strong> .
        </p>
        <div className="my-4">
          <strong>Accountability</strong>
          <p>
            We hold ourselves as well as others accountable, we accept
            responsibility for our actions, and we go above and beyond to
            produce outcomes.
          </p>
        </div>

        <div className="my-4">
          <strong>Priority</strong>
          <p>
            We truly care and never allow ourselves to believe that we are too
            important to show up and assist our colleagues and clients.
          </p>
        </div>

        <div>
          <strong>Integrity</strong>
          <p>
            We adhere to high standards and continually support honesty and
            transparency.
          </p>
        </div>
      </article>

      <div className="hidden sm:block">
        <img src={coreValuesbg} alt="" />
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
