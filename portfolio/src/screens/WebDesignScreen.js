import React from "react";
import styled from "styled-components/macro";
import BaseScreen from "./BaseScreen";
import { projects } from "../constant";
import { withRouter, Link } from "react-router-dom";
import { Row, Col, Card } from "reactstrap";

const WebDesignScreen = () => {
  return (
    <BaseScreen>
      <Wrapper>
        <section className="section-web">
          <div className="section-title-wrapper">
            <h1 className="section-title display-2">Projets</h1>
            <div className="section-title-menu">
              <h1 className="display-2 text-stroke">Design</h1>
              <h1 className="display-2 text-stroke">Web</h1>
            </div>
          </div>
          <Row>
            <Col xs={12} className="ml-auto">
              <div className="row row-cols-3">
                {projects
                  .sort((a, b) => b.id - a.id)
                  .map((project, index) => {
                    const {
                      slug,
                      client,
                      project_logo,
                      project_color,
                    } = project;
                    return (
                      <div key={index} className="col card-col">
                        <Link to={`/project/${slug}`} className="card-link">
                          <Card>
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
                              </div>
                            </div>
                          </Card>
                        </Link>
                      </div>
                    );
                  })}
              </div>
            </Col>
          </Row>
        </section>
      </Wrapper>
    </BaseScreen>
  );
};

export default withRouter(WebDesignScreen);

const Wrapper = styled.div`
  .section-web {
    position: relative;
  }
  .section-title-wrapper {
    position: sticky;
    top: 60px;
    left: 0;
    z-index: 3;
    display: inline-block;
    mix-blend-mode: multiply;
  }

  .card-col {
    margin-bottom: 30px;
  }

  .card-link {
    display: block;
    width: 100%;
    border-radius: 0.25em;
    overflow: hidden;
    transition: all 0.3s ease;

    &:hover {
      box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.25);
      transform: translateY(-10px);
    }
  }

  .card {
    border: 0;
  }

  .card-logo-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    img {
      max-width: 150px;
    }
  }
`;
