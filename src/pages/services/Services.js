import React from "react";
import "./Services.css";

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
import { NavLink } from "react-router-dom";

function Services() {
  return (
    <div className="services">
      {" "}
      <h4>Services</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim.
        <br />
      </p>
      {/* -------------------- */}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
        }}
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
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
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
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiperSlideContainer">
            <p>Empori Tours & Travels</p> <br />
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiperSlideContainer">
            <p>Empori Architects</p> <br />
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiperSlideContainer">
            <p>Empori Agro</p> <br />
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
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
      {/* --------------------------- */}
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
      </div>
    </div>
  );
}

export default Services;
