import React from "react";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";
import BaseScreen from "./BaseScreen";
import { projects } from "../constant";
import { Container, Row, Col, ListGroup, Button } from "reactstrap";
import DevProjectCard from "../components/DevProjectCard";

const DevScreen = () => {
  const history = useHistory();
  return (
      <BaseScreen>
        <Container fluid="md">
          <Wrapper>
            <section className="section-dev">
              <div className="section-title-wrapper section-sticky">
                <div className="mb-3">
                  <Button color="left-underline" onClick={() => history.goBack()}>
                    Retour
                  </Button>
                </div>
                <h1 className="section-title display-3">Projets</h1>
                <div className="section-title-menu">
                  <h1 className="display-3 text-stroke">Dev</h1>
                </div>
              </div>
              <Row>
                <Col md={8} lg={9} className="ml-auto">
                  <ListGroup className="list-group dev-project-card-list">
                    {projects
                        .filter((project) => project.project_cat.includes("Dev"))
                        .sort((a, b) => b.id - a.id)
                        .map((filteredProject, index) => {
                          const {
                            id,
                            slug,
                            client,
                            project_logo,
                            project_color,
                            details,
                            tools,
                          } = filteredProject;
                          return (
                              <DevProjectCard
                                  key={index}
                                  id={id}
                                  slug={slug}
                                  name={client}
                                  description={details}
                                  background={project_color}
                                  logo={project_logo}
                                  utilities={tools}
                              />
                          );
                        })}
                  </ListGroup>
                </Col>
              </Row>
            </section>
          </Wrapper>
        </Container>
      </BaseScreen>
  );
};

export default DevScreen;

const Wrapper = styled.div`
  .section-dev {
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

  .dev-project-card-list {
    li:nth-child(even) {
      .dev-project-card {
        flex-direction: row-reverse;
      }
      .dev-project-card-img-wrapper {
        margin-right: 0;
        margin-left: 2em;
      }
    }
  }
`;
