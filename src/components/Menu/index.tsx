import { useState } from 'react';
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2';
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart';
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';

import Logo from 'components/Logo';
import Button from 'components/Button';
import { MediaMatch } from 'components/MediaMatch';

import * as SC from './styles';

export type MenuProps = {
  username?: string;
};

const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SC.Wrapper>
      <MediaMatch lessThan="medium">
        <SC.IconWrapper>
          <MenuIcon aria-label="Open menu" onClick={() => setIsOpen(true)} />
        </SC.IconWrapper>
      </MediaMatch>

      <SC.LogoWrapper>
        <Logo hideOnMobile />
      </SC.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <SC.MenuNav>
          <SC.MenuLink href="#">Home</SC.MenuLink>
          <SC.MenuLink href="#">Explore</SC.MenuLink>
        </SC.MenuNav>
      </MediaMatch>

      <SC.MenuGroup>
        <SC.IconWrapper>
          <SearchIcon aria-label="Search icon" />
        </SC.IconWrapper>

        <SC.IconWrapper>
          <ShoppingCartIcon aria-label="Shopping Cart icon" />
        </SC.IconWrapper>

        {!username && (
          <MediaMatch greaterThan="medium">
            <Button>Sign In</Button>
          </MediaMatch>
        )}
      </SC.MenuGroup>

      <SC.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon
          aria-label="Close menu icon"
          onClick={() => setIsOpen(false)}
        />
        <SC.MenuNav>
          <SC.MenuLink href="#">Home</SC.MenuLink>
          <SC.MenuLink href="#">Explore</SC.MenuLink>

          {!!username && (
            <>
              <SC.MenuLink href="#">My account</SC.MenuLink>
              <SC.MenuLink href="#">Wishlist</SC.MenuLink>
            </>
          )}
        </SC.MenuNav>

        {!username && (
          <SC.RegisterBox>
            <Button fullWidth size="large">
              Log in now
            </Button>

            <span>or</span>

            <SC.CreateAccount href="#" title="Sign In">
              Sign Up
            </SC.CreateAccount>
          </SC.RegisterBox>
        )}
      </SC.MenuFull>
    </SC.Wrapper>
  );
};

export default Menu;
