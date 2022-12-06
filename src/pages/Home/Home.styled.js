import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrap = styled.div`
  padding: 20px;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: baseline;
`;
const Text = styled.h2`
  margin-bottom: 50px;
`;
const LinkTo = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
  color: ${p => p.theme.colors.dark};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms linear;
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accent};
  }
`;

const Svg = styled.span`
  margin-left: 10px;
  margin-top: 5px;
`;

export { Wrap, Title, Text, LinkTo, Svg };
