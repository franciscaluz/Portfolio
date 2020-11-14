import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../constant";

const AccordionItem = ({label, filterKey, onItemClick, activeIndex, index, category, url}) => {
  const filteredProjects = projects.filter(project => project.project_cat.includes(filterKey));
  const isActive = activeIndex === index;

  return (
      <div className="accordion-wrapper">
        <div className="accordion-button-wrapper">
          <button
              className={`accordion-button display-2 text-stroke ${!isActive ? 'collapsed' : 'expanded'}`}
              onClick={() => onItemClick(index)}
          >
            {label}
          </button>
        </div>
        <div className="accordion-item-wrapper">
          <div
              className={`accordion-item ${!isActive ? 'collapsed' : 'expanded'}`}
              aria-expanded={!isActive}
          >
            {category === "graph" ?
              <Link to="/graphic-design" className="accordion-item-link mb-0">
                Voir tous les projets Graphiques
              </Link>
              :
                <>
              {filteredProjects.map(project => (
                  <Link
                    to={`/project/${project.slug}`}
                    className="accordion-item-link"
                    key={project.slug}
                  >
                    {project.client}
                  </Link>
                ))}

              <Link to={url} className="accordion-item-link primary-link mb-0">
              Voir tous
              </Link>
              </>
            }
          </div>
        </div>
      </div>
  );
};

export default AccordionItem;
