import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { HFlex, Center } from '../layout/layout';

export const Tabs = styled(HFlex)`
  width: 50vw;
  height: 50px;

  ${({ theme }) => {
    return css`
      margin-top: ${theme.margins.xl};
      background-color: ${theme.color.third};
    `;
  }}
`;

export const Tab = styled(Center)`
  width: 100%;

  cursor: pointer;

  transition: 0.1s background ease-in;

  &:hover {
    background: #adb5bd;
  }
`;

export const LinkStyle = styled(Link)`
  width: 100%;

  display: block;
  text-align: center;
`;
