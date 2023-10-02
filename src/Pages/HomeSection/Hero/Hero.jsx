import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Hero.css";
import { Pagination } from "swiper/modules";

import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <>
      <Swiper
        className="mySwiper"
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <div className="bg-[url('https://images.unsplash.com/photo-1510070112810-d4e9a46d9e91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')]">
            <div className="p-5 lg:py-[195px] md:py-[160px] py-20 bg-black text-white bg-opacity-50">
              <HeroContent />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://images.unsplash.com/photo-1486257293255-8810a92c541f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2038&q=80')]">
            <div className="p-5 lg:py-[195px] md:py-[160px] py-20 bg-black text-white bg-opacity-50">
              <HeroContent />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://images.unsplash.com/photo-1581591524425-c7e0978865fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')]">
            <div className="p-5 lg:py-[195px] md:py-[160px] py-20 bg-black text-white bg-opacity-50">
              <HeroContent />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://images.unsplash.com/photo-1535681326215-e111151ea867?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80')]">
            <div className="p-5 lg:py-[195px] md:py-[160px] py-20 bg-black text-white bg-opacity-50">
              <HeroContent />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;
