import React from "react";
import styled from "styled-components/macro";
import { Navbar, NavbarBrand, Container } from "reactstrap";

import ReactLogo from "../assets/images/logo.svg";

const Navigation = ({children}) => {

  return (
    <Wrapper>
      <Container fluid="md">
        <Navbar expand="xs" className="px-0">
          <NavbarBrand href="/">
            <img src={ReactLogo} alt="logo" className="img-fluid" />
          </NavbarBrand>
          <div className="menu">
            {children}
          </div>
        </Navbar>
      </Container>
    </Wrapper>
  );
};

export default Navigation;
const Wrapper = styled.div`
  background: #ffffff;
  
  .navbar {
    justify-content: space-between;
  }
`;
