import "./global.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import AppProvider from "./Providers/AppProvider";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<RecoilRoot>
			<AppProvider />
		</RecoilRoot>
	</React.StrictMode>
);
