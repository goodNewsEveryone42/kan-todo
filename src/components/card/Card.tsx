import React from 'react';
import "./Card.scss";
export interface CardProps {
  card: CardInfo
}

export interface CardInfo {
  id: number,
  text: string
}

const Card: React.FunctionComponent<CardProps> = ({ card }) => {

  return (
    <div className="card">
      <div className="card__container">
        <p className="card__title">{card.text}</p>
      </div>
    </div>
  )
};

export default Card;