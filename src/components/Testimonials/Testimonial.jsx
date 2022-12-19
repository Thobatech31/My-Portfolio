import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";

import profilePic1 from "../../img/thobatech_01.png";
import profilePic2 from "../../img/thobatech_02.png";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
      "FullStack Developer offering 4+ years of experience providing technical support\n" +
          "to startups building digital solutions. Proficient in translating designs and\n" +
          "wireframes into higher quality code and writing application interface code via\n" +
          "Javascript, ReactJs workflows and also employed a variety of languages such as\n" +
          "NodeJs, Javascript, PHP (FatFree), Html, Css and Bootstrap."
    },
    {
      img: profilePic2,
      review:
          "FullStack Developer offering 4+ years of experience providing technical support\n" +
          "to startups building digital solutions. Proficient in translating designs and\n" +
          "wireframes into higher quality code and writing application interface code via\n" +
          "Javascript, ReactJs workflows and also employed a variety of languages such as\n" +
          "NodeJs, Javascript, PHP (FatFree), Html, Css and Bootstrap."
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
