import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: ${(props) => props.color};
  padding-inline: 3rem;
  padding-block: 4rem;
  position: relative;
  & > *:not(button) {
    margin-bottom: 2rem;
  }
  &:first-child {
    border-radius: 10px 10px 0 0;
  }
  &:last-child {
    border-radius: 0 0 10px 10px;
  }
  @media (min-width: 768px) {
    &:first-child {
      border-radius: 10px 0 0 10px;
    }
    &:last-child {
      border-radius: 0 10px 10px 0;
    }
    padding-block-end: 5rem;
  }
`;
const Title = styled.h1`
  color: ${({ theme }) => theme.color.back};
  font-weight: 700;
  font-size: 2.5rem;
  font-family: ${({ theme }) => theme.fontFamily.head};
  text-transform: uppercase;
`;
const Content = styled.p`
  color: ${({ theme }) => theme.color.para};
  font-family: ${({ theme }) => theme.fontFamily.text};
  line-height: 1.8rem;
  padding-inline-end: 2rem;
`;
const Btn = styled.button`
  color: ${(props) => props.color};
  border: none;
  padding-block: 1rem;
  padding-inline: 2.5rem;
  font-size: 1rem;
  border-radius: 2000px;
  font-family: ${({ theme }) => theme.fontFamily.text};
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: transparent;
    color: white;
    outline: 2px solid white;
  }
  @media (min-width: 768px) {
    position: absolute;
    bottom: 20px;
  }
`;
const Cards = ({ name, color, content, img }) => {
  return (
    <Card color={color}>
      <img src={img} alt="" />
      <Title>{name}</Title>
      <Content>{content}</Content>
      <Btn color={color}>Learn More</Btn>
    </Card>
  );
};

export default Cards;
