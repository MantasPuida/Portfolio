import * as React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

const containerId: string = "root";

function getAppRoot(): HTMLElement {
    const element = document.getElementById(containerId);

    if (element != null) {
        return element;
    }

    const div = document.createElement("div");
    div.id = containerId;
    document.body.append(div);

    return div;
}

const appRoot = getAppRoot();
const root = ReactDOM.createRoot(appRoot);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
