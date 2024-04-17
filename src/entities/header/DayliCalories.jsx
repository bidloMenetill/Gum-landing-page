import React from "react";
import calories1 from "../../app/img/Group1.svg";
import calories2 from "../../app/img/Group2.svg";
import calories3 from "../../app/img/Group3.svg";
import calories4 from "../../app/img/Group4.svg";
import calories5 from "../../app/img/Group5.svg";
import calories6 from "../../app/img/Group6.svg";
import calories7 from "../../app/img/Group7.svg";
const DayliCalories = () => {
  return (
    <section className="flex justify-center mt-[90px]">
      <div className="rounded-[7px] w-[168px] h-[134px] flex-col flex px-4 items-center pt-[5px]  bg-[#fff]">
        <p className=" font-bold text-[13px] leading-[214%] capitalize text-[#636073]">
          daily calories
        </p>
        <p className="font-[var(--font-family)] font-medium text-[15px] capitalize text-[#ff6726]">
          1020
        </p>
        <div className="flex mt-[20px]">
          <img
            src={calories1}
            alt=""
            className="rounded-tl w-[120px] bg-[ #da890f] h-[42px]"
          />
          <img
            src={calories2}
            alt=""
            className="rounded-tl w-[143px] bg-[ #da890f] h-[54px]"
          />
          <img
            src={calories3}
            alt=""
            className="rounded-tl w-[127px] bg-[ #da890f]  h-[48px]"
          />

          <img
            src={calories4}
            alt=""
            className="rounded-tl w-[130px] bg-[ #da890f] 
          h-[49px]"
          />
          <img
            src={calories5}
            alt=""
            className="rounded-tl w-[159px] bg-[ #da890f] h-[55px]"
          />
          <img
            src={calories6}
            alt=""
            className="rounded-tl w-[139px] bg-[ #da890f]  h-[50px]"
          />
          <img
            src={calories7}
            alt=""
            className="rounded-tl w-[89px] bg-[ #da890f]  h-[45px]"
          />
        </div>
      </div>
    </section>
  );
};

export default DayliCalories;
