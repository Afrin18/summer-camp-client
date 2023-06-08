import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import slide1 from '../../assets/home/01.jpg';
import slide2 from '../../assets/home/02.jpg';
import slide3 from '../../assets/home/03.jpg';
import slide4 from '../../assets/home/102727.jpg';
import slide5 from '../../assets/home/tree-736885_1280.jpg';
import slide6 from '../../assets/home/01.webp';

const Banner = () => {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            <div className='h-[700px]'>
                <SwiperSlide>
                <div className='relative w-full'>
                    <img className='w-full' src={slide6} alt="" />
                    <div className='absolute flex items-center -bottom-5 top-5 left-0'>
                        <div className='space-y-7 text-white md:w-3/5 pl-20'>
                            <h2 className='text-6xl'>Summer camp</h2>
                            <p className='text-4xl'>“In photography there is a reality so subtle that it becomes more real than reality.”</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='relative w-full'>
                    <img className='w-full' src={slide2} alt="" />
                    <div className='absolute flex items-center -bottom-5 top-5 left-0'>
                        <div className='space-y-7 md:w-3/5 text-white pl-20'>
                            <h2 className='text-6xl'>Summer camp</h2>
                            <p className='text-4xl'>“In photography there is a reality so subtle that it becomes more real than reality.”</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='relative w-full'>
                    <img className='w-full' src={slide3} alt="" />
                    <div className='absolute flex items-center -bottom-5 top-5 left-0'>
                        <div className='space-y-7 md:w-3/5 text-white pl-20'>
                            <h2 className='text-6xl'>Summer camp</h2>
                            <p className='text-4xl'>“In photography there is a reality so subtle that it becomes more real than reality.”</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='relative w-full'>
                    <img className='w-full' src={slide1} alt="" />
                    <div className='absolute flex items-center -bottom-5 top-5 left-0'>
                        <div className='space-y-7 md:w-3/5 text-white pl-20'>
                            <h2 className='text-6xl'>Summer camp</h2>
                            <p className='text-4xl'>“In photography there is a reality so subtle that it becomes more real than reality.”</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='relative w-full'>
                    <img className='w-full' src={slide5} alt="" />
                    <div className='absolute flex items-center -bottom-5 top-5 left-0'>
                        <div className='space-y-7 md:w-3/5 text-white pl-20'>
                            <h2 className='text-6xl'>Summer camp</h2>
                            <p className='text-4xl'>“In photography there is a reality so subtle that it becomes more real than reality.”</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='relative w-full'>
                    <img className='w-full' src={slide4} alt="" />
                    <div className='absolute flex items-center -bottom-5 top-5 left-0'>
                        <div className='space-y-7 text-white md:w-3/5 pl-20'>
                            <h2 className='text-6xl'>Summer camp</h2>
                            <p className='text-4xl'>“In photography there is a reality so subtle that it becomes more real than reality.”</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            </div>
            
        </Swiper>
    );
};

export default Banner;