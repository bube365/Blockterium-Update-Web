import React from "react";
import { videoIcon } from "../assets/index";
import { customersReviews } from "./data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    infinite: true,
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    focusOnSelect: true,
    slidesToScroll: 2,
  };

  return (
    <section className="w-full py-[6rem]">
      <div className="text-center mb-[6rem] ">
        <h1 className="text-[38px]">Modern companies are built on Capital.</h1>
        <p className="">
          Our products are integrated seamlessly into any <br /> digital
          platform or website
        </p>
      </div>

      <Slider {...settings} className="w-full">
        {customersReviews.map(({ img, review, userName }) => {
          return (
            <div className="w-[30%] ">
              <img src={img} alt="" className="w-[3rem] sliderImg" />
              <h2 className="bg-darkOrange px-2 w-[4rem] text-center text-white rounded-lg ">
                {userName}
              </h2>
              <p className="sliderP">{review}</p>
            </div>
          );
        })}
      </Slider>

      <div className="text-center mt-6">
        <button className="border-r-3 border-b-3 border border-black rounded-3xl hover:border-b-4 px-3 ">
          Watch the video <img src={videoIcon} alt="" className="inline w-3" />
        </button>
      </div>
    </section>
  );
};

export default Reviews;
