import React, { FC, useCallback } from 'react';
import { ButtonCardWrapper, Tip } from './styles';
import { Link } from '../../../assets/icons/Link';

interface IButtonCardProps {
  tipText: string;
  link: string,
}

export const ButtonCard: FC<IButtonCardProps> = ({ tipText, link }) => {
  const handleClick = useCallback((target) => {
    window.open(target);
  }, [])

  return (
    <ButtonCardWrapper>
      <Tip>{ tipText }</Tip>
      <Link onClick={() => handleClick(link)} />
    </ButtonCardWrapper>
  )
}
