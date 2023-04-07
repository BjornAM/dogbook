import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Profile } from "./pages/profile";
import { DogContext } from "./components/DogContext";
import { CreatePage } from "./pages/Create";
import { Edit } from "./pages/Edit";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/create", element: <CreatePage /> },
  { path: "/profile/:id", element: <Profile /> },
  { path: "/profile/:id/edit", element: <Edit /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DogContext>
      <RouterProvider router={router} />
    </DogContext>
  </React.StrictMode>
);
