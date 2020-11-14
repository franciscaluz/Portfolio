import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

const Accordion = ({defaultIndex, onItemClick, children}) => {
  const [openPortfolio, setOpenPortfolio] = useState(defaultIndex);

  const changeItem = itemIndex => {
    if (typeof onItemClick === 'function') onItemClick(itemIndex);
    if (itemIndex !== openPortfolio) setOpenPortfolio(itemIndex);
    else setOpenPortfolio(0)
  };

  const items = children.filter(item => item.type.name === 'AccordionItem');

  return (
      <>
        {items.map(({props}) => (
            <AccordionItem
                key={props.index}
                isCollapsed={openPortfolio !== props.index}
                label={props.label}
                handleClick={() => changeItem(props.index)}
                children={props.children}
            />
        ))}
      </>
  );
};

export default Accordion
