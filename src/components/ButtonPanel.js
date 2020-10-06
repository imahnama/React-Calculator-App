import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default function ButtonPanel({ clickHandler }) {
  return (
    <div className="groups">
      <div className="Group1 d-flex justify-content-around">
        <Button buttonName="AC" color="#EFEFEF" handleClick={clickHandler} />
        <Button buttonName="+/-" color="#EFEFEF" handleClick={clickHandler} />
        <Button buttonName="%" color="#EFEFEF" handleClick={clickHandler} />
        <Button buttonName="÷" handleClick={clickHandler} />
      </div>
      <div className="Group2 d-flex justify-content-around">
        <Button buttonName="7" color="#EFEFEF" handleClick={clickHandler} />
        <Button buttonName="8" color="#EFEFEF" handleClick={clickHandler} />
        <Button buttonName="9" color="#EFEFEF" handleClick={clickHandler} />
        <Button buttonName="X" handleClick={clickHandler} />
      </div>
      <div className="Group3 d-flex justify-content-around">
        <Button buttonName="4" color="#EFEFEF" handleClick={clickHandler} />
        <Button buttonName="5" color="#EFEFEF" handleClick={clickHandler} />
        <Button buttonName="6" color="#EFEFEF" handleClick={clickHandler} />
        <Button buttonName="-" handleClick={clickHandler} />
      </div>
      <div className="Group4 d-flex justify-content-around">
        <Button buttonName="1" color="#EFEFEF" handleClick={clickHandler} />
        <Button buttonName="2" color="#EFEFEF" handleClick={clickHandler} />
        <Button buttonName="3" color="#EFEFEF" handleClick={clickHandler} />
        <Button buttonName="+" handleClick={clickHandler} />
      </div>
      <div className="Group5 d-flex">
        <Button buttonName="0" wide color="#EFEFEF" handleClick={clickHandler} />
        <Button buttonName="." color="#EFEFEF" handleClick={clickHandler} />
        <Button buttonName="=" handleClick={clickHandler} />
      </div>
    </div>
  );
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
