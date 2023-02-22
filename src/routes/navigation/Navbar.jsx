import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Link as AnchorLink } from "react-scroll";
import { Logo } from "../../assets/index";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "../../Components/Button";
import { HiOutlineArrowRight } from "react-icons/hi";
import {
  Product,
  Resources,
  HowItWorks,
  Price,
} from "../navigation/navLinks/index";
// import Products from "../../Components/home/Products";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const closeMobileMenu = () => setOpen(false);
  return (
    <>
      <nav className="bg-black w-full z-10 text-white fixed top-0 py-1 left-0 right-0 px-3 ss:px-6 sm:px-12 lg:px-[6rem] xl:px-[10rem]">
        <div className="flex items-center justify-between text-center text-[13px] lg:text-[16px]">
          <div className="z-50 py-2 xsm:w-auto w-full flex justify-between">
            <Link to={"./"} onClick={closeMobileMenu}>
              <img
                src={Logo}
                alt=""
                className=" w-[8rem] md:w-[7rem] py-2 hover:cursor-pointer"
              />
            </Link>

            <div onClick={() => setOpen(!open)} className="xsm:hidden text-xl">
              {open ? <FaTimes /> : <FaBars />}
            </div>
          </div>

          <ul className="xsm:flex items-center w-[45%] lg:w-[40%] justify-between  hidden ">
            <Product />
            <HowItWorks />
            <Resources />
            <Price />

            <Link to={"./contact-us"}>
              <li className="hover:cursor-pointer hover:text-Lightgrey">
                Contact Us
              </li>
            </Link>
          </ul>
          <div className="hidden xsm:flex  gap-2">
            <Link
              to={"./login"}
              className="greyGradient py-2 md:py-1  xsm:w-[10rem]"
            >
              Login
            </Link>

            <Link
              to={"./sign-up"}
              className="BlueGradient flex gap-2 items-center justify-center py-2 md:py-1  xsm:w-[10rem]"
            >
              Start for free <HiOutlineArrowRight className="animatedIcon" />
            </Link>
          </div>

          {/* Mobile nav */}
          <>
            <ul
              className={`
        xsm:hidden bg-black fixed flex flex-col justify-between items-center w-full xs:w-[60%] sm:w-[50%] top-0 overflow-y-auto bottom-0 pt-[7rem]  pl-4 text-[20px] font-semibold
        duration-500 ${open ? "left-0 " : "left-[-100%] "}
       `}
            >
              <li className="hover:cursor-pointer hover:text-Lightgrey">
                <AnchorLink
                  spy={true}
                  smooth={true}
                  to="productSection"
                  onClick={closeMobileMenu}
                >
                  Products
                </AnchorLink>
              </li>

              <li className="hover:cursor-pointer hover:text-Lightgrey">
                <AnchorLink
                  spy={true}
                  smooth={true}
                  to="howItWorks"
                  onClick={closeMobileMenu}
                >
                  How it works
                </AnchorLink>
              </li>

              <Resources />

              <li className="hover:cursor-pointer hover:text-Lightgrey">
                <AnchorLink
                  spy={true}
                  smooth={true}
                  to="pricesection"
                  onClick={closeMobileMenu}
                >
                  Pricing
                </AnchorLink>
              </li>
              {/* <Price /> */}
              <li>
                <Link
                  to={"/contact-us"}
                  className="py-7 px-3 "
                  onClick={closeMobileMenu}
                >
                  Contact Us
                </Link>
              </li>
              <Link to="/login" className="py-5">
                <Button />
              </Link>
            </ul>
          </>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import { Logo } from "../assets/index";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";
// import { HiOutlineArrowLeft } from "react-icons/hi";
// import { Link, Outlet } from "react-router-dom";
// import Dropdown from "./routes/navigation/dropdown";

// const Navbar = () => {
//   const [click, setClick] = useState(false);

//   const handleClick = () => setClick(!click);

//   return (
//     <>
//       <section className="bg-black w-full z-10 text-white fixed top-0 py-2 left-0 right-0 px-3 sm:px-12 lg:px-[6rem] xl:px-[10rem]">
//         <div className="flex items-center justify-between text-center text-[13px] lg:text-[16px]">
//           <Link to={"./"}>
//             <img
//               src={Logo}
//               alt=""
//               className=" w-[7rem] py-2 hover:cursor-pointer"
//             />
//           </Link>
//           <div onClick={handleClick} className="md:hidden">
//             {click ? (
//               <FaTimes className="w-[2rem] h-[1rem] ss:h-[1.5rem] text-indigo-700" />
//             ) : (
//               <FaBars className="w-[2rem] h-[1rem] ss:h-[1.5rem] " />
//             )}
//           </div>
//           <ul className="md:flex items-center w-[45%] lg:w-[40%] justify-between  hidden ">
//             <li className="flex items-center gap-2 hover:text-Lightgrey">
//               Product
//               <MdOutlineKeyboardArrowDown className="w-4 h-5 hover:cursor-default" />
//             </li>
//             <li className="hover:cursor-pointer hover:text-Lightgrey">
//               How it Works
//             </li>
//             <li className="flex items-center gap-2 hover:text-Lightgrey">
//               Resources{" "}
//               <MdOutlineKeyboardArrowDown className="w-4 h-5 hover:cursor-default" />
//             </li>
//             <li className="hover:cursor-pointer hover:text-Lightgrey">
//               <Link to={"./pricing"}>Pricing</Link>
//             </li>
//             <li className="hover:cursor-pointer hover:text-Lightgrey">
//               Contact Us
//             </li>
//           </ul>

//           <div className="hidden md:flex  gap-2">
//             <Link to={"./login"} className="greyGradient px-7 rounded-xl py-1">
//               Login
//             </Link>

//             <Link
//               to={"./sign-up"}
//               className="BlueGradient px-6 rounded-xl flex gap-2 items-center"
//             >
//               Start for free <HiOutlineArrowLeft className="animatedIcon" />
//             </Link>
//           </div>
//         </div>
//       </section>
//       <Outlet />
//     </>
//   );
// };

// export default Navbar;
