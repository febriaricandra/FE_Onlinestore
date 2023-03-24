import React from "react";
import { Link } from "react-router-dom";

export default function ListProducts({ products }) {
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            Product Collection
          </h2>

          <p className="max-w-md mx-auto mt-4 text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            praesentium cumque iure dicta incidunt est ipsam, officia dolor
            fugit natus?
          </p>
        </header>
        <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4 justify-center">
            {products ? products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`} className="block overflow-hidden group">
              <img
                src={`http://127.0.0.1:8000/api/products/${product.image}`}
                alt=""
                className="h-[300px] w-[300px] w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="relative pt-3 bg-white">
                <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    {product.name}
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>
                  <span className="tracking-wider text-gray-900"> {product.price} </span>
                </p>
              </div>
            </Link>
          </li>
        )) : null}
        </ul>
      </div>
    </section>
  );
}
