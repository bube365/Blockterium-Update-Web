import React from "react";
import ActionButton from "../Inputs/ActionButton";

const PricingCard = ({ plan, subscription, benefits, custom }) => {
  return (
    <div className="flex flex-col justify-between border border-greySix min-h-[300px] py-6 px-3">
      <h6 className="text-lg font-semibold  mb-5">Free</h6>
      <h3 className="text-3xl font-bold mb-3">
        $0 <span className="text-sm text-greyTen font-light">/Month</span>
      </h3>
      <div className="text-greyTen text-sm">
        <p className="mb-5">Unlimited API Calls</p>
        <p className="mb-5">5 rq/s</p>
        <p className="mb-5">Community Support</p>
        <p className="mb-5">All Testnets</p>
        <p className="mb-5">Market Data</p>
      </div>

      {custom && (
        <ActionButton
          classnames="bg-mainBlue text-mainWhite rounded w-[130px] py-2 px-4"
          label="Contact Sales"
        />
      )}
    </div>
  );
};

export default PricingCard;

// <>

//   <Pricing />
//   {custom && (
//     <ActionButton
//       classnames="bg-mainBlue text-mainWhite rounded w-[130px] py-2 px-4"
//       label="Contact Sales"
//     />
//   )}
// </>

{
  /* <div>
        <h6 className="text-lg font-semibold  mb-5">Free</h6>
        <h3 className="text-3xl font-bold mb-3">
          $0 <span className="text-sm text-greyTen font-light">/Month</span>
        </h3>
        <div className="text-greyTen text-sm">
          <p className="mb-5">Unlimited API Calls</p>
          <p className="mb-5">5 rq/s</p>
          <p className="mb-5">Community Support</p>
          <p className="mb-5">All Testnets</p>
          <p className="mb-5">Market Data</p>
        </div>
      </div> */
}
