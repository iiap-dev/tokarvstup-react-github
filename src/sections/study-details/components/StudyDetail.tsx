import React, { FC } from 'react';
import {
  Container, TextCardsContainer, ButtonCardsContainer, Row,
} from '../styles';
import { TextCard } from './TextCard';
import { ButtonCard } from './ButtonCard';

import * as textCardData from '../data/textCardData.json';
import * as buttonCardData from '../data/buttonCardData.json';

interface IStudyDetail {
  isMobile: boolean;
}

export const StudyDetail: FC<IStudyDetail> = ({ isMobile }) => (
  <Container isMobile={isMobile}>
    <TextCardsContainer isMobile={isMobile}>
      { textCardData.map((row) => (
        <Row key={row.key} isMobile={isMobile}>
          { row.values.map((value) => (
            <TextCard
              title={value.title}
              description={value.description}
              key={value.key}
            />
          ))}
        </Row>
      )) }
    </TextCardsContainer>
    <ButtonCardsContainer>
      { buttonCardData.map((item) => (
        <ButtonCard tipText={item.value} key={item.key} link={item.link} />
      )) }
    </ButtonCardsContainer>
  </Container>
)
