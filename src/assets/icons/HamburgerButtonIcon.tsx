import React from "react";
import {HamburgerButtonWrapper } from "@ntm-package/responsive-menu/styles";

export interface IHamburgerButton {
  onClick: () => void;
  isActive: boolean;
}

export const HamburgerButtonIcon: React.FC<IHamburgerButton> = ({ onClick, isActive }) => (
<HamburgerButtonWrapper onClick={ onClick } isActive={isActive}>
  <svg width="30" height="30" viewBox="0 0 30 30">
    <path
      d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
  </svg>
</HamburgerButtonWrapper>
)
