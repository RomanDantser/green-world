import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Main from "./pages/Main/Main";
import "./index.css";
import { ConfigProvider } from "antd";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Main />}></Route>),
);

createRoot(document.getElementById("root")).render(
  <ConfigProvider
    theme={{
      token: {
        fontFamily: "'AmaticSC Bold', sans-serif'",
      },
    }}
  >
    <RouterProvider router={router} />
  </ConfigProvider>,
);
