import React from "react";
import styled from "styled-components/macro";
import BaseScreen from "./BaseScreen";
import Masonry from "react-masonry-css";
import { graphic } from "../constant";

const GraphicDesignScreen = () => {
  const breakpointColumnsObj = {
    default: 3,
    991: 3,
    767: 2,
    575: 1,
  };

  return (
    <BaseScreen>
      <Wrapper>
        <section className="section-graphic">
          <div className="section-title-wrapper section-sticky">
            <div className="section-title d-flex align-bottom justify-content-between w-100 mb-5">
              <div className="">
                <h1 className="section-title display-3">Projets</h1>
                <div className="section-title-menu">
                  <h1 className="display-3 text-stroke">Design</h1>
                  <h1 className="display-3 text-stroke">Graphique</h1>
                </div>
              </div>
              <div className="filter-wrapper"></div>
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
