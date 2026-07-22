import { createBrowserRouter } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout";

import Home from "../pages/Home";
import Products from "../pages/Products";
import About from "../pages/About";
// import Contact from "../pages/Contact";
import Login from "../pages/Login";
// import Signup from "../pages/Signup";
// import Cart from "../pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "login",
        element: <Login />,
      },
      // {
      //   path: "signup",
      //   element: <Signup />,
      // },
      // {
      //   path: "cart",
      //   element: <Cart />,
      // },
    ],
  },
]);

export default router;