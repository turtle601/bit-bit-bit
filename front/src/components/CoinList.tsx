import React from 'react';
import styled, { css } from 'styled-components';

import { ChildrenProps } from '../types/types';

const List = styled.div`
  width: 50vw;

  ${({ theme }) => {
    return css`
      color: ${theme.color.dark};
      background-color: ${theme.color.darkWhite};
    `;
  }}
`;

const CoinList = ({ children }: ChildrenProps) => {
  return (
    <>
      <List>{children}</List>
    </>
  );
};

export default CoinList;
