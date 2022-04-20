import React, { FC } from 'react';
import {
  Title, Description, SubTitle, CaptionWrapper, Text,
} from './styles';
import { IStudyDetailsProps } from './types';
import { StudyDetail } from './components/StudyDetail';
import { Wrapper } from '../styles';

export const StudyDetails: FC<IStudyDetailsProps> = ({ isMobile, id }) => (
  <Wrapper isMobile={isMobile}>
    <Description isMobile={isMobile} id={id}>
      <CaptionWrapper isMobile={isMobile}>
        <Title isMobile={isMobile}>
          <Text>Lorem ipsum dolor</Text>
        </Title>
        <SubTitle isMobile={isMobile}>
          <Text>Nam pulvinar magna tortor, quis</Text>
        </SubTitle>
      </CaptionWrapper>
      <StudyDetail isMobile={isMobile} />
    </Description>
  </Wrapper>
)
