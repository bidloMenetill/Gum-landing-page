import React from "react";
import boy1 from "./../../app/img/boy1.png";
import boy2 from "./../../app/img/boy2.png";
import bigboy from "./../../app/img/bigboy.png";
import sucess from "./../../app/img/sucees.svg";
const AboutUs = () => {
  return (
    <section className="mt-[90px]">
      <section className="flex">
        <div className="">
          <h3 className=" mb-[15px] font-bold text-[32px] leading-[129%] capitalize text-[#fff]">
            why join us?
          </h3>
          <p className="font-normal text-[10px] leading-[160%] capitalize text-[#e7e0e0]">
            Value proposition investor churn rate <br /> pitch partnership{" "}
            success crowdsource. <br /> Entrepreneur first mover advantage niche
            <br />
            Low hanging fruit iteration infographic. Churn rate analytics.
          </p>
          <ul className="mt-[30px] ">
            <div className="flex mb-1 gap-1">
              <img
                src={sucess}
                alt=""
                className="w-[12px] h-[12px] mt-2 mr-1"
              />{" "}
              <li className="aboutus ">we have professional best trainer</li>
            </div>
            <div className="flex gap-1 mb-1">
              <img
                src={sucess}
                alt=""
                className="w-[12px] h-[12px] mt-2 mr-1"
              />
              <li className="aboutus ">free join community</li>
            </div>

            <div className="flex gap-1 mb-1">
              <img
                src={sucess}
                alt=""
                className="w-[12px] h-[12px] mt-2 mr-1"
              />{" "}
              <li className="aboutus ">one free program for new members</li>
            </div>

            <div className="flex gap-1 mb-1">
              <img
                src={sucess}
                alt=""
                className="w-[12px] h-[12px] mt-2 mr-1"
              />
              <li className="aboutus ">100+ awards</li>
            </div>
          </ul>
        </div>
        <section className="bg-[#030712] rounded-sm grid grid-cols-2 ml-[100px] gap-[25px]">
          <div className="m-[30px] grid grid-rows-2 gap-[20px]">
            <div className="col-start-1 col-end-2 row-start-1 row-end-2">
              <img src={boy1} alt="" className="w-full h-full" />
            </div>
            <div className="col-start-1 col-end-2 row-start-2 row-end-3">
              <img src={boy2} alt="" className="w-full h-full" />
            </div>
          </div>
          <div className="m-[30px]">
            <img src={bigboy} alt="" className="w-full h-full" />
          </div>
        </section>
      </section>
    </section>
  );
};

export default AboutUs;
