import React from 'react';
import styled, { css } from 'styled-components';
import { CoinInfoProps } from '../types/types';

import { Container, Center } from '../layout/layout';

const CoinInfo = ({ info, price }: CoinInfoProps) => {
  return (
    <InfoContainer>
      <InfoRank>
        <p>Rank</p>
        <p>{info?.rank}</p>
      </InfoRank>
      <InfoSymbol>
        <p>Symbol</p>
        <p>{info?.symbol}</p>
      </InfoSymbol>
      <InfoSource>
        <div>
          <p>Open</p>
          <p>Source</p>
        </div>
        <p>{JSON.stringify(info?.open_source)}</p>
      </InfoSource>
      <InfoDescription>{info?.description}</InfoDescription>

      <PriceTotal>
        <p>TOTAL SUPPLY</p>
        <p>{price?.total_supply}</p>
      </PriceTotal>
      <PriceMax>
        <p>MAX SUPPY</p>
        <p>{price?.max_supply}</p>
      </PriceMax>
    </InfoContainer>
  );
};

const InfoLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const InfoStyle = styled(InfoLayout)`
  height: 100%;
  width: 100%;

  ${({ theme }) => {
    return css`
      background-color: ${theme.color.secondary};
    `;
  }}
`;

const InfoContainer = styled(Container)`
  width: 50vw;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 100px;

  gap: 8px;

  ${({ theme }) => {
    return css`
      color: ${theme.color.white};
    `;
  }}
`;

const InfoRank = styled(InfoStyle)``;

const InfoSymbol = styled(InfoStyle)`
  grid-column: 2 / -2;
`;

const InfoSource = styled(InfoStyle)``;

const InfoDescription = styled(Center)`
  overflow-y: auto;
  grid-column: 1 / -1;

  ${({ theme }) => {
    return css`
      color: ${theme.color.primary};
      padding-left: ${theme.paddings.base};
      padding-right: ${theme.paddings.base};
    `;
  }}
`;

const PriceTotal = styled(InfoStyle)`
  grid-column: 1 / 3;
`;

const PriceMax = styled(InfoStyle)`
  grid-column: 3 / 5;
`;

export default CoinInfo;
