import React from "react";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Logo, Bg, iphone } from "../assets/index";
import axios from "../api/axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const PasswordResetUpdate = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const [password, setPassword] = React.useState("");

  const errorRef = React.useRef();

  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [buttonText, setButtonText] = React.useState("Reset Password");
  const [showPassword, setShowPassword] = React.useState(false);
  const [validPassword, setValidPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  const [confirmPasswordFocus, setConfirmPasswordFocus] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  React.useEffect(() => {
    setValidPassword(PWD_REGEX.test(password));
  }, [password]);

  React.useEffect(
    function () {
      setErrorMsg("");
    },
    [password]
  );

  //   React.useEffect(
  //     function () {
  //       setErrorMsg("");
  //     },
  //     [password]
  //   );

  const token = splitLocation[3];
  const encoded_pk = splitLocation[2];
  const RESETPASSWORD_URL = `/accounts/password-reset/${encoded_pk}/${token}/`;

  async function handleSubmit(event) {
    event.preventDefault();
    setButtonText("Resetting");

    const v2 = PWD_REGEX.test(password);
    if (!v2) {
      setErrorMsg("Invalid Entry");
      return;
    }

    try {
      const response = await axios.post(
        RESETPASSWORD_URL,
        JSON.stringify({
          token: token,
          password: password,
          encoded_pk: encoded_pk,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      setButtonText("Reset Password");
      // navigate(from, { replace: true });
    } catch (error) {
      if (error.response?.status === 500) {
        setErrorMsg("Oops! an error occurred!");
        setButtonText("Reset Password");
      } else {
        setErrorMsg(error.response?.data["message"]);
        setButtonText("Reset Password");
      }
      errorRef.current.focus();
    }
  }

  return (
    <div className="flex flex-col sm:flex-row h-screen w-full bg-black overflow-y-hidden">
      <div className="hidden sm:block authpage relative w-[50%] py-6 px-6">
        <Link to="/">
          <img src={Logo} alt="" className="w-[8rem]" />
        </Link>
        <h2 className="text-[20px] text-Lightgrey mt-[10rem] mb-[1rem]">
          Empowering Web3 developers to build the apps of their dreams
        </h2>
        <p className="text-grey">
          Our solutions include wallet as a service solution (Custodial and
          Non-Custodial for wallet creation, send and receive), Defi yield
          Interoperability solution and decentralized peer - 2 - peer
          infrastructure.
        </p>
        <img src={iphone} alt="" className="absolute bottom-0 left-[20px]" />
      </div>
      <div className="sm:hidden pt-4 px-3 pb-16 ss:px-6">
        <Link to="/">
          <img src={Logo} alt="" className="w-[8rem]" />
        </Link>
      </div>
      <div className="flex flex-col justify-center w-full">
        <div className="bg-darkestGrey mx-auto max-w-[400px] w-full  rounded-lg ">
          <form
            onSubmit={handleSubmit}
            className="max-w-[400px] w-full mx-auto bg-darkestGrey p-8 px-8 rounded-lg"
          >
            <h2 className="text-[20px] mb-6 text-white font-poppins text-center">
              Reset your password
            </h2>
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

            {/* <p
              ref={successRef}
              className={
                successMsg
                  ? "bg-white border text-green-400 border-green-400 px-4 py-3 mt-2 rounded relative font-semibold"
                  : "offscreen"
              }
              aria-live="assertive"
              role="alert"
            >
              {successMsg}
            </p> */}

            <div className="flex flex-col text-white py-2">
              <label>New Password</label>
              <div className="rounded-lg bg-gray-800 mt-2 p-2 focus:border-secondary focus:bg-gray-800 focus:outline-none flex items-center justify-between">
                <input
                  className="rounded-lg bg-gray-800  focus:border-secondary focus:bg-gray-800 focus:outline-none"
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="**********"
                  aria-describedby="pwdnote"
                  onFocus={() => setPasswordFocus(true)}
                  onBlur={() => setPasswordFocus(false)}
                  required
                />
                <div>
                  <button type="button" onClick={togglePasswordVisibility}>
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
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

            <div className="flex flex-col text-white py-2">
              <label>Confirm Password</label>
              <div className="rounded-lg bg-gray-800 mt-2 p-2 focus:border-secondary focus:bg-gray-800 focus:outline-none flex items-center justify-between">
                <input
                  className="rounded-lg bg-gray-800  focus:border-secondary focus:bg-gray-800 focus:outline-none"
                  type={showConfirmPassword ? "text" : "password"}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                  placeholder="**********"
                  aria-describedby="pwdnote"
                  onFocus={() => setConfirmPasswordFocus(true)}
                  onBlur={() => setConfirmPasswordFocus(false)}
                  required
                />
                <div>
                  <button
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                  >
                    {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                  </button>
                </div>
              </div>
            </div>
            {/* <div className="flex justify-between text-white py-2">
              <p className="flex items-center text-[12px]">
                <input className="mr-2" type="checkbox" /> Stay Logged in
              </p>
              <p className="cursor-pointe text-[12px]">
                <Link to="/reset-password">Forgot Password</Link>
              </p>
            </div> */}
            <button
              className="w-full my-5 py-2 BlueGradient rounded-lg hover:shadow-blue-500/50 text-white font-semibold"
              type="submit"
            >
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordResetUpdate;
