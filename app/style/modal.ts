import styled from "styled-components";


export const VideoGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const VideoCard = styled.div`
  width: 195px;
  min-height: 200px;
  margin: 10px;
  padding: 10px;
  background-color: rgba(240, 240, 240, 0.4);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: box-shadow 0.3s;
  overflow: hidden

  h4 {
    font-size: 14px; 
    font-weight: bold;
    margin-bottom: 8px;
    font-family: 'Plus Jakarta Sand', sans-serif;
  }

  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 8px 12px;
    border-radius: 5px;
    cursor: pointer;
    font-family: 'Plus Jakarta Sand', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: auto;
    width: 100%;
  }

  &:hover {
    box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.3);    
  }

  button:hover {
    animation: buttonPulse 1.5s infinite;
  }

  @keyframes buttonPulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 767px) {
    width: 100%;
    margin: 10px 0;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 5px;
  }
`;


export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(140, 148, 230, 0.3);
  z-index: 1;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 25px 0;
  border-radius: 5px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 425px;
  height: 511px;
  position: fixed;
  z-index: 0;
  
  h4 {
    margin-bottom: 10px;
    font-family: 'Plus Jakarta Sand', sans-serif;
  }

  span.h4-title{
    color: #2c83fb;
    font-weight: bold;
  }

  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 8px 12px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    font-family: 'Plus Jakarta Sand', sans-serif;
  }

  span.close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
  }

  iframe {
    width: 100%;
    height: calc(60% - 50px);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: #007bff;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  @media (max-width: 767px) {
    width: 100%;
    height: auto;
  }
`;

export const Description = styled.div`
  text-align: left;
  margin: 20px;
  z-index: 1;

  @media (max-width: 767px){
    display: none;
  }
`;


