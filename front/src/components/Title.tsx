import React from 'react';

import styled, { css } from 'styled-components';
import { FiMoon, FiSun } from 'react-icons/fi';

import { Center } from '../layout/layout';

import { TitleType } from '../types/types';

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

const DarkModeButton = styled(Center)`
  ${({ theme }) => {
    return css`
      height: 100%;

      background: none;
      outline: none;
      border: none;

      background-color: #868396;
      color: ${theme.color.white};
      padding-left: ${theme.paddings.lg};
      padding-right: ${theme.paddings.lg};
      font-size: ${theme.fonts.size.lg};

      display: flex;
      align-items: center;

      cursor: pointer;

      transition: 0.1s background ease-in;

      &:hover {
        background: #adb5bd;
      }
    `;
  }}
`;

const Header = styled.header`
  width: 50vw;
  height: 10vh;

  display: flex;
  align-items: center;

  ${({ theme }) => {
    return css`
      background-color: ${theme.color.primary};

      h1 {
        padding-left: ${theme.paddings.lg};
        flex: 1;
        font-weight: ${theme.fonts.weight.bold};
        display: flex;
        font-size: ${theme.fonts.size.base};
      }
    `;
  }}
`;

export default Title;
