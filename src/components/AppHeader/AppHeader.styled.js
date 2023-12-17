import styled from 'styled-components';

export const Header = styled.header`
  @media only screen and (max-width: 767px) {
    display: flex;
    flex-direction: ${({ isLoggedIn }) => {
      switch (isLoggedIn) {
        case true:
          return 'column';
        default:
          return null;
      }
    }};
    gap: 6px;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
