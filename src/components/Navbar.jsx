import React from "react";
import { Link } from "react-router-dom";

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
          <Link
          to="/product"
           className="rounded-lg px-3 py-2" href="">
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
