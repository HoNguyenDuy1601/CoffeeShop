import { SwiperSlide, Swiper } from "swiper/react";
import SwiperCore, { Pagination, Scrollbar, A11y } from "swiper";
import "swiper/scss";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React from "react";

const Banner = () => {
  SwiperCore.use([Pagination]);
  return (
    <Swiper
      modules={[Pagination, Scrollbar]}
      scrollbar={{ draggable: true }}
      grabCursor={"true"}
      spaceBetween={40}
      slidesPerView={"auto"}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <div
          className={`movie-card rounded-lg p-3 h-full text-black shadow-xl mt-[50px] `}
        >
          <img
            alt=""
            src="https://file.hstatic.net/1000075078/file/desktop_50e97ae22db14710a692fb6b1e31a571.jpg"
            className="w-full  rounded-lg mb-3 cursor-pointer "
          ></img>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className={`movie-card rounded-lg p-3 h-full text-black shadow-xl mt-[50px] `}
        >
          <img
            alt=""
            src="https://file.hstatic.net/1000075078/file/desktop_2880x880_0ffc8b01b47049f1a1c8711f50199938.jpg"
            className="w-full  rounded-lg mb-3 cursor-pointer "
          ></img>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className={`movie-card rounded-lg p-3 h-full text-black shadow-xl mt-[50px] `}
        >
          <img
            alt=""
            src="https://file.hstatic.net/1000075078/file/des_bh_80b78594841944fba07d38275eb460ce.jpg"
            className="w-full  rounded-lg mb-3 cursor-pointer "
          ></img>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className={`movie-card rounded-lg p-3 h-full text-black shadow-xl mt-[50px] `}
        >
          <img
            alt=""
            src="https://file.hstatic.net/1000075078/file/web_moi_-_desktop_37e4e81e29e74feba9f3580d140a1bc7.jpeg"
            className="w-full  rounded-lg mb-3 cursor-pointer "
          ></img>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
