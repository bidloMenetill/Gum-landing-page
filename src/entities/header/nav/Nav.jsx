import React from "react";
import ButtonReq from "../../../shared/ButtonRegister";

const Nav = () => {
  return (
    <section>
      <section className="">
        <nav className="flex justify-between mx-auto ">
          <a
            href=""
            className="font-[Poppins] text-gray-400   text-[20.53px] font-medium leading-[20.42px] tracking-[0%] text-left capitalize"
          >
            bra
            <span className="text-orange-500 text-[21px] font-medium leading-[20.42px] pl--10 tracking-[0%] text-left capitalize">
              vaa
            </span>
          </a>
          <ul className="flex gap-7">
            <a href="">
              {" "}
              <li className="li">home</li>
            </a>
            <a href="">
              {" "}
              <li className="li">program</li>
            </a>
            <a href="">
              {" "}
              <li className="li">community</li>
            </a>
            <a href="">
              <li className="li">Pricing</li>
            </a>
            <a href="">
              {" "}
              <li className="li">login</li>
            </a>
            <ButtonReq />
          </ul>
        </nav>
      </section>
    </section>
  );
};

export default Nav;
