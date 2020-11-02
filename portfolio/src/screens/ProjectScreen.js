import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components/macro";
import BaseScreen from "./BaseScreen";
import { Button } from "reactstrap";
import { FiGlobe, FiGithub } from "react-icons/fi";
import { SiEtsy } from "react-icons/si";
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
        <div
          className={isActive ? "section-project opened" : "section-project"}
        >
          <div className="section-project-toggle">
            <Button
              color="left-underline mr-3"
              onClick={() => history.goBack()}
            >
              Retour
            </Button>
            <Button color="left-underline" onClick={handleToggle}>
              {isActive ? "Masquer détails" : "Afficher détails"}
            </Button>
          </div>
          <div className="section-project-content-wrapper">
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
                                  <SiEtsy />
                                </span>
                                Suivre ce lien
                              </span>
                            ) : link.type === "github" ? (
                              <span>
                                <span className="section-url-icon">
                                  <FiGithub />
                                </span>
                                Lien GitHub
                              </span>
                            ) : link.type === "vercel" ? (
                              <span>
                                <span className="section-url-icon">
                                  <FiGlobe />
                                </span>
                                Voir le projet
                              </span>
                            ) : (
                              <span>
                                <span className="section-url-icon">
                                  <FiGlobe />
                                </span>
                                Aller sur le site
                              </span>
                            )}
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
          </div>
        </div>
      </Wrapper>
    </BaseScreen>
  );
};

export default ProjectScreen;

const Wrapper = styled.div``;
