// import React, { FC, useCallback, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { appSelector } from '@ntm-package/app/selectors';
// // import {
// //   TextCardWrapper,
// //   Header,
// //   Description,
// //   FlexContainer,
// //   HeaderMobile,
// //   CardDescription,
// // } from './styles';
// import { ExpandArrow } from '../../../assets/icons/ExpandArrow';
//
// interface ITextCardProps {
//   title: string;
//   description: string;
// }
//
// export const TextCard: FC<ITextCardProps> = ({ title, description }) => {
//   const { isMobile } = useSelector(appSelector);
//
//   const [isShowDescription, setIsShowDescription] = useState<boolean>(false);
//
//   const handleOpenDescription = useCallback(() => {
//     setIsShowDescription(!isShowDescription)
//   }, [isShowDescription])
//
//   return (
//     <>
//       { isMobile ? (
//         <>
//           <HeaderMobile
//             onClick={handleOpenDescription}
//             isOpened={isShowDescription}
//           >
//             {title}
//             <ExpandArrow isExpanded={isShowDescription} />
//           </HeaderMobile>
//           { isShowDescription && (
//             <CardDescription>{description}</CardDescription>
//           ) }
//         </>
//       ) : (
//         <TextCardWrapper>
//           <FlexContainer>
//             <>
//               <Header>{title}</Header>
//               <Description>{description}</Description>
//             </>
//           </FlexContainer>
//         </TextCardWrapper>
//       ) }
//     </>
//   )
// }
