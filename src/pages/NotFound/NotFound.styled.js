import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkStyled = styled(Link)`
  display: inline-block;
  color: ${({ theme: { colors } }) => colors.notFoundLinkcolor};
  transition: text-decoration 250ms, transform 250ms;
  &:hover,
  :focus {
    transform: scale(1.02);
    text-decoration: underline;
  }
`;
