import { useSelector } from "react-redux";
import "./Main.scss";
import Column from '../column/Column';
import ButtonCreate from "../create-card/ButtonCreate";

interface RootState {
  list: []
}

const MainPage: React.FunctionComponent = () => {
  const cards = useSelector((state: RootState) => state.list);

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