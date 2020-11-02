import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import NavigationModal from "./NavigationModal";
import { Navbar, NavbarBrand, Nav, NavItem, Container } from "reactstrap";
//import { TiSocialFacebookCircular,  TiSocialLinkedinCircular, TiSocialGithubCircular, } from "react-icons/ti";
import ReactLogo from "../assets/images/logo.svg";
import Headroom from "react-headroom";

const Navigation = () => {
  return (
    <Headroom>
      <Wrapper>
        <Container fluid="md">
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
                  Infos
                </Link>
              </NavItem>
            </Nav>
            <div className="navigation-mobile-modal-wrapper d-lg-none">
              <NavigationModal />
            </div>
          </Navbar>
        </Container>
      </Wrapper>
    </Headroom>
  );
};

export default Navigation;
const Wrapper = styled.div`
  background: #ffffff;
  .navbar {
    justify-content: space-between;
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
