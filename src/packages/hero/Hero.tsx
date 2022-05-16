import React from 'react';
import { Greeting, Home } from './styles';

interface IHeroProps {
  title: string;
  subTitle: string;
}

export const Hero: React.FC<IHeroProps> = ({
  title,
  subTitle,
}) => (
  <Home className="home">
    <Greeting className="home__greeting">
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
    </Greeting>
  </Home>
)
