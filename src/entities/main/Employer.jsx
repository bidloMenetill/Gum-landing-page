import React from "react";
import items from "../../app/img/training_items.svg";
import quote from "../../app/img/quote.svg";
import boyPng from "../../app/img/boy_bg.png";
import stars from "../../app/img/stars.svg";
const Employer = () => {
  return (
    <section className="mt-[150px]">
      <div className="container flex justify-between mb-[60px]">
        <h2 className="font-bold text-[32px] leading-[138%] capitalize text-[#fff]">
          what our happy clients <br /> say about us
        </h2>
        <h4 className="font-normal text-[10px] leading-[163%] text-[#e7e0e0]">
          Hackathon early adopters innovator iPad facebook infographic pitch{" "}
          <br />
          growth hacking. Pivot metrics lean startup success gen leverage <br />
          conversion handshake.
        </h4>
      </div>
      <section className="[box-shadow:8px_8px_41px_0_rgba(23,_23,_23,_0.25)] bg-[#030712]">
        <section className="container relative">
          <div className="flex justify-between">
            <div>
              <img src={boyPng} alt="" className="w-[451px] h-[500px]" />
            </div>
            <div className="absolute right-[50%] -top-[30px]">
              <img src={quote} alt="" className="" />
            </div>
            <div className="py-[50px] pr-[100px]">
              <div className="flex justify-between">
                <div className="flex items-end">
                  <h6 className="font-normal text-[25px]  text-end  leading-[157%] capitalize text-[#fff]">
                    jeason roy
                  </h6>
                </div>
                <div>
                  <img src={items} alt="" />
                </div>
              </div>
              <span className="font-normal mt-2 text-[14px] leading-[175%] capitalize text-[#d4d4d4]">
                member
              </span>
              <img src={stars} alt="" className="mt-[10px]" />
              <p className="mt-[15px] font-normal text-[14px] leading-[175%] text-[#d4d4d4]">
                Assets learning curve vesting period direct mailing scrum <br />
                project ramen user experience first mover advantage infographic{" "}
                <br />
                early adopters. Sales marketing freemium termsheet MVP <br />
                interaction design focus early adopters hypotheses creative{" "}
                <br />
                facebook nondisclosure agreement android prototype.{" "}
              </p>
              <p className="mt-[20px] font-normal text-[14px] leading-[175%] text-[#d4d4d4]">
                Assets learning curve vesting period direct mailing scrum <br />
                project ramen user experience first mover advantage infographic{" "}
                <br />
                early adopters. Sales marketing freemium.
              </p>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Employer;
