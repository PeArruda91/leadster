"use client"

import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #f4f4f4;
  padding: 30px 0;
  color: #555;
  font-size: 14px;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const Column = styled.div``;

const ColumnTitle = styled.h4`
  font-weight: bold;
  margin-bottom: 10px;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
`;

const LinkListItem = styled.li`
  margin-bottom: 5px;
`;

const Link = styled.a`
  color: #555;
  text-decoration: none;
`;

const SocialIcons = styled.ul`
  display: flex;
  padding: 0;
  justify-content: center;
`;

const SocialIconItem = styled.li`
  margin-right: 10px;
`;

const IconLink = styled.a`
  color: #555;
  text-decoration: none;
`;

const BottomBar = styled.div`
  background-color: #ddd;
  padding: 10px;
  text-align: center;
  font-size: 12px;
  color: #888;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Column>
          <ColumnTitle>Contato</ColumnTitle>
          <p>Email: contato@leadster.com.br</p>
          <p>Telefone: (11) 1234-5678</p>
        </Column>
        <Column>
          <ColumnTitle>Links Úteis</ColumnTitle>
          <LinkList>
            <LinkListItem><Link href="#">Sobre nós</Link></LinkListItem>
            <LinkListItem><Link href="#">Serviços</Link></LinkListItem>
            <LinkListItem><Link href="#">Depoimentos</Link></LinkListItem>
            <LinkListItem><Link href="#">Contato</Link></LinkListItem>
          </LinkList>
        </Column>
        <Column>
          <ColumnTitle>Redes Sociais</ColumnTitle>
          <SocialIcons>
            <SocialIconItem><IconLink href="#"><i className="fab fa-facebook-f"></i></IconLink></SocialIconItem>
            <SocialIconItem><IconLink href="#"><i className="fab fa-twitter"></i></IconLink></SocialIconItem>
            <SocialIconItem><IconLink href="#"><i className="fab fa-instagram"></i></IconLink></SocialIconItem>
            <SocialIconItem><IconLink href="#"><i className="fab fa-linkedin-in"></i></IconLink></SocialIconItem>
          </SocialIcons>
        </Column>
      </FooterContent>
      <BottomBar>
        <p>&copy; 2023 Leadster. Todos os direitos reservados.</p>
      </BottomBar>
    </FooterContainer>
  );
};

export default Footer;
