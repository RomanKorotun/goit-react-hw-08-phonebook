import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LayoutSection = styled.section`
  background-color: ${({ theme: { bgColorSection } }) => bgColorSection};
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  padding: ${({ theme: { spacing } }) => spacing(10)};
  border-radius: ${({ theme: { radius } }) => radius};
  &:not(:last-child) {
    margin-bottom: ${({ theme: { spacing } }) => spacing(3)};
  }
`;

export const TitleH1 = styled.h1`
  margin-bottom: ${({ theme: { spacing } }) => spacing(5)};
`;

export const TitleH2 = styled.h2`
  margin-bottom: ${({ theme: { spacing } }) => spacing(5)};
`;

export const NavLinkStyled = styled(NavLink)`
  transition: color 250ms, text-decoration 250ms, transform 250ms;
  &:hover,
  :focus {
    color: #000000;
    /* text-decoration: underline; */
    transform: scale(1.02);
  }
  &.active {
    color: #000000;
    text-decoration: underline;
  }
`;
