import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import HomeBg from "../assets/images/homepage-bg.svg";
import Navigation from "../components/Navigation";

const HomepageScreen = () => {
  return (
    <Wrapper>
      <Container>
        <Navigation />
        <section className="section-homepage">
          <Row className="align-content-stretch">
            <Col lg={6} xl={7}>
              <div className="homepage-img-wrapper">
                <img src={HomeBg} alt="homepage" className="img-fluid" />
              </div>
            </Col>
            <Col lg={6} xl={5}>
              <div className="homepage-text-wrapper">
                <div>
                  <h1 className="display-1">Hey:).</h1>
                  <p className="preformatted">
                    Mon nom est Francisca.
                    <br />
                    Je suis développeur Front-End Junior passionnée du code, fan
                    de web design,design graphique et animations à mes heures
                    perdues.
                  </p>
                  <Link to="/portfolio" className="underlined-reversed">
                    Voir mon portfolio
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </Wrapper>
  );
};

export default HomepageScreen;

const Wrapper = styled.div`
  .navbar-right {
    display: none !important;
  }
  .section-homepage {
    height: auto !important;
    min-height: calc(100vh - 150px);
    display: flex;
    align-items: center;
  }
  .homepage-text-wrapper {
    height: 100%;
    display: flex;
    align-items: center;

    h1 {
      margin-bottom: 50px;
    }
    p {
      margin-bottom: 50px;
    }
  }
`;
