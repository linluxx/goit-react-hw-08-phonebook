import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
export const Username = styled.p`
  font-weight: 700;
  color: ${p => p.theme.colors.light};
`;

export const LogOutBtn = styled.button`
  background-color: transparent;
  outline: none;
  border-color: transparent;
  color: ${p => p.theme.colors.light};
  padding: 0;
  transition: all 250ms linear;
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accent};
  }
`;
