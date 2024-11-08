import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import ProductDetail from "../pages/ProductDetail";
import MyCard from "../pages/MyCard";
import ErrorPage from "../pages/ErrorPage";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "AboutUs",
        element: <AboutUs />,
      },
      {
        path: "ProductDetail/:productId",
        element: <ProductDetail />,
      },
      {
        path: "MyCard",
        element: <MyCard />,
      },
    ],
  },
]);

export default router;
