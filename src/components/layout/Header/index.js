import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';

import HeaderMobile from './HeaderMobile';
import HeaderMain from './HeaderMain';

const links = [
  { name: 'How does it work?', url: '/how-does-it-work' },
  { name: 'Solutions', url: '/solutions', count: true },
  { name: 'Pricing', url: '/pricing' },
  { name: 'Tools', url: '/tools' },
  { name: 'Blog', url: '/blog' },
];

const Header = ({ mobileDisabled, children, ...props }) => {
  const isMobile = useMediaQuery({ maxWidth: 992 });
  return (
    <>
      {isMobile && !mobileDisabled && (
        <HeaderMobile links={links} children={children} {...props} />
      )}

      {!isMobile && <HeaderMain links={links} {...props} />}
    </>
  );
};

Header.propTypes = {
  mobileDisabled: PropTypes.bool,
  children: PropTypes.node,
};

export default Header;
