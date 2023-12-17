import styled from 'styled-components';

export const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 767px) {
    width: 100%;
  }
  @media only screen and (min-width: 768px) {
    gap: ${({ theme: { spacing } }) => spacing(3)};
  }
`;
