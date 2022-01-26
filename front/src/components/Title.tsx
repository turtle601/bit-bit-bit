import React from 'react';
import styled, { css } from 'styled-components';
import { FiMoon, FiSun } from 'react-icons/fi';

import { Center } from '../layout/layout';

import { TitleType } from '../types/types';

const DarkModeButton = styled(Center)`
  ${({ theme }) => {
    return css`
      cursor: pointer;
      svg {
        font-size: ${theme.fonts.size.lg};
      }
    `;
  }};
`;

const Header = styled.header`
  width: 50vw;
  height: 10vh;

  display: flex;
  align-items: center;

  ${({ theme }) => {
    return css`
      background-color: ${theme.color.primary};
      padding: ${theme.paddings.lg};

      h1 {
        flex: 1;
        font-weight: ${theme.fonts.weight.bold};
        display: flex;
        font-size: ${theme.fonts.size.xl};
      }
    `;
  }}
`;

const Title = ({ name = 'Coin', theme, toggleTheme }: TitleType) => {
  return (
    <Header>
      <h1>{name}</h1>
      <DarkModeButton onClick={toggleTheme}>
        {theme === 'dark' ? <FiSun /> : <FiMoon />}
      </DarkModeButton>
    </Header>
  );
};

export default Title;
