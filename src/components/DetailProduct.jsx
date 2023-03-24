import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, resetState } from "../redux/cartSlice";

export default function DetailProduct({ product }) {
  const dispatch = useDispatch();
  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCart(product));
  };
  const removeState = () => {
    dispatch(resetState());
  };

  return (
    <section>
      {product ? (
        <div className="relative mx-auto max-w-[80%] px-4 py-8">
          <div>
            <h1 className="text-2xl font-bold lg:text-3xl">{product.name}</h1>

            <p className="mt-1 text-sm text-gray-500">Stok : {product.stock}</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-4 lg:items-start">
            <div className="lg:col-span-3">
              <div className="relative mt-4">
                <img
                  alt="Tee"
                  src={`http://127.0.0.1:8000/api/products/${product.image}`}
                  className="h-72 w-full rounded-xl object-cover lg:h-[540px]"
                />
              </div>
            </div>

            <div className="lg:sticky lg:top-0">
              <form className="space-y-4 lg:pt-8">
                <div>
                  <h1 className="font-bold text-2xl">Harga</h1>
                  <p className="text-xl font-medium opacity-50">
                    Rp.{product.price}
                  </p>
                </div>

                <button
                  type="submit"
                  onClick={handleAddToCart}
                  className="w-full rounded bg-red-700 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white"
                >
                  Add to cart
                </button>

                <button
                  type="button"
                  onClick={removeState}
                  className="w-full rounded border border-gray-300 bg-gray-100 px-6 py-3 text-sm font-bold uppercase tracking-wide flex flex-row items-center text-green-700 justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                    />
                  </svg>
                  Whatsapp
                </button>
              </form>
            </div>

            <div className="lg:col-span-3">
              <div className="prose max-w-none">
                <p>{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
