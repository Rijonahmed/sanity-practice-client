
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

const Banner = () => {

  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[EffectFade, Navigation, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>


        <img src="https://img.freepik.com/premium-vector/football-cup-2022-qatar-banner-with-soccer-ball-template_342897-21.jpg?w=2000" alt="img" />
        <h1 className="text-center text-3xl flex justify-center items-center">This is Fifa world Cup</h1>

      </SwiperSlide>
      <SwiperSlide>
        <img src="https://digitalhub.fifa.com/transform/d3c2deff-a4a2-4f7b-a5db-cfa68c5d980a/FWC2022_Qatar_100Days_Banner_00-1" alt="img" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://img.freepik.com/premium-vector/football-cup-2022-qatar-banner-with-soccer-ball-template_342897-21.jpg?w=2000" alt="img" />
      </SwiperSlide>

    </Swiper>
  );
};

export default Banner;