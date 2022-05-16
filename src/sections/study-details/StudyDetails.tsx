import React, { FC } from 'react';
// import { TextCard } from './components/TextCard';
import {
  About,
} from './styles';
import { IStudyDetailsProps } from './types';

// const data = [
//   {
//     title: 'З 00.00 по 00.00',
// eslint-disable-next-line max-len
//     description: 'Запрошуємо абітурієнтів подати документи на навчання до професійно-технічного навчального закладу для здобуття професії "Токар" або "Верстатник широкого профілю"',
//   },
//   {
//     title: 'Прийом на основі 9 та 11 класів',
// eslint-disable-next-line max-len
//     description: 'Без сертифікатів ЗНО. Також, на основі 11 класів приймаються особи, які здобули вищу освіту за власний кошт',
//   },
//   {
//     title: 'Для випускників 9 класу',
// eslint-disable-next-line max-len
//     description: 'Навчання триватиме 3 роки. Наприкінці строку навчання здобуття професії "Верстатник широкого профілю"',
//   },
//   {
//     title: 'Для випускників 11 класу',
// eslint-disable-next-line max-len
//     description: 'Навчання триватиме 1 рік. Наприкінці строку навчання здобуття професії "Токар"',
//   },
// ]

// TODO move Home section to package
export const StudyDetails: FC<IStudyDetailsProps> = ({
  isMobile,
  id,
}) => {
  console.log(isMobile, id);

  // Отримайте безкоштовну, якісну спеціальну освіту
  // Навчальна токарна майстерня

  // const [isShowMore, setIsSnowMore] = useState<boolean>(false);

  return (
    <About isMobile={isMobile}>
      {/* {data.map((item) => ( */}
      {/*   <TextCard> */}
      {/*     /!* eslint-disable-next-line jsx-a11y/click-events-have-key-events *!/ */}
      {/*     <div onClick={() => setIsSnowMore(!isShowMore)}>{item.title}</div> */}
      {/*     { isShowMore && ( */}
      {/*     <div>{item.description}</div> */}
      {/*     ) } */}
      {/*   </TextCard> */}
      {/* ))} */}
      {/* { data.map((item) => ( */}
      {/*   <TextCard title={item.title} description={item.description} /> */}
      {/* )) } */}
    </About>
  )
}
// <Wrapper isMobile={isMobile}>
//   <Description isMobile={isMobile} id={id}>
//     <CaptionWrapper isMobile={isMobile}>
//       <Title isMobile={isMobile}>
//         <Text>Lorem ipsum dolor</Text>
//       </Title>
//       <SubTitle isMobile={isMobile}>
//         <Text>Nam pulvinar magna tortor, quis</Text>
//       </SubTitle>
//     </CaptionWrapper>
//     <StudyDetail isMobile={isMobile} />
//   </Description>
// </Wrapper>
