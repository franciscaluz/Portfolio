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

const Wrapper = styled.div``;
