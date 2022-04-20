import React, {
  FC, useCallback, useEffect, useState,
} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { HamburgerButtonIcon } from '../../assets/icons/HamburgerButtonIcon';
import { Item, Menu, MobileMenuWrapper } from './styles';
import { IResponsiveMenuProps } from './types';
import { menuItems } from './consts';

export const ResponsiveMenu: FC<IResponsiveMenuProps> = React.memo(({
  isMobile,
}) => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const handleShowMenu = useCallback(() => (
    setIsShowMenu(!isShowMenu)
  ), [isShowMenu])

  useEffect(() => {
    isShowMenu
      ? document.body.style.overflow = 'hidden'
      : document.body.style.overflow = 'unset'
  }, [isShowMenu])

  useEffect(() => () => {
    if (isMobile) setIsShowMenu(false);
  }, [isMobile]);

  return (
    <BrowserRouter>
      { isMobile ? (
        <>
          <HamburgerButtonIcon onClick={handleShowMenu} isActive={isShowMenu} />
          { isShowMenu && (
          <MobileMenuWrapper>
            <Menu isMobile={isMobile}>
              {menuItems.map((item) => (
                <HashLink to={item.link} smooth onClick={() => setIsShowMenu(false)}>
                  <Item key={item.key}>{item.value}</Item>
                </HashLink>
              ))}
            </Menu>
          </MobileMenuWrapper>
          )}
        </>
      ) : (
        <Menu>
          {menuItems.map((item) => (
            <HashLink to={item.link} smooth>
              <Item key={item.key}>{item.value}</Item>
            </HashLink>
          ))}
        </Menu>
      )}
    </BrowserRouter>
  )
})
