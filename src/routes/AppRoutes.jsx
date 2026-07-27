import { createBrowserRouter, Outlet } from "react-router-dom";

// Layouts
import PublicLayout from "../layouts/PublicLayout";

// Public Pages
import Home from "../pages/Home";
import Products from "../pages/Products";
import Login from "../pages/Login";

// Admin Pages
import Dashboard from "../admin/Dashboard";
import ManageProducts from "../admin/ManageProducts";
import AddProduct from "../admin/AddProduct";
import EditProduct from "../admin/EditProduct";
import Categories from "../admin/Categories";
import EditCategory from "../components/admin/EditCategory";
import Profile from "../pages/Profile";
import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";
import ProductDetails from "../pages/ProductDetails";
import AddCategory from "../admin/AddCategory";
// Routes
import ProtectedRoute from "./ProtectedRoute";
import AdminRoute from "./AdminRoute";

const router = createBrowserRouter([
  // Public Routes
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
        path: "login",
        element: <Login />,
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "products/:id",
        element: <ProductDetails />,
      },
    ],
  },

  // Admin Protected Routes
  {
    path: "/admin",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: (
          <AdminRoute>
            <Dashboard />
          </AdminRoute>
        ),
      },
      {
        path: "products",
        element: (
          <AdminRoute>
            <ManageProducts />
          </AdminRoute>
        ),
      },

      {
        path: "add-product",
        element: (
          <AdminRoute>
            <AddProduct />
          </AdminRoute>
        ),
      },

      {
        path: "edit-product/:id",
        element: (
          <AdminRoute>
            <EditProduct />
          </AdminRoute>
        ),
      },

      {
        path: "categories",
        element: (
          <AdminRoute>
            <Categories />
          </AdminRoute>
        ),
      },

      {
        path: "add-category",
        element: (
          <AdminRoute>
            <AddCategory />
          </AdminRoute>
        ),
      },

      {
        path: "edit-category/:id",
        element: (
          <AdminRoute>
            <EditCategory />
          </AdminRoute>
        ),
      },
    ],
  },
  // removed as they are now in PublicLayout
]);

export default router;
