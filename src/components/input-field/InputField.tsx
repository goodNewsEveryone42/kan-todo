import React from 'react';
import "./Card.scss";

const InputField: React.FunctionComponent = () => {

  return (
    <div className="input-field">
      <label htmlFor="inputAddNewElement"></label>
      <input type="text" id="inputAddNewElement" name="inputAddNewElement"/>
    </div>
  )
};

export default InputField;