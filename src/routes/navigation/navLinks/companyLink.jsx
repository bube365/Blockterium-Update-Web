import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Company } from "../MyLinks";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { HiOutlineArrowRight } from "react-icons/hi";

const CompanyLink = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {Company.map((items) => (
        <div>
          <div className="px-3 text-left xsm:cursor-pointer group">
            <h1
              className=" flex items-center xsm:pr-0  group"
              onClick={() => {
                heading !== items.name
                  ? setHeading(items.name)
                  : setHeading("");
                setSubHeading("");
              }}
            >
              {items.name}
              <span className="text-xl xsm:hidden inline">
                {items.name ? (
                  <MdOutlineKeyboardArrowUp />
                ) : (
                  <MdOutlineKeyboardArrowDown />
                )}
              </span>
              <span className="text-xl xsm:mt-1 xsm:ml-2  xsm:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <MdOutlineKeyboardArrowDown />
              </span>
            </h1>

            <div className="absolute top-10 m-auto hidden group-hover:xsm:block hover:xsm:block left-[10%] md:left-[20%] lg:left-[25%] xl:left-[30%]">
              <div className="py-4">
                {/* <div
                  className="w-4 h-4 left-3 absolute 
                    mt-1 bg-white rotate-45"
                ></div> */}
                <div className="flex flex-row w-[50rem] gap-6 justify-center">
                  <Link
                    to="/contact-us"
                    className="bg-darkestBlue w-[30%] rounded-xl p-3 group parent"
                  >
                    <div>
                      <div className="flex justify-between items-center border-b-2 border-grey pb-2 child">
                        <h2 className="font-semibold ">CONTACT US</h2>
                        <span className="secondchild ">
                          <HiOutlineArrowRight />
                        </span>
                      </div>
                      <p className="mt-4 mb-2">Build</p>
                      <p className="text-Lightgrey">
                        Our solution is a plug-and-in infrastructure built to
                        save the stress of blockchain development from start to
                        finish.
                      </p>
                    </div>
                  </Link>

                  <Link
                    to="/about-us"
                    className="bg-darkestBlue w-[30%] rounded-xl p-3 group parent"
                  >
                    <div>
                      <div className="flex justify-between items-center border-b-2 border-grey pb-2 child">
                        <h2 className="font-semibold ">ABOUT US</h2>
                        <span className="secondchild ">
                          <HiOutlineArrowRight />
                        </span>
                      </div>
                      <p className="mt-4 mb-2">Learn</p>
                      <p className="text-Lightgrey">
                        Need help navigating through our platform and use cases?
                        please click learn more below to read up on the
                        utilities.
                      </p>
                    </div>
                  </Link>
                  {/* <div className="bg-darkestBlue w-[30%] rounded-xl p-3 group parent"> */}
                  {/* <div className="flex justify-between items-center border-b-2 border-grey pb-2 child">
                      <h2 className="font-semibold ">HELP AND GUIDE</h2>
                      <span className="secondchild ">
                        <HiOutlineArrowRight />
                      </span>
                    </div>
                    <p className="mt-4 mb-2">Learn</p>
                    <p className="text-Lightgrey">
                      Need help navigating through our platform and use cases?
                      please click learn more below to read up on the utilities.
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === items.name ? "xsm:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {items.sublinks.map((slinks) => (
              <div>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-3 pl-7 font-semibold xsm:pr-0 pr-5 flex justify-between items-center"
                  >
                    {slinks.Head}

                    <span className="text-xl xsm:mt-1 xsm:ml-2 inline">
                      {subHeading === slinks.Head ? (
                        <MdOutlineKeyboardArrowUp />
                      ) : (
                        <MdOutlineKeyboardArrowDown />
                      )}
                    </span>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "xsm:hidden" : "hidden"
                    }`}
                  >
                    <div className="absolute right-0 w-full bg-darkestBlue rounded-xl p-3 group parent">
                      {slinks.sublink.map((slink) => (
                        <div className="py-4">
                          <p className="mb-2 text-Lightgrey">{slink.title}</p>
                          <p className="text-grey">{slink.info}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default CompanyLink;
