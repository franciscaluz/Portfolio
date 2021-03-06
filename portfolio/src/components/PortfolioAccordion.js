import React, { useState } from "react";
import styled from "styled-components/macro";
import AccordionItem from "./AccordionItem";


const PortfolioAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  function onItemClick(index) {
    if (index === activeIndex) {
      setActiveIndex(null)
    } else {
      setActiveIndex(index)
    }
  }

  return (
    <Wrapper>
      <AccordionItem index={0} activeIndex={activeIndex} onItemClick={onItemClick} filterKey="Dev" category="dev" label="Dev" url="/dev"/>
      <AccordionItem index={1} activeIndex={activeIndex} onItemClick={onItemClick} filterKey="Design Web" category="web" label="Web" url="/web-design"/>
      <AccordionItem index={2} activeIndex={activeIndex} onItemClick={onItemClick} filterKey="Graph" category="graph" label="Graph" />
    </Wrapper>
  );
};

export default PortfolioAccordion;

const Wrapper = styled.div`
width: 100%;

.accordion-wrapper {
  display: flex;
  justify-content: space-between;
}

.accordion-button-wrapper {
  display: block;
  flex: 0 0 40%;
  width: 100%;
  text-align: right;
}

.accordion-button {
  position: relative;
  display: inline-flex;
  margin-bottom: 0;
  background: transparent;
  border: 0;
  line-height: 0.7;
  cursor: pointer;

  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 0.25em;
    margin-top: 0;
    transition: 0.4s ease;
    opacity: 0;
    background-color: #ff2679;
    mix-blend-mode: darken;
  }

  &:hover {
    color: #ff2679;
    text-decoration: none;
    &:before,
    &:after {
      left: 0;
      width: 100%;
      opacity: 1;
    }
  }

/*   &.collapsed {
    &:before,
    &:after {
      width: 0;
      opacity: 0;
    }
  } */

  &.expanded {
    &:before,
    &:after {
      width: 100%;
      opacity: 1;
    }
  }
}

.accordion-item-wrapper {
  position: relative;
  flex: 0 1 calc(60% - 3em);
  width: 100%;
  max-width: calc(60% - 3em);
}

.accordion-item {
  position: absolute;
  top: 50%;
  left: 0;
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: left;
  border-left: 3px solid #1a1a1a;
  transform: translate(0,-30px);
  transition: opacity 0.4s ease, visibility 0.4s ease, transform 0.4s ease;

  &.collapsed {
    opacity: 0;
    visibility: hidden;
  }

  &.expanded {
    transform: translate(0, 0);
    visibility: visible;
  }
}

.accordion-item-link {
  margin-bottom: 0.25em;
  padding-left: 1em;
  font-weight: 400;
  font-size: 0.9em;
  transition: 0.3s ease;

  &:hover {
    transform: translateX(1em)
  }
  
  &.primary-link {
    margin-top: 0.5em;
    margin-bottom: 0;
    
  }
}

@media(max-width: 1199.98px) {
  .accordion-button-wrapper {
    display: block;
    flex: 0 0 48%;
    width: 100%;
    text-align: right;
  }

  .accordion-item-wrapper {
    position: relative;
    flex: 0 1 calc(50% - 2em);
    max-width: calc(50% - 2em);
  }
}

@media(max-width: 991.98px) {
  .accordion-button-wrapper {
    display: block;
    flex: 0 0 51%;
    width: 100%;
  }
}

@media(max-width: 767.98px) {
  .accordion-button-wrapper {
    flex: 0 0 40%;
    width: 100%;

    button {
      font-size: 10vw;
    }
  }

  .accordion-item-wrapper {
    flex: 0 1 calc(60% - 2em);
    max-width: calc(60% - 2em);
  }

}

@media(max-width: 575.98px) {
  .accordion-wrapper {
    flex-direction: column;
  }
  
  .accordion-button-wrapper {
    display: block;
    text-align: left;
    flex: 0 0 100%;
    width: 100%;

    button {
      font-size: 15vw;
    }
  }
  
  .accordion-item-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    min-height: 0;
    max-width: 100%;
    transition: height 10s ease-in;
  }

  .accordion-item {
    position: static;
    flex-grow: 0;
    width: 100%;
    border-left: none;
    overflow: hidden;
    transition: flex 0.3s ease-in, opacity 0.4s ease, visibility 0.3s ease, transform 0.3s ease;

    &.collapsed {
      flex-grow: 0;
      height: 0;
    }

    &.expanded {
      flex-grow: 1;
      padding: 1em 0;
    }
  }
}
`;
