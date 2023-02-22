import React, { useState } from "react";
import TopBarTwo from "../Containers/TopBarTwo";
import MobileTopBar from "../Containers/MobileTopBar";
import SideBar from "../Containers/SideBar";
import ActionButton from "../Inputs/ActionButton";
import ProfileIndex from "./ProfileIndex";
import AccountIndex from "./AccountIndex";
import SettingsInput from "../Inputs/SettingsInput";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "../../api/axios";

// import DashboardLists from "./../DashboardLists";

const SettingsIndex = () => {
  const UPDATEPASSWORD_URL = "/accounts/profile/update/password/";
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
  const [settingsTab, setSettingsTab] = useState("profile");
  const fullname = localStorage.getItem("fullName");
  const email = localStorage.getItem("email");
  const [password, setPassword] = React.useState("");
  const errorRef = React.useRef();
  const [success, setSuccess] = React.useState(false);
  const [successMsg, setSuccessMsg] = React.useState("");
  const [currentPassword, setCurrentPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");
  const [buttonText, setButtonText] = React.useState("Update Changes");
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  const [confirmPasswordFocus, setConfirmPasswordFocus] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const apiToken = localStorage.getItem("accessToken");

  const [validPassword, setValidPassword] = React.useState(false);
  const [validConfirmPassword, setValidConfirmPassword] = React.useState(false);
  const successRef = React.useRef();

  React.useEffect(
    function () {
      setErrorMsg("");
    },
    [password, currentPassword, passwordConfirm]
  );

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  React.useEffect(() => {
    setValidPassword(PWD_REGEX.test(password));
  }, [password]);

  React.useEffect(() => {
    setValidConfirmPassword(PWD_REGEX.test(passwordConfirm));
  }, [passwordConfirm]);

  const Success = () => {
    setSuccessMsg("Password Set");
    setTimeout(() => {
      setSuccessMsg("");
    }, 8000);
  };

  async function handleSubmit(event) {
    event.preventDefault();

    // set button name to loading
    setButtonText("Updating...");
    const v2 = PWD_REGEX.test(password);
    if (!v2) {
      setErrorMsg("Invalid Entry");
      return;
    }

    try {
      const response = await axios.post(
        UPDATEPASSWORD_URL,
        JSON.stringify({
          password: password,
          current_password: currentPassword,
          password_confirm: passwordConfirm,
        }),

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiToken}`,
          },
          withCredentials: true,
        }
      );
      console.log(response);
      const onSucess = response?.data?.message;
      // setSuccessMsg(onSucess);
      setSuccess(true);

      {
        onSucess === "Password Set" ? Success() : "";
      }
      // async () => {
      //   setSuccessMsg(onSucess);
      //   setTimeout(() => {
      //     setSuccessMsg("");
      //     setSuccess(false);
      //   }, 2000);
      // };

      // setPassword("");
      // setSuccess(true);
      // setButtonText("Proceed");
      // navigate(from, { replace: true });
      setButtonText("Update Changes");
    } catch (error) {
      console.log(error);
      setButtonText("Update Changes");
      if (error.response?.status === 500) {
        setErrorMsg("Oops! an error occurred!");
      } else {
        setErrorMsg(error.response?.data["message"]);
        setButtonText("Update Changes");
      }
      setButtonText("Update Changes");
      //   setButtonText("Proceed");
    }
  }

  return (
    <div className="block  w-full bg:w-[85%] bg:ml-[15%]">
      <div className="block bg:hidden">
        <MobileTopBar />
      </div>

      <div className="hidden bg:block sticky top-0 left-0">
        <TopBarTwo />
      </div>

      <form onSubmit={handleSubmit} className="mt-6">
        <div className="bg-greyEight py-6 sm:py:10 px-5 sm:px-10 ">
          <div className="bg-mainWhite p-3 h-[30rem] rounded-md sm:w-[50%]">
            <div className="flex justify-between items-center">
              <div className="flex text-sm ss:text-base items-center">
                <div
                  onClick={() => setSettingsTab("profile")}
                  className={
                    settingsTab === "profile"
                      ? "text-mainBlue px-2 sm:px-5 py-2 font-bold cursor-pointer border-b-2 border-b-mainBlue"
                      : "text-greyFive px-2 sm:px-5 py-2 font-[100] cursor-pointer"
                  }
                >
                  Profile
                </div>
                <div
                  onClick={() => setSettingsTab("account")}
                  className={
                    settingsTab === "account"
                      ? "text-mainBlue px-2 sm:px-5 py-2 font-bold cursor-pointer border-b-2 border-b-mainBlue"
                      : "text-greyFive px-2 sm:px-5 py-2 font-[100] cursor-pointer"
                  }
                >
                  Account
                </div>
              </div>
              <button
                className="text-mainWhite bg-mainBlue px-2 py-1 rounded-sm"
                type="submit"
              >
                {buttonText}
              </button>
            </div>
            {settingsTab === "profile" ? (
              <div>
                <form className="mt-6">
                  <SettingsInput
                    label="Fullname"
                    type="text"
                    placeholder={fullname}
                  />
                  <SettingsInput
                    label="Email"
                    type="email"
                    placeholder={email}
                  />
                </form>
              </div>
            ) : (
              <div className="mt-2">
                <p
                  ref={errorRef}
                  className={
                    errorMsg
                      ? "bg-Lightgrey text-mainRed border border-mainRed text-red-700 px-4 py-3 mt-2 rounded relative"
                      : "offscreen"
                  }
                  // aria-live="assertive"
                  // role="alert"
                >
                  {errorMsg}
                </p>

                <div className="flex flex-col  py-2">
                  <div className="border border-greySeven ">
                    <SettingsInput
                      label="Current Password"
                      type="text"
                      placeholder="Enter Current Password"
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      value={currentPassword}
                      aria-describedby="pwdnote"
                      // onFocus={() => setPasswordFocus(true)}
                      // onBlur={() => setPasswordFocus(false)}
                      required
                    />
                  </div>

                  <div>
                    <div className=" flex items-center justify-between border border-greySeven my-2 pr-2">
                      <SettingsInput
                        label="New Password"
                        type={showPassword ? "text" : "password"}
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        placeholder="Enter New Password"
                        aria-describedby="pwdnote"
                        onFocus={() => setPasswordFocus(true)}
                        // onFocus={() => setPasswordFocus(true)}
                        // onBlur={() => setPasswordFocus(false)}
                        required
                      />
                      <button type="button" onClick={togglePasswordVisibility}>
                        {showPassword ? <FaEye /> : <FaEyeSlash />}
                      </button>
                    </div>
                    {passwordFocus && !validPassword ? (
                      <div
                        id="pwdnote"
                        className={
                          passwordFocus && !validPassword
                            ? "bg-white border-t-4  rounded-b text-teal-900 px-4 py-3 shadow-md border border-red-500"
                            : "offscreen"
                        }
                        role="alert"
                      >
                        <div className="flex">
                          <div className="py-1">
                            <svg
                              className="fill-current h-4 w-4 text-purple mr-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                            </svg>
                          </div>
                          <div>
                            <p className={`text-[12px] py-2`}>
                              8 to 24 characters.
                              <br />
                              Must include uppercase and lowercase letters, a
                              number and a special character.
                              <br />
                              Special characters allowed
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ``
                    )}
                  </div>

                  <div>
                    <div className="flex items-center justify-between border border-greySeven pr-2">
                      <SettingsInput
                        label="Confirm Password"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Enter Confirm Password"
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                        onFocus={() => setConfirmPasswordFocus(true)}
                        value={passwordConfirm}
                        aria-describedby="pwdnote"
                        required
                      />
                      <button
                        type="button"
                        onClick={toggleConfirmPasswordVisibility}
                      >
                        {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                      </button>
                      {/* 
                      <button type="button" onClick={togglePasswordVisibility}>
                        {showPassword ? <FaEye /> : <FaEyeSlash />}
                      </button> */}
                    </div>
                    {confirmPasswordFocus && !validConfirmPassword ? (
                      <div
                        id="pwdnote"
                        className={
                          confirmPasswordFocus && !validConfirmPassword
                            ? "bg-white border-t-4  rounded-b text-teal-900 px-4 py-3 shadow-md border border-red-500"
                            : "offscreen"
                        }
                        role="alert"
                      >
                        <div className="flex">
                          <div className="py-1">
                            <svg
                              className="fill-current h-4 w-4 text-purple mr-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                            </svg>
                          </div>
                          <div>
                            <p className={`text-[12px] py-2`}>
                              8 to 24 characters.
                              <br />
                              Must include uppercase and lowercase letters, a
                              number and a special character.
                              <br />
                              Special characters allowed
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ``
                    )}
                  </div>
                  {/* <button
                    className="text-mainWhite bg-mainBlue px-2 py-1 rounded-sm"
                    type="submit"
                  >
                    {buttonText}
                  </button> */}
                </div>
                <p
                  ref={successRef}
                  className={
                    successMsg
                      ? "bg-white border text-green-400 border-green-400 px-4 py-3 mt-2 rounded relative font-semibold text-center"
                      : "offscreen"
                  }
                  aria-live="assertive"
                  role="alert"
                >
                  {successMsg}
                </p>
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default SettingsIndex;

{
  /* <div className="block w-full h-screen overflow-auto">
  <div className="block bg:hidden">
    <MobileTopBar />
  </div>
  <div className="grid grid-cols-12 h-full overflow-auto">
    <div className="col-span-12 bg:col-span-2 h-full hidden bg:block">
      <SideBar />
    </div>
    <div className="col-span-12 bg:col-span-10 min-h-screen relative overflow-scroll">
      <div className="hidden bg:block">
        <TopBarTwo />
      </div>
      <div className="bg-greyEight py-6 sm:py:10 px-5 sm:px-10 h-full">
        <div className="bg-mainWhite p-3 h-full rounded-md sm:w-[50%]">
          <div className="flex justify-between items-center">
            <div className="flex text-sm ss:text-base items-center">
              <div
                onClick={() => setSettingsTab("profile")}
                className={
                  settingsTab === "profile"
                    ? "text-mainBlue px-2 sm:px-5 py-2 font-bold cursor-pointer border-b-2 border-b-mainBlue"
                    : "text-greyFive px-2 sm:px-5 py-2 font-[100] cursor-pointer"
                }
              >
                Profile
              </div>
              <div
                onClick={() => setSettingsTab("account")}
                className={
                  settingsTab === "account"
                    ? "text-mainBlue px-2 sm:px-5 py-2 font-bold cursor-pointer border-b-2 border-b-mainBlue"
                    : "text-greyFive px-2 sm:px-5 py-2 font-[100] cursor-pointer"
                }
              >
                Account
              </div>
            </div>
            <ActionButton
              label="Update changes"
              classnames="bg-mainBlue text-mainWhite font-semibold text-xs sm:text-base px-2 sm:px-4 py-2 rounded-md"
            />
          </div>
          {settingsTab === "profile" ? <ProfileIndex /> : <AccountIndex />}
        </div>
      </div>
    </div>
  </div>
</div> */
}
