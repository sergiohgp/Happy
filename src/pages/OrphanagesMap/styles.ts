import styled, { keyframes } from 'styled-components';

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: stretch;

  .leaflet-container {
    z-index: 5;
  }

  > a {
    z-index: 10;
    position: absolute;
    right: 40px;
    bottom: 40px;

    width: 64px;
    height: 64px;
    background: #15c3d6;
    border-radius: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: background-color 0.2s;

    &:hover {
      background: #17d6eb;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);

  width: 100%;
  max-width: 700px;
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;
  height: 2000px;

  animation: ${appearFromLeft} 1s;

  aside {
    height: 100%;
    margin: 80px 0;
    text-align: center;
    width: 440px;
    padding: 80px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;

    header {
      max-width: 350px;

      h1 {
        font-size: 40px;
        font-weight: 800;
        line-height: 42px;
        margin-top: 110px;
      }

      p {
        margin-top: 24px;
        line-height: 28px;
      }
    }

    footer {
      font-size: 24px;
      line-height: 24px;

      display: flex;
      flex-direction: column;

      strong {
        font-weight: 800;
      }
    }
  }
`;

export const Background = styled.div`
  position: relative;
  flex: 1;
  background-size: cover;
  background: #fff;
`;
export const Main = styled.div``;
export const Location = styled.div``;
