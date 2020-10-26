import React from "react";
import styled from "styled-components/macro";
import BaseScreen from "./BaseScreen";
import { Link } from "react-router-dom";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import { projects } from "../constant";

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
                  {projects
                    .filter((project) => project.project_cat.includes("Dev"))
                    .sort((a, b) => b.id - a.id)
                    .map((filteredProject, index) => {
                      const { client, slug } = filteredProject;
                      return (
                        <Link
                          to={`/project/${slug}`}
                          className="dropdown-item"
                          key={index}
                        >
                          {client}
                        </Link>
                      );
                    })}
                  <Link to="/dev" className="dropdown-item">
                    Voir tous les projets Dev
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
                  {projects
                    .filter((project) =>
                      project.project_cat.includes("Design Web")
                    )
                    .sort((a, b) => b.id - a.id)
                    .map((filteredProject, index) => {
                      const { client, slug } = filteredProject;
                      return (
                        <Link
                          to={`/project/${slug}`}
                          className="dropdown-item"
                          key={index}
                        >
                          {client}
                        </Link>
                      );
                    })}
                  <Link to="/web-design" className="dropdown-item">
                    Voir tous les projets Design Web
                  </Link>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown direction="right">
                <DropdownToggle
                  tag="span"
                  className="display-2 text-stroke underlined-title"
                >
                  Graphic
                </DropdownToggle>
                <DropdownMenu>
                  {projects
                    .filter((project) =>
                      project.project_cat.includes("Design Web")
                    )
                    .sort((a, b) => b.id - a.id)
                    .map((filteredProject, index) => {
                      const { client, slug } = filteredProject;
                      return (
                        <Link
                          to={`/project/${slug}`}
                          className="dropdown-item"
                          key={index}
                        >
                          {client}
                        </Link>
                      );
                    })}
                  <Link to="/graphic-design" className="dropdown-item">
                    Voir tous les projets
                  </Link>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          </div>
          <div className="menu-spinner-wrapper">
            <div className="menu-spinner">
              <h6>Choississez une catégorie</h6>
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
    text-transform: none;

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

  .menu-spinner-wrapper {
    position: fixed;
    bottom: 15%;
    right: 15%;

    .menu-spinner {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      width: 150px;
      height: 150px;
      padding: 20px;
      border-radius: 100%;
      background: #ff2679;
    }

    h6 {
      text-transform: uppercase;
      margin-bottom: 0;
    }
  }
`;
