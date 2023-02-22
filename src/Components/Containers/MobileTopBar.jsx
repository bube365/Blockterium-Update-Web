import { Popover } from "@headlessui/react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ColouredLogo,
  Menuburger,
  profilePicture2,
  dbActive,
  dbIcon,
  InactiveDoc,
  ActiveExplore,
  InactiveExplore,
  strokeIcon,
} from "../../assets";
import LogoutModal from "../Modal/LogoutModal";
import { FaTimes } from "react-icons/fa";
import { ArrowDown } from "../../assets/index";

const MobileTopBar = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  let [isOpen, setIsOpen] = useState(false);
  const [showExplore, setShowExplore] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const fullName = localStorage.getItem("fullName");
  const email = localStorage.getItem("email");
  const business = localStorage.getItem("business");
  return (
    <>
      <div className="px-5 py-5 relative bg-mainWhite">
        <div className="flex items-center justify-between mb-7">
          <Link to="">
            <img src={ColouredLogo} className="w-[100px]" />
          </Link>
          <div onClick={() => setShow(!show)}>
            {show ? (
              <FaTimes className="text-mainRed font-bold" />
            ) : (
              <img src={Menuburger} />
            )}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-mainBlack font-semibold">
            <h3>{splitLocation[1].toUpperCase()}</h3>
          </div>
          <div className="flex items-center text-mainBlue text-sm font-semibold">
            <img src={profilePicture2} className="w-[30px] mr-2" />
            <div>
              <Popover className="relative">
                <Popover.Button className="flex items-center border-none outline-none">
                  {fullName} <img src={ArrowDown} className="ml-2" />
                </Popover.Button>

                <Popover.Panel className="absolute z-10 right-0 cursor-pointer drop-shadow-2xl text-mainBlack top-10 w-[300px] bg-mainWhite">
                  <div className="flex flex-col">
                    <div className="pt-5 px-3 pb-5">
                      <h6 className="text-lg">{fullName}</h6>
                      <p className="text-greyFour text-sm font-light">
                        {email}
                      </p>
                    </div>
                    <Link
                      to="#"
                      className={
                        splitLocation[1] === "download"
                          ? "py-5 px-3 bg-gradedBlue bg-opacity-30 text-base border-t-2 border-t-greyFive text-greyFive"
                          : "py-5 px-3 text-base border-t-2 border-t-greyFive text-greyFive"
                      }
                    >
                      Download pitch deck
                    </Link>
                    {/* <Link
                      to="/billing"
                      className={
                        splitLocation[1] === "billing"
                          ? "py-5 px-3 bg-gradedBlue bg-opacity-30 text-base"
                          : "py-5 px-3 text-base"
                      }
                    >
                      Billing
                    </Link> */}
                    <Link
                      to="/dashboard/settings"
                      className={
                        splitLocation[2] === "settings"
                          ? "py-5 px-3 bg-gradedBlue bg-opacity-30 text-base"
                          : "py-5 px-3 text-base"
                      }
                    >
                      Settings
                    </Link>
                    <div className="py-5 px-3 text-base" onClick={openModal}>
                      Logout
                    </div>
                  </div>
                </Popover.Panel>
              </Popover>
            </div>
          </div>
        </div>
        {show && (
          <div className="mt-10 absolute left-0 right-0 top-0 h-screen bg-mainWhite pt-10 z-50">
            <Link
              to="/dashboard"
              className={
                splitLocation[2] != "explore" &&
                splitLocation[2] != "docs" &&
                splitLocation[2] != "contact"
                  ? `flex items-center px-5 text-mainBlue bg-gradedBlue bg-opacity-20 py-5 border-l-2 border-l-mainBlue`
                  : "bg-mainWhite py-5 flex items-center pl-5"
              }
            >
              {splitLocation[2] != "dashboard" ? (
                <img src={dbActive} className="mr-2" />
              ) : (
                <img src={dbActive} className="mr-3" />
              )}
              <span>Dashboard</span>
            </Link>
            <Link to="#">
              <div
                onClick={() => setShowExplore(!showExplore)}
                className={
                  splitLocation[2] === "explore"
                    ? `text-mainBlue py-5 bg-gradedBlue border-l-4 border-l-mainBlue flex items-center pl-5`
                    : "bg-mainWhite py-5 flex items-center pl-5"
                }
              >
                {showExplore ? (
                  <img src={ActiveExplore} className="mr-2" />
                ) : (
                  <img src={InactiveExplore} className="mr-3" />
                )}
                <span>Explore</span>
              </div>
              {showExplore && (
                <div className="ml-5">
                  {/* <Link
                    to="/dashboard/explore/debug"
                    className={
                      splitLocation[3] === "debug"
                        ? `text-mainBlue py-5 flex items-center pl-10`
                        : " py-5 flex items-center pl-10"
                    }
                  >
                    <span>Debug</span>
                  </Link> */}
                  <Link
                    to="/dashboard/explore/subscription"
                    className={
                      splitLocation[2] === "subscription"
                        ? `text-mainBlue py-5 flex items-center pl-10`
                        : "py-5 flex items-center pl-10"
                    }
                  >
                    <span>Subsciption</span>
                  </Link>
                  <Link
                    to="/dashboard/explore/pricing"
                    className={
                      splitLocation[2] === "pricing"
                        ? `text-mainBlue py-5 flex items-center pl-10`
                        : "py-5 flex items-center pl-10"
                    }
                  >
                    <span>Pricing</span>
                  </Link>
                </div>
              )}
            </Link>
            <Link
              to="/dashboard/docs"
              className={
                splitLocation[2] === "docs"
                  ? `flex items-center px-5 text-mainBlue bg-gradedBlue bg-opacity-20 py-5 border-l-2 border-l-mainBlue`
                  : "bg-mainWhite py-5 flex items-center pl-5"
              }
            >
              {splitLocation[1] === "dashboard" ? (
                <img src={InactiveDoc} className="mr-2" />
              ) : (
                <img src={InactiveDoc} className="mr-3" />
              )}
              <span className="w-full flex justify-between items-center pr-5">
                Docs <img src={strokeIcon} />
              </span>
            </Link>
            {/* <Link
              to="/dashboard/contact"
              className={
                splitLocation[2] === "contact"
                  ? `flex items-center px-5 text-mainBlue bg-gradedBlue bg-opacity-20 py-5 border-l-2 border-l-mainBlue`
                  : "bg-mainWhite py-5 flex items-center pl-5"
              }
            >
              {splitLocation[1] === "dashboard" ? (
                <img src={dbIcon} className="mr-2" />
              ) : (
                <img src={dbActive} className="mr-3" />
              )}
              <span className="w-full flex justify-between items-center pr-5">
                Contact <img src={strokeIcon} />
              </span>
            </Link> */}
            <div></div>
            <div></div>
          </div>
        )}
      </div>
      {isOpen && (
        <LogoutModal
          closeModal={closeModal}
          openModal={openModal}
          isOpen={isOpen}
          title="Logout"
          text="You are about to logout from your account, are you sure?"
        />
      )}
    </>
  );
};

export default MobileTopBar;
