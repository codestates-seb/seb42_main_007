import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/bundle";
import SingleClass from "../../pages/ClassPage/SingleClass";
import SingleClassMockup from "./SingleClassMockup";

const ListSwiper = () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={3}
      modules={[Navigation, Pagination]}
      navigation={{ clickable: true }}
      pagination={{ clickable: true }}
      breakpoints={{
        0: {
          slidesPerView: 1, //브라우저가 280보다 클 때
          spaceBetween: 10,
        },
        560: {
          slidesPerView: 2, //브라우저가 480보다 클 때
          spaceBetween: 10,
        },
        940: {
          slidesPerView: 3, //브라우저가 768보다 클 때
          spaceBetween: 10,
        },
      }}

      // scrollbar={{ draggable: true }}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      <SingleClass />
      {/* <SwiperSlide><SingleClassMockup/></SwiperSlide>
            <SwiperSlide><SingleClassMockup/></SwiperSlide>
            <SwiperSlide><SingleClassMockup/></SwiperSlide>
            <SwiperSlide><SingleClassMockup/></SwiperSlide>
            <SwiperSlide><SingleClassMockup/></SwiperSlide>
            <SwiperSlide><SingleClassMockup/></SwiperSlide> */}
    </Swiper>
  );
};

export default ListSwiper;
