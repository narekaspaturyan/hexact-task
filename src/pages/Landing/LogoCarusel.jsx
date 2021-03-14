import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import bigcommerseLogo from 'components/assets/images/bigcommerseLogo.png';
import drupalLogo from 'components/assets/images/drupalLogo.png';
import joomlaLogo from 'components/assets/images/joomlaLogo.png';
import magnetoLogo from 'components/assets/images/magnetoLogo.png';
import shopyfyLogo from 'components/assets/images/shopyfyLogo.png';
import widLogo from 'components/assets/images/widLogo.png';
import wordpressLogo from 'components/assets/images/wordpressLogo.png';
import ButtonWithShevron from 'components/utils/ButtonWithShevron';
import colors from 'components/config/colors';

const logoArray = [
  bigcommerseLogo,
  drupalLogo,
  joomlaLogo,
  magnetoLogo,
  shopyfyLogo,
  widLogo,
  wordpressLogo,
];

const Wrapper = styled.div`
  margin: 20px 5px;
`;

const InnerWrapper = styled.div`
  margin: 20px 50px;
  .img {
    height: 80px;
    width: 110px;
    margin: 0 40px;
    outline: none;
    cursor: pointer;
  }
`;

const SimpleSlider = () => {
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    width: 500,
    slidesToScroll: 6,
    slidesToShow: 6,
    nextArrow: (
      <button style={{ zIndex: 99999 }}>
        <ButtonWithShevron
          margin="-2rem 0 0 0"
          shevronColor={colors.primary}
          right
        />
      </button>
    ),
    prevArrow: (
      <button style={{ zIndex: 99999 }}>
        <ButtonWithShevron
          margin="-2rem 0 0 0"
          shevronColor={colors.primary}
          left
        />
      </button>
    ),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Wrapper>
      <InnerWrapper className="relatedItemsSliderWrapper">
        <Slider {...settings}>
          {logoArray.map((img, i) => {
            return (
              <div key={i}>
                <img className="img" src={img} />
              </div>
            );
          })}
        </Slider>
      </InnerWrapper>
    </Wrapper>
  );
};

export default SimpleSlider;
