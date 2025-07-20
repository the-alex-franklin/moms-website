import { hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "virtual:uno.css";

hydrateRoot(document.getElementById("root")!, <App />);
