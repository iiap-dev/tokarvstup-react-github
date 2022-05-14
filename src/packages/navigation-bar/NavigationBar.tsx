import React, {
  FC,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useSelector } from 'react-redux';
import { appSelector } from '@ntm-package/app/selectors';
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

  const { deviceType } = useSelector(appSelector)

  const handleShowMenu = useCallback(() => (
    setIsShowMenu(!isShowMenu)
  ), [isShowMenu])

  useEffect(() => () => {
    if (isMobile) setIsShowMenu(false);
  }, [isMobile]);

  return (
    <BrowserRouter>
      <Header className="header">
        <Navigation className="header__nav" deviceType={deviceType}>
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
            <>
              <LinksWrapper className="header__links">
                {menuItems.map((item) => (
                  <HashLink to={item.link} smooth>
                    {item.title}
                  </HashLink>
                ))}
              </LinksWrapper>
              <button className="header__button" type="button">Подати заяву на вступ</button>
            </>
          )}
        </Navigation>
        {isShowMenu && (
          <MenuContent id="menu-content" className="header__menu-content">
            {menuItems.map((item) => (
              <HashLink to={item.link} onClick={() => setIsShowMenu(false)} smooth>
                {item.title}
              </HashLink>
            ))}
            <button className="header__button" type="button">Подати заяву на вступ</button>
          </MenuContent>
        )}
      </Header>
    </BrowserRouter>
  )
})
