import React from "react";
import styled from "styled-components/macro";
import { CircularProgressbar } from 'react-circular-progressbar';
import { Container, Row, Col, Progress } from "reactstrap";
import BaseScreen from "./BaseScreen";
import { RiCheckLine, RiLinkedinFill, RiGithubLine } from "react-icons/ri";
import profile from "../assets/images/info-profile.png";

const InfosScreen = () => {

  return (
    <BaseScreen>
      <Wrapper>


        <Container fluid="md">
          <section className="section-infos">
            <h1 className="display-2">Infos</h1>

          <Row>
            <Col lg="6">

          <div className="section-infos-profile">

              <img src={profile} alt="profile" className="img-fluid"/>

            <div className="profile-pic-overlay"></div>
          </div>

            </Col>

            <Col lg="6">

                <p className="section-infos-intro">C’est au cours de ma carrière en post-production audiovisuelle que j’ai pu me familiariser avec html et le css.  Depuis, c’est devenu une passion, c’est pourquoi j’en ai fait mon métier! Developpeur front-end depuis plus de deux ans, je cherche aujourd’hui à me perfectionner et aiguiser mes connaissances sur des projets défiants et passionnants.</p>

                <section className="section-infos-about">

                  <h5 className="section-infos-title">Détails</h5>

                  <ul>
                    <li><RiCheckLine/>Enthousiaste</li>
                    <li><RiCheckLine/>Dynamique</li>
                    <li><RiCheckLine/>Rigoureuse</li>
                    <li><RiCheckLine/>Sens du travail d'équipe</li>
                    <li><RiCheckLine/>Autonome</li>
                    <li><RiCheckLine/>Polyvalente</li>
                  </ul>

                </section>

                <section className="section-infos-stats">
                  <h5 className="section-infos-title">Stats</h5>

                  <ul className="stats-list">
                    <li>
                      <h6>Html</h6>

                      <div className="progress-bar-wrapper">
                        <Progress value={97}>
                          <span>97%</span>
                        </Progress>
                      </div>
                    </li>

                    <li>
                      <h6>Css</h6>
                      <div className="progress-bar-wrapper">
                        <Progress value={97}>
                          <span>97%</span>
                        </Progress>
                      </div>
                    </li>

                    <li>
                      <h6>Sass</h6>
                      <div className="progress-bar-wrapper">

                        <Progress value={90}>
                          <span>90%</span>
                        </Progress>
                      </div>
                    </li>

                    <li>
                      <h6>React</h6>
                      <div className="progress-bar-wrapper">
                        <Progress value={80}>
                          <span>80%</span>
                        </Progress>
                      </div>
                    </li>

                    <li>
                      <h6>Jquery</h6>
                      <div className="progress-bar-wrapper">

                        <Progress value={70}>
                          <span>70%</span>
                        </Progress>
                      </div>
                    </li>

                    <li>
                      <h6>Js</h6>
                      <div className="progress-bar-wrapper">

                        <Progress value={60}>
                          <span>60%</span>
                        </Progress>
                      </div>
                    </li>
                  </ul>
                </section>

                <section className="section-infos-circle-stats">

                  <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-xl-4">
                    <div className="col">
                      <div className="section-info-circle-stat-wrapper">
                        <CircularProgressbar value="95" text="95%" strokeWidth="12" className="custom-circular-progress" circleRatio='1'/>
                        Figma
                      </div>
                    </div>
                    <div className="col">
                      <div className="section-info-circle-stat-wrapper">
                        <CircularProgressbar value="85" text="85%" strokeWidth="12" className="custom-circular-progress" circleRatio='1'/>
                        XD
                      </div>
                    </div>
                    <div className="col">
                      <div className="section-info-circle-stat-wrapper">
                        <CircularProgressbar value="75" text="75%" strokeWidth="12" className="custom-circular-progress" circleRatio='1'/>
                        Zeplin
                      </div>
                    </div>
                    <div className="col">
                      <div className="section-info-circle-stat-wrapper">
                        <CircularProgressbar value="65" text="65%" strokeWidth="12" className="custom-circular-progress" circleRatio='1'/>
                        Sketch
                      </div>
                    </div>
                    <div className="col">
                      <div className="section-info-circle-stat-wrapper">
                        <CircularProgressbar value="90" text="90%" strokeWidth="12" className="custom-circular-progress" circleRatio='1'/>
                        Illustrator
                      </div>
                    </div>
                    <div className="col">
                      <div className="section-info-circle-stat-wrapper">
                        <CircularProgressbar value="80" text="85%" strokeWidth="12" className="custom-circular-progress" circleRatio='1'/>
                        Photoshop
                      </div>
                    </div>
                    <div className="col">
                      <div className="section-info-circle-stat-wrapper">
                        <CircularProgressbar value="70" text="70%" strokeWidth="12" className="custom-circular-progress" circleRatio='1'/>
                        After Effect
                      </div>
                    </div>
                    <div className="col">
                      <div className="section-info-circle-stat-wrapper">
                        <CircularProgressbar value="70" text="70%" strokeWidth="12" className="custom-circular-progress" circleRatio='1'/>
                        Premiere
                      </div>
                    </div>
                  </div>
                </section>


                <section className="section-infos-contact">
                  <h4>Vous voulez en savoir plus?</h4>
                  <h2 className="text-stroke">Contactez-moi!</h2>

                  <a href="https://www.linkedin.com/in/franciscaluz-vargas/" target="_blank" rel="noopener noreferrer"><RiLinkedinFill/></a>
                  <a href="https://github.com/franciscaluz" target="_blank" rel="noopener noreferrer"><RiGithubLine/></a>

                </section>

            </Col>

          </Row>

          </section>

        </Container>

      </Wrapper>

    </BaseScreen>
  );
};

export default InfosScreen;
const Wrapper = styled.div`
margin-top: 3em;



`;