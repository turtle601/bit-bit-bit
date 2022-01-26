import styled from 'styled-components';

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

export { HFlex, VFlex, Center };
