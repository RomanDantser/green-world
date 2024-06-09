import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Main from "./pages/Main";

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<Main />}>
  </Route>
));

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);