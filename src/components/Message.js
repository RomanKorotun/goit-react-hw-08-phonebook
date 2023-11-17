import styled from 'styled-components';
import BeatLoader from 'react-spinners/BeatLoader';

export const BeatLoaderStyled = styled(BeatLoader)`
  text-align: center;
`;

export const Error = styled.div`
  text-align: center;
  color: red;
  margin-bottom: ${({ theme: { spacing } }) => spacing(3)};
`;
