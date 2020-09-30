import React from 'react';
import Button from './Button';

export default function ButtonPanel() {
  return (
    <div className="groups">
      <div className="Group1 d-flex justify-content-around">
        <Button name="AC" color="#EFEFEF"/>
        <Button name="+/-" color="#EFEFEF"/>
        <Button name="%" color="#EFEFEF"/>
        <Button name="÷" />
      </div>
      <div className="Group2 d-flex justify-content-around">
        <Button name="7" color="#EFEFEF"/>
        <Button name="8" color="#EFEFEF"/>
        <Button name="9" color="#EFEFEF"/>
        <Button name="X" />
      </div>
      <div className="Group3 d-flex justify-content-around">
        <Button name="4" color="#EFEFEF"/>
        <Button name="5" color="#EFEFEF"/>
        <Button name="6" color="#EFEFEF"/>
        <Button name="-" />
      </div>
      <div className="Group4 d-flex justify-content-around">
        <Button name="1" color="#EFEFEF"/>
        <Button name="2" color="#EFEFEF"/>
        <Button name="3" color="#EFEFEF"/>
        <Button name="+"/>
      </div>
      <div className="Group5 d-flex">
        <Button name="0" wide color="#EFEFEF"/>
        <Button name="." color="#EFEFEF" />
        <Button name="="  />
      </div>
    </div>
  );
}
