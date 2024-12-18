import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import SingleProduct from "./pages/SingleProduct.jsx";
import Contact from "./pages/Contact.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="user/:userid" element={<UserProfile />} />
      <Route path="product/:productid" element={<SingleProduct />} />
      <Route path="contacts" element={<Contact />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
