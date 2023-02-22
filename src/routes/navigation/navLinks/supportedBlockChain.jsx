import React from "react";
import { Link } from "react-scroll";

const Sponsors = () => {
  return (
    <li className="hover:cursor-pointer hover:text-Lightgrey">
      <Link spy={true} smooth={true} to="sponsorsSection">
        Supported Blockchains
      </Link>
    </li>
  );
};

export default Sponsors;
