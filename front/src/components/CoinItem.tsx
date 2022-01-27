import React from 'react';

import styled, { css } from 'styled-components';

import { CoinDataProps } from '../types/types';

import { LinkStyle } from '../styles/custom';

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
      <LinkStyle to={`/${coinData.id}`}>{coinData.name} &rarr; </LinkStyle>
    </Item>
  );
};

export default CoinItem;
