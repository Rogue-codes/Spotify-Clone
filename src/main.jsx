import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import AppProvider from "./utils/AppProvider";
import { initialState, reducer } from "./utils/reducer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider initialState={initialState} reducer={reducer} >
      <App />
    </AppProvider>
  </React.StrictMode>
);
