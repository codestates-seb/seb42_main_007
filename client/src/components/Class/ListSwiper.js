import React, {useRef, useEffect} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/bundle';
import SingleClass from "../../pages/ClassPage/SingleClass";
import SingleClassMockup from "./SingleClassMockup";

const ListSwiper = () => {
    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={3}
            modules={[Navigation, Pagination]}
            navigation={{ clickable: true }}
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide><SingleClass/></SwiperSlide>
            <SwiperSlide><SingleClass/></SwiperSlide>
            <SwiperSlide><SingleClass/></SwiperSlide>
            <SwiperSlide><SingleClass/></SwiperSlide>
        </Swiper>
    )
};

export default ListSwiper;
