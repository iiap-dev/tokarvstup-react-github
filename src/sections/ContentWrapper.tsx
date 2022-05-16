import React, {
  FC,
  // useEffect,
  // useState,
} from 'react';
import { useSelector } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';

import { appSelector } from '@ntm-package/app/selectors';

// import { Logo } from '../assets/icons/Logo';

import { NavigationBar } from '@ntm-package/navigation-bar';
import { Hero } from '@ntm-package/hero';
import { StudyDetails } from './study-details/StudyDetails';
// import {
//   // Header,
//   ContentLayout, Layout,
//   // Footer, ScrollLinkWrapper,
// } from './styles';
import { Logo } from '../assets/icons/Logo';
import { menuItems } from './consts';

export const ContentWrapper: FC = () => {
  const { isMobile } = useSelector(appSelector);

  // const filteredItems = menuItems.filter((item) => item.id !== 1);

  // const [position, setPosition] = useState(window.pageYOffset);
  // const [isShowHeader, setIsShowHeader] = useState<boolean>(true)

  // useEffect(() => {
  //   const handleScroll = () => {
  //     let moving = window.pageYOffset;
  //
  //     setIsShowHeader(position > moving);
  //     setPosition(moving)
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return (() => {
  //     window.removeEventListener('scroll', handleScroll)
  //   })
  // }, [position])

  // const scrollToTop = (element: HTMLElement) => {
  //   const yCoordinate = element.getBoundingClientRect().top;
  //   window.scrollTo({ top: yCoordinate, behavior: 'smooth' });
  // }

  const title = 'Відкрито набір на 2023 рік!';
  const subTitle = 'Отримайте безкоштовну, якісну спеціальну освіту';

  return (
    <>
      {/* <Header isShowHeader={isShowHeader}> */}
      {/*  <Logo /> */}
      <NavigationBar menuItems={menuItems} isMobile={isMobile} logo={<Logo />} />
      {/* </Header> */}
      {/* <Layout> */}
      {/*   <ContentLayout> */}
      <Hero title={title} subTitle={subTitle} />
      <StudyDetails isMobile={isMobile} id="home" />
      {/* { filteredItems.map((item) => ( */}
      {/*  <Wrapper isMobile={isMobile} id={item.key}> */}
      {/*    <SectionWrapper isMobile={isMobile}> */}
      {/*      <DummySection */}
      {/*        key={item.key} */}
      {/*        content={dummyData.content} */}
      {/*        header={dummyData.header} */}
      {/*      /> */}
      {/*    </SectionWrapper> */}
      {/*  </Wrapper> */}
      {/* )) } */}
      {/* </ContentLayout> */}
      {/* </Layout> */}
      {/* <Footer> */}
      {/*  <BrowserRouter> */}
      {/*    <ScrollLinkWrapper> */}
      {/*      <HashLink to="#home" scroll={(el) => scrollToTop(el)}>Link to Top of Page</HashLink> */}
      {/*    </ScrollLinkWrapper> */}
      {/*  </BrowserRouter> */}
      {/* </Footer> */}
    </>
  )
};
