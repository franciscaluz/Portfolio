/*
import React, {useRef, useState} from "react";
import styled from "styled-components/macro";
import BaseScreen from "./BaseScreen";
import { Link } from "react-router-dom";
import { Container, UncontrolledDropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import { projects } from "../constant";
import { useDetectOutsideClick } from "../components/useDetectOutsideClick";

const PortfolioScreen = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  return (
    <BaseScreen>
      <Container fluid="md">
        <Wrapper>
          <section className="section-portfolio">
            <div>
              <h6 className="section-name">Portfolio</h6>
            </div>
            <div className="section-title-wrapper">
              <h1 className="section-title display-2">Projets</h1>
              <div className="section-title-menu">
                <div className="d-inline-flex flex-column">

                  <div className="dropdown d-inline-block">

                    <button className="dropdown-btn display-2 text-stroke underlined-title" onClick={onClick}>Dev</button>
                    <div
                      ref={dropdownRef}
                      className={isActive ? "dropdown-content active" : "dropdown-content"}
                    >
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
                    </div>
                  </div>
                </div>
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
      </Container>
    </BaseScreen>
  );
};

export default PortfolioScreen;

const Wrapper = styled.div`
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-btn {
  display: inline-block;
  cursor: pointer;
}

.dropdown-content {
  position: absolute;
  top: 0;
  right: -130%;
  z-index: 3;
  min-width: 160px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-20px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;

  &.active {
    opacity: 1;
  visibility: visible;
  transform: translateY(0);
  }
}

.dropdown-item {
  color: #1a1a1a;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/!* Change color of dropdown links on hover *!/
.dropdown-content a:hover {background-color: #ddd;}

/!* Show the dropdown menu on hover *!/
.dropdown:hover .dropdown-content {
display: block;
height: auto;
}

/!* Change the background color of the dropdown button when the dropdown content is shown *!/
.dropdown:hover .dropbtn {background-color: #3e8e41;}

  // .dropdown {
  //   line-height: normal;
  //   margin-bottom: -1.5em;
  // }
  //
  // span {
  //   display: inline-block;
  //   cursor: pointer;
  //   height: auto !important;
  // }
  //
  // .dropdown-menu {
  //   top: 35% !important;
  //   margin-left: 2em;
  //   padding: 0;
  //   border: 0;
  //   border-left: 0.25em solid black;
  //   border-radius: 0;
  // }
  //
  // .dropdown-item {
  //   margin-bottom: 0.5em;
  //   padding: 0 1.5em;
  //   font-size: 1.125em; //18px
  //   text-transform: none;
  //
  //   &:last-of-type {
  //     margin-bottom: 0;
  //   }
  // }
  //
  // @media (max-width: 991.98px) {
  //   .dropdown {
  //     margin-bottom: -2em;
  //   }
  //   .dropdown-item {
  //     font-size: 1em;
  //   }
  // }
  //
  // @media (max-width: 767.98px) {
  //   .dropdown {
  //     margin-bottom: -1em;
  //   }
  //
  //   .dropdown-item {
  //     font-size: 0.9em;
  //   }
  // }

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
*/
