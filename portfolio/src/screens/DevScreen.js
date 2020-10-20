import React from "react";
import styled from "styled-components/macro";
import BaseScreen from "./BaseScreen";
import { projects } from "../constant";
import { Row, Col, ListGroup } from "reactstrap";
import DevProjectCard from "../components/DevProjectCard";

const DevScreen = () => {
  return (
    <BaseScreen>
      <Wrapper>
        <section className="section-dev">
          <div className="section-title-wrapper">
            <h1 className="section-title display-2">Projets</h1>
            <div className="section-title-menu">
              <h1 className="display-2 text-stroke">Dev</h1>
            </div>
          </div>
          <Row>
            <Col md={9} lg={8} className="ml-auto">
              <ListGroup className="list-group dev-project-card-list">
                {projects
                  .filter((project) => project.project_cat.includes("Dev"))
                  .sort((a, b) => b.id - a.id)
                  .map((filteredProject, index) => {
                    const {
                      id,
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
