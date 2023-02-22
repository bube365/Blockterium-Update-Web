import React from "react";
import { Logo } from "../../assets/index";
import { Footer } from "./index";
import { Link } from "react-router-dom";
import { contactUsPageCards } from "./data";
import { HiOutlineMail } from "react-icons/hi";
import { FaMapPin } from "react-icons/fa";
import { BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";

const ContactUs = () => {
  return (
    <>
      <nav className="bg-black w-full z-10 text-white fixed top-0 py-1 left-0 right-0 px-3 ss:px-6  sm:px-12 lg:px-[6rem] xl:px-[10rem]">
        <Link to={"/"}>
          <img
            src={Logo}
            alt=""
            className=" w-[8rem] md:w-[7rem] py-2 hover:cursor-pointer"
          />
        </Link>
      </nav>
      <div className="bg-black w-full py-[6rem] px-3 ss:px-6 sm:px-12 lg:px-[6rem] xl:px-[10rem] xsm:px-[8rem]">
        <h2 className="contact text-[44px] ss:text-[48px] sm:text-[58px] md:text-[48px] lg:text-[56px] xl:text-[72px] font-bold text-center ">
          Contact Us
        </h2>

        <div className="flex flex-col xsm:flex-row gap-6 mt-[4rem] mb-12 w-full">
          {contactUsPageCards.map(({ title, img, info, id }) => {
            return (
              <div className="text-grey text-center flex flex-col justify-center items-center text-[14px] bg-darkestBlue px-3 py-12 rounded-xl hover:bg-greyFour hover:border-darkestBlue xsm:w-[50%]">
                <img src={img} alt="" className="w-24 h-24" />
                <h2 className="font-bold text-[16px] mt-4 m-2 text-white">
                  {title}
                </h2>
                <p>{info}</p>
              </div>
            );
          })}
        </div>
      </div>
      <section className="w-full footerBg  text-Lightgrey pt-[2rem] pb-12  px-6 sm:px-12 lg:px-[6rem] xl:px-[10rem]">
        <div className="text-center flex flex-col justify-center items-center">
          <img src={Logo} alt="" className="w-[10rem]" />
          <p className="text-[11px] md:text-[10.5px]  sm:w-[50%] text-grey my-2">
            This is a blockchain infrastructure company that allows businesses
            or enterprises to access secured blockchain node protocols to
            establish, run and scale their digital assets activities seamlessly.
          </p>
          <div className="my-4 text-[14px]">
            <p className="my-2  text-white  bg-mainBlue py-1 font-bold rounded-xl hover:text-mainBlue hover:bg-white">
              Discord and Telegram
            </p>

            <p className="flex items-center justify-center">
              <HiOutlineMail className=" mr-1" /> Email: hi@blockterium.io
            </p>
          </div>

          <div className="flex flex-col sm:flex-row text-[14px]">
            <p>Ⓒ Blockterium 2022– All Rights Reserved</p>

            <span className="flex justify-center items-center text-white gap-2 mt-2 sm:mt-0 sm:ml-2">
              <BsTwitter />
              <BsInstagram className="mx-1" />
              <BsFacebook />
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
