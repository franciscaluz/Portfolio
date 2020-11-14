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

.section-infos {
  .display-2 {
    margin-bottom: 0.5em;
  }
}

.section-infos-profile {
  position: relative;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;

  img {
    max-width: 90%;
  }
}

.profile-pic-overlay {
  position: absolute;
  top: 30%;
  left: 0;
  display: block;
  height: 30%;
  width: 100%;
  background: #FF2679;
  mix-blend-mode: darken;
}

.section-infos-intro {
  margin-top: 3em;
}

.section-infos-intro,
.section-infos-about,
.section-infos-stats,
.section-infos-circle-stats {
  padding-bottom: 4em;
}

.section-infos-title {
  text-transform: uppercase;
}

.stats-list {
  padding-left: 0;
  list-style: none;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5em;

    h6 {
      margin-bottom: 0;
      font-weight: 600;
      text-transform: uppercase;
    }

    .progress-bar-wrapper {
      flex: 0 1 80%;
      position: relative;
      width: 100%;

      .progress {
        display: flex;
        height: 1.5em;
        overflow: hidden;
        line-height: 0;
        font-size: .825rem;
        background-color: #ffffff;
        border-radius: .25rem;
      }

      .progress-bar {
        display: flex;
        flex-direction: column;
        justify-content: center;
        overflow: hidden;
        color: #fff;
        text-align: center;
        white-space: nowrap;
        background-color: #1a1a1a;
        transition: width .6s ease;
      }
    }
  }
}

.section-infos-about {

  ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding-left: 0;
    list-style: none;

    li {
      flex: 0 1 50%;
      display: flex;
      align-items: center;
      margin-bottom: 1em;
      color: #1a1a1a;
      font-weight: 600;
      text-transform: uppercase;

      svg {
        margin-right: 1em;
        flex: 0 0 20px;
      }
    }
  }
}

.section-infos-circle-stats {
  .col {
    margin-bottom: 2em;
  }
}

.section-info-circle-stat-wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 125px;
  margin: 0 auto;
  color: #1a1a1a;
  font-weight: 600;
  font-size: 0.9em;
  text-align: center;
  text-transform: uppercase;
}

.custom-circular-progress {
  margin-bottom: 1.5em;

  path.CircularProgressbar-trail {
    stroke: #FF2679;
    stroke-linecap: square;
  }

  path.CircularProgressbar-path {
    stroke: #1a1a1a;
    stroke-linecap: square;
    transition: stroke-dashoffset 0.5s ease 0s;
  }

  text.CircularProgressbar-text {
    fill: #1a1a1a;
    font-size: 1.25em;
    font-weight: 500;
  }
}

.section-infos-contact {
  text-align: right;

  h4 {
    margin-bottom: 0;
  }

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height:80px;
    margin-left: 0.5em;
    background: #1a1a1a;
    border-radius: 0.25em;
    color: #ffffff;
    font-size: 3em;
    transition: 0.3s ease;
    &:hover {
      transform: translate(0,10px);
    }
  }
}

@media(max-width: 991.98px) {

  .section-infos-intro,
  .section-infos-about,
  .section-infos-stats,
  .section-infos-circle-stats {
    padding-bottom: 2em;
  }
}

@media(max-width: 767.98px) {

  .section-infos-about {

    ul {

      li {
        flex: 0 0 100%;
        display: flex;
        align-items: center;
        margin-bottom: 0.5em;

        svg {
          margin-right: 1em;
          flex: 0 0 20px;
        }
      }
    }
  }

  .stats-list {

    .progress-bar-wrapper {
      flex: 0 1 75%;
      position: relative;
      width: 100%;
    }
  }

  .section-infos-contact {
    text-align: center;
  }
}


`;