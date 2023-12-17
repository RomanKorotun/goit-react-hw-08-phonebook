import styled from 'styled-components';

export const AuthNavContainer = styled.div`
  display: flex;
  gap: ${({ theme: { spacing } }) => spacing(1)};
  @media only screen and (min-width: 428px) {
    gap: ${({ theme: { spacing } }) => spacing(3)};
  }
`;
