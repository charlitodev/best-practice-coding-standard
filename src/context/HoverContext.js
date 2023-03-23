import { createContext, useState } from "react";

export const HoverContextProvider = createContext();

export const HoverContextParent = ({ children }) => {
  const [isActive, setIsActive] = useState("");

  return (
    <HoverContextProvider.Provider value={{ isActive, setIsActive }}>
      {children}
    </HoverContextProvider.Provider>
  );
};
