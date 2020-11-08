import React from "react";
import styled from "styled-components/macro";
import { withRouter, Link, useHistory } from "react-router-dom";
import BaseScreen from "./BaseScreen";
import { projects } from "../constant";
import { Container, Button } from "reactstrap";

const WebDesignScreen = () => {
  const history = useHistory();

  return (
    <BaseScreen>
      <Container fluid="md">
        <Wrapper>
          <section className="section-web">
            <div className="section-title-wrapper section-sticky">
              <div className="mb-3">
                <Button color="left-underline" onClick={() => history.goBack()}>
                  Retour
                </Button>
              </div>
              <h1 className="section-title display-3">Projets</h1>
              <div className="section-title-menu">
                <h1 className="display-3 text-stroke">Design</h1>
                <h1 className="display-3 text-stroke">Web</h1>
              </div>
            </div>
            <section className="section-web-design">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                {projects
                  .sort((a, b) => b.id - a.id)
                  .map((project, index) => {
                    const {
                      slug,
                      client,
                      project_type,
                      project_year,
                      project_logo,
                      project_color,
                    } = project;
                    return (
                      <div key={index} className="col card-col">
                        <Link to={`/project/${slug}`} className="card">

                          <div className="card-inner image-ratio-1">

                            <div
                              className="img-wrapper"
                              style={{
                                backgroundColor: `${project_color}`,
                              }}
                            >

                              <div className="card-logo-wrapper">
                                <img
                                  src={project_logo}
                                  alt={client}
                                  className="img-fluid"
                                />
                              </div>

                              <div className="info">
                                <p className="mb-0">{client}</p>
                                { project_type}, {project_year}
                              </div>

                            </div>
                          </div>

                        </Link>
                      </div>
                    );
                  })}
              </div>
            </section>
          </section>
        </Wrapper>
      </Container>
    </BaseScreen>
  );
};

export default withRouter(WebDesignScreen);

const Wrapper = styled.div`
.section-web {
  position: relative;
}

.section-title-menu {
  right: -15%;
}

.section-web-design {
  position: relative;
  z-index: 5;
  background: #ffffff;
}

.card-col {
  margin-bottom: 30px;
}

.card {
  border: 0;
  border-radius: 0.25em;
  overflow: hidden;
  transition: 0.4s ease-out;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    display: block;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: 0.3s;
  }

  &:hover {
    // box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
    transform: translateY(10px);

    &:before {
      opacity: 1;
    }

    .info {
      opacity: 1;
      transform: translateY(-100%);
    }
  }

  .info {
    position:relative;
    z-index: 3;
    padding: 1.5em;
    color: #ffffff;
    font-size: 0.825em;
    font-weight: 400;
    text-align: center;
    opacity: 0;
    transform: translateY(-50%);
    transition: 0.4s;
  }
}

.card-logo-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

  img {
    max-width: 60%;
  }
}
`;
