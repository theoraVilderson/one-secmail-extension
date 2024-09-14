import React from "react";
import { createRoot } from "react-dom/client";
import Popup from "./Popup";

const domNode = document.getElementById("root");
const root = createRoot(domNode as any); // createRoot(container!) if you use TypeScript
root.render(<Popup />);
