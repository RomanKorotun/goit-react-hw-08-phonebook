import styled from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const StyledField = styled(Field)`
  height: 40px;
  width: 100%;
  margin-bottom: ${({ theme: { spacing } }) => spacing(3)};
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.borderColorInput};
  outline: none;
`;

export const Button = styled.button`
  border-radius: ${({ theme: { radius } }) => radius};
  padding-left: ${({ theme: { spacing } }) => spacing(4)};
  padding-top: ${({ theme: { spacing } }) => spacing(3)};
  padding-right: ${({ theme: { spacing } }) => spacing(4)};
  padding-bottom: ${({ theme: { spacing } }) => spacing(3)};
  align-self: center;
  @media only screen and (min-width: 428px) {
    padding-left: ${({ theme: { spacing } }) => spacing(6)};
    padding-right: ${({ theme: { spacing } }) => spacing(6)};
  }

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

export const ErrMsg = styled(ErrorMessage)`
  color: ${({ theme: { colors } }) => colors.errorColor};
  margin-bottom: 20px;
`;
