import React from "react";
import styled from "styled-components/macro";
import BaseScreen from "./BaseScreen";
import { Link } from "react-router-dom";
import { Row, Col, Card, CardColumns } from "reactstrap";
import Soch from "../assets/images/webdesign-soch-1.jpg";
import SeptCinq from "../assets/images/webdesign-septcinq-prev.jpg";
import AgenceVoyage from "../assets/images/webdesign-abdm-prev.jpg";
import Unity from "../assets/images/webdesign-unity-1.jpg";
import Rosemont from "../assets/images/webdesign-rosemont-prev.jpg";
import Qub from "../assets/images/webdesign-qub-prev.jpg";
import Wiki from "../assets/images/webdesign-wiki-prev.jpg";

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
              <CardColumns>
                <Card>
                  <div className="preview card-image-wrapper">
                    <div
                      className="img-wrapper"
                      style={{ backgroundImage: `url(${Wiki})` }}
                    ></div>
                  </div>
                </Card>
                <Card>
                  <div className="preview card-image-wrapper">
                    <div
                      className="img-wrapper"
                      style={{ backgroundImage: `url(${Qub})` }}
                    ></div>
                  </div>
                </Card>
                <Card>
                  <div className="preview card-image-wrapper">
                    <div
                      className="img-wrapper"
                      style={{ backgroundImage: `url(${Soch})` }}
                    ></div>
                  </div>
                </Card>
                <Card>
                  <div className="preview-alt card-image-wrapper">
                    <div
                      className="img-wrapper"
                      style={{ backgroundImage: `url(${Unity})` }}
                    ></div>
                  </div>
                </Card>
                <Card>
                  <div className="preview card-image-wrapper">
                    <div
                      className="img-wrapper"
                      style={{ backgroundImage: `url(${Rosemont})` }}
                    ></div>
                  </div>
                </Card>
                <Card>
                  <div className="preview card-image-wrapper">
                    <div
                      className="img-wrapper"
                      style={{ backgroundImage: `url(${SeptCinq})` }}
                    ></div>
                  </div>
                </Card>
                <Card>
                  <div className="preview card-image-wrapper">
                    <div
                      className="img-wrapper"
                      style={{ backgroundImage: `url(${AgenceVoyage})` }}
                    ></div>
                  </div>
                </Card>
              </CardColumns>
            </Col>
          </Row>
        </section>
      </Wrapper>
    </BaseScreen>
  );
};

export default WebDesignScreen;

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

  .card {
    border: 0;
    border-radius: 0.25em;
    overflow: hidden;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
  }
`;
