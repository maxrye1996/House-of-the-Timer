import React from 'react';
import ReactDOM from 'react-dom/client';
import HouseOfTheTimer from './pages/houseOfTheTimer';
import Wrapper from './components/wrapper';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Wrapper>
    <HouseOfTheTimer />
  </Wrapper>
);

