import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const client = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

client.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
