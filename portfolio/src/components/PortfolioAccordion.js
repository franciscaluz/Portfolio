import React, {useState} from "react";
import styled from "styled-components/macro";
import { projects } from "../constant";
import { Link } from "react-router-dom";

const PortfolioAccordion = () => {
  const AccordionItem = ({ label, isCollapsed, handleClick, children }) => {
    return (
      <div className="accordion-wrapper">
        <div className="accordion-button-wrapper">
          <button className={`accordion-button display-2 text-stroke ${isCollapsed ? 'collapsed' : 'expanded'}`} onClick={handleClick}>
            {label}
          </button>
        </div>
        <div className={`accordion-item-wrapper ${isCollapsed ? 'collapsed' : 'expanded'}`}>
          <div
            className={`accordion-item ${isCollapsed ? 'collapsed' : 'expanded'}`}
            aria-expanded={isCollapsed}
          >
            {children}
          </div>
        </div>
      </div>
    );
  };

  const Accordion = ({ defaultIndex, onItemClick, children }) => {
    const [bindIndex, setBindIndex] = useState(defaultIndex);

    const changeItem = itemIndex => {
      if (typeof onItemClick === 'function') onItemClick(itemIndex);
      if (itemIndex !== bindIndex) setBindIndex(itemIndex);
    };
    const items = children.filter(item => item.type.name === 'AccordionItem');

    return (
      <>
        {items.map(({ props }) => (
          <AccordionItem
            isCollapsed={bindIndex !== props.index}
            label={props.label}
            handleClick={() => changeItem(props.index)}
            children={props.children}
          />
        ))}
      </>
    );
  };

  return (
    <Wrapper>
      <Accordion defaultIndex="1" onItemClick={console.log}>
        <AccordionItem label="Dev" index="1">
          {projects
            .filter((project) => project.project_cat.includes("Dev"))
            .sort((a, b) => b.id - a.id)
            .map((filteredProject, index) => {
              const { client, slug } = filteredProject;
              return (
                <Link
                  to={`/project/${slug}`}
                  className="accordion-item-link"
                  key={index}
                >
                  {client}
                </Link>
              );
            })}
          <Link to="/dev" className="accordion-item-link">
            Voir tous les projets Dev
          </Link>
        </AccordionItem>
        <AccordionItem label="Web" index="2">
          {projects
            .filter((project) =>
              project.project_cat.includes("Design Web")
            )
            .sort((a, b) => b.id - a.id)
            .map((filteredProject, index) => {
              const { client, slug } = filteredProject;
              return (
                <Link
                  to={`/project/${slug}`}
                  className="accordion-item-link"
                  key={index}
                >
                  {client}
                </Link>
              );
            })}
          <Link to="/web-design" className="accordion-item-link">
            Voir tous les projets Design Web
          </Link>
        </AccordionItem>

        <AccordionItem label="Graph" index="3">
          <Link to="/graphic-design" className="accordion-item-link">
            Voir tous les projets Design Graphiques
          </Link>
        </AccordionItem>
      </Accordion>
    </Wrapper>
  );
};

export default PortfolioAccordion;

const Wrapper = styled.div`
width: 100%;


`;