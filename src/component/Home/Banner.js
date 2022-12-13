
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation, Parallax } from "swiper";


const Banner = () => {

  return (
    <Swiper
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
      }}

      parallax={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Parallax, Pagination, Navigation]}
      className="mySwiper"
    >
      <div
        slot="container-start"
        className="parallax-bg h-auto"
        style={{
          "background-image":
            "url(https://www.freegreatpicture.com/files/photo102/50617-world-cup-stadium.jpg)",
        }}
        data-swiper-parallax="-23%"
      ></div>


      <SwiperSlide>
        <div className="flex justify-between items-center">
          <div>
            <div className="title" data-swiper-parallax="-300">
              Messi
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              Subtitle
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse
              </p>
            </div>
          </div>
          <img className="max-w-xl" src="https://futhead.cursecdn.com/static/img/21/players_alt/p117598535.png" alt="" />
        </div>
      </SwiperSlide>


      <SwiperSlide>
        <div className="flex justify-between items-center">
          <div>
            <div className="title" data-swiper-parallax="-300">
              Neymar
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              Subtitle
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse
              </p>
            </div>
          </div>
          <img className="max-w-xl" src="https://futhead.cursecdn.com/static/img/21/players_alt/p117631383.png" alt="" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="flex justify-between items-center">
          <div>
            <div className="title" data-swiper-parallax="-300">
              Ronaldo
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              Subtitle
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse
              </p>
            </div>
          </div>
          <img className="max-w-xl" src="https://www.pngarts.com/files/5/Cristiano-Ronaldo-Free-PNG-Image.png" alt="" />
        </div>
      </SwiperSlide>




    </Swiper>
  );
};

export default Banner;