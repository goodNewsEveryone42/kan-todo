import { useState, useCallback } from 'react'
import "./Main.scss";
import Column from '../column/Column';
import ButtonCreate from "../create-card/ButtonCreate";

const MainPage: React.FunctionComponent = () => {
  const [cards, setCards] = useState([
    [
      {
        id: 1,
        text: 'Write a cool JS library',
      },
      {
        id: 2,
        text: 'Make it generic enough',
      },
    ],
    [
    {
      id: 1,
      text: 'Write a cool JS library',
    },
    {
      id: 2,
      text: 'Write a cool JS library',
    },
  ]
  ])

  const renderColumn = () => {
    return (
      cards &&
      cards.map((el, idx) => {
        return <Column key={idx} cardList={el} />;
      })
    );
  }

  return (
    <div className="main">
      <div className="main__container">
        {renderColumn()}
        <ButtonCreate 
        title="Добавить еще одну колонку"/>
      </div>
    </div>
  )
};

export default MainPage;