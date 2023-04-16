import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/react.svg";

export default function Navbar() {
  return (
    <nav
      aria-label="Site Nav"
      className="mx-auto flex max-w-3xl items-center justify-between p-4"
    >
      <Link
        to="/"
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100"
      >
        <span className="sr-only">Logo</span>
        🔥
      </Link>

      <ul className="flex items-center gap-2 text-sm font-medium text-gray-500">
        <li className="hidden lg:block">
          <a className="rounded-lg px-3 py-2" href="/">
            {" "}
            Home{" "}
          </a>
        </li>

        <li>
          <Link to="/product" className="rounded-lg px-3 py-2" href="">
            {" "}
            Products{" "}
          </Link>
        </li>

        <li>
          <Link
            className="inline-flex items-center gap-2 rounded-lg px-3 py-2"
            to="/cart"
          >
            Carts
          </Link>
        </li>

        {localStorage.getItem("role") === "user" ? (
          <li>
            <Link to="/user" className="rounded-lg px-3 py-2">
              Profile
            </Link>
          </li>
        ) : (
          <li>
            <Link
              className="inline-flex items-center gap-2 rounded-lg px-3 py-2"
              to="/login"
            >
              Login
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
