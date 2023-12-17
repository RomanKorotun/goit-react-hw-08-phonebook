import styled from 'styled-components';

export const Button = styled.button`
  border-radius: ${({ theme: { radius } }) => radius};
  padding-left: ${({ theme: { spacing } }) => spacing(2)};
  padding-right: ${({ theme: { spacing } }) => spacing(2)};
  cursor: pointer;
  color: ${({ theme: { colors } }) => colors.secondaryColor};
  background-color: ${({ theme: { bgColors } }) => bgColors.bgColorButton};
  border: none;
  transition: background-color 250ms, transform 250ms;
  &:hover,
  :focus {
    background-color: ${({ theme: { bgColors } }) => bgColors.activeBgColor};
    transform: scale(1.02);
  }
`;

export const UserMenuContaineer = styled.div`
  display: flex;
  @media only screen and (max-width: 767px) {
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
  @media only screen and (min-width: 768px) {
    gap: ${({ theme: { spacing } }) => spacing(3)};
  }
`;
