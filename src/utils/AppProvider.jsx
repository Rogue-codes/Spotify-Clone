import React, { createContext, useContext, useReducer } from "react";

export const appContext = createContext();

export default function AppProvider({children, initialState, reducer}) {
  return <appContext.Provider value={useReducer(reducer,initialState)}>
    {children}
  </appContext.Provider>;
}

export const useAppContext = () => useContext(appContext)
