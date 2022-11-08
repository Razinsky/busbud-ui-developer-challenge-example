import React from 'react';
import './styles/global.scss';
import {Chip} from './components/Chip/Chip';
import {Icon} from './components/Icon/Icon';

function App() {
  return (
    <>
      <Chip iconStart={<Icon name="wifi" />}>Hello There</Chip>
    </>
  );
}

export default App;
