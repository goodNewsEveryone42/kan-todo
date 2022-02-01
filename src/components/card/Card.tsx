import React from 'react';
import "./Card.scss";

export interface CardProps {
  card: card
}

export interface card {
  id: number,
  text: string
}

const Card: React.FunctionComponent<CardProps> = () => {

  return (
    <div className="card">
      <div className="card__container">
        <p className="card__title">пройти</p>
      </div>
    </div>
  )
};

export default Card;