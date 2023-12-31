import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LayoutSection = styled.section`
  background-color: ${({ theme: { bgColors } }) => bgColors.bgColorSection};
  max-width: 430px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 1px 1px 10px 1px
    ${({ theme: { boxShadowColor } }) => boxShadowColor};
  padding-top: ${({ theme: { spacing } }) => spacing(6)};
  padding-bottom: ${({ theme: { spacing } }) => spacing(6)};
  border-radius: ${({ theme: { radius } }) => radius};
  &:not(:last-child) {
    margin-bottom: ${({ theme: { spacing } }) => spacing(3)};
  }
`;

export const Container = styled.div`
  max-width: 428px;
  padding-left: ${({ theme: { spacing } }) => spacing(4)};
  padding-right: ${({ theme: { spacing } }) => spacing(4)};
  margin-left: auto;
  margin-right: auto;
`;

export const NavLinkStyled = styled(NavLink)`
  transition: color 250ms, text-decoration 250ms, transform 250ms;
  &:hover,
  :focus {
    color: ${({ theme: { colors } }) => colors.activeColorLink};
    transform: scale(1.02);
  }
  &.active {
    color: ${({ theme: { colors } }) => colors.activeColorLink};
    text-decoration: underline;
  }
`;
