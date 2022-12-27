
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./BannerStyles.css";

// import required modules
import { Autoplay, Pagination, Navigation, Parallax } from "swiper";
import { client } from "../../Lib/Client";


const Banner = () => {

  const [bannerInfo, setBannerInfo] = useState([])

  useEffect(() => {
    client.fetch(
      `*[_type == "banner"] {
        title,
        off,
        slug,
        body,
        publishedAt,
        sliderImage1 {
          asset -> {
            _id,
            url
          },
          alt,
        },
        "name": authou -> name,
      }| order(publishedAt desc)`
    )
      .then((data) => {
        setBannerInfo(data);

      })
      .catch(console.error);

  }, [])
  console.log(bannerInfo)

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


      {
        bannerInfo.map((item, idx) => {
          return (


            <SwiperSlide key={idx}>
              <div className="flex justify-around items-center">
                <div>
                  <div className="title text-red-600 font-bold" data-swiper-parallax="-300">
                    {item?.title}
                  </div>
                  <div className="subtitle" data-swiper-parallax="-200">
                    Subtitle
                  </div>
                  <div className="text" data-swiper-parallax="-100">
                    <p>
                      {`${item?.body[0]?.children[0].text.substring(0, 90)}...`}
                    </p>
                  </div>
                </div>
                <img className="max-w-xl" src={item?.sliderImage1.asset.url} alt="" />
              </div>
            </SwiperSlide>

          )
        })
      }







    </Swiper>
  );
};

export default Banner;