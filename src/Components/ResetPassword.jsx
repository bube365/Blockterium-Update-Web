import React from "react";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Logo, Bg, iphone } from "../assets/index";
import axios from "../api/axios";

const RESET_URL = "/accounts/request/password/reset/";

export default function ResetPassword(props) {
  const Myemail = localStorage.getItem("email");
  // const navigate = useNavigate();
  // const location = useLocation();
  // const from =
  //   location.state?.from?.pathname || "/2ef3fc2ef29f64fdd532ea6fa3a7d6e2.txt";

  const emailRef = React.useRef();
  const successRef = React.useRef();
  const emailErrorRef = React.useRef();
  const errorRef = React.useRef();
  const [email, setEmail] = React.useState("");

  const [emailError, setEmailError] = React.useState("");
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");
  const [successMsg, setSuccessMsg] = React.useState("");
  const [buttonText, setButtonText] = React.useState("Reset Password");
  React.useEffect(function () {
    emailRef.current.focus();
  }, []);
  React.useEffect(
    function () {
      setSuccessMsg("");
    },
    [email]
  );
  React.useEffect(
    function () {
      setErrorMsg("");
    },
    [email]
  );

  const Success = () => {
    setSuccessMsg(`An email has been sent to ${Myemail}`);
    setTimeout(() => {
      setSuccessMsg("");
    }, 8000);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    // navigate(from, { replace: true });
    //set button name to loading
    setButtonText("Resetting Your Password...");
    try {
      const response = await axios.post(
        RESET_URL,
        JSON.stringify({ email: email }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      const onSucess = response?.data?.message;
      {
        onSucess === "OK" ? Success() : "";
      }

      setButtonText("Reset Password");
      // navigate(from, { replace: true });
    } catch (error) {
      console.log(error);
      if (error.response?.status === 500) {
        setErrorMsg("Oops! an error occurred!");
      } else {
        setErrorMsg("No user with this email");
      }
      errorRef.current.focus();
      setButtonText("Proceed");
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
              PASSWORD RESET
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
            <p
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
            </p>
            <div className="flex flex-col text-white py-2">
              <label>Email</label>
              <input
                className="rounded-lg bg-gray-800 mt-2 p-2 focus:bg-gray-800 focus:outline-none text-sm"
                type="email"
                ref={emailRef}
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
                placeholder="Enter your existing email address"
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
}

//     <div className="flex flex-col sm:flex-row h-screen w-full bg-black overflow-y-hidden">
//       <div className="hidden sm:block authpage relative w-[50%] py-6 px-6">
//         <Link to="/">
//           <img src={Logo} alt="" className="w-[8rem]" />
//         </Link>
//         <h2 className="text-[20px] text-Lightgrey mt-[10rem] mb-[1rem]">
//           Empowering Web3 developers to build the apps of their dreams
//         </h2>
//         <p className="text-grey">
//           Our solutions include wallet as a service solution (Custodial and
//           Non-Custodial for wallet creation, send and receive), Defi yield
//           Interoperability solution and decentralized peer - 2 - peer
//           infrastructure.
//         </p>
//         <img src={iphone} alt="" className="absolute bottom-0 left-[20px]" />
//       </div>
//       <div className="bg-secondary-dark-bg flex flex-col justify-center">
//         <h2 className="text-2xl text-white font-poppins font-semibold text-center py-[40px]">
//           RACK
//         </h2>
//         <form
//           onSubmit={handleSubmit}
//           className="max-w-[400px] w-full mx-auto bg-primary p-8 px-8 rounded-lg"
//         >
//           <h2 className="text-[15px] text-white font-poppins text-center">
//             PASSWORD RESET
//           </h2>
//           <p
//             ref={errorRef}
//             className={
//               errorMsg
//                 ? "bg-red-100 border border-red-400 text-red-700 px-4 py-3 mt-2 rounded relative"
//                 : "offscreen"
//             }
//             aria-live="assertive"
//             role="alert"
//           >
//             {errorMsg}
//           </p>
//           <p
//             ref={successRef}
//             className={
//               successMsg
//                 ? "bg-green-100 border border-green-400 text-green-700 px-4 py-3 mt-2 rounded relative"
//                 : "offscreen"
//             }
//             aria-live="assertive"
//             role="alert"
//           >
//             {successMsg}
//           </p>
//           <div className="flex flex-col text-white py-2">
//             <label>Email</label>
//             <input
//               className="rounded-lg bg-gray-800 mt-2 p-2 focus:border-secondary focus:bg-gray-800 focus:outline-none"
//               type="email"
//               ref={emailRef}
//               autoComplete="off"
//               onChange={(e) => setEmail(e.target.value)}
//               value={email}
//               placeholder="johndoe@rack.best"
//               aria-describedby="emailnote"
//               onFocus={() => setEmailFocus(true)}
//               onBlur={() => setEmailFocus(false)}
//               required
//             />
//             <div
//               id="emailnote"
//               className={
//                 emailFocus
//                   ? "bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
//                   : "offscreen"
//               }
//               role="alert"
//             >
//               <div className="flex">
//                 <div className="py-1">
//                   <svg
//                     className="fill-current h-6 w-6 text-teal-500 mr-4"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <p className="text-[12px] py-2">
//                     Enter your existing email address!
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <button
//             className="w-full my-5 py-2 bg-secondary rounded-lg hover:shadow-blue-500/50 text-white font-semibold"
//             type="submit"
//           >
//             {buttonText}
//           </button>
//         </form>
//         <h2 className="text-white font-poppins text-center py-[40px] cursor-pointer">
//           <Link to="/login">Back to login</Link>
//         </h2>
//       </div>
//    </div>
