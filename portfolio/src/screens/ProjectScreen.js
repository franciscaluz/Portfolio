import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components/macro";
import BaseScreen from "./BaseScreen";
import {Button, Container} from "reactstrap";
import { FaEtsy } from "react-icons/fa";
import { RiGithubLine, RiLinksLine  } from "react-icons/ri";
import { projects } from "../constant";

const ProjectScreen = () => {
  const history = useHistory();
  const { slug } = useParams();

  function findData(slug) {
    const projectData = projects;
    return projectData.find((o) => o.slug === slug);
  }

  const project = findData(slug);

  const [isActive, setIsActive] = useState(true);
  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
      <BaseScreen>
        <Wrapper>

          <section
              className={isActive ? "section-project opened" : "section-project"}
          >
            <section className="section-project-toggle">

              <Container fluid="md">

                <div className="d-flex align-items-center">
                <Button
                    color="left-underline mr-3"
                    onClick={() => history.goBack()}
                >
                  Retour
                </Button>

                <Button color="left-underline" onClick={handleToggle} className="section-toggle-btn">
                  {isActive ? "Masquer détails" : "Afficher détails"}
                </Button>
                </div>
              </Container>

            </section>

            <Container fluid="md">

              <section className="section-project-content-wrapper">

                <div className="section-project-menu-wrapper">

                  <div className="section-project-menu">

                    <div className="menu">

                      <div className="section-title-wrapper">
                        <h1 className="display-3">Projet</h1>
                        <div className="section-title-menu">
                          <h1 className="text-stroke display-3">Détails</h1>
                        </div>

                      </div>
                      <h3 className="mb-0">{project.client}</h3>

                      <p className="section-subtitle text-lg">
                        {project.client_type}&nbsp;({project.project_year})
                      </p>

                      <p>{project.details}</p>

                      <p className="section-tool">
                        {project.tools.map((tool, index) => {
                          return <span key={index}>#{tool}</span>;
                        })}
                      </p>

                      <ul className="section-url">
                        {project.urls.map((link, index) => {
                          return (
                              <li key={index}>
                                <a
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                  {link.type === "etsy" ? (
                                      <span>
                                <span className="section-url-icon">
                                  <FaEtsy />
                                </span>
                                Suivre ce lien
                              </span>
                                  ) : link.type === "github" ? (
                                      <span>
                                <span className="section-url-icon">
                                  <RiGithubLine />
                                </span>
                                Lien GitHub
                              </span>
                                  ) : link.type === "vercel" ? (
                                      <span>
                                <span className="section-url-icon">
                                  <RiLinksLine />
                                </span>
                                Voir le projet
                              </span>
                                  ) : link.type === "link" ?(
                                      <span>
                                <span className="section-url-icon">
                                  <RiLinksLine />
                                </span>
                                Aller sur le site
                              </span>
                                  ) : <></>}
                                </a>
                              </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="section-project-content">

                  <div className="section-project-image-wrapper">
                    {project.photos.map((photo, index) => {
                      return (
                          <div key={index} className="section-project-image">
                            <p className="text-thin text-sm text-right">
                              {photo.name}
                            </p>
                            <img
                                src={photo.photo}
                                className="img-fluid"
                                alt="project"
                            />
                          </div>
                      );
                    })}
                  </div>
                </div>
              </section>
            </Container>
          </section>
        </Wrapper>
      </BaseScreen>
  );
};

export default ProjectScreen;

const Wrapper = styled.div`
.section-project {
  position: relative;
  padding-top: 60px;
}

.section-project-toggle {
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  background: #ffffff;
}

.section-project-content-wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: nowrap;
}

.section-project-menu-wrapper {
  position: sticky;
  left: 0;
  top: 60px;
  z-index: 2;
  height: 100%;
  flex: 0;
  width: 0;
  overflow: hidden;
  visibility: hidden;
  transition: flex 0.3s ease, visibility 0.3s ease;
}

.section-project-content {
  flex: 1;
  display: inline-block;
  width: 100%;
  max-width: 100%;
  height: 100%;
  transition: max-width 0.3s ease;
}

.menu {
  display: inline-block;
  opacity: 0;
  transform: translate(-100%, 0);
  transition: transform 0.3s ease, opacity 0.1s ease;
}

.section-project.opened {

  .section-project-menu-wrapper {
    flex: 0 1 33%;
    padding-right: 30px;
    visibility: visible;
  }

  .menu {
    opacity: 1;
    transform: translate(0%, 0);
  }

  .section-project-content {
    max-width: 66%;
  }
}

.section-subtitle {
  font-weight: 300;
  margin-bottom: 2em;
}

.section-tool {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-size: 0.825em;
  margin-bottom: 2em;
  text-transform: uppercase;

  span {
    margin-right: 0.5em;
  }
}

.section-url {
  display: inline-flex;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 0;
  list-style: none;

  li {
    margin-bottom: 0.5em;
  }

  a {
    display: inline-flex;
    align-items: center;
    font-weight: 300;
    font-size: 0.8em;
    letter-spacing: 0.05em;

    .section-url-icon {
      flex: 0 0 20px;
      width: 20px;
      height: 20px;
      margin-right: 1em;
    }
  }
}

.section-project-image {
  margin-bottom: 60px;

  h4 {
    text-align: right;
  }

  img {
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
  }
}

@media (max-width: 991.98px) {

  .section-project-content-wrapper {
    flex-direction: column;
  }

  .section-title-wrapper {
    margin-bottom: 1em;
  }

  .section-project-toggle {
    z-index: 0;
  }

  .section-toggle-btn {
    display: none;
  }

  .section-project-menu-wrapper {
    z-index: 0;
    flex: 0 0 100%;
    width: 100%;
    height: 100%;
    padding-right: 0;
    transition: all 0.3s ease;
  }

  .menu {
    opacity: 1;
    transform: translate(0, 0%);
    transition: none;
  }

  .section-project-content {
    position: relative;
    z-index: 1;
    flex: 1 1 100%;
    width: 100%;
    transition: all 0.3s ease;
  }

  .section-project {
    padding-top: 1.5em;

    .section-project-menu-wrapper {
      visibility: visible !important;
      height: 100%;
      padding-right: 0 !important;
    }

    .section-project-content {
      max-width: 100% !important;
      width: 100% !important;
      background: #ffffff;
    }
  }

  .section-subtitle {
    margin-bottom: 1em;
  }
  .section-url {
    flex-direction: row;

    li {
      margin-right: 0.5em;
    }
  }
}


`;
