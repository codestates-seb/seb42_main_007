import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import JukDoBeach from "../images/Board/JukDoBeach.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Find = () => {
  return (
    <>
      <Header />
      <Main>
        <Swiper
          style={{
            width: "90%",
            height: "35rem",
            backgroundColor: "#EDEDED",
            borderRadius: "1rem",
            "--swiper-pagination-color": "#3FBED3",
            "--swiper-pagination-bullet-horizontal-gap": "6px"
          }}
          autoplay={{ delay: 3000 }}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={4}
          navigation={{
            nextEl: ".image-swiper-button-next",
            prevEl: ".image-swiper-button-prev",
            disabledClass: "swiper-button-disabled",
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          breakpoints={{
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          <TopBar>
        <section>
          <div>
            <nav>
              <Link to="/List"><h2>양양</h2>
              <JukDo /></Link>
            </nav>
            <nav>
              <Link to="/List">제주</Link>
            </nav>
            <nav>
              <Link to="/List">부산</Link>
            </nav>
            <nav>
              <Link to="/List">고성</Link>
            </nav>
          </div>
        </section>
      </TopBar>
          <SwiperSlide><div className="box"><h2>양양</h2><JukDo /></div></SwiperSlide>
          <SwiperSlide>제주</SwiperSlide>
          <SwiperSlide>부산</SwiperSlide>
          <SwiperSlide>고성</SwiperSlide>
          <SwiperSlide>강릉</SwiperSlide>
          <SwiperSlide>포항</SwiperSlide>
          <SwiperSlide>서해</SwiperSlide>
        </Swiper>
        </Main>
      <Footer />
    </>
  );
};

export default Find;

const Main = styled.div`
  display: flex;
  margin-top: 10.5rem;

  .box {
    object-fit: cover;
  }

  .h2 {
    font-size: 30px;
  }
`

const TopBar = styled.div`
  a {
    color: inherit;
    text-decoration: none;
  }

  section {
    text-align: center;
    padding-top: 7.5rem;
  }

  section > div {
    display: inline-block;
    background-color: #f7dfdf;
    padding: 0.6rem 2rem;
    border-radius: 7px;
  }

  section > div > nav {
    display: inline-block;
  }

  section > div > nav > a {
    display: block;
    padding: 1rem 1rem;
    font-size: 20px;
  }

  section > div > nav > a:hover {
    background-color: #fdf3f3;
    color: #d8a9a9;
    cursor: pointer;
  }
`;

const JukDo = styled.img.attrs({
  src: `${JukDoBeach}`,
})``;
