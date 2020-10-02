/* eslint-disable no-unused-vars */
import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

export default function App() {
  return (
    <div className="app d-flex flex-column mt-5">
      <Display />
      <ButtonPanel />
    </div>
  );
}
