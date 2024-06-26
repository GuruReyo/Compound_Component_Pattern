import { createContext, useContext } from "react";

// import { useAccordionContext } from "./Accordion";
const AccordItemContext = createContext();
export function useAccordionItemContext() {
  const ctx = useContext(AccordItemContext);
  if (!ctx) {
    throw new Error(
      "Accordion item related item components wrapped by <Accordion.Item>."
    );
  }
  return ctx;
}
export default function AccordionItem({ id,children, className }) {
  //   const { openItemId,toggleItem } = useAccordionContext();
  // const
  //   const isOpen = openItemId === id;
  //   function handleClick() {
  //     toggleItem(id);
  //   }

  return (
    <AccordItemContext.Provider value={id}>
      <li className={className}>{children}</li>
    </AccordItemContext.Provider>
  );
}
