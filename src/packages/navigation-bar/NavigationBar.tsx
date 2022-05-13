import React, {
  FC,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { INavigationBarProps } from './types';
import {
  HamburgerButton, Header, LinksWrapper, MenuContent, Navigation, Toggle,
} from './styles';

export const NavigationBar: FC<INavigationBarProps> = React.memo(({
  isMobile,
  logo,
  menuItems,
}) => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const handleShowMenu = useCallback(() => (
    setIsShowMenu(!isShowMenu)
  ), [isShowMenu])

  useEffect(() => () => {
    if (isMobile) setIsShowMenu(false);
  }, [isMobile]);

  return (
    <BrowserRouter>
      <Header className="header">
        <Navigation className="header__nav">
          <a className="header__logo" href="/">{logo}</a>
          {isMobile ? (
            <Toggle onClick={handleShowMenu} className="header__toggle toggle">
              <HamburgerButton isActive={isShowMenu} className="toggle__hamburger-button button">
                <span className="button__line" />
                <span className="button__line" />
                <span className="button__line" />
                <span className="button__line" />
              </HamburgerButton>
            </Toggle>
          ) : (
            <LinksWrapper className="header__links">
              {menuItems.map((item) => (
                <HashLink to={item.link} smooth>
                  <a href={item.link}>{item.title}</a>
                </HashLink>
              ))}
            </LinksWrapper>
          )}
        </Navigation>
        {isShowMenu && (
          <MenuContent id="menu-content" className="header__menu-content">
            {menuItems.map((item) => (
              <HashLink to={item.link} onClick={() => setIsShowMenu(false)} smooth>
                {item.title}
              </HashLink>
            ))}
          </MenuContent>
        )}
      </Header>
    </BrowserRouter>
  )
})
