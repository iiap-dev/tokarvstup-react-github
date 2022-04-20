import styled from 'styled-components';
import { colors } from '@ntm-package/theme';
import {
  IDescription, IMobile, ISubTitle, ITitle,
} from './types';

export const Container = styled.div<IMobile>`
  display: flex;
  flex-direction: ${({ isMobile }) => (isMobile ? 'column' : 'row')};
  padding: 20px 0;
`;

export const TextCardsContainer = styled.div<IMobile>`
  display: flex;
  width: ${({ isMobile }) => (isMobile ? '100%' : '70%')};
  flex-direction: column;
  margin-bottom: ${({ isMobile }) => (isMobile ? '25px' : '0')};
`;

export const ButtonCardsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Title = styled.h1<ITitle>`
  padding: 10px 0;
`;

export const SubTitle = styled.h2<ISubTitle>`
  padding: 10px 0;
`;

export const Text = styled.span`
  background-color: ${colors.primary};
  font-weight: 300;
`;

export const Description = styled.div<IDescription>`
  margin: ${({ isMobile }) => (isMobile ? '0 20px' : '0 80px')};
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Row = styled.div<IMobile>`
  display: flex;
  flex-direction: ${({ isMobile }) => (isMobile ? 'column' : 'row')};
  flex-grow: 1;
`;

export const CaptionWrapper = styled.div<IMobile>`
  padding-left: 10px;
  margin: ${({ isMobile }) => (isMobile ? '25px 0 0' : '25px 0')};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
