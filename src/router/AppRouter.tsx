import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Solutions from "../pages/Solutions";
import Careers from "../pages/Careers";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
      path: "portfolio",
      element: <Portfolio />,
      },
      {
        path: "solutions",
        element: <Solutions />,
      },
      {
        path: "careers",
        element: <Careers />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);