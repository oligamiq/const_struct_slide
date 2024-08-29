import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
        <Router basename={process.env.NODE_ENV === "production" ? "/const_struct_slide/" : "/"}>
            <App />
        </Router>
	</React.StrictMode>,
);
