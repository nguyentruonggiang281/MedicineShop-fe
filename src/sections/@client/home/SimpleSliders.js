import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Button } from '@mui/material';

const sliderStyle = {
    position: "absolute",
    width: "100%",
    left: 0
}
const divStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
};

const imgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover"
};
const customArrowStyles = {
    position: "absolute",
    zIndex: 1,
};

const CustomNextArrow = (props) => (
    <Button
        {...props}
        style={{ ...customArrowStyles, right: "0px" }}
        aria-label="Next"
    />
);

const CustomPrevArrow = (props) => (
    <Button
        {...props}
        style={{ ...customArrowStyles, left: "0px" }}
        aria-label="Previous"
    />
);

function SimpleSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000, // thời gian trễ là 3000ms (3 giây)
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "0px",
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
    };

    return (
        <>
            <Slider {...settings} style={sliderStyle}>
                <div style={divStyle} ><a href="/blog">
                    <img src='https://nhathuoclongchau.com.vn/upload/slide/1671181106-Agcp-dac-quyen-mua-hang-1k.jpg' alt="sss" style={imgStyle} />
                </a></div>
                <div style={divStyle}>
                    <img src='https://nhathuoclongchau.com.vn/upload/slide/1678700509-NBeS-kem-chong-nang-2023.png' alt="sss" style={imgStyle} />
                </div>
                <div style={divStyle}>
                    <img src='https://nhathuoclongchau.com.vn/upload/slide/1671181106-Agcp-dac-quyen-mua-hang-1k.jpg' alt="sss" style={imgStyle} />
                </div>
                <div style={divStyle}>
                    <img src='https://nhathuoclongchau.com.vn/upload/slide/1678355619-6lB9-chuyen-trang-sanofi.jpg' alt="sss" style={imgStyle} />
                </div>
                <div style={divStyle}>
                    <img src='https://nhathuoclongchau.com.vn/upload/slide/1677150972-hsMN-cam-cum.png' alt="sss" style={imgStyle} />
                </div>
            </Slider>  
        </>
    );
};

export default SimpleSlider;
