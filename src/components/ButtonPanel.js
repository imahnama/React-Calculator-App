import React from 'react';
import Button from './Button';


export default function ButtonPanel() {
  return (
    <div className="Groups">
      <div className="Group1 d-flex justify-content-around">
        <Button name="AC" />
        <Button name="+/-" />
        <Button name="%" />
        <Button name="÷" />
      </div>
      <div className="Group2 d-flex justify-content-around">
        <Button name="7" />
        <Button name="8" />
        <Button name="9" />
        <Button name="X" />
      </div>
      <div className="Group3 d-flex justify-content-around">
        <Button name="4" />
        <Button name="5" />
        <Button name="6" />
        <Button name="-" />
      </div>
      <div className="Group4 d-flex justify-content-around">
        <Button name="1" />
        <Button name="2" />
        <Button name="3" />
        <Button name="+" />
      </div>
      <div className="Group5 d-flex justify-content-around">
        <Button name="0" />
        <Button name="." />
        <Button name="=" />
      </div>
    </div>
  )
}
