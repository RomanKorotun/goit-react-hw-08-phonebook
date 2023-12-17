import styled from 'styled-components';

export const HomeCard = styled.div`
  font-weight: 600;
  line-height: 2.5;
  text-align: center;
  box-shadow: 1px 1px 1px 1px
    ${({ theme: { boxShadowColor } }) => boxShadowColor};
  @media only screen and (max-width: 427px) {
    font-size: ${({ theme: { spacing } }) => spacing(6)};
  }
  @media only screen and (min-width: 428px) {
    font-size: ${({ theme: { spacing } }) => spacing(8)};
  }

  @media only screen and (min-width: 768px) {
    font-size: ${({ theme: { spacing } }) => spacing(10)};
  }
`;
