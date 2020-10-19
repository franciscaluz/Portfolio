import React from "react";
import styled from "styled-components/macro";
import BaseScreen from "./BaseScreen";
import { Link } from "react-router-dom";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from "reactstrap";

const PortfolioScreen = () => {
  return (
    <BaseScreen>
      <Wrapper>
        <section className="section-portfolio">
          <div>
            <h6 className="section-name">Portfolio</h6>
          </div>
          <div className="section-title-wrapper">
            <h1 className="section-title display-2">Projets</h1>
            <div className="section-title-menu">
              <UncontrolledDropdown direction="right">
                <DropdownToggle
                  tag="span"
                  className="display-2 text-stroke underlined-title"
                >
                  Dev
                </DropdownToggle>
                <DropdownMenu>
                  <Link to="" className="dropdown-item">
                    Projet Albums/Login
                  </Link>
                  <Link to="" className="dropdown-item">
                    Projet Wiki/ Crud
                  </Link>
                  <Link to="" className="dropdown-item">
                    Projet Albums/Login
                  </Link>
                  <Link to="" className="dropdown-item">
                    Projet Wiki/ Crud
                  </Link>
                  <Link to="" className="dropdown-item">
                    Projet Albums/Login
                  </Link>
                  <Link to="" className="dropdown-item">
                    Projet Wiki/ Crud
                  </Link>

                  <Link to="/dev" className="dropdown-item">
                    Voir tous les projets dev
                  </Link>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown direction="right">
                <DropdownToggle
                  tag="span"
                  className="display-2 text-stroke underlined-title"
                >
                  Design
                </DropdownToggle>
                <DropdownMenu>
                  <Link to="" className="dropdown-item">
                    Web Design
                  </Link>
                  <Link to="" className="dropdown-item">
                    Design Graphiques
                  </Link>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          </div>
        </section>
      </Wrapper>
    </BaseScreen>
  );
};

export default PortfolioScreen;

const Wrapper = styled.div`
  .dropdown {
    line-height: normal;
    margin-bottom: -2.5em;
  }

  span {
    display: inline-block;
    cursor: pointer;
    height: auto !important;
  }

  .dropdown-menu {
    top: 35% !important;
    margin-left: 2em;
    padding: 0;
    border: 0;
    border-left: 0.25em solid black;
    border-radius: 0;
  }

  .dropdown-item {
    margin-bottom: 0.5em;
    padding: 0 1.5em;
    font-size: 1.125em; //18px
    /*     text-transform: uppercase;
    font-weight: 900; */
    text-transform: none;
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  @media (max-width: 991.98px) {
    .dropdown {
      margin-bottom: -2em;
    }
    .dropdown-item {
      font-size: 1em;
    }
  }

  @media (max-width: 767.98px) {
    .dropdown {
      margin-bottom: -1em;
    }

    .dropdown-item {
      font-size: 0.9em;
    }
  }
`;
