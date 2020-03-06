import React from 'react';
import AwesomeSlider from 'react-awesome-slider';

import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import Img1 from '../../../assets/CarouselImages/Img1.jpg';
import Img2 from '../../../assets/CarouselImages/Img2.jpg';
import Img3 from '../../../assets/CarouselImages/Img3.png';
import classes from './Carousel.css'

const Carousel = props => {
  return (
    <AwesomeSlider bullets={false} className={AwesomeSliderStyles.awssld}>
      <div>
        <img className={classes.Img} src={Img1} alt="Loading..." />
      </div>
      <div>
        <img className={classes.Img} src={Img2} alt="Loading..." />
      </div>
      <div>
        <img className={classes.Img} src={Img3} alt="Loading..." />
      </div>
    </AwesomeSlider>
  );
}

export default Carousel;