import React from 'react';
import "./InputField.scss";

interface Props {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FunctionComponent<Props> = ({handleChange}) => {

  return (
    <div className="input-field">
      <label htmlFor="inputAddNewElement"></label>
      <input
      type="textarea"
      id="inputAddNewElement"
      name="inputAddNewElement"
      onChange={handleChange}/>
    </div>
  )
};

export default InputField;