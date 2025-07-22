import { RouterProvider as Router } from "react-router-dom";
import { router } from "@app/AppRouter";

export const RouterProvider = () => {
  return <Router router={router} />;
};
