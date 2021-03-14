import React, { useState } from 'react';
import Slider from 'react-slick';
import SliderImage from 'components/assets/images/SliderImage.png';
import SliderImage1 from 'components/assets/images/SliderImage1.png';
import SliderImage2 from 'components/assets/images/SliderImage2.png';
import SliderImage3 from 'components/assets/images/SliderImage3.png';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import styles from './Carusel.module.css';

const imgArr = [SliderImage, SliderImage1, SliderImage2, SliderImage3];

function FeedBackCarusel() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className={`${styles.arrow} ${styles.next}`} onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className={`${styles.arrow} ${styles.prev}`} onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className={styles.wrapper}>
      <Slider {...settings}>
        {imgArr.map((img, idx) => (
          <div
            className={
              idx === imageIndex
                ? `${styles.slide} ${styles.activeSlide}`
                : styles.slide
            }
          >
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default FeedBackCarusel;
