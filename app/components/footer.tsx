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
  grid-template-columns: repeat(4, 1fr);
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

const ContactInfo = styled.div`
  margin-top: 20px;
`;

const Address = styled.p`
  font-size: 12px;
  color: #888;
`;

const FooterText = styled.p`
  text-align: center;
  font-size: 12px;
  color: #888;
  margin-top: 20px;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Column>
          <ColumnTitle>Links Principais</ColumnTitle>
          <LinkList>
            <LinkListItem><Link href="#">Home</Link></LinkListItem>
            <LinkListItem><Link href="#">Ferramenta</Link></LinkListItem>
            <LinkListItem><Link href="#">Preços</Link></LinkListItem>
            <LinkListItem><Link href="#">Contato</Link></LinkListItem>
          </LinkList>
        </Column>
        <Column>
          <ColumnTitle>Cases</ColumnTitle>
          <LinkList>
            <LinkListItem><Link href="#">Geração de Leads B2B</Link></LinkListItem>
            <LinkListItem><Link href="#">Geração de Leads em Software</Link></LinkListItem>
            <LinkListItem><Link href="#">Geração de Leads em Imobiliária</Link></LinkListItem>
            <LinkListItem><Link href="#">Cases de Sucesso</Link></LinkListItem>
          </LinkList>
        </Column>
        <Column>
          <ColumnTitle>Materiais</ColumnTitle>
          <LinkList>
            <LinkListItem><Link href="#">Blog</Link></LinkListItem>
            <LinkListItem><Link href="#">Parceria com Agências</Link></LinkListItem>
            <LinkListItem><Link href="#">Guia Definitivo de Marketing</Link></LinkListItem>
            <LinkListItem><Link href="#">Materiais Gratuitos</Link></LinkListItem>
          </LinkList>
        </Column>
        <Column>
          <ColumnTitle>Siga a Leadster</ColumnTitle>
          <SocialIcons>
            <SocialIconItem><IconLink href="#"><i className="fab fa-linkedin-in"></i></IconLink></SocialIconItem>
            <SocialIconItem><IconLink href="#"><i className="fab fa-facebook-f"></i></IconLink></SocialIconItem>
            <SocialIconItem><IconLink href="#"><i className="fab fa-instagram"></i></IconLink></SocialIconItem>
          </SocialIcons>
          <ContactInfo>
            <p>Email: contato@leadster.com.br</p>
            <p>Telefone: (42) 98828-9851</p>
          </ContactInfo>
        </Column>
      </FooterContent>
      <FooterText>&copy; 2015-2023 Todos direitos reservados | Leadster</FooterText>
      <Address>Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000</Address>
    </FooterContainer>
  );
};

export default Footer;
