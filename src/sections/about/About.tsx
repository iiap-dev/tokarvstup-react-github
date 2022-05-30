import React from 'react';
import {
  Wrapper, Text, Cards, Content, Number,
} from './styles';
import * as cards from './text.json'

interface IAboutProps {
  isMobile: boolean;
}
export const About: React.FC<IAboutProps> = ({ isMobile = true }) => {
  const onClick = () => window.open('/documents/check-list.pdf', '_blank');

  return (
    <Wrapper isMobile={isMobile}>
      <Text isMobile={isMobile}>
        <h3>Здійснюємо підготовку фахівців з багатьох напрямів</h3>
        {/* eslint-disable-next-line max-len */}
        <p>
          {/* eslint-disable-next-line max-len */}
          Професійно-технічний навчальний заклад здійснює підготовку фахівців за освітньо-кваліфікаційним
          рівнем «Кваліфікований робітник». Освітньо-професійна програма підготовки кваліфікованого
          робітника забезпечує одночасне здобуття професійно-технічної освіти та кваліфікації
          кваліфікованого робітника на базі 11-ти або 9-ти класів, з наданням можливості отримувати
          повну загальну середню освіту. Особи, які успішно пройшли державну атестацію, отримують
          документи встановленого зразка про здобуття професійно-технічної освіти та кваліфікації
          кваліфікованого робітника.
        </p>
        <button type="button" onClick={onClick}>дізнатися більше</button>
      </Text>
      <Cards isMobile={isMobile}>
        {cards.map(card => (
          <Content>
            <Number>{card.number}</Number>
            <span>{card.title}</span>
          </Content>
        ))}
      </Cards>
    </Wrapper>
  )
}

