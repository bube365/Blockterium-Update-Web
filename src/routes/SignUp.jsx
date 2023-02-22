import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Logo, Bg, iphone } from "../assets/index";
import useAuth from "../hooks/useAuth";
import axios from "../api/axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const BUSINESS_REGISTER_URL = "/accounts/register/business/";
const DEVELOPER_REGISTER_URL = "/accounts/register/";

// const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export default function SignUp(props) {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/login";

  const userRef = React.useRef();
  const errorRef = React.useRef();
  const emailErrorRef = React.useRef();

  const [userFocus, setUserFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [companyNameFocus, setCompanyNameFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  const [validPassword, setValidPassword] = React.useState(false);

  const [buttonText, setButtonText] = React.useState("Proceed");

  const [user, setUser] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [companyName, setCompanyName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorMsg, setErrorMsg] = React.useState("");
  const [success, setSuccess] = React.useState(false);
  const [emailError, setEmailError] = React.useState("");

  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  React.useEffect(function () {
    userRef.current.focus();
  }, []);

  React.useEffect(() => {
    setValidPassword(PWD_REGEX.test(password));
  }, [password]);

  React.useEffect(
    function () {
      setErrorMsg("");
    },
    [user, email, companyName, password]
  );

  async function handleSubmit(event) {
    event.preventDefault();

    setButtonText("Processing...");

    const v2 = PWD_REGEX.test(password);
    if (!v2) {
      setErrorMsg("Invalid Entry");
      return;
    }

    const userData = {
      name: user,
      email: email,
      business: companyName,
      password: password,
    };

    try {
      const response = await axios.post(
        BUSINESS_REGISTER_URL,
        JSON.stringify(userData),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      const accessToken = response?.data?.data?.api_token;
      const username = response?.data?.data?.id;
      const fullName = response?.data?.data?.name;
      const email = response?.data?.data?.email;
      const business = response?.data?.data?.business;
      const deviceToken = response?.data?.data?.device_token;
      const role = response?.data?.data?.roles[0].name;
      let roles = [];
      roles.push(role);
      setAuth({ accessToken, username, fullName, business, deviceToken });
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("username", username);
      localStorage.setItem("fullName", fullName);
      localStorage.setItem("business", business);
      localStorage.setItem("email", email);
      localStorage.setItem("deviceToken", deviceToken);
      setUser("");
      setEmail("");
      setCompanyName("");
      setPassword("");
      setSuccess(true);
      setButtonText("Proceed");
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error);
      setErrorMsg(error.response?.data["message"]);
      setButtonText("Proceed");
      errorRef.current.focus();
    }
  }

  return (
    <div className="flex flex-row w-full bg-black h-screen overflow-auto ">
      <div className="hidden sm:block authpage  text-grey w-[50%] h-  py-6 px-6">
        <Link to="/">
          <img src={Logo} alt="" className="w-[8rem] " />
        </Link>
        <h2 className="text-[20px] text-Lightgrey mt-[10rem] mb-[1rem]">
          Empowering Web3 developers to build the apps of their dreams
        </h2>
        <p>
          Our solutions include wallet as a service solution (Custodial and
          Non-Custodial for wallet creation, send and receive), Defi yield
          Interoperability solution and decentralized peer - 2 - peer
          infrastructure.
        </p>
        <img
          src={iphone}
          alt=""
          className="fixed bottom-0 left-[-15rem] h-[15rem] w-[40rem]"
        />
      </div>
      <div className="flex flex-col justify-center w-full">
        <div className="sm:hidden pt-4 px-3 pb-16 ss:px-6">
          <Link to="/">
            <img src={Logo} alt="" className="w-[8rem]" />
          </Link>
        </div>
        <div className="bg-greyFour md:mt-24 mx-auto max-w-[400px] w-full  rounded-lg p-6">
          {/* <p
            ref={errorRef}
            className={
              errorMsg
                ? "offscreen "
                : " border text-white border-red-400  px-4 py-3 mt-2 rounded"
            }
            aria-live="assertive"
            role="alert"
          >
            {errorMsg}
          </p> */}
          <form
            onSubmit={handleSubmit}
            className=" w-full mx-auto text-[14px] text-Lightgrey rounded-lg py-5"
          >
            <p
              ref={errorRef}
              className={
                errorMsg
                  ? "bg-Lightgrey text-mainRed border border-mainRed text-red-700 px-4 py-3 mt-2 rounded relative"
                  : "offscreen"
              }
              aria-live="assertive"
              role="alert"
            >
              {errorMsg}
            </p>
            <h2 className="text-[20px] font-semibold text-white">
              Let's get to know you
            </h2>
            <p className="text-grey my-3">
              kindly provide your business name and the details of who will run
              this account.
            </p>
            <div className="flex flex-col bg-greyThree  py-6  px-4  ">
              <label>Full Name</label>
              <input
                className="rounded-lg bg-gray-800 mt-2 p-2  focus:border-secondary focus:bg-gray-800 focus:outline-none"
                type="name"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                placeholder="Enter your first Name and last Name"
                aria-describedby="uidnote"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
                required
              />

              <div className="flex flex-col text-Lightgrey py-2">
                <label>Email</label>
                <input
                  className="rounded-lg bg-gray-800 mt-2 p-2 focus:border-secondary focus:bg-gray-800 focus:outline-none"
                  ref={userRef}
                  type="email"
                  autoComplete="off"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (!e.target.value.includes("@")) {
                      setEmailError("Please enter a valid email address");
                    } else {
                      setEmailError("");
                    }
                  }}
                  value={email}
                  placeholder="johndoe@blockterium.com"
                  aria-describedby="emailnote"
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                  required
                />

                {emailFocus && email ? (
                  <p
                    ref={emailErrorRef}
                    className={
                      emailError
                        ? "bg-white border-t-4  rounded-b text-teal-900 px-4 py-3 shadow-md border border-red-500"
                        : "offscreen"
                    }
                    aria-live="assertive"
                    role="alert"
                  >
                    <div className="flex">
                      <div className="py-1">
                        <svg
                          className={
                            emailError
                              ? `fill-current h-4 w-4 text-purple mr-4`
                              : `hidden`
                          }
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                        </svg>
                      </div>
                      <div>{emailError}</div>
                    </div>
                  </p>
                ) : (
                  ``
                )}
              </div>

              <div className="flex flex-col text-Lightgrey py-2">
                <label>Company's Name</label>
                <input
                  className="rounded-lg bg-gray-800 mt-2 p-2 focus:border-secondary focus:bg-gray-800 focus:outline-none"
                  ref={userRef}
                  type="name"
                  autoComplete="off"
                  onChange={(e) => setCompanyName(e.target.value)}
                  value={companyName}
                  placeholder="Blockterium technologies"
                  aria-describedby="companyNamenote"
                  onFocus={() => setCompanyNameFocus(true)}
                  onBlur={() => setCompanyNameFocus(false)}
                  required
                />
              </div>

              <div className="flex flex-col text-white py-2">
                <label>Password</label>
                <div className="rounded-lg bg-gray-800 mt-2 p-2 focus:border-secondary focus:bg-gray-800 focus:outline-none flex items-center justify-between">
                  <input
                    className="rounded-lg bg-gray-800  focus:border-secondary focus:bg-gray-800 focus:outline-none"
                    type={showPassword ? "text" : "password"}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder="**********"
                    aria-invalid={validPassword ? "false" : "true"}
                    aria-describedby="pwdnote"
                    onFocus={() => setPasswordFocus(true)}
                    onBlur={() => setPasswordFocus(false)}
                    required
                  />
                  <div>
                    <button type="button" onClick={togglePasswordVisibility}>
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
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
                          Must include uppercase and lowercase letters, a number
                          and a special character.
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
            </div>
            <div className="flex justify-between text-white py-2 px-4">
              <p className="items-center text-[12px]">
                By clicking <strong>Procced</strong>, you have agreed to our{" "}
                {""}
                <Link
                  to={"/terms-conditions"}
                  className="text-mainBlue cursor-pointer font-bold"
                >
                  terms and condition
                </Link>
              </p>
            </div>
            <button
              className="w-full  py-1 BlueGradient rounded-lg hover:shadow-blue-500/50 text-white font-semibold"
              disabled={!validPassword ? true : false}
              type="submit"
            >
              {buttonText}
            </button>
          </form>
        </div>
        <h2 className="text-white font-poppins text-center  cursor-pointer py-6">
          Already have an account ?{" "}
          <Link to="/login" className="text-mainBlue font-bold cursor-pointer">
            Log in
          </Link>
        </h2>
      </div>
    </div>
  );
}
