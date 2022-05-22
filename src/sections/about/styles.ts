import styled from 'styled-components';
import { appTheme } from '@ntm-package/theme';
import { IMobile } from '../types';

const { colors } = appTheme

export const Wrapper = styled.section<IMobile>`
  display: flex;
  flex-direction: ${({ isMobile }) => (isMobile ? 'column' : 'row')};
  
  height: ${({ isMobile }) => (isMobile ? '90vh' : '95vh')};
`;

export const Text = styled.div<IMobile>`
  padding: 0 20px 40px;
  
  ${({ isMobile }) => !isMobile && 'width: 50%'};
`;

export const Cards = styled.div<IMobile>`
  height: 90vh;
  color: ${colors.textColor.secondary};
  
  display: flex;
  flex-direction: column;

  ${({ isMobile }) => !isMobile && `width: 50%`};
  
  > {
    &:first-child {
      background: ${colors.background.blue};
    }
    
    &:nth-child(2) {
      background: ${colors.background.darkBlue};
    }
    
    &:last-child {
      background: ${colors.background.accent};
    }
  }
`;

export const Content = styled.div`
  padding: 20px;
  font-size: 30px !important;
  
  flex-grow: 1;
  
  span {
    font-weight: 600;
    text-transform: uppercase;
  }
`;

export const Number = styled.div`
  margin-bottom: 20px;
  
  font-weight: 300;
`;
