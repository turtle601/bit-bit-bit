import React from 'react';
import { Link } from 'react-router-dom';

import styled, { css } from 'styled-components';

import { CoinDataProps } from '../types/types';

const Item = styled.div`
  cursor: pointer;
  ${({ theme }) => {
    return css`
      border-top: 1px solid ${theme.color.dark};
      padding: ${theme.paddings.base};
    `;
  }}

  transition: 0.1s background ease-in;

  &:hover {
    background: #fafafa;
  }
`;

const CoinItem = ({ coinData }: CoinDataProps) => {
  console.log(coinData);
  return (
    <Item>
      <Link to={`/${coinData.id}`}>{coinData.name} &rarr; </Link>
    </Item>
  );
};

export default CoinItem;
