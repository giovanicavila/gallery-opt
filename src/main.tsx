import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app.tsx";

// biome-ignore lint/style/noNonNullAssertion: non-null assertion is safe here
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>
);
