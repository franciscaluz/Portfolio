import React, { useEffect, useRef } from "react";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";
import BaseScreen from "./BaseScreen";
import Masonry from "react-masonry-css";
import { Button, CustomInput } from "reactstrap";
import { graphic } from "../constant";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const GraphicDesignScreen = () => {
  const history = useHistory();
  const revealRefs = useRef([]);
  revealRefs.current = [];
  const breakpointColumnsObj = {
    default: 3,
    991: 3,
    767: 2,
    575: 1,
  };

  useEffect(() => {
    revealRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
          y: 30,
          delay: 0.7,
        },
        {
          duration: 0.6,
          autoAlpha: 1,
          ease: "none",
          y: 0,
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            scrub: 1,
            start: "top 95%",
            end: "top 60%",
            toggleActions: "restart pause reverse reset",
            markers: false,
          },
        }
      );
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <BaseScreen>
      <Wrapper>
        <section className="section-graphic">
          <div className="section-title-wrapper section-sticky">
            <div className="mb-3">
              <Button color="left-underline" onClick={() => history.goBack()}>
                Retour
              </Button>
            </div>
            <div className="d-flex align-bottom justify-content-between w-100 mb-5">
              <div className="">
                <h1 className="section-title display-3">Projets</h1>
                <div className="section-title-menu">
                  <h1 className="display-3 text-stroke">Design</h1>
                  <h1 className="display-3 text-stroke">Graphique</h1>
                </div>
              </div>
              <div className="filter-wrapper">
                <CustomInput
                  type="switch"
                  id="exampleCustomSwitch"
                  name="customSwitch"
                  label="Filtrer"
                />
              </div>
            </div>
          </div>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {graphic
              .sort((a, b) => b.id - a.id)
              .map((item, index) => {
                return (
                  <img
                    key={index}
                    src={item.photo}
                    alt="project"
                    className="img-fluid"
                    ref={addToRefs}
                  />
                );
              })}
          </Masonry>
        </section>
      </Wrapper>
    </BaseScreen>
  );
};

export default GraphicDesignScreen;

const Wrapper = styled.div`
  .section-graphic {
    position: relative;
  }

  .my-masonry-grid {
    display: flex;
    margin-left: -15px; /* gutter size offset */
    width: auto;
    background: #ffffff;
  }
  .my-masonry-grid_column {
    padding-left: 15px; /* gutter size */
    background-clip: padding-box;
  }

  /* Style your items */
  .my-masonry-grid_column > img {
    /* change div to reference your elements you put in <Masonry> */
    width: 100%;
    margin-bottom: 15px;
  }
`;
