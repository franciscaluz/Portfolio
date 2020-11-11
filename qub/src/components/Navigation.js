import React from "react";
import { withRouter, Redirect } from "react-router-dom";
import store from 'store';
import isLoggedIn from './is_logged_in';
import styled from "styled-components/macro";
import logo from "../assets/logo-random.svg";
import help from "../assets/icn-help.svg";
import download from "../assets/icn-download.svg";
import logout from "../assets/icn-logout.svg";
import { Nav, Navbar } from "react-bootstrap";


const handleLogout = history => () => {
  store.remove('loggedIn');
  history.push('/');
}

const Navigation = ({ history }) => {
  if (!isLoggedIn()) {
    return <Redirect to='/' />
  }
  return (
    <Wrapper>
      <Navbar expand="lg">
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" className="img-fluid" />
        </Navbar.Brand>
        <Nav>
          <Nav.Link>
            <span className="nav-desktop">
              Aide
            </span>
            <img src={help} alt="help" className="img-fluid" />
          </Nav.Link>
          <Nav.Link>
            <span className="nav-desktop">
              Télécharger
            </span>
            <img src={download} alt="download" className="img-fluid" />
          </Nav.Link>
          <Nav.Link onClick={handleLogout(history)} className="primary-link">
            <span className="nav-desktop">
              Déconnexion
            </span>
            <img src={logout} alt="download" className="img-fluid" />
          </Nav.Link>
        </Nav>
      </Navbar>
    </Wrapper>
  );
}

export default withRouter(Navigation);
const Wrapper = styled.div`
.navbar {
  display: flex;
  align-items: center;
  width: 100%;
  padding-left: 6%;
  padding-right: 6%;
  
  .navbar-brand {
    padding: 0;
  }

  .navbar-nav {
    margin-left: auto;
    flex-direction : row;
  }

  .nav-link {
      font-weight: 900;
      transition: all .2s ease;
      font-family : 'Montserrat', sans-serif;
      color: #2A364E;
      padding: 0;
      margin-right: 15px;

      &:not(:last-child) {
          pointer-events : none;
      }

      &:nth-child(2){
        border-right: 2px solid;
        padding-right:15px; 
      }

      &:hover {
          color: inherit;
      }
  }

  .nav-link img {
    display: none;
  }

  @media (max-width : 767.98px){
    .navbar-brand {
      max-width : 60px;
    }

    .nav-desktop {
      display : none;
    }
    .nav-link img {
      display: inline-block;
    }
  }
}
`
