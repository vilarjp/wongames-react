import Link from 'next/link';

import Logo from 'components/Logo';
import Heading from 'components/Heading';

import * as SC from './styles';

const Footer = () => {
  return (
    <SC.Wrapper>
      <Logo color="black" />
      <SC.Content>
        <SC.Column>
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            Contact us
          </Heading>

          <a href="mailto:sac@wongames.com">sac@wongames.com</a>
        </SC.Column>

        <SC.Column>
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            Follow us
          </Heading>

          <nav aria-labelledby="social media">
            <a
              href="https://www.instagram.com/won-games"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.twitter.com/won-games"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://www.youtube.com/won-games"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Youtube
            </a>
            <a
              href="https://www.facebook.com/won-games"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Facebook
            </a>
          </nav>
        </SC.Column>

        <SC.Column>
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            Links
          </Heading>

          <nav aria-labelledby="footer resources">
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/games">
              <a>Store</a>
            </Link>
            <Link href="/search">
              <a>Buscar</a>
            </Link>
          </nav>
        </SC.Column>

        <SC.Column>
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            Location
          </Heading>

          <span>Lorem ipsum dolor sit.</span>
          <span>Lorem Ipsum</span>
          <span>Lorem, ipsum dolor.</span>
        </SC.Column>
      </SC.Content>

      <SC.Copyright>Won Games 2020 © All rights reserved.</SC.Copyright>
    </SC.Wrapper>
  );
};

export default Footer;