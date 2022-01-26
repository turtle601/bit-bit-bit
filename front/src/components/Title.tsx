import React from 'react';

import { TitleType } from '../types/types';

const Title = ({ name = 'Coin', toggleTheme }: TitleType) => {
  return (
    <header>
      <h1>{name}</h1>
      <button type="button" onClick={toggleTheme}>
        +
      </button>
    </header>
  );
};

export default Title;
