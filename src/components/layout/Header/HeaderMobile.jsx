import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import HexometerLogo from 'components/assets/images/HexometerLogo';
import Container from 'components/utils/Container';
import colors from 'components/config/colors';
import Button from 'components/utils/Button';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 26px 0;
  background-color: ${({ theme }) => theme.white};
  z-index: 99999;
  box-shadow: ${({ boxShadow }) =>
    boxShadow || '0px 4px 35px rgba(0, 0, 0, 0.05)'};

  height: ${({ active }) => (active ? '100%' : 'auto')};
`;

const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MenuListBox = styled.div`
  align-items: flex-start;
  height: 100%;
  padding: 50px 16px 0;
  justify-content: flex-start;
  flex-direction: column;
  transition: all 350ms;

  display: ${({ active }) => (active ? 'flex' : 'none')};
  opacity: ${({ active }) => (active ? 1 : 0)};
  transform: ${({ active }) => (active ? 'translateY(0)' : 'translateY(100%)')};
`;

const MenuListItem = styled.li`
  font-size: 15px;
  line-height: 1.25;
  font-weight: 600;
  margin-bottom: 50px;

  & > a {
    color: #000;
    padding-bottom: 5px;
    border-bottom: 2px solid transparent;
  }
`;

const MenuList = styled.ul`
  text-align: start;

  ${MenuListItem} {
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const BurgerBoxLine = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  height: 2px;
  border-radius: 10px;
  transition: transform 250ms;
  background-color: ${({ theme }) => theme.black};
`;

const BurgerBox = styled.div`
  position: relative;
  width: 20px;
  height: 16px;
  cursor: pointer;

  ${BurgerBoxLine} {
    &:nth-child(1) {
      top: ${({ active }) => (active ? '6px' : '0')};
      transform: ${({ active }) => (active ? 'rotate(45deg)' : '')};
      width: ${({ active }) => (active ? '25px' : '100%')};
    }

    &:nth-child(2) {
      display: ${({ active }) => (active ? 'none' : 'block')};
      top: 7px; // 5px margin + 2px height
    }

    &:nth-child(3) {
      bottom: ${({ active }) => (active ? '8px' : '0')};
      transform: ${({ active }) => (active ? 'rotate(-45deg)' : '')};
      width: ${({ active }) => (active ? '25px' : '100%')};
    }
  }
`;

const HeaderMobile = ({ links, children }) => {
  const [menuOpened, setMenuOpened] = useState(false);
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
    <Wrapper boxShadow={boxShadow} active={menuOpened}>
      <Container>
        <NavBar>
          <HexometerLogo />
          <BurgerBox
            active={menuOpened}
            onClick={() => setMenuOpened(!menuOpened)}
          >
            <BurgerBoxLine />
            <BurgerBoxLine />
            <BurgerBoxLine />
          </BurgerBox>

          {children}
        </NavBar>
      </Container>

      <MenuListBox active={menuOpened}>
        <MenuList>
          {links.map((link) => (
            <MenuListItem key={link.name.split('')}>
              <NavLink
                style={{
                  position: 'relative',
                  textDecoration: 'none',
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
          <MenuListItem>
            <NavLink
              style={{
                position: 'relative',
                textDecoration: 'none',
              }}
              activeStyle={{
                color: colors.primary,
                borderColor: colors.primary,
              }}
              to="/login"
            >
              Login
            </NavLink>
            <NavLink
              to={'/login'}
              style={{
                width: '170px',
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                marginTop: '40px',
              }}
            >
              <Button>Get started for free</Button>
            </NavLink>
          </MenuListItem>
        </MenuList>
      </MenuListBox>
    </Wrapper>
  );
};

HeaderMobile.propTypes = {
  links: PropTypes.array,
  children: PropTypes.node,
};

export default HeaderMobile;
