import React, { createContext } from "react";

const NavigationContext = createContext();

function NavigationProvider({ children }) {
  return (
    <NavigationContext.Consumer.Provider value={{}}>
      {children}
    </NavigationContext.Consumer.Provider>
  );
}

export { NavigationProvider };
export default NavigationContext;
