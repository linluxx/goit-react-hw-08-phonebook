import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: ${p => p.theme.colors.light};
  &.active {
    color: ${p => p.theme.colors.accent};
  }
`;
