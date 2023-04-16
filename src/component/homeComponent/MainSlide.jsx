import style from './MainSlide.module.scss';

import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

function MainSlide() {
    const images = ["https://img.meta.com.vn/Data/image/2022/01/13/anh-dep-thien-nhien-3.jpg", "https://znews-photo.zingcdn.me/w660/Uploaded/mdf_eioxrd/2021_07_06/2.jpg"]
    const sliderRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex),
    };

    const handleNextSlide = () => {
        sliderRef.current.slickNext();
    };

    const handlePrevSlide = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <div className={style.slider}>
            <Slider ref={sliderRef} {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <div className={style.image} style={{ backgroundImage: `url(${image})` }}>

                        </div>
                    </div>
                ))}
            </Slider>
            <span className={`${style.slider_buttons} ${style.left} `} onClick={handlePrevSlide}><AiOutlineLeft /></span>
            <span className={`${style.slider_buttons} ${style.right} `} onClick={handleNextSlide}><AiOutlineRight /></span>
        </div>

    );
};

export default MainSlide;
