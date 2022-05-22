import React from 'react';
import {
  Wrapper, Text, Cards, Content, Number,
} from './styles';
import * as cards from './text.json'

interface IAboutProps {
  isMobile: boolean;
}
export const About: React.FC<IAboutProps> = ({ isMobile = true }) =>
  // const cards = [
  //   {
  //     key: 'accomodationCard',
  //     number: '01',
  //     title: `на час навчання нетутешнім надається гуртожиток за 30 грн/міс`,
  //     link: 'https://www.canva.com/design/DAE98tz93o4/z7HV8fXruz7EvwSCim7yiw/view?utm_content=DAE98tz93o4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink',
  //   },
  //   {
  //     key: 'sportsCard',
  //     number: '02',
  //     title: `студенти мають можливість займатися в спорткомплексі`,
  //     link: 'https://www.canva.com/design/DAE98j-Gftc/PpmFY_1KGS1zIs1Zz3k0vQ/view?utm_content=DAE98j-Gftc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink',
  //   },
  //   {
  //     key: 'benefitCard',
  //     number: '03',
  //     title: `без сертифікатів зно`,
  //     link: 'https://www.canva.com/design/DAE94_mfGGc/OnH9Sv5VBpZ7A-2j-OP5VQ/view?utm_content=DAE94_mfGGc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink',
  //   },
  // ];
  (
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
        <button type="button">дізнатися більше</button>
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

