import React, { useState, useEffect } from "react";
import { useParams, useLocation, useRouteMatch } from "react-router-dom";
import styled from "styled-components/macro";
import BaseScreen from "./BaseScreen";
import { Row, Col, Button } from "reactstrap";
import { FiX, FiGlobe, FiGithub } from "react-icons/fi";
import { projects } from "../constant";

const ProjectScreen = () => {
  const { slug } = useParams();

  function findData(slug) {
    const projectData = projects;
    return projectData.find((o) => o.slug === slug);
  }

  const project = findData(slug);
  return (
    <BaseScreen>
      <Wrapper>
        <div className="section-project">
          <div className="section-project-menu">
            <div>
              <h6 className="section-name">Projet</h6>
              <Button color="icon">
                <FiX />
              </Button>
            </div>
            <h1 className="section-title">{project.client}</h1>
            <p className="section-subtitle">{project.client_type}</p>
            <p>
              {project.details}
              <br />({project.project_year})
            </p>
            <p>
              {project.tools.map((tool, index) => {
                return (
                  <span key={index} className="section-tool">
                    #{tool}
                  </span>
                );
              })}
            </p>
            {project.url_github ? (
              <p className="section-url">
                <span className="section-url-icon">
                  <FiGithub />
                </span>
                <a
                  href={project.url_github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lien GitHub
                </a>
              </p>
            ) : (
              <span></span>
            )}
            {project.url_vercel ? (
              <p className="section-url">
                <span className="section-url-icon">
                  <FiGlobe />
                </span>
                <a
                  href={project.url_vercel}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir le projet
                </a>
              </p>
            ) : (
              <span></span>
            )}
          </div>

          <div className="section-project-content">
            <div className="section-project-image-wrapper">
              {project.photos.map((photo, index) => {
                return (
                  <div key={index} className="section-project-image">
                    <h4 photo={photo.name}>{photo.name}</h4>
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
      </Wrapper>
    </BaseScreen>
  );
};

export default ProjectScreen;

const Wrapper = styled.div`
  .section-project {
    position: relative;
    display: flex;
    align-items: stretch;
    align-content: stretch;
    justify-content: space-between;
    flex-direction: row;
  }
  .section-project-menu {
    position: sticky;
    top: 60px;
    left: 0;
    z-index: 3;
    display: inline-flex;
    flex-direction: column;
    flex: 0 1 calc(100% / 3 - 15px);
    width: 100%;
    height: 50%;
    max-width: calc(100% / 3 - 15px);
    padding: 0 15px 60px 0;
  }

  .section-title {
    margin-bottom: 0;
  }

  .section-subtitle {
    font-size: 500;
    margin-bottom: 2em;
  }

  .section-url {
    display: flex;
    align-items: center;

    a {
      font-size: 0.9em;
      letter-spacing: -0.05em;
    }

    .section-url-icon {
      flex: 0 0 18px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 18px;
      height: 18px;
      margin-right: 1em;
      padding: 2px;
      border: 1px solid #000000;
      border-radius: 100%;
      background: #000000;
      color: #ffffff;
    }
    svg {
      width: 100%;
      max-width: 14px;
    }
  }

  .section-project-content {
    display: inline-block;
    flex: 0 1 calc(100% / 3 * 2);
    width: 100%;
    max-width: calc(100% / 3 * 2);
    height: 100%;
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
`;
