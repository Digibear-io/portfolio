import { createContext, useState } from "react";

export const Context = createContext();

const GlobalContextProvider = ({ children }) => {
  const [navCount, setNavCount] = useState(0);

  const initialState = {
    navCount,
    setNavCount,
  };
  return <Context.Provider value={initialState}>{children}</Context.Provider>;
};

export default GlobalContextProvider;
