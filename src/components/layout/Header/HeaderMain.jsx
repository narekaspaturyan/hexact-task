import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

import Container from 'components/utils/Container';
import colors from 'components/config/colors';
import HexometerLogo from 'components/assets/images/HexometerLogo';
import Button from 'components/utils/Button';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.white};
  z-index: 99999;
  box-shadow: ${({ boxShadow }) =>
    boxShadow || '0px 4px 35px rgba(0, 0, 0, 0.05)'};
`;

const NavBar = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`;

const MenuListBox = styled.div`
  display: inline-flex;
  align-items: center;
  flex-direction: row;
`;

const MenuListItem = styled.li`
  margin-right: 33px;

  & > a {
    color: ${({ theme }) => theme.text_color};
    padding-bottom: 5px;
    border-bottom: 2px solid transparent;
  }
`;

const MenuList = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;

  ${MenuListItem} {
    &:last-child {
      margin-right: 0;
    }
  }
`;

const UserText = styled.p`
  font-size: 14px;
  line-height: auto;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.text_color};
  margin-left: 14px;
`;

const HeaderMain = ({ links }) => {
  const [boxShadow, setBoxShadow] = useState(true);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y;
      if (isShow !== boxShadow) setBoxShadow(isShow);
    },
    [boxShadow],
    false,
    false,
    112
  );

  return (
    <Wrapper boxShadow={boxShadow}>
      <Container>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            height: '112px',
          }}
        >
          <NavBar>
            <Link to={'/'}>
              <HexometerLogo />
            </Link>
          </NavBar>

          <MenuListBox>
            <MenuList>
              {links.map((link) => (
                <MenuListItem key={link.name.split('')}>
                  <NavLink
                    style={{
                      position: 'relative',
                      textDecoration: 'none',
                      fontSize: '15px',
                      fontWeight: 600,
                    }}
                    activeStyle={{
                      color: colors.primary,
                      borderColor: colors.primary,
                    }}
                    to={link.url}
                  >
                    {link.name}
                  </NavLink>
                </MenuListItem>
              ))}
            </MenuList>
            <NavLink
              to={'/login'}
              style={{
                width: '170px',
                display: 'flex',
                alignItems: 'center',
                marginLeft: '20px',
                textDecoration: 'none',
              }}
            >
              <Button>Get started for free</Button>
            </NavLink>

            <NavLink
              to={'/login'}
              style={{
                display: 'flex',
                alignItems: 'center',
                marginLeft: '20px',
                textDecoration: 'none',
              }}
            >
              <UserText>{'Login'}</UserText>
            </NavLink>
          </MenuListBox>
        </div>
      </Container>
    </Wrapper>
  );
};

HeaderMain.propTypes = {
  links: PropTypes.array,
};

export default HeaderMain;
