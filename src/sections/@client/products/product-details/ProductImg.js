// App.js
import React, { useState, useEffect } from 'react';
// import './slide.css';

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const styles = {
  thumbnailSliderWrap: {

    paddingLeft:'10%',
    paddingRight:'10%',
    marginTop: '15px',
    height: '100%',
    
  },
  slickSlideImg: {
    width: '100%',
    paddingLeft:'8px',
    paddingRight:'8px'
  },
};
const styleLai={
  display: 'flex',
  background:'#000'
}

function ProductImg() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, [slider1, slider2]);


  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    asNavFor: '.slider-nav'
  };

  const settingsThumbs = {
    className: "center",
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    arrows: false,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: "10px",
  };

  const slidesData = [
    {
      id: 1,
      title: 'repellendus id ullam',
    }, {
      id: 2,
      title: 'excepturi consequatur est',
    }, {
      id: 3,
      title: 'eius doloribus blanditiis',
    }, {
      id: 4,
      title: 'nihil voluptates delectus',
    }, {
      id: 5,
      title: 'nemo dolorem necessitatibus',
    }, {
      id: 6,
      title: 'dolorem quibusdam quasi',

    },
  ];

  return (

      <div className="slider-wrapper">

        <Slider
          {...settingsMain}
          asNavFor={nav2}
          ref={slider => (setSlider1(slider))}
        >

          {slidesData.map((slide) =>

            <div className="slick-slide" key={slide.id}>
              <img className="slick-slide-image" src={`https://picsum.photos/800/400?img=${slide.id}`} alt='product' />

            </div>

          )}

        </Slider>
        <div style={styles.thumbnailSliderWrap} className="thumbnail-slider-wrap">
          <Slider
            {...settingsThumbs}
            asNavFor={nav1}
            ref={slider => (setSlider2(slider))}>

            {slidesData.map((slide) =>

              <div style={styleLai} className="slick-slide" key={slide.id}>
                <img style={styles.slickSlideImg} className="slick-slide-image" src={`https://picsum.photos/800/400?img=${slide.id}`} alt='product' />
              </div>
            )}
          </Slider>
        </div>
      </div>

  );
}

export default ProductImg;