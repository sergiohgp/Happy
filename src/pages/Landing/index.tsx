import React from 'react';
// import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

import { Link } from 'react-router-dom';
import { Container, Content, Main, Location } from './styles';
import logoImg from '../../assets/logo.svg';

const Landing: React.FC = () => {
  return (
    <>
      <Container>
        <Content>
          <img src={logoImg} alt="logo" />
          <Main>
            <h1>Bring happyness to the world</h1>
            <p>Visit orphanages and change the day of the children</p>
          </Main>

          <Location>
            <strong>Toronto</strong>
            <span>Ontario</span>
          </Location>

          <Link to="/app">
            <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
          </Link>
        </Content>
      </Container>
    </>
  );
};

export default Landing;
