import React from "react";
import { PopularUseMd, smallScreen, slide, slides } from "../../assets/index";
import { slick } from "./data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PopularUseCase = () => {
  const setting = {
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 1000,
    infinite: true,
    slidesToShow: 1,
    focusOnSelect: false,
    slidesToScroll: 1,
  };
  return (
    <section className="bg-black text-white text-center py-[6rem] px-3 sm:px-12 lg:px-[6rem] xl:px-[10rem]">
      <div className=" ">
        <article className="mb-16 bg-black py-4">
          <h1 className="text-[44px] ss:text-[48px] sm:text-[58px] md:text-[46px] lg:text-[56px] xl:text-[72px] font-bold tracking-tighter">
            Popular Use Cases
          </h1>
          <p className="md:text-[14px] text-[20px] lg:text-[22px] text-grey">
            We provide the most adaptable platform for developers{" "}
            <br className="hidden sm:flex" /> to materialize their blockchain
            concepts quickly.
          </p>
        </article>

        <Slider {...setting} className="w-[80%]  m-auto">
          {slick.map(({ img }) => {
            return (
              <div className=" ">
                <img src={img} alt="" className="" />
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default PopularUseCase;
