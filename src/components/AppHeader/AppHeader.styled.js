import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme: { spacing } }) => spacing(3)};
`;
