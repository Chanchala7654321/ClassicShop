import { createBrowserRouter } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import About from "../pages/About";
import ManageProducts from "../admin/ManageProducts";
import AddProduct from "../admin/AddProduct";
import EditProduct from "../admin/EditProduct";
import Categories from "../admin/Categories";
import EditCategory from "../components/admin/EditCategory";
// import Contact from "../pages/Contact";
import Login from "../pages/Login";
// import Signup from "../pages/Signup";
// import Cart from "../pages/Cart";

import Dashboard from "../admin/Dashboard";  

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
    ],
  },

  // Admin Routes
  {
    path: "/admin",
    element: <Dashboard />,
  },
  {
    path: "/admin/products",
    element: <ManageProducts />,
  },
  {
    path: "/admin/add-product",
    element: <AddProduct />,
  },
  {
    path: "/admin/edit-product/:id",
    element: <EditProduct />,
  },
  {
    path: "/admin/categories",
    element: <Categories />,
  },
  {
    path: "/admin/edit-category/:id",
    element: <EditCategory />,
  }
]);


export default router;