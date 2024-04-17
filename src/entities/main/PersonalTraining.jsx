import React from "react";
import google from "../../app/img/google.svg";
import netflix from "../../app/img/netflix.svg";
import amazon from "../../app/img/amazon.svg";
import microsoft from "../../app/img/microsoft.svg";
import tyaga from "../../app/img/tyaga.png";
import woman from "../../app/img/walkWoman.png";
import gantel from "../../app/img/gantel.png";
import biceps from "../../app/img/biceps.png";
import strong from "../../app/img/strong.svg";
import { motion } from "framer-motion";
const programBuild = [
  {
    img: gantel,
    h: `strenght`,
  },
  {
    img: woman,
    h: `physical fitness`,
  },
  {
    img: biceps,
    h: "flex muscle",
  },
  {
    img: tyaga,
    h: "fat lose",
  },
];

const PersonalTraining = () => {
  const Animation = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.3 },
    }),
  };
  return (
    <motion.section
      className="mt-[75px]"
      initial="hidden"
      whileInView="visible"
    >
      <section className="flex justify-center gap-12">
        <img src={amazon} alt="" className="w-full" />
        <img src={google} alt="" className="w-full" />
        <img src={microsoft} alt="" className="w-full" />
        <img src={netflix} alt="" className="w-full" />
      </section>
      <section className="pt-[110px]">
        <div className="flex justify-center  relative">
          <div className="">
            <motion.h2
              custom={1}
              variants={Animation}
              className="font-[var(--third-family)] font-bold text-[35px] leading-[150%] capitalize text-center text-[#fff]"
            >
              our program build <br /> your best body
            </motion.h2>
          </div>
          <div className="absolute bottom-0 right-[110px]">
            <img src={strong} alt="" className="" />
          </div>
        </div>

        <section className="gap-[34px] pt-[70px] flex justify-center">
          {programBuild?.map((el, index) => (
            <section
              key={index}
              className="bg-[#030712]  w-[260px]  h-[343px] rounded-sm hover:bg-[#ff6726] rounded-sm  focus:bg-[#ff6726] rounded-sm "
            >
              <div className="ml-[25px] mt-8">
                <img
                  src={el.img}
                  alt=""
                  className="mb-[33px] w-[65px] h-[68px]"
                />
                <div>
                  <h5 className=" font-medium text-[18px] capitalize  text-[#f2f2f2]">
                    {el.h}
                  </h5>
                  <p className="font-normal text-[13px] mb-[38px]  leading-[193%] mt-3 capitalize text-[#d4d4d4]">
                    Value proposition investor <br /> churn rate pitch.
                  </p>
                </div>
                <a
                  href=""
                  className="font-medium text-[15px] capitalize underline [text-decoration-skip-ink:none] text-center text-[#5aba4a] focus:text-[#f2f2f2] hover:text-[#f2f2f2]"
                >
                  join now
                </a>
              </div>
            </section>
          ))}
        </section>
      </section>
    </motion.section>
  );
};

export default PersonalTraining;
