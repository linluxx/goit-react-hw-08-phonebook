import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 0 10px;
  background-color: ${p => p.theme.colors.dark};
`;
