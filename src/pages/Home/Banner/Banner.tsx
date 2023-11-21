import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";
import React from "react";

import Banner1 from "../../../assets/Banner/Banner 1.jpg";
import Banner2 from '../../../assets/Banner/Banner2.jpg';
import Banner3 from '../../../assets/Banner/Banner 3.jpg';

const Banner = () => {
  return (
    <Carousel showArrows={true} className="rounded-sm h-fit text-center">
      <div>
        <img src={Banner3} alt=""/>
      </div>
      <div>
        <img src={Banner2} />
      </div>
      <div>
        <img src={Banner1} />
      </div>
    </Carousel>
  );
};

export default Banner;
