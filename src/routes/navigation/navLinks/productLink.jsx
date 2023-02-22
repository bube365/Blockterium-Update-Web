import React from "react";
import { Link } from "react-scroll";

const Products = () => {
  return (
    <li className="hover:cursor-pointer hover:text-Lightgrey">
      <Link spy={true} smooth={true} to="productSection">
        Products
      </Link>
    </li>
  );
};

export default Products;
