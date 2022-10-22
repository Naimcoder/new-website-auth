import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import barand1 from '../../assest/brand/Brand1.png'
import barand2 from '../../assest/brand/Brand2.png'

const Slider = () => {
    return (
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={barand1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={barand2}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
    );
};

export default Slider;
