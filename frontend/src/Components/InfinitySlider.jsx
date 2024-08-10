//Latest
import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import some from '../assets/some.png'
import { TiArrowRightThick } from "react-icons/ti";
import { TiArrowLeftThick } from "react-icons/ti";
import card from '../assets/feedback.png'


const InfiniteSlider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

 

 
  const handlePrevClick = () => {
    // Your custom logic before moving to the previous slide
    console.log('Previous arrow clicked!');
   
    ref.current.slickPrev();
  };

  const handleNextClick = () => {
    // Your custom logic before moving to the next slide
    console.log('Next arrow clicked!');
    // originalOnClick();
    ref.current.slickNext();
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    arrows:false,
    autoplaySpeed: 3000,
   
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };
  const ref = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides]);

  return (
    <div className="relative mx-auto mt-10">
      <Slider {...settings} ref={ref}>
        {slides.map((slide, index) => (
          <div key={index} className={index === currentSlide ? 'relative rounded-xl h-[300px]' : 'relative h-[300px]'}>
            <img src={card} alt={`Slide ${index + 1}`} className="w-full h-[200px] object-cover rounded-xl" />
            <p className='font-normal text-xs lg:text-base text-white font-poppins absolute md:top-14 top-8 md:px-10 px-6 text-center'>{slide.description}</p>
            <div className='absolute left-1/2  flex flex-col items-center justify-center  -translate-x-1/2 -bottom-2'>
<div className=''>
<img src={slide.image} alt="" className='object-cover h-[100px] w-[100px] bg-white rounded-2xl'/>
</div>
<p className='font-bold font-poppins text-xl mt-2'>{slide.name}</p>
<p className='font-normal text-sm font-poppins'>{slide.address}</p>

      </div>
          </div>
        ))}
      </Slider>
      <img src={some} alt="" className=' absolute -top-7  left-10 z-30'/>

      <div className='absolute flex items-center justify-center top-[30%] transform -translate-x-1/2 -translate-y-1/2 md:-right-14 -right-7 bg-[#FF8585] md:h-[60px] h-[40px] w-[40px] md:w-[60px] rounded-full' onClick={()=>{
        handleNextClick()
      }}>
<TiArrowRightThick className='text-white text-3xl'/>
      </div>
      <div className='absolute flex items-center justify-center  top-[30%] transform -translate-x-1/2 -translate-y-1/2 md:-left-1 left-3 bg-[#FF8585] md:h-[60px] h-[40px] w-[40px] md:w-[60px] rounded-full' onClick={()=>{
        handlePrevClick()
      }}>
<TiArrowLeftThick className='text-white text-3xl'/>

      </div>
   
    </div>
  );
};

export default InfiniteSlider;