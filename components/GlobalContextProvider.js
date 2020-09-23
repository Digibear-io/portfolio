const { createContext } = require("react");

const Context = createContext();

const GlobalContextProvider = ({ children }) => {
  const initialState = {};
  return <Context.Provider value={initialState}>{children}</Context.Provider>;
};

export default GlobalContextProvider;
