import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  background-color: #EAC4BC;
  height: 24vh;
  width: 100%;
  min-height: 300px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Header = ({ children }) => (
  <Container>
    <h1>jamTypeApp&trade;</h1>
    {children}
  </Container>
)

export default Header
