import React from "react";
import styled from "styled-components/macro";
import BaseScreen from "./BaseScreen";
import { Container } from "reactstrap";
import Accordion from "../components/PortfolioAccordion";

const PortfolioScreen = () => {

  return (

    <BaseScreen>

      <Container fluid="md">

        <Wrapper>

          <section className="section-portfolio">

            <div className="section-title-wrapper">

              <div className="section-title-button-container">
                <h6 className="section-name">Portfolio</h6>
              </div>

              <h1 className="section-title display-2">Projets</h1>
              <Accordion/>
            </div>

            <div className="menu-spinner-wrapper">

              <div className="menu-spinner rotate-in">
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
  z-index: 2;
}

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
  opacity: 0;

  h6 {
    margin-bottom: 0;
    font-size: 1em;
    text-transform: uppercase;
  }
}

@media(max-width: 767.98px) {

  .menu-spinner-wrapper {
    position: fixed;
    bottom: 65px;
    right: 15px;
  }

  .menu-spinner {
    width: 100px;
    height: 100px;

    h6 {
      font-size: 0.6em;
    }
  }
}  
`;
