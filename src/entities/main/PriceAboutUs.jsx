import React from "react";
import sucees from "./../../app/img/sucees.svg";
import unSucees from "../../app/img/x.svg";
const priceObj = [
  {
    title: "basic plan",
    price: "$110",
    img1: sucees,
    img2: sucees,
    img3: sucees,
    img4: unSucees,
    img5: unSucees,
  },
  {
    title: "weakly plan",
    price: "$90",
    img1: sucees,
    img2: sucees,
    img3: sucees,
    img4: sucees,
    img5: unSucees,
  },
  {
    title: "monthly plan",
    price: "$380",
    img1: sucees,
    img2: sucees,
    img3: sucees,
    img4: sucees,
    img5: sucees,
  },
];
const PriceAboutUs = () => {
  return (
    <section className="mt-32">
      <section>
        <div>
          <h2 className="mb-[12px] font-bold text-[32px] leading-[129%] text-center capitalize text-[#fff]">
            our pricing plan
          </h2>
          <h4 className="mb-[70px] font-normal text-[10px] leading-[160%] text-center text-[#e7e0e0]">
            Partnership testing buzz leverage bandwidth seed round funding niche{" "}
            <br />
            market investor startup stock client holy grail design prototype.
          </h4>
        </div>
        <section className="flex justify-between">
          {priceObj?.map((el, index) => (
            <div
              key={index}
              className="rounded-[2px] bg-[#030712] w-[332px] h-[390px] hover:bg-[#ff6726]"
            >
              <div className="p-[41px]">
                <h6 className="mb-[40px] font-normal text-[18px] leading-[108%] capitalize  text-[#fff]">
                  {el.title}
                </h6>
                <p className="font-bold text-[29px] leading-[62%] capitalize  text-[#fff]">
                  {el.price}
                </p>
                <ul className="mt-7">
                  <div className="flex mb-[10px] ">
                    <img src={el.img1} alt="" className="mr-1" />
                    <li className="priceLi">5 days in a weak</li>
                  </div>
                  <div className="flex mb-[10px]">
                    <img src={el.img2} alt="" className="mr-1" />
                    <li className="priceLi">01 sweatshirt</li>
                  </div>
                  <div className="flex mb-[10px]">
                    <img src={el.img3} alt="" className="mr-1" />
                    <li className="priceLi">01 bottle of protein</li>
                  </div>
                  <div className="flex mb-[10px]">
                    <img src={el.img4} alt="" className="mr-1" />
                    <li className="priceLi">access to videos</li>
                  </div>
                  <div className="flex mb-[10px]">
                    <img src={el.img5} alt="" className="mr-1" />
                    <li className="priceLi">muscle stretching</li>
                  </div>
                </ul>
                <button className="mt-[20px] border-[0.68px] border-[solid] w-[246px] h-[36px] border-[#5aba4a]  bg-[#030712]  rounded-[2px] font-bold text-[12px] leading-[144%] capitalize text-center text-[#5aba4a] hover:bg-[#fff] border-[#fff] ">
                  join now
                </button>
              </div>
            </div>
          ))}
        </section>
      </section>
    </section>
  );
};

export default PriceAboutUs;
