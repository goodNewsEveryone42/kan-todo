import "./ButtonCreate.scss";
import { useState } from 'react'

export interface propsType {
  title: string
}

const ButtonCreate: React.FunctionComponent<propsType> = ({ title }) => {
  const [isVisibleTitle, setVisibleTitle] = useState(true)

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
    return <div className="button-create__container">
            <button type="button" className="button-create__add-button">Добавить колонку</button>
            <button
              type="button"
              className="button-create__close"
              onClick={() => setVisibleTitle(true)}
            >
              +
            </button>
           </div>
  }

  return (
    <div className="button-create">
      {isVisibleTitle ? isTitle() : isNewElement()}
    </div>
  )
};

export default ButtonCreate;