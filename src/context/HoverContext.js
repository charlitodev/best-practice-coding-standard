import { createContext, useState } from "react";

export const HoverContextProvider = createContext();

export const HoverContextParent = ({ children }) => {
  const [isActive, setIsActive] = useState("");

  const mouseOnEnter = (name) => {
    setIsActive(name);
    console.log(isActive);
  };

  const mouseOnLeave = () => {
    setIsActive("");
    console.log(isActive);
  };

  return (
    <HoverContextProvider.Provider
      value={{ mouseOnEnter, isActive, mouseOnLeave }}
    >
      {children}
    </HoverContextProvider.Provider>
  );
};
