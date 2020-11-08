import React, {useRef, useState} from "react";
import styled from "styled-components/macro";
import BaseScreen from "./BaseScreen";
import { Container } from "reactstrap";
import PortfolioAccordion from "../components/PortfolioAccordion";

const PortfolioScreen = () => {

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
              <PortfolioAccordion/>
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

.section-title-wrapper {
width: 100%;
}

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
