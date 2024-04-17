import React from "react";
import Nav from "../entities/header/nav/Nav";
import boybg from "../app/img/boybg.jpg";
import Description from "../entities/header/description/Description";
import CaloriestResult from "../shared/CaloriestResult";
import DayliCalories from "../entities/header/DayliCalories";
import PersonalTraining from "../entities/main/PersonalTraining";
import AboutUs from "../entities/main/AboutUs";
import PriceAboutUs from "../entities/main/PriceAboutUs";
import Employer from "../entities/main/Employer";
import SendingData from "../entities/main/SendingData";
import Footer from "../entities/footer/Footer";

const headerStyle = {
  backgroundImage: `url(${boybg})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  width: "100%",
};
const GumSite = () => {
  return (
    <>
      <header style={headerStyle} className="w-full h-screen  text-end pt-4">
        <section className="container">
          <Nav />

          <Description />
          <DayliCalories />
        </section>
      </header>

      <main className="bg-[#192023]">
        <section className="container pt-[36px] ">
          <CaloriestResult />
          <PersonalTraining />
          <AboutUs />
          <PriceAboutUs />
        </section>

        <Employer />
        <section className="container  bg-[#030712] rounded-[3px]  h-[262px] ">
          <SendingData />
        </section>
      </main>
      <footer className=" ">
        <section className="container ">
          <Footer />
        </section>
      </footer>
    </>
  );
};

export default GumSite;
