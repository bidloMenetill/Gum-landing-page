import React from "react";
import socialMedia from "../../app/img/social_media.svg";
const Footer = () => {
  return (
    <section className="pt-[40px] pb-[15px]">
      <nav className="flex justify-between ">
        <div>
          <a
            href=""
            className="font-[Poppins] text-gray-400   text-[20.53px] font-medium leading-[20.42px] tracking-[0%] text-left capitalize"
          >
            bra
            <span className="text-orange-500 text-[21px] font-medium leading-[20.42px] pl--10 tracking-[0%] text-left capitalize">
              vaa
            </span>
          </a>
          <p className="mt-[15px] font-normal text-[10px] leading-[150%] text-[#e7e0e0]">
            User experience iPhone backing <br /> focus responsive web design{" "}
            <br />
            leverage analytics.
          </p>
          <img src={socialMedia} alt="" className="mt-[30px]" />
        </div>
        <div>
          <h4 className="footerH4">services</h4>
          <ul>
            <li className="footerLi">flex muscle</li>
            <li className="footerLi">physical fitness</li>
            <li className="footerLi">fat lose</li>
            <li className="footerLi">strength</li>
          </ul>
        </div>
        <div>
          <h4 className="footerH4">pricing</h4>
          <ul>
            <li className="footerLi">basic plan</li>
            <li className="footerLi">weakly plan</li>
            <li className="footerLi">monthly plan</li>
          </ul>
        </div>
        <div>
          <h4 className="footerH4">company</h4>
          <ul>
            <li className="footerLi">about us</li>
            <li className="footerLi">careers</li>
            <li className="footerLi">customers</li>
            <li className="footerLi">partners</li>
          </ul>
        </div>
        <div>
          <h4 className="footerH4">support</h4>
          <ul>
            <li className="footerLi uppercase">faqs</li>
            <li className="footerLi">contact us</li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Footer;
