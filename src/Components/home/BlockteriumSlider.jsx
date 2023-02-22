import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import FirstRoute from "./SliderRoute/FirstRoute";
import SecondSlide from "./SliderRoute/SecondSlide";

const BlockteriumSlider = () => {
  return (
    <section className="bg-secondaryColor py-[10rem] flex flex-col ">
      <ul className="text-white text-[15px] flex w-full md:w-[70%] m-auto gap-10 mb-12">
        <Link to={"./"}>Regular</Link>
        <Link to={"set-up"}>Set Up Dashboard</Link>
        <Link to={"set-up"}>Earn More</Link>
      </ul>
      <Routes>
        <Route path="/" element={<FirstRoute />} />
        <Route path="set-up" element={<SecondSlide />} />
      </Routes>
      <Outlet />
    </section>
  );
};

export default BlockteriumSlider;
