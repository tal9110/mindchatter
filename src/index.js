import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import { MantineProvider, Text } from "@mantine/core";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <React.StrictMode>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <App />
      </MantineProvider>
    </React.StrictMode>
    {/* <div className="header">
      <span className="active">ART</span>
      <span>ABOUT</span>
      <span>VISIT</span>
      <span>SHOP</span>
    </div> */}
  </>
);
