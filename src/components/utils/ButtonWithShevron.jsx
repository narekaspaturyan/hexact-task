import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  &:focus {
    outline: none;
  }
  margin: ${({ margin }) => margin};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, backgroudColor }) =>
    backgroudColor || theme.white};
  width: ${({ width }) => width || '52px'};
  height: ${({ height }) => height || '52px'};
  box-sizing: border-box;
  border-radius: 10px;
  z-index: 9999;
  ${({ left, right, up, down }) => {
    if (left) {
      return 'transform: rotate(-90deg)';
    } else if (right) {
      return 'transform: rotate(90deg)';
    } else if (down) {
      return 'transform: rotate(180deg)';
    } else if (up) {
      return '';
    }
  }};
`;

function ButtonWithShevron({
  up,
  left,
  right,
  down,
  backgroudColor,
  shevronColor,
  handleClick,
  height,
  width,
  margin = '0px',
}) {
  return (
    <Wrapper
      backgroudColor={backgroudColor}
      left={left}
      margin={margin}
      right={right}
      up={up}
      down={down}
      onClick={handleClick}
      height={height}
      width={width}
    >
      <svg
        style={{ zIndex: 9999 }}
        width="18"
        height="11"
        viewBox="0 0 18 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 9L9 2L2 9"
          stroke={shevronColor}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Wrapper>
  );
}

export default ButtonWithShevron;
