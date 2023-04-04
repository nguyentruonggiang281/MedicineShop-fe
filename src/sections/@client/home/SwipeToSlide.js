import React from "react";
import Slider from "react-slick";
import PropTypes from 'prop-types';
// @mui
import { Button } from '@mui/material';

import { ProductCard } from "../products";

// ----------------------------------------------------------------------

const customArrowStyles = {
    position: "absolute",
    zIndex: 1,
};

const CustomNextArrow = (props) => (
    <Button
        {...props}
        style={{ ...customArrowStyles, right: "-32px" }}
        aria-label="Next"
    />
);

const CustomPrevArrow = (props) => (
    <Button
        {...props}
        style={{ ...customArrowStyles, left: "-32px" }}
        aria-label="Previous"
    />
);

SwipeToSlide.propTypes={
    products: PropTypes.array.isRequired,
    limit: PropTypes.number,
  };

function SwipeToSlide({product=[],limit}) {

    const settings = {

        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,

        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
    };
    return (
        <>
            <Slider {...settings} style={{ margin: '0 10px'}}>
                {product.slice(0, limit).map((data) => (
                    <ProductCard product={data} sx={{ m: '0 10px' }}/>
                ))}
            </Slider>
        </>
    );
}

export default SwipeToSlide;