import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function Home() {
  return (
    <div className="home">
      {/* <Parallax pages={1} className="animation"> */}
      {/* <ParallaxLayer offset={0} speed={0.25}> */}
      <section id="intro">
        <div className="introContent">
          <span className="greeting">Hello, </span>
          <span className="introText">
            We are <span className="intoEmpori">Empori BD</span> <br /> Welcome
            to Empori BD
          </span>
          <p className="introPara">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa.
          </p>
          <NavLink className="hireLink" to="/contact">
            <button className="hireMeBtn">Contact US</button>
          </NavLink>
        </div>
        {/* <img src={bgImg} alt="bgImg" className="bgImg"></img> */}
      </section>
      {/* </ParallaxLayer> */}
      {/* ----------------- */}
      {/* <ParallaxLayer offset={1} speed={0.25}> */}
      <div className="secondIntro">
        <div className="textSecondIntro">
          {" "}
          <br />
          <br />
          <h4>Welcome to Empori BD</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa.
            <br />
          </p>{" "}
        </div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          // coverflowEffect={{
          //   rotate: 0,
          //   stretch: 0,
          //   depth: 100,
          //   modifier: 2,
          // }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="swiper-container"
        >
          <SwiperSlide>
            <div className="swiperSlideContainer">
              <NavLink to="/fashion&jewellery">
                Empori Fashion & Jewellery
              </NavLink>
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiperSlideContainer">
              <p>Empori Properties Ltd</p>
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiperSlideContainer">
              <p>Empori Events</p>
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiperSlideContainer">
              <p>Empori Digitals</p> <br />
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiperSlideContainer">
              <p>Empori Tours & Travels</p> <br />
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiperSlideContainer">
              <p>Empori Architects</p> <br />
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiperSlideContainer">
              <p>Empori Agro</p> <br />
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <IoArrowBack name="arrow-back-outline"></IoArrowBack>
          </div>
          <div className="swiper-button-next slider-arrow">
            <IoArrowForward className="arrow-forward-outline"></IoArrowForward>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
      {/* </ParallaxLayer> */}
      {/* <ParallaxLayer sticky={{ start: 1, end: 2 }} /> */}
      {/* ----------------------- */}
      {/* <ParallaxLayer offset={2} speed={0.25}> */}
      <div className="thirdIntro">
        <br /> <br />
        <p>Dealership Opportunities</p>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
        <br /> <br />
        <p>Why Choose Us?</p>
        <br />
        <p>
          * Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. <tr />
          * Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. <tr />* Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
          massa. Cum sociis natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque
          eu, pretium quis, sem. Nulla consequat massa quis enim. species.
        </p>
        <br /> <br />
        <p>Our Mission</p>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
        <br /> <br />
        <p>Get to Know Us</p>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
        <br /> <br />
        <p>Thank you for visiting Empori BD.</p>
      </div>
      {/* </ParallaxLayer> */}
      {/* </Parallax> */}
    </div>
  );
}

export default Home;
