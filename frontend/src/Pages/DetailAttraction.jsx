// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import { Navigation } from 'swiper/modules';

import Footer from "../Components/Footer";

const DetailAttraction = () => {
  return (
    <>
      {/* <Swiper navigation={true} modules={[Navigation]} className="mySwiper w-full h-full">
        <SwiperSlide className="flex items-center justify-center text-lg bg-white">Slide 1</SwiperSlide>
        <SwiperSlide className="flex items-center justify-center text-lg bg-white">Slide 2</SwiperSlide>
        <SwiperSlide className="flex items-center justify-center text-lg bg-white">Slide 3</SwiperSlide>
        <SwiperSlide className="flex items-center justify-center text-lg bg-white">Slide 4</SwiperSlide>
        <SwiperSlide className="flex items-center justify-center text-lg bg-white">Slide 5</SwiperSlide>
        <SwiperSlide className="flex items-center justify-center text-lg bg-white">Slide 6</SwiperSlide>
        <SwiperSlide className="flex items-center justify-center text-lg bg-white">Slide 7</SwiperSlide>
        <SwiperSlide className="flex items-center justify-center text-lg bg-white">Slide 8</SwiperSlide>
        <SwiperSlide className="flex items-center justify-center text-lg bg-white">Slide 9</SwiperSlide>
      </Swiper> */}

      <div className="detailb mt-6 px-4">
        <p className="text-base leading-relaxed text-black">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis magni nesciunt consectetur sequi ea unde, dicta est repudiandae quas aliquid quaerat fugiat eius iste asperiores. Perspiciatis pariatur fugiat veniam sint.
        </p>
      </div>
      <div className="detailc">

      <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14124.901001094744!2d85.3049344!3d27.7411976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1723277320545!5m2!1sen!2snp"
          className="w-full h-96 border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
  


      </div>
      <Footer/>
    </>
  );
};

export default DetailAttraction;
