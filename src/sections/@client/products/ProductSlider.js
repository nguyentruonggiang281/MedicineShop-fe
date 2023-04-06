import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const products = [
  {
    id: 1,
    name: 'Product 1',
    imageUrl: 'https://picsum.photos/400/400?random=1',
  },
  {
    id: 2,
    name: 'Product 2',
    imageUrl: 'https://picsum.photos/400/400?random=2',
  },
  {
    id: 3,
    name: 'Product 3',
    imageUrl: 'https://picsum.photos/400/400?random=3',
  },
  {
    id: 4,
    name: 'Product 4',
    imageUrl: 'https://picsum.photos/400/400?random=4',
  },
  {
    id: 5,
    name: 'Product 5',
    imageUrl: 'https://picsum.photos/400/400?random=5',
  },
];

const ProductSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [pagingState, setPagingState] = useState(
    Array.from({ length: products.length }).fill(false)
  );

  const customPaging = (i) => (
    <div
      style={{
        transform: pagingState[i] ? 'scale(1.2)' : 'scale(1)',
        opacity: pagingState[i] ? 1 : 0.5,
        transition: 'all 0.3s ease-in-out',
        width: '40px',
        height: '40px',
      }}
    >
      <img
        src={products[i].imageUrl}
        alt={`Product ${i}`}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  );

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
    setPagingState((prevState) =>
      prevState.map((state, i) => i === index)
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging,
    appendDots: (dots) => (
      <div style={{}}>
        <ul style={{ padding: '0px 40px' }}> {dots} </ul>
      </div>
    ),
    afterChange: handleSlideChange,
  };

  return (
    <Slider {...settings}>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.imageUrl} alt={product.name} style={{ width: '100%' }} />
        </div>
      ))}
    </Slider>
  );
};


export default ProductSlider;
