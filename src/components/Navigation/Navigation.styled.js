import styled from 'styled-components';

export const NavStyled = styled.nav`
  display: flex;
  gap: ${({ theme: { spacing } }) => spacing(3)};
`;
