// import styled from 'styled-components';
// import { colors } from '@ntm-package/theme';
// import { IExpandArrow } from '../../../assets/icons/ExpandArrow';
//
// export const TextCardWrapper = styled.div`
//   width: 100%;
//   position: relative;
//   display: flex;
//   padding: 16px 13px;
//   border-radius: 0 0 16px 16px;
//   margin: 10px;
//   max-width: 100%;
//   top: -10px;
//   background-color: ${colors.blueShades.BLUE};
//   color: ${colors.secondary};
//   box-shadow: rgb(10, 32, 45) 0 4px 12px;
//   border-bottom: 2px solid ${colors.primary};
// `;
//
// export const Header = styled.div`
//   text-transform: uppercase;
//   line-height: 2rem;
//   font-size: 18px;
//   font-weight: 400;
// `;
//
// export const Description = styled.div`
//   text-transform: lowercase;
//   line-height: 2rem;
//   align-self: flex-end;
// `;
//
// export const ButtonCardWrapper = styled.div`
//   margin: 10px;
//   padding: 16px 13px;
//   text-align: center;
//   border-radius: 0 16px 0 16px;
//   background-color: ${colors.blueShades.BLUE};
//   color: ${colors.secondary};
//   box-shadow: rgba(10, 28, 56, 0.5) 0 4px 12px;
//   border-bottom: 2px solid ${colors.primary};
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//
//   &:nth-of-type(1) { flex-grow: 1; }
//   &:nth-of-type(2) { flex-grow: 1; }
//   &:nth-of-type(3) { flex-grow: 1; }
// `;
//
// export const Tip = styled.div`
//   text-transform: uppercase;
//   padding-bottom: 10px;
// `;
//
// export const FlexContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
// `;
//
// export const HeaderMobile = styled.div<{ isOpened: boolean }>`
//   display: flex;
//   justify-content: space-between;
//   position: relative;
//   padding: 16px 13px;
//   width: 100%;
//   border-radius: 16px;
//   //margin: 15px 10px 0;
//   z-index: 1;
//   background: ${colors.primary};
//   color: ${colors.secondary};
//   box-shadow: rgba(10, 28, 56, 0.5) 0 4px 12px;
//   border-bottom: 2px solid ${colors.secondary};
// `;
//
// export const CardDescription = styled(TextCardWrapper)`
//   border-radius: 0 0 16px 0;
//   margin-top: 0;
//   box-shadow: none;
// `;
//
// export const ExpandArrowWrapper = styled.div<IExpandArrow>`
//   display: flex;
//
//   svg {
//     flex: 1;
//     width: 24px;
//     height: 24px;
//     outline: none;
//     fill: ${colors.secondary};
//   }
//
//   transform: ${({ isExpanded }) => (isExpanded ? 'rotate(180deg)' : 'none')};
// `;
//
// export const LinkWrapper = styled.div`
//   display: flex;
//   cursor: pointer;
//
//   svg {
//     flex: 1;
//     width: 24px;
//     height: 24px;
//     outline: none;
//     fill: ${colors.secondary};
//   }`;
// @ts-ignore
