import React from "react";
import ButtonGetStated from "../../../shared/ButtonGetStated";
import love from "../../../app/img/love.svg";
import { motion } from "framer-motion";

const Description = () => {
  const sectionAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      className="flex justify-between  "
    >
      <section className="mt-[90px]">
        <motion.h1
          custom={1}
          variants={sectionAnimation}
          className="text-white text-5xl font-black tracking-normal leading-[66px] text-left capitalize mb-[30px]"
        >
          help for ideal <br /> body fitness
        </motion.h1>
        <motion.h3
          custom={2}
          variants={sectionAnimation}
          className="text-gray-400 font-normal leading-6 tracking-normal text-left"
        >
          Craftmanship inexpensive runway stylish waistline trendwatching <br />
          sleeveless urban skirt comfortable posture glitter hair. Signature{" "}
          <br />
          condition high heels artistic urban.
        </motion.h3>
        <motion.div
          custom={3}
          variants={sectionAnimation}
          className="flex items-center   mt-[50px]"
        >
          <ButtonGetStated />
          <p className="text-white font-normal leading-2 cursor-pointer tracking-normal text-center capitalize  ml-[40px]">
            watch video
          </p>
        </motion.div>
      </section>
      <section className="mt-[60px] mr-[75px]">
        <div
          className="rounded-md w-92 h-107 bg-white flex flex-col p-[18px] rounded-[7px] justify-center items-center align-middle;
"
        >
          <div className="rounded-[16px] w-[32px] h-[32px] bg-[#fff1eb] flex justify-center items-center ">
            <img src={love} alt="" className=" w-[24px]   h-[19px]" />
          </div>
          <p className="font-normal mt-[33px] mb-[7px] capitalize text-gray-700">
            heart rate
          </p>
          <p className="font-medium capitalize text-orange-600">2245 bpm</p>
        </div>
      </section>
    </motion.section>
  );
};

export default Description;
