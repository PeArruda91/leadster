import styled from 'styled-components';

export const HeroSection = styled.section`
  min-height: 20rem;
  background-color: #F0F8FF;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
  align-items: center;
  width: auto;
  z-index: -9

  @media (min-height: 1600px) {
    min-height: 610px;
  }

  @media (max-width: 767px) {
    padding: 1rem;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 3.25rem;
  margin-bottom: 0.5rem;
  margin-top: 0px;
  font-family: 'Plus Jakarta Sans', sans-serif;

  background: linear-gradient(45deg, #2c83fb, #1f76f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 767px) {
    font-size: 2rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.75rem;
  font-family: 'Plus Jakarta Sans', sans-serif;
  margin-top: 12px;
  margin-bottom: -55px;

  @media (max-width: 767px) {
    font-size: 1rem;
    margin-bottom: 0px;
    margin-top: 6px;
  }
`;

 export const HeroCaption = styled.p`
  font-size: 1rem;
  margin-top: 12px;
  font-family: 'Plus Jakarta Sans', sans-serif;

  @media (max-width: 767px) {
    font-size: 0.8rem;
    margin-top: 6px;
  }
`;

export const HeroCaption2 = styled.p`
  font-size: 1rem;
  margin-top: 1rem;
  color: #0084FF;
  font-weight: bold;
  border: 2px solid #0084FF;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 0;
  padding: 0.5rem;
  margin-bottom: 0;
  font-family: 'Plus Jakarta Sans', sans-serif;

  @media (max-width: 767px) {
    font-size: 0.8rem;
  }
`;