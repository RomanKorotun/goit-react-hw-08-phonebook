import styled from 'styled-components';
import BeatLoader from 'react-spinners/BeatLoader';

export const BeatLoaderStyled = styled(BeatLoader)`
  text-align: center;
  margin-bottom: -22px;
`;

export const Error = styled.div`
  font-size: 20px;
  text-align: center;
  color: red;
  margin-bottom: ${({ theme: { spacing } }) => spacing(-6)};
`;
