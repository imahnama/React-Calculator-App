import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

export default function App() {
  return (
    <div className="app d-flex flex-column mt-5">
      <Display />
      <ButtonPanel />
    </div>
  );
}
