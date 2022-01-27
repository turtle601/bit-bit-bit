import styled, { css } from 'styled-components';

const HFlex = styled.div`
  display: flex;
`;

const VFlex = styled(HFlex)`
  flex-direction: column;
`;

const Center = styled(HFlex)`
  align-items: center;
  justify-content: center;
`;

const Container = styled(VFlex)`
  ${({ theme }) => {
    return css`
      align-items: center;
      margin-top: ${theme.margins.xl};
    `;
  }}
`;

export { HFlex, VFlex, Center, Container };
