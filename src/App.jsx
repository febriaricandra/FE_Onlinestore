import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProductCard from "./pages/ProductCard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthProvider } from "./context/AuthContext";
import User from "./pages/dashboard/User";
import Protected from "./components/middleware/Protected";
import Admin from "./pages/dashboard/Admin";
import Error from "./pages/Error";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductCard />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
        <Route
          path="/checkout"
          element={
            <Protected role="user">
              <Checkout />
            </Protected>
          }
        />
        <Route
          path="/user"
          element={
            <Protected role="user">
              <User />
            </Protected>
          }
        />

        <Route
          path="/admin"
          element={
            <Protected role="admin">
              <Admin />
            </Protected>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
