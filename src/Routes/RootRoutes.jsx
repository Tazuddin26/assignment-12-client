import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/HomePage/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout/>,
      children: [
       {
        path: "/",
        element: <Home />,
       }
      ]
    },
  ]);