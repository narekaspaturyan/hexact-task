import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonBox = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-size: 14px;
  line-height: 1.2;
  font-weight: 800;
  width: 100%;
  border-radius: 30px;
  padding: 0 15px;
  border: none;
  box-shadow: -12px -6px 4px rgba(255, 255, 255, 0.4),
    6px 6px 14px rgba(126, 126, 126, 0.5), 6px 6px 14px rgba(126, 126, 126, 0.5);
  &:focus {
    outline: none;
  }
  white-space: nowrap;

  &:hover {
    color: ${({ theme, disabled }) => disabled || theme.primary};
    background-color: ${({ theme, disabled }) => disabled || theme.white};
  }

  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  background-color: ${({ disabled, theme, variant }) => {
    if (!disabled && variant === 'filled') {
      return theme.white;
    } else if (!disabled && variant !== 'filled') {
      return theme.primary;
    } else if (disabled) {
      return theme.grey_Inactive;
    }
  }};
  color: ${({ disabled, theme, variant }) => {
    if (!disabled && variant === 'filled') {
      return theme.white;
    } else if (!disabled && variant !== 'filled') {
      return theme.white;
    } else if (disabled) {
      return theme.white;
    }
  }};
  height: ${({ size }) => (size === 'xl' ? '56px' : '38px')};
`;

const Button = ({ children, disabled, variant, size, ...props }) => {
  return (
    <ButtonBox variant={variant} size={size} disabled={disabled} {...props}>
      {children}
    </ButtonBox>
  );
};

ButtonBox.defaultProps = {
  size: 'l',
  variant: 'default',
};

Button.propTypes = {
  variant: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
