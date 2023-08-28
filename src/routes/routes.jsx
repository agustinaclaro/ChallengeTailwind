import { createBrowserRouter } from "react-router-dom";
import { ProductListContainer } from "../components/ProductList";
import { ProductDetail } from "../components/ProductDetail";

export const route = createBrowserRouter([
  {
    path: "/",
  },
  {
    path: "/items",
    element: <ProductListContainer />,
  },
  {
    path: "./product/:id",
    element: <ProductDetail />,
  },
]);
