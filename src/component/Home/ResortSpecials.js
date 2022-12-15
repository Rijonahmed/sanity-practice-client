import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { client } from '../Lib/Client';
import "swiper/css";
import "swiper/css/pagination";

import "./SpecialsStyle.css";

const ResortSpecials = () => {
  const [Specials, setSpecials] = useState([])

  useEffect(() => {
    client.fetch(
      `*[_type == "resortSpecials"] {
        title,
        off,
        slug,
        body,
        publishedAt,
        specialsImage {
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
        setSpecials(data);

      })
      .catch(console.error);

  }, [])
  console.log(Specials)






  return (
    <div className='mt-10'>


      <div className='grid grid-cols-1 lg:grid-cols-3 my-10'>


        <div className="card-body items-center justify-center text-center bg-slate-300 my-7">
          <h1 className='text-xl font-bold'>Resort</h1>
          <h2 className="card-title font-bold text-2xl">Spaciale </h2>
        </div>
        <Swiper
          watchSlidesProgress={true} slidesPerView={2} className="mySwiper col-span-2"
        >


          {
            Specials.map((item, idx) => {
              return (

                <SwiperSlide key={idx} className="shadow-xl relative">
                  <figure className="">

                    <img src={item?.specialsImage.asset.url} alt="clock" className="" />

                  </figure>
                  <div className='absolute top-[-10px] left-[-10px] bg-yellow-400 h-16 w-16'><p className='text-2xl font-bold'>{item?.off}%<br />OFF</p></div>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title font-bold">{item?.title}</h2>
                    <div className="divider"></div>
                    <p>{`${item?.body[0]?.children[0].text.substring(0, 90)}...`}</p>



                  </div>
                </SwiperSlide>
              )
            })
          }

        </Swiper>
      </div>




    </div>
  );
};

export default ResortSpecials;