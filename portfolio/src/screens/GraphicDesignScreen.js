import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";
import BaseScreen from "./BaseScreen";
import Masonry from "react-masonry-css";
import { Container, Button } from "reactstrap";
import { graphic } from "../constant";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const GraphicDesignScreen = () => {
  const history = useHistory();
  const [graphics, setGraphics] = useState(graphic);

  const revealRefs = useRef([]);
  revealRefs.current = [];
  const breakpointColumnsObj = {
    default: 3,
    991: 3,
    767: 2,
    575: 1,
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

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
          ease: "power1.inOut",
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

  const handleFiltre = (filtre) => {
    if (filtre) {
      const filteredGraphics = graphic.filter(project => project.name !== 'Inspiration');
      setGraphics(filteredGraphics)
    } else {
      setGraphics(graphic)
    }
  };

  return (
    <BaseScreen>
      <Container fluid="md">
        <Wrapper>

          <section className="section-graphic">

            <section className="section-title-wrapper section-sticky">

              <div className="section-title-btn-container">
                <Button color="left-underline" onClick={() => history.goBack()}>
                  Retour
                </Button>
              </div>

              <div className="section-title-content">

                <div className="section-title-content-inner">

                  <h1 className="section-title display-3">Projets</h1>

                  <div className="section-title-menu">
                    <h1 className="display-3 text-stroke">Design</h1>
                    <h1 className="display-3 text-stroke mb-0">Graphique</h1>
                    <span className="text-thin">& inspirations</span>
                  </div>

                </div>

                <div className="section-graphic-filter-wrapper">

                  <div className="section-graphic-filter-content">

                    <h6>Filtrer</h6>

                    <div>
                      <input id="toggle-off" className="toggle toggle-left" name="toggle" defaultChecked={true} type="radio"/>
                      <label htmlFor="toggle-off" className="filter-btn" onClick={() => handleFiltre(false)} >Non</label>

                      <input id="toggle-on" className="toggle toggle-right" name="toggle" type="radio" />
                      <label htmlFor="toggle-on" className="filter-btn" onClick={() => handleFiltre(true)}>Oui</label>
                    </div>

                  </div>

                </div>

              </div>

            </section>

            <section className="section-graphic-content">

              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
              >
                {graphics
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

          </section>

        </Wrapper>

      </Container>

    </BaseScreen>
  );
};

export default GraphicDesignScreen;

const Wrapper = styled.div`
.section-graphic {
  position: relative;
}

.section-sticky {
  width: 100%;
}

.section-title-content {
  display: flex;
  justify-content: space-between;
}

.section-title-content-inner {
  flex: 0 0 auto;
  max-height: 200px;
}

.section-graphic-filter-wrapper {
  display: flex;
  align-items: flex-end;

  h6 {
    margin-right: 1em;
    margin-bottom: 0;
    font-size: 0.9em;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.25em;
  }

  .section-graphic-filter-content {
    display: flex;
    align-items: center;
  }

  .filter-btn {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 40px;
    padding: 0;
    border: 3px solid #1a1a1a;
    overflow: hidden !important;
    transition: background 600ms ease, color 600ms ease;
  }

  label {
    margin-bottom: 0;
    text-transform: uppercase;
    font-size: 0.625em;
    font-weight: 400;
  }

  input[type="radio"].toggle {
    display: none;

    & + label {
      cursor: pointer;
      min-width: 80px;

      &:hover {
        background: none;
        color: #1a1a1a;
      }

      &:after {
        content: "";
        position: absolute;
        top: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        background: #1a1a1a;
        transition: left 200ms cubic-bezier(0.77, 0, 0.175, 1);
      }
    }

    &.toggle-left + label {
      border-right: 0;

      &:after{
        left: 100%
      }
    }

    &.toggle-right + label{
      margin-left: -5px;
      &:after{
        left: -100%;
      }
    }
    &:checked + label {
      cursor: default;
      color: #fff;
      transition: color 200ms;
      
      &:after {
        left: 0;
      }
    }
  }
}

.section-graphic-content {
  position: relative;
  z-index: 1;
  background: #ffffff;
}

.my-masonry-grid {
  display: flex;
  margin-left: -15px;
  width: auto;
}
.my-masonry-grid_column {
  padding-left: 15px;
  background-clip: padding-box;
}

.my-masonry-grid_column > img {
  width: 100%;
  margin-bottom: 15px;
}

@media (max-width: 991.98px) {
  .section-graphic-filter-wrapper {
    align-items: flex-start;

    .filter-btn {
      width: 50px;
      height: 30px;
      border-width: 2px;
    }

    input[type="radio"].toggle + label {
      min-width: 50px;
    }

    .section-graphic-filter-content {
      align-items: flex-end;
      flex-direction: column;

      h6 {
        margin-right: 0;
        margin-bottom: 0.5em;
        font-size: 0.7em;
      }
    }
  }
}

@media (max-width: 767.98px) {
  
  .section-title-content {
    display: block;
  }
  
  .section-title-content-inner {
    display: inline-block;
    max-height: unset;
  }

  .section-graphic-filter-wrapper {
    display: block;

    .section-graphic-filter-content {
      align-items: center;
          justify-content: space-between;
      flex-direction: row;

      h6 {
        margin-right: 1em;
        margin-bottom: 0;
      }
    }
  }
}
`;
