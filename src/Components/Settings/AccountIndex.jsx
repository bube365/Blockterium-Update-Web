import React from "react";
import SettingsInput from "../Inputs/SettingsInput";

// import useAuth from "../hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";

const AccountIndex = () => {
  const [password, setPassword] = React.useState("");
  const [buttonText, setButtonText] = React.useState("Proceed");
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <div className="mt-12">
      <div className="mb-10">
        <label className="mb-3 text-mainBlack font-medium text-base">
          Password
        </label>
        <SettingsInput
          label="Password"
          type="text"
          placeholder="Enter Password"
        />
        <SettingsInput
          label="New Password"
          type="text"
          placeholder="Enter New Password"
        />
        <SettingsInput
          label="Confirm Password"
          type="text"
          placeholder="Enter Confirm Password"
        />
      </div>

      {/* <div className="mb-10">
        <label className="mb-3 text-mainBlack font-medium text-base">
          Others
        </label>
        <SettingsInput
          label="Company Name"
          type="text"
          placeholder="Enter Company Name"
        />
        <SettingsInput
          label="Username"
          type="text"
          placeholder="Enter Username"
        />
      </div> */}
    </div>
  );
};

export default AccountIndex;
