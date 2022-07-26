import React from "react";
import styled from "styled-components";
import Cards from "./Cards";

const CardsData = [
  {
    id: 1,
    name: "Sedans",
    content: `Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city
  or on your next road trip.`,
    color: "hsl(31, 77%, 52%)",
    img: "/images/icon-sedans.svg",
  },
  {
    id: 2,
    name: "SUVs",
    content: `Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation
  and off-road adventures.`,
    color: "hsl(184, 100%, 22%)",
    img: "/images/icon-suvs.svg",
  },
  {
    id: 3,
    name: "Luxury",
    content: `Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury
  rental and arrive in style.`,
    color: "hsl(179, 100%, 13%)",
    img: "/images/icon-luxury.svg",
  },
];

const CardWrapper = styled.section`
  border-raduis: 10px;
  display: flex;
  flex-direction: column;
  max-width: 80vw;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const CardsContainer = () => {
  return (
    //Power of Component based Framework
    <CardWrapper>
      {CardsData.map((card) => (
        <Cards
          key={card.id}
          name={card.name}
          content={card.content}
          color={card.color}
          img={card.img}
        />
      ))}
    </CardWrapper>
  );
};

export default CardsContainer;
