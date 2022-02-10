import "./ButtonCreate.scss";
import { useState } from 'react'
import InputField from "../input-field/InputField";
import { useDispatch } from "react-redux";
import { setNewCard } from "../../store/actions/action";

export interface propsType {
  title: string
}

const ButtonCreate: React.FunctionComponent<propsType> = ({ title }) => {
  const [isVisibleTitle, setVisibleTitle] = useState(true);
  const [inputValue, setInputValue] = useState<string | undefined>();
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const query = e.target.value;
    setInputValue(query);
  };

  const isTitle = () => {
    return <button
             type="button"
             className="button-create__container"
             onClick={() => setVisibleTitle(false)}
            >
            <p className="button-create__plus">+</p>
            <p className="button-create__add-card">{title}</p>
          </button>
  }

  const isNewElement = () => {
    return <div className="button-create__input-container">
              <InputField handleChange={handleChange} />
              <div className="button-create__container">
                <button
                  type="button"
                  className="button-create__add-button"
                  onClick={() => dispatch(setNewCard({id: 3, text: inputValue}))}
                >
                  Добавить колонку
                </button>
                <button
                  type="button"
                  className="button-create__close"
                  onClick={() => setVisibleTitle(true)}
                >
                  +
                </button>
              </div>
            </div>
  }

  return (
    <div className="button-create">
      {isVisibleTitle ? isTitle() : isNewElement()}
    </div>
  )
};

export default ButtonCreate;