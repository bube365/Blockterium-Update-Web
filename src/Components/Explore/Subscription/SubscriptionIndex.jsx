import React, { useState, useEffect } from "react";
import TopBarTwo from "../../Containers/TopBarTwo";
import MobileTopBar from "../../Containers/MobileTopBar";
import SideBar from "../../Containers/SideBar";
import ActionButton from "../../Inputs/ActionButton";
import SwitchComp from "../../Inputs/CustomSwitch";
import PricingCard from "../../Cards/PricingCard";
import { ConfirmIcon, LimitKey } from "../../../assets";
import { Dropdown } from "primereact/dropdown";
import axios from "../../../api/axios";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";
import { MdNotInterested } from "react-icons/md";

const SubscriptionIndex = () => {
  const GENERATE_API_URL = "/accounts/generate/api-key/";
  const [isPremium, setIsPremium] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const apiToken = localStorage.getItem("accessToken");
  const SUBSCRIPTION_URL = "/pricing/billing/";
  const [billingHistory, setBillingHistory] = React.useState([
    {
      amount: "",
      api_calls: 0,
      id: 1,
      payment_date: "",
      payment_due_date: "",
      plan: "",
      timestamp: "",
      transaction_id: "",
      updated: "",
      user: 35,
    },
  ]);

  async function checkPremiumUsers() {
    try {
      const response = await axios.get(GENERATE_API_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiToken}`,
        },
        withCredentials: true,
      });

      const premiumUser = response?.data?.data?.is_premium;
      // setIsLoading(false);
      setIsPremium(premiumUser);
    } catch (error) {
      // console.log(error.response.statusText);
      setIsLoading(false);

      // error.response.statusText === "Payment Required";
    }
  }

  async function billings() {
    try {
      const response = await axios.get(SUBSCRIPTION_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiToken}`,
        },
        withCredentials: true,
      });

      const resp = response?.data;
      setBillingHistory(resp);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    (async () => checkPremiumUsers())();
  }, [isPremium]);

  useEffect(() => {
    (async () => billings())();
  }, [isPremium]);

  if (isLoading) {
    return (
      <div className="w-full bg:w-[85%] h-screen bg:ml-[15%]">
        <div className="block bg:hidden">
          <MobileTopBar />
        </div>
        <div className="hidden bg:block sticky top-0 right-0 w-full">
          <TopBarTwo />
        </div>
        <div className="w-full  py-6 sm:py:10 md:py-12 px-5 sm:px-10 h-full bg-greyEight">
          <div>
            <ReactLoading
              type={"spin"}
              color={"#4A59E5"}
              height={27}
              width={27}
              className="absolute left-[50%] top-[50%]"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg:w-[85%] md:h-screen bg:ml-[15%]">
      <div className="block bg:hidden">
        <MobileTopBar />
      </div>

      <div className="hidden bg:block sticky top-0 right-0 w-full">
        <TopBarTwo />
      </div>
      <div className="w-full  py-6 sm:py:10 md:py-12 px-5 sm:px-10 h-full bg-greyEight">
        <div className="w-full flex flex-col xsm:flex-row justify-between gap-4">
          <>
            <div className="w-full xsm:w-[30%] bg-mainWhite p-2 ">
              <div className="flex w-full bg-mainWhite items-center  justify-between">
                <h3 className="text-mainBlack font-bold text-[16px]">
                  Plan Type
                </h3>
                <div
                  className={`text-sm text-mainWhite ${
                    isPremium ? `bg-mainGreen` : `bg-mainRed`
                  }   rounded-full px-4 py-1`}
                >
                  {isPremium ? (
                    <div className="flex items-center">
                      <img src={ConfirmIcon} className="mr-2" />
                      <h2>Active</h2>
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <MdNotInterested className="text-white font-bold mr-2" />
                      <h2>Not Active</h2>
                    </div>
                  )}
                </div>
              </div>
              <>
                {isPremium && (
                  <div className="bg-mainWhite  my-5 border border-greySeven rounded-md  py-2  px-4 text-[14px]">
                    <div className=" py-1">
                      <h2 className="font-semibold text-[16px]">
                        Premium Account
                      </h2>
                      <h2 className="font-bold my-3 text-[16px]">
                        {/* <span className="font-normal text-[14px]">/ month</span> */}
                      </h2>
                    </div>

                    {/* <div className="pb-3 text-greyTen">
                      <ul className="flex flex-col gap-3  ">
                        <li className="">Unlimited API calls</li>
                        <li className="">500 rq/s</li>
                        <li className="">Community support</li>
                        <li className="">API Testnets</li>
                        <li className="">Market Data</li>
                      </ul>
                    </div> */}
                  </div>
                )}

                {!isPremium && (
                  <div className="bg-mainWhite  my-5 border border-greySeven rounded-md  py-2 px-4 text-[14px] flex flex-col items-center">
                    <h2 className="font-semibold mb-4">No Active plans</h2>
                    <img src={LimitKey} alt="" />
                  </div>
                )}
              </>
            </div>
          </>

          <>
            <div className="w-full xsm:w-[70%] bg-mainWhite p-2 ">
              <div className="flex w-full bg-mainWhite items-center  justify-between">
                <h3 className="text-mainBlack font-bold text-[16px]">
                  Billing History
                </h3>
                <Link
                  to={"/dashboard/explore/pricing"}
                  className="text-sm text-mainWhite bg-mainBlue flex items-center rounded-md px-4 py-1"
                >
                  Upgrade Plan
                </Link>
              </div>

              <div className="sm:hidden">
                {billingHistory.map((element) => {
                  return (
                    <div className="border text-black border-greySeven my-3  p-2">
                      <div>
                        <h1 className="font-semibold">Payment Date</h1>
                        <p className=" mb-2">{element.payment_date}</p>
                      </div>
                      <div>
                        <h1 className="font-semibold">Plan</h1>
                        <p className=" mb-2">{element.plan}</p>
                      </div>
                      <div>
                        <h1 className="font-semibold">Transaction ID</h1>
                        <p className="mb-2">{element.transaction_id}</p>
                      </div>
                      <div>
                        <h1 className="font-semibold">Amount</h1>
                        <p className=" mb-2">
                          {element.amount} {isPremium ? "USDT" : ""}
                        </p>
                      </div>

                      <div>
                        <h1 className="font-semibold">Expiry Date</h1>
                        <p className="mb-2">{element.payment_due_date}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <table className="w-full text-left text-[13px] mt-5 hidden sm:block">
                <thead>
                  <th className="w-[20%] border border-greySeven py-2 pb-4 px-2">
                    Payment Date
                  </th>
                  <th className="w-[20%] border border-greySeven py-2 pb-4 px-2">
                    Type
                  </th>
                  <th className="w-[20%] border border-greySeven py-2 pb-4 px-2">
                    Transaction ID
                  </th>
                  <th className="w-[20%] border border-greySeven py-2 pb-4 px-2">
                    Amount Paid
                  </th>
                  <th className="w-[20%] border border-greySeven py-2 pb-4 px-2">
                    Expiry Date
                  </th>
                </thead>

                {billingHistory.map((element) => {
                  return (
                    <tbody>
                      <td className="w-[20%] border text-black border-greySeven px-2 py-2">
                        {element.payment_date}
                      </td>

                      <td className="w-[20%] border border-greySeven px-2 py-2">
                        {element.plan}
                      </td>
                      <td className="w-[20%] border border-greySeven px-2 py-2">
                        {element.transaction_id}
                      </td>
                      <td className="w-[20%] border border-greySeven px-2 py-2">
                        {element.amount} USDT
                      </td>
                      <td className="w-[20%] border border-greySeven px-2 py-2">
                        {element.payment_due_date}
                      </td>
                    </tbody>
                  );
                })}
              </table>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionIndex;

//<div className="block w-full h-screen overflow-auto">
//   <div className="block bg:hidden">
//     <MobileTopBar />
//   </div>
//   <div className="grid grid-cols-12 h-full overflow-auto">
//     <div className="col-span-12 bg:col-span-2 h-full hidden bg:block">
//       <SideBar />
//     </div>
//     <div className="col-span-12 bg:col-span-10 min-h-screen relative overflow-auto">
//       <div className="hidden bg:block">
//         <TopBarTwo />
//       </div>
//       <div className="bg-greyEight py-10 sm:py:10 px-5 sm:px-10 h-full">
//         <div className="h-full rounded-md">
//           <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-2">
//             <div className="col-span-1 bg-mainWhite px-2 py-10">
//               <div className="flex items-center justify-between px-2 mb-5">
//                 <h3 className="text-mainBlack font-bold text-lg">
//                   Plan Type
//                 </h3>
//                 <div className="text-sm text-mainWhite bg-mainGreen flex items-center rounded-full px-5 py-2">
//                   <img src={ConfirmIcon} className="mr-2" />
//                   Active
//                 </div>
//               </div>
//               <PricingCard />
//               <div className="bg-mainWhite min-h-[200px] mt-5 border border-greySix p-2">
//                 <div className="flex items-baseline mb-5">
//                   <div className="">
//                     <h3 className="text-lg font-semibold text-mainBlack">
//                       API Calls
//                     </h3>
//                     <p className="text-xs text-greyFive">
//                       Total Request made
//                     </p>
//                   </div>
//                   <Dropdown
//                     optionLabel="name"
//                     value={filter}
//                     options={citySelectItems}
//                     className=" text-[10px]"
//                     onChange={(e) => setFilter(e.value)}
//                     placeholder="Menu"
//                   />
//                 </div>
//                 <h3 className="text-2xl text-mainBlack font-bold">34</h3>
//               </div>
//             </div>
//             <div className="sm:col-span-3">dede</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
