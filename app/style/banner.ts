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

  @media (min-height: 1600px) {
    min-height: 610px;
  }

  @media (max-width: 767px) {
    padding: 1rem;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  color: #0084FF;
  margin-bottom: 0.5rem;
  margin-top: 0px;
  font-family: 'Plus Jakarta Sans', sans-serif;

  @media (max-width: 767px) {
    font-size: 2rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  font-family: 'Plus Jakarta Sans', sans-serif;
  margin-top: 12px;
  margin-bottom: 0px;

  @media (max-width: 767px) {
    font-size: 1rem;
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