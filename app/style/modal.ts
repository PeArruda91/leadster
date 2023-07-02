import styled from "styled-components";


export const VideoGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  margin-left: 140px;

  @media (max-width: 767px) {
    /* Estilos para smartphone */
    flex-direction: column;
    align-items: center;
  }
`;

export const VideoCard = styled.div`
  width: 195px;
  height: 140px;
  margin: 10px;
  padding: 10px;
  background-color: #f2f2f2;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: box-shadow 0.3s; 

  h4 {
    font-size: 16px;
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
    /* Estilos para smartphone */
    width: 100%;
    margin: 10px 0;
  }
}`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(240, 248, 255, 0.5);
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
  position: relative;

  h4 {
    margin-bottom: 10px;
    font-family: 'Plus Jakarta Sand', sans-serif;
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
    /* Estilos para smartphone */
    width: 90%;
    height: auto;
  }
`;
