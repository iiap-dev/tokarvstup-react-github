import React from 'react';
import {
  Wrapper, Text, Cards, Content, Number,
} from './styles';

interface IAboutProps {
  isMobile: boolean;
}
export const About: React.FC<IAboutProps> = ({ isMobile = true }) => (
  <Wrapper isMobile={isMobile}>
    <Text>
      <h3>title</h3>
      <p>subtitle</p>
      <button type="button">button</button>
    </Text>
    <Cards>
      <Content className="link">
        <Number>01</Number>
        <span>Text</span>
      </Content>
      <Content>
        <Number>01</Number>
        <span>Text</span>
      </Content>
      <Content>
        <Number>01</Number>
        <span>Text</span>
      </Content>
    </Cards>
  </Wrapper>
)
