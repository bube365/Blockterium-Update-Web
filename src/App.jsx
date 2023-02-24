import React, { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./routes/navigation/Navbar";
import ContactUs from "./Components/home/contactUs";
import AboutUs from "./Components/home/aboutUs";
import { HomePage, SignUp, Login } from "./routes/index";
import SideBar from "./Components/Containers/SideBar";
import DashboardHome from "./Components/Dashboard/dashboardHome";
// import DebugIndex from "./Components/Explore/Debug/DebugIndex";
import SettingsIndex from "./Components/Settings/SettingsIndex";
import PricingIndex from "./Components/Explore/Pricing/PricingIndex";
import SubscriptionIndex from "./Components/Explore/Subscription/SubscriptionIndex";
import Docs from "./Components/Docs/Docs.jsx";

import ResetPassword from "./Components/ResetPassword";
import TermsAndCondition from "./routes/navigation/TermsAndCondition";
import PrivacyPolicy from "./routes/navigation/PrivacyPolicy";
import Update from "./Components/Update/Update";
// ************************************************************************************

export default function App(props) {
  return (
    <div className="font-assistant">
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="terms-conditions" element={<TermsAndCondition />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="about-us" element={<AboutUs />} />
        </Route>

        <Route path="/dashboard" element={<SideBar />}>
          <Route index element={<DashboardHome />} />
          <Route path="settings" element={<SettingsIndex />} />

          {/* <Route path="explore/debug" element={<DebugIndex />} /> */}
          <Route path="explore/subscription" element={<SubscriptionIndex />} />
          <Route path="explore/pricing" element={<PricingIndex />} />

          <Route path="docs" element={<Docs />} />
          {/* <Route path="contact" element={<ContactUsForm />} /> */}
        </Route>

        {/* <Route path="/dashboard" element={<DashboardHome />} />
        <Route path="/explore/debug" element={<DebugIndex />} />
        <Route path="/explore/pricing" element={<PricingIndex />} />
        <Route path="/explore/subscription" element={<SubscriptionIndex />} />
        <Route path="/settings" element={<SettingsIndex />} /> */}
      </Routes>

      {/* <Hero /> */}
      {/* <BlockteriumDescrpt />
      <IntegrateWallet />
      <BlockteriumUse />
      <BlockteriumAim />
      <BlockteriumProducts />
      <BlockteriumAdvantages />
      <BlockteriumIntCards />
      <PopularUseCase />
      <SubscriptionPlan />
      <ReviewQuestions />
      <BlockChainEmpowering />
      <Footer /> */}
    </div>
  );
}

{
  /* <Route
          path="2ef3fc2ef29f64fdd532ea6fa3a7d6e2.txt"
          element={<Update />}
        /> */
}
