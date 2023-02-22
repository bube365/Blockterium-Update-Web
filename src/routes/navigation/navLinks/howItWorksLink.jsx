import React from "react";
import { Link } from "react-scroll";

const HowItWorks = () => {
  return (
    <li className="hover:cursor-pointer hover:text-Lightgrey">
      <Link spy={true} smooth={true} to="howItWorks">
        How it works
      </Link>
    </li>
  );
};

export default HowItWorks;
