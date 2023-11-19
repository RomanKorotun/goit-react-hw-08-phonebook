import styled from 'styled-components';

export const Container = styled.div`
  font-size: ${({ theme: { spacing } }) => spacing(10)};
  font-weight: 600;
  line-height: 2.5;
  text-align: center;
  box-shadow: 1px 1px 1px 1px
    ${({ theme: { boxShadowColor } }) => boxShadowColor};
`;
