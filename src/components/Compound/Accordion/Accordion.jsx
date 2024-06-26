import React, { useContext, useState } from "react";
import { createContext } from "react";
const AccordionContext = createContext();
import AccordionItem from "../Accordion/AccordionItem";
import AccordionTitel from "../Accordion/AccordionTitel";
import AccordionContent from "../Accordion/AccordionContent";
export function useAccordionContext() {
  const ctx = useContext(AccordionContext);
  if (!ctx) {
    throw new Error(
      "Accordion related components must be wrapped by <Accordion />"
    )
  }
  return ctx;
}
function Accordion({ children, className }) {
  const [openItemId, setOpenItemId] = useState();
  function toggleItem(id){
    setOpenItemId(prev =>prev === id ? null : id)
  }
  function openItem(id) {
    setOpenItemId(id);
  }
  function closeItem() {
    setOpenItemId(null);
  }
  const contextValue = {
    openItemId,
    openItem,
    closeItem,
    toggleItem
  };
  console.log(children);
  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  );
}

export default Accordion;
Accordion.Item=AccordionItem  
Accordion.Title=AccordionTitel
Accordion.Content=AccordionContent