"use client"

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import ModalVideo from './ModalVideo';
import MktVideo from './mktdigVIdeos';
import FuturoMkt from './futuroMkt';
import SEO from './SEO';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: auto;
  max-width: 400px;

  @media (max-width: 600px) {
    display: none;
  }
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 20px;
  color: black;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s;
  flex: 1;
  margin-right: 10px;
  white-space: nowrap;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    border: 2px solid #0084FF;
    color: #0084FF;
  }

  &.selected {
    background-color: #0084FF;
    border: 2px solid #0084FF;
    color: white;
  }

  @media (max-width: 600px) {
    flex: none;
    margin: 0;
    margin-bottom: 10px;
    width: 100%;
  }
`;

const HamburgerContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const Hamburger = styled.button`
  padding: 8px;
  background-color: transparent;
  border: none;
  color: black;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
`;

const HamburgerIcon = styled.div`
  width: 20px;
  height: 2px;
  background-color: black;
  margin-bottom: 4px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ButtonMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

const CenteredVideo = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ccc;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const DefaultVideo = () => {
  return (
    <CenteredVideo>
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/kvZxxVLApxw"
          title="Default Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </CenteredVideo>
  );
};

const ResponsiveVideo = () => {
  return (
    <CenteredVideo>
      <div>
        <iframe
          src="https://www.youtube.com/embed/kvZxxVLApxw"
          title="Default Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </CenteredVideo>
  );
};

const SelectBar: React.FC = () => {
  const [selectedComponent, setSelectedComponent] = useState<React.ReactNode>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedButton, setSelectedButton] = useState('');

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const handleButtonClick = (component: React.ReactNode, buttonId: string) => {
    setSelectedComponent(component);
    setSelectedButton(buttonId);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {isMobile && (
        <HamburgerContainer>
          <Button onClick={toggleMenu}>MENU</Button>
        </HamburgerContainer>
      )}

      {menuOpen && (
        <ButtonMenu>
          <Button
            onClick={() => handleButtonClick(<MktVideo />, 'mkt')}
            className={selectedButton === 'mkt' ? 'selected' : ''}
          >
            Marketing Digital
          </Button>
          <Button
            onClick={() => handleButtonClick(<ModalVideo />, 'modal')}
            className={selectedButton === 'modal' ? 'selected' : ''}
          >
            Mídia Paga
          </Button>
          <Button
            onClick={() => handleButtonClick(<FuturoMkt />, 'futuro')}
            className={selectedButton === 'futuro' ? 'selected' : ''}
          >
            Futuro do Marketing
          </Button>
          <Button
            onClick={() => handleButtonClick(<SEO />, 'seo')}
            className={selectedButton === 'seo' ? 'selected' : ''}
          >
            SEO
          </Button>
        </ButtonMenu>
      )}

      <ButtonContainer>
        <Button
          onClick={() => handleButtonClick(<MktVideo />, 'mkt')}
          className={selectedButton === 'mkt' ? 'selected' : ''}
        >
          Marketing Digital
        </Button>
        <Button
          onClick={() => handleButtonClick(<ModalVideo />, 'modal')}
          className={selectedButton === 'modal' ? 'selected' : ''}
        >
          Mídia Paga
        </Button>
        <Button
          onClick={() => handleButtonClick(<FuturoMkt />, 'futuro')}
          className={selectedButton === 'futuro' ? 'selected' : ''}
        >
          Futuro do Marketing
        </Button>
        <Button
          onClick={() => handleButtonClick(<SEO />, 'seo')}
          className={selectedButton === 'seo' ? 'selected' : ''}
        >
          SEO
        </Button>
      </ButtonContainer>

      <Line />
      {selectedComponent || (isMobile ? <ResponsiveVideo /> : <DefaultVideo />)}
    </>
  );
};

export default SelectBar;
