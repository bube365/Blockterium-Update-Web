import React, { useState, useEffect, useContext } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Dropdown } from "primereact/dropdown";
import InputField from "../Inputs/InputField";
import InputFieldTwo from "../Inputs/InputFieldTwo";
import { MdNotInterested } from "react-icons/md";
import {
  ConfirmIcon,
  profilePicture2,
  testnetIcon,
  testnet2Icon,
  Guide1,
  Guide2,
  LimitKey,
  ArrowDown2,
} from "../../assets";
import ActionButton from "../Inputs/ActionButton";
import ApiKeyCard from "../Cards/ApiKeyCard";
import GuideCard from "../Cards/GuideCard";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Popover } from "@headlessui/react";
import LogoutModal from "../Modal/LogoutModal";
import PaymentRequiredModal from "../Modal/PaymentRequiredModal";
import { useStateContext } from "../../context/ContextProvider";
import ReactLoading from "react-loading";
import axios from "../../api/axios";

const DashboardLists = ({ classnames }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/login";
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const [updateData, setUpdateData] = React.useState([
    {
      api_count: "156",
      credit_usage: "255 Credits",
      defi_earnings: "$0006,219",
      dex_p2p: "178",
      is_premium: true,
    },
  ]);
  const [isLoading, setIsLoading] = useState(true);

  const fullName = localStorage.getItem("fullName");
  const email = localStorage.getItem("email");
  const apiToken = localStorage.getItem("accessToken");
  const deviceToken = localStorage.getItem("deviceToken");

  const mainnetKey = localStorage.getItem("MainnetKey");
  const mainnetResetKey = localStorage.getItem("ResetmainnetKey");

  const DASHBOARD_URL = "/accounts/dashboard/";
  const GENERATE_API_URL = "/accounts/generate/api-key/";
  const [isPremium, setIsPremium] = useState(false);
  const [mainnetApiKey, setMainnetApiKey] = useState("");

  async function fetchDashboardData() {
    try {
      const response = await axios.get(DASHBOARD_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiToken}`,
        },
        withCredentials: true,
      });

      const premiumUser = response?.data?.data?.is_premium;

      const resp = response?.data?.data;
      setUpdateData(resp);
      setIsLoading(false);
      setIsPremium(premiumUser);
    } catch (error) {
      const unauthorizedUser = error.response?.statusText;
      if (unauthorizedUser === "Unauthorized") {
        navigate(from, { replace: true });
      }
    }
  }

  useEffect(() => {
    (async () => fetchDashboardData())();
  }, [updateData]);

  async function generateApiKey() {
    setButtonText("Generating Key...");

    try {
      const response = await axios.get(GENERATE_API_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiToken}`,
        },
        withCredentials: true,
      });

      const MainnetKey = response?.data?.data?.mainnet_api_key;
      localStorage.setItem("MainnetKey", MainnetKey);

      setButtonText("Create new API");
      setMainnetApiKey(mainnetResetKey);
    } catch (error) {
      // console.log(error);
    }
  }

  async function ResetKey() {
    setResetButtonText("Resetting...");
    try {
      const response = await axios.post(
        GENERATE_API_URL,
        JSON.stringify({ apikey: mainnetKey }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiToken}`,
          },
          withCredentials: true,
        }
      );

      const ResetmainnetKey = response?.data?.data?.mainnet_api_key;
      localStorage.setItem("ResetmainnetKey", ResetmainnetKey);
      setMainnetApiKey("00000000000000000000");
      setResetButtonText("Reset");
    } catch (error) {
      if (error.response.statusText === "Payment Required") {
        openPaymentModal();
      }
      setResetButtonText("Reset");
    }
  }

  let [isOpen, setIsOpen] = useState(false);
  let [Open, setOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isCopiedMainnet, setIsCopiedMainnet] = useState(false);
  const [showTestnet, setShowTesnet] = useState("show");
  const [showMainnet, setShowMainnet] = useState("show");
  const [buttonText, setButtonText] = useState("Create new API");
  const [resetButtonText, setResetButtonText] = useState("Reset");

  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const onCopyMainnetKey = () => {
    setIsCopiedMainnet(true);
    setTimeout(() => {
      setIsCopiedMainnet(false);
    }, 2000);
  };

  function closeModal() {
    setIsOpen(false);
  }

  function closePaymentModal() {
    setOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  function openPaymentModal() {
    setOpen(true);
  }

  if (isLoading) {
    return (
      <div>
        <ReactLoading
          type={"spin"}
          color={"#4A59E5"}
          height={27}
          width={27}
          className="absolute left-[50%] top-[50%]"
        />
      </div>
    );
  }

  return (
    <>
      <div className="grid bg:grid-cols-7 relative gap-3 mb-12">
        <div className="col-span-1 bg:col-span-5 p-5 min-h-[50%] bg-mainWhite relative border-greySeven border rounded-md">
          <div className="pt-6 border border-greySeven">
            <div className="block px-4 sm:px-6 mb-7 justify-between relative">
              <div className="flex ml-auto sm:hidden justify-end mb-5">
                <Popover className="relative">
                  <Popover.Button className="flex items-center border font-semibold text-mainBlack !border-greySeven outline-greySeven py-2 px-4">
                    Menu <img src={ArrowDown2} className="ml-1" />
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
                            ? "py-5 px-3 bg-gradedBlue bg-opacity-30 text-[14px] border-t-2 border-t-greyFive text-greyFive"
                            : "py-5 px-3 text-base border-t-2 border-t-greyFive text-greyFive"
                        }
                      >
                        Download pitch deck
                      </Link>
                      {/* <Link
                        to="/billing"
                        className={
                          splitLocation[1] === "billing"
                            ? "py-3 px-3 bg-gradedBlue bg-opacity-30 text-base"
                            : "py-3 px-3 text-base"
                        }
                      >
                        Billing
                      </Link> */}
                      <Link
                        to="/settings"
                        className={
                          splitLocation[1] === "settings"
                            ? "py-3 px-3 bg-gradedBlue bg-opacity-30 text-base"
                            : "py-3 px-3 text-base"
                        }
                      >
                        Settings
                      </Link>
                      <div className="py-3 px-3 text-base" onClick={openModal}>
                        Logout
                      </div>
                    </div>
                  </Popover.Panel>
                </Popover>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img src={profilePicture2} className="mr-2 ss:mr-3" />
                  <div>
                    <h3 className="text-[20px] font-bold tracking-tighter">
                      {`Welcome back, ${fullName}`}
                    </h3>
                    <p className="text-greyFive text-[14px] sm:text-[16px] font-semibold">
                      Happy Building
                    </p>
                  </div>
                </div>
                <div className="hidden sm:flex">
                  <Popover className="">
                    <Popover.Button className="flex items-center border  text-mainBlack text-[14px] font-bold !border-greySeven outline-greySeven py-2 px-4">
                      Menu <img src={ArrowDown2} className="ml-2" />
                    </Popover.Button>

                    <Popover.Panel className="absolute z-10 right-0 cursor-pointer drop-shadow-2xl text-mainBlack top-30 w-[300px] bg-mainWhite">
                      <div className="flex flex-col">
                        <div className="pt-5 px-3 pb-5">
                          <h6 className="text-lg">{fullName}</h6>
                          <p className="text-mainBlue text-sm font-light">
                            {email}
                          </p>
                        </div>
                        <Link
                          to="#"
                          className={
                            splitLocation[1] === "download"
                              ? "py-3 px-3 bg-gradedBlue bg-opacity-30 text-base border-t-2 border-t-greyFive text-grey"
                              : "py-3 px-3 text-base border-t-2 border-t-greyFive text-greyFive"
                          }
                        >
                          Download pitch deck
                        </Link>
                        {/* <Link
                          to="/billing"
                          className={
                            splitLocation[1] === "billing"
                              ? "py-3 px-3 bg-gradedBlue bg-opacity-30 text-base"
                              : "py-3 px-3 text-base"
                          }
                        >
                          Billing
                        </Link> */}
                        <Link
                          to="settings"
                          className={
                            splitLocation[2] === "settings"
                              ? "py-3 px-3 bg-gradedBlue bg-opacity-30 text-base"
                              : "py-3 px-3 text-base"
                          }
                        >
                          Settings
                        </Link>
                        <div
                          className="py-3 px-3 text-base"
                          onClick={openModal}
                        >
                          Logout
                        </div>
                      </div>
                    </Popover.Panel>
                  </Popover>
                </div>
              </div>
            </div>
            <div className="flex xs:hidden overflow-hidden bg-red-400"></div>
            <div className="hidden xs:grid grid-cols-3 border-t relative text-mainBlack w-full border-t-greySeven mt-6">
              <div className="col-span-1 py-4">
                <h6 className="text-center text-[14px] font-bold">
                  {updateData.api_count}
                  <span className="text-greyTen ml-2 font-medium">
                    Api calls
                  </span>
                </h6>
              </div>

              <div className="col-span-1 border-x border-x-greySeven py-4">
                <h6 className="text-center text-[14px] font-bold">
                  {updateData.defi_earnings}
                  <span className="text-greyTen ml-2 font-medium">
                    DeFi Yield
                  </span>
                </h6>
              </div>
              <div className="col-span-1 py-4">
                <h6 className="text-center text-[14px] font-bold">
                  {updateData.dex_p2p}
                  <span className="text-greyTen ml-2 font-medium">Dex P2P</span>
                </h6>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <div className="flex items-center justify-between">
              <h3 className="text-mainBlack text-[16px] font-bold">
                Your Api Keys
              </h3>

              <div className="">
                <ActionButton
                  label={buttonText}
                  classnames="bg-gradedBlue bg-opacity-40 text-mainBlue font-semibold px-2 py-1 tracking-wide rounded text-[14px]"
                  onClick={isPremium ? generateApiKey : openPaymentModal}
                />
                <ActionButton
                  label={resetButtonText}
                  classnames="bg-mainBlue text-mainWhite px-2 py-1 tracking-wide rounded text-[14px] ml-3"
                  onClick={isPremium ? ResetKey : openPaymentModal}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 mt-5  text-greyFive text-lg font-medium  relative">
              <div className="flex flex-col justify-between border rounded-md border-b-greySeven ">
                <div className="p-4 sm:p-6">
                  <ApiKeyCard
                    icon={testnet2Icon}
                    title="Testnet"
                    network={updateData.testnet_network}
                    creditUsage={updateData.credit_usage}
                    plan="free"
                  />
                  {/* <div className="flex items-center mb-3 text-[16px]">
                    <h6 className="mr-3 text-greyFive font-semibold">
                      Credit Usage
                    </h6>{" "}
                    <span className="text-mainBlack">{creditUsage}</span>
                  </div> */}
                </div>

                <div className="flex bg-gradedBlue bg-opacity-20 rounded-md  justify-between items-center pb-2 px-2">
                  <InputFieldTwo
                    label="Api Key"
                    type={showTestnet === "show" ? `password` : `text`}
                    value={deviceToken}
                  />

                  <div className="flex items-center mt-4 text-[14px]">
                    <div>
                      <ActionButton
                        label={showTestnet}
                        onClick={() => {
                          showTestnet === "show"
                            ? setShowTesnet("hide")
                            : setShowTesnet("show");
                        }}
                        classnames={`bg-mainBlue w-[3rem] px-2  mr-1 rounded-md  mainBlue text-white  `}
                      />
                    </div>

                    <CopyToClipboard text={deviceToken} onCopy={onCopyText}>
                      <div className=" ">
                        <ActionButton
                          label="Copy"
                          onClick={() => {}}
                          classnames={`bg-gradedBlue bg-opacity-40 px-2  mr-1 rounded-md  mainBlue ${
                            isCopied
                              ? `text-mainBlue font-bold`
                              : `text-mainBlue`
                          }`}
                        />
                        {isCopied ? (
                          <p className="absolute -bottom-10 left-[50%] text-mainBlue text-sm">
                            Copiedd!!!!
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                    </CopyToClipboard>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between border rounded-md border-b-greySeven ">
                <div className="p-4 sm:p-6">
                  <ApiKeyCard
                    icon={testnet2Icon}
                    title={
                      <div className="flex items-center">
                        {isPremium ? (
                          <>
                            {" "}
                            Mainnet
                            <img
                              src={ConfirmIcon}
                              className={`text-sm text-mainWhite 
                                 bg-mainGreen flex items-center rounded-full h-4 w-4 justify-center ml-2`}
                            />
                          </>
                        ) : (
                          <MdNotInterested className="text-mainRed font-bold" />
                        )}
                      </div>
                    }
                    network={updateData.mainnet_network}
                    creditUsage={updateData.credit_usage}
                    plan="Premium"
                  />

                  <div className="flex items-center mb-3 text-[16px]">
                    <h6 className="mr-3 text-greyFive font-semibold">
                      Credit Usage
                    </h6>{" "}
                    <span className="text-mainBlack">
                      {updateData.credit_usage}
                    </span>
                  </div>
                </div>
                <div className="flex bg-gradedBlue bg-opacity-20 rounded-md  justify-between pb-2 px-2">
                  <InputFieldTwo
                    label="Api Key"
                    type={showMainnet === "show" ? `password` : `text`}
                    onChange={(e) => setMainnetApiKey(e.target.value)}
                    value={isPremium ? mainnetApiKey : ""}
                  />

                  <div className="flex items-center mt-4 text-[14px]">
                    <div>
                      <ActionButton
                        label={showMainnet}
                        onClick={() => {
                          showMainnet === "show"
                            ? setShowMainnet("hide")
                            : setShowMainnet("show");
                        }}
                        classnames={`bg-mainBlue w-[3rem] px-2  mr-1 rounded-md  mainBlue text-white  `}
                      />
                    </div>

                    <CopyToClipboard
                      text={isPremium ? mainnetApiKey : ""}
                      onCopy={onCopyMainnetKey}
                    >
                      <div className="">
                        <ActionButton
                          label="Copy"
                          onClick={() => {}}
                          classnames={`bg-gradedBlue bg-opacity-40 px-2  rounded-md  mainBlue ${
                            isCopiedMainnet && isPremium
                              ? `text-mainBlue font-bold`
                              : `text-mainBlue`
                          }`}
                        />
                        {isCopiedMainnet && isPremium ? (
                          <p className="absolute -bottom-10 left-[50%] text-mainBlue text-sm">
                            Copied
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                    </CopyToClipboard>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 bg:col-span-2 border border-greySeven rounded-md py-5 px-5 sm:px-2 bg-mainWhite">
          <h3 className="mb-5 font-bold text-lg text-mainBlack">Guides</h3>
          <div className="w-full mb-10">
            <GuideCard
              image={Guide1}
              duration="2 min read"
              text="How to get started with blockchain on blockterium"
            />

            {/* <GuideCard
              image={Guide2}
              duration="6 min read"
              text="How to get started with blockain on blockterium"
            />
            <GuideCard
              image={Guide2}
              duration="6 min read"
              text="How to get started with blockain on blockterium"
            /> */}
          </div>
          {isPremium ? (
            ""
          ) : (
            <div className="p-5 group border border-greySeven bg-[#FAFAFF] hover:bg-primary">
              <img src={LimitKey} className="mb-4" />
              <div className="group-hover:text-mainWhite">
                <h3 className="text-xl font-semibold group-hover:text-mainWhite">
                  You reached limit for
                  <br /> free API keys!
                </h3>
                <p className="my-3 group-hover:text-mainWhite group-hover:opacity-25">
                  Choose a plan to create New API keys
                </p>
                <Link
                  to={"/dashboard/explore/pricing"}
                  className="text-mainBlue text-sm group-hover:text-mainWhite"
                >
                  Get Started
                </Link>
              </div>
            </div>
          )}
        </div>
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

      {Open && (
        <PaymentRequiredModal
          closePaymentModal={closePaymentModal}
          openPaymentModal={openPaymentModal}
          Open={Open}
          title="Upgrade plan"
          text="Payment Required"
        />
      )}
    </>
  );
};

export default DashboardLists;
