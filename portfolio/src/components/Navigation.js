import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import NavigationModal from "./NavigationModal";
import { Navbar, NavbarBrand, Nav, NavItem, Container } from "reactstrap";
//import { TiSocialFacebookCircular,  TiSocialLinkedinCircular, TiSocialGithubCircular, } from "react-icons/ti";
import ReactLogo from "../assets/images/logo.svg";

const Navigation = () => {
  return (
    <Wrapper>
      <Container>
        <Navbar expand="xs" className="px-0">
          <NavbarBrand href="/">
            <img src={ReactLogo} alt="logo" className="img-fluid" />
          </NavbarBrand>

          <Nav className="navbar-right d-none d-lg-flex" navbar>
            <NavItem>
              <Link to="/Portfolio" className="nav-link">
                Portfolio
              </Link>
            </NavItem>
            <NavItem>
              <Link to="#" className="nav-link">
                A propos
              </Link>
            </NavItem>
          </Nav>
          <div className="navigation-mobile-modal-wrapper d-lg-none">
            <NavigationModal />
          </div>
        </Navbar>
      </Container>
    </Wrapper>
  );
};

export default Navigation;
const Wrapper = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  background: #ffffff;

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .navbar-right {
    display: flex;
    justify-content: flex-end;
    flex: 0 1 30%;

    .btn {
      pointer-events: none;
    }
  }
  .nav-item {
    margin-right: 1em;
  }

  .nav-link {
    color: #000000;
    padding: 0 !important;
    font-weight: 900;
    text-transform: uppercase;
  }
`;
