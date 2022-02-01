import React from 'react';
import "./Column.scss";
import Card from "../card/Card";

export interface CardProps {
  cardList: cardItem,
}

export interface cardItem {
  id: number,
  text: string
}

const Column:React.FunctionComponent<CardProps> = ({ cardList }) => {

  const renderCard = () => {
    return (
      cardList &&
      cardList.map((el) => {
        return <Card key={el.id} card={el} />;
      })
    );
  }

  return (
    <div className="column">
      <div className="column__container">
        <p className="column__title">План на месяц</p>
        {renderCard()}
      </div>
    </div>
  )
};

export default Column;