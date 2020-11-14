import React from "react";

const AccordionItem = ({label, isCollapsed, handleClick, children}) => {
  return (
      <div className="accordion-wrapper">
        <div className="accordion-button-wrapper">
          <button className={`accordion-button display-2 text-stroke ${isCollapsed ? 'collapsed' : 'expanded'}`}
                  onClick={handleClick}>
            {label}
          </button>
        </div>
        <div className="accordion-item-wrapper">
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

export default AccordionItem
