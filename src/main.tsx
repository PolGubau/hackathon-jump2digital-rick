import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import AppProvider from "./Providers/AppProvider.tsx";
import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecoilRoot>
      <AppProvider />
    </RecoilRoot>
  </React.StrictMode>
);
