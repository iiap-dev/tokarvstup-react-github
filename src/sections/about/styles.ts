import styled from 'styled-components';
import { appTheme } from '@ntm-package/theme';
import { IMobile } from '../types';

const { colors } = appTheme

export const Wrapper = styled.section<IMobile>`
  display: flex;
  flex-direction: ${({ isMobile }) => (isMobile ? 'column' : 'row')};
  
  height: 90vh;
  background: ${colors.background.secondary};
`;

export const Text = styled.div`
  padding: 0 20px 40px;
  flex-grow: 1;
`;

export const Cards = styled.div`
  height: 90vh;
  color: ${colors.textColor.secondary};
  
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  
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
  }
`;

export const Number = styled.div`
  margin-bottom: 20px;
  
  font-weight: 300;
`;
