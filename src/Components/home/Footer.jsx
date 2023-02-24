import React from "react";
import { Logo } from "../../assets/index";
import { BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
import {
  Product,
  Resources,
  HowItWorks,
  Price,
  Sponsors,
} from "../../routes/navigation/navLinks/index";

const Footer = () => {
  return (
    <section className="w-full footerBg  text-Lightgrey pt-[6rem] pb-12  px-6 sm:px-12 lg:px-[6rem] xl:px-[10rem]">
      {/* <div className="flex flex-col sm:flex-row xl:gap-x-32 mb-[4rem] justify-center text-[16px] sm:text-[14px] lg:text-[16px] sm:gap-12">
        <ul>
          <li className="font-semibold sm:text-[18px] text-[20px] mb-3">
            Company
          </li>
          <Link to={"./about-us"}>
            <li className="hover:cursor-pointer hover:text-Lightgrey">
              About Us
            </li>
          </Link>
          <a
            href="https://medium.com/@blockterium/introducing-blocketrium-f3930cec2db"
            target="_blank"
            rel=""
          >
            <li>About Us</li>
          </a>
          <li>Blog</li>
          <li className="text-grey">Careers</li>
          <Link to={"./contact-us"}>
            <li className="hover:cursor-pointer hover:text-Lightgrey">
              Contact Us
            </li>
          </Link>
        </ul>

        <ul className="my-8 sm:my-0">
          <li className="font-semibold sm:text-[18px] text-[20px] mb-3">
            Resources
          </li>
          <Price />

          <li>API docs</li>
          <li>Documentations</li>
          <li>Github</li>
        </ul>

        <ul>
          <li className="font-semibold sm:text-[18px] text-[20px] mb-3">
            Quick Links
          </li>
          <Product />
          <Sponsors />
          <li>Supported Blockchains</li>
        </ul>
      </div> */}
      <div className="text-center flex flex-col justify-center items-center">
        <img src={Logo} alt="" className="w-[10rem]" />
        <p className="text-[12px] md:text-[11.5px]  sm:w-[50%] text-grey my-2">
          This is a blockchain infrastructure company that allows businesses or
          enterprises to access secured blockchain node protocols to establish,
          run and scale their digital assets activities seamlessly.
        </p>

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
  );
};

export default Footer;
