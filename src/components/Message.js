import styled from 'styled-components';
import BeatLoader from 'react-spinners/BeatLoader';

export const BeatLoaderStyled = styled(BeatLoader)`
  text-align: center;
  margin-bottom: -22px;
`;

export const Error = styled.div`
  font-size: ${({ theme: { spacing } }) => spacing(5)};
  text-align: center;
  color: ${({ theme: { colors } }) => colors.errorColor};
  margin-bottom: ${({ theme: { spacing } }) => spacing(-6)};
`;
