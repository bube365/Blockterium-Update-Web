import React from "react";
import { Link } from "react-scroll";

const Price = () => {
  return (
    <li className="hover:cursor-pointer">
      <Link spy={true} smooth={true} to="pricesection">
        Pricing
      </Link>
    </li>
  );
};

export default Price;
