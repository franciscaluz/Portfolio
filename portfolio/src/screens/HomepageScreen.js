import React, { useEffect, useRef } from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import HomeBg from "../assets/images/homepage-bg.svg";
import Navigation from "../components/Navigation";
import gsap, { TimelineMax } from "gsap";
import TextPlugin from "gsap/TextPlugin";
import EasePack from "gsap/EasePack";


const HomepageScreen = () => {
  let tl = useRef();

  useEffect(() => {
    gsap.registerPlugin(TextPlugin, EasePack);

    const tagLines = [
      "Hey:).",
      // "(OvO)",
    ];


    gsap.fromTo('#cursor', 0.7, {
      autoAlpha: 0
    }, {
      autoAlpha: 1,
      repeat: -1,
      ease: 'SteppedEase.config(1)'
    });

    // create the timeline in .current
    tl.current = new TimelineMax();

    // add to the timeline as normal referencing the ref.current
    tl.current.delay(2);

    for (let i = 0; i < tagLines.length; i++) {
      const tagline = tagLines[i];
      // use the plugins as normal
      tl.current.to("#indexTagline", {
        text: tagline,
        ease: 'SteppedEase.config(1)',
        delay: 0,
        repeatDelay: 2,
        yoyo: true,
        repeat: -1,
      });
    }

  }, []);


  return (
    <Wrapper>
      <Container>
        <Navigation />
        <section className="section-homepage">
          <Row className="align-content-stretch">
            <Col lg={6} xl={6}>
              <div className="homepage-img-wrapper">
                <img src={HomeBg} alt="homepage" className="img-fluid" />
              </div>
            </Col>
            <Col lg={6} xl={6}>
              <div className="homepage-text-wrapper">
                <div className="homepage-title">
                  <h1 className="display-1">
                    <span className="pageTagline" ref={tl} id="indexTagline"></span>
                    <span id="cursor" className="blink">|</span>
                  </h1>
                </div>
                <p className="text-lg">
                  Mon nom est Francisca.
                </p>
                <p className="text-lg homepage-content">
                  Je suis développeur Front-End Junior, passionnée de code, fan
                  de web design, design graphique et animations à mes heures
                  perdues.
                </p>
                <div className="homepage-button-container">
                  <Link to="/portfolio" className="underlined-reversed">
                    Voici mon portfolio
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

  }
  .homepage-title {
    display: block;
    height: 200px;
    margin-bottom: 1em;
  }
  
  
  .display-1 {
  position: relative;
  display: inline-block;
  height: 187px;
  margin-bottom: 0;
  
  .pageTagline {
    position: relative;
    height: 187px !important;
    }
  }
  
  span.blink {
  position: absolute;
  right: -40px;
  }
  
  }
  
  .homepage-content {
  margin-bottom: 2em;
  }
 
  .homepage-button-container {
   text-align: right;
   
   a {
   color: #1a1a1a;
   letter-spacing: -0.05em;
       font-size: 0.875em;
   }
  }
  
`;
