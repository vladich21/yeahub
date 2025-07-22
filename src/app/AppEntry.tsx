import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { StoreProvider } from "@app/providers/StoreProvider";
import { RouterProvider } from "react-router-dom";
import { router } from "@app/AppRouter";
import "./styles/app.scss";

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);

  root.render(
    <StrictMode>
      <StoreProvider>
        <RouterProvider router={router} />
      </StoreProvider>
    </StrictMode>
  );
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file."
  );
}
