import React from "react";
import styled from "styled-components/macro";
import { withRouter, Link, useHistory } from "react-router-dom";
import BaseScreen from "./BaseScreen";
import { projects } from "../constant";
import { Row, Col, Card, Button } from "reactstrap";

const WebDesignScreen = () => {
  const history = useHistory();

  return (
    <BaseScreen>
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
            <Row>
              <Col xs={12} className="ml-auto">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
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
