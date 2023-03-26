import React from "react";
import Navbar from "../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { removeCart, addQuantity, removeQuantity } from "../redux/cartSlice";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddQuantity = (product) => {
    dispatch(addQuantity(product));
  };

  const handleRemoveQuantity = (product) => {
    dispatch(removeQuantity(product));
  };

  const handleRemoveCart = (product) => {
    dispatch(removeCart(product));
  };
  const getTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };
  console.log(getTotal());

  return (
    <div>
      <Navbar />
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <header className="text-center">
              <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
                Your Cart
              </h1>
            </header>

            <div className="mt-8">
              <ul className="space-y-4">
                { cart.length > 0 ? cart.map((item) => (
                  <li className="flex items-center gap-4">
                    <img
                      src={`http://127.0.0.1:8000/api/products/${item.image}`}
                      alt=""
                      className="h-16 w-16 rounded object-cover"
                    />

                    <div>
                      <h3 className="text-md md:text-xl lg:text-xl font-bold text-gray-900">
                        {item.name}
                      </h3>

                      <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                        <div>
                          <dt className="inline">Stock : </dt>
                          <dd className="inline">{item.stock}</dd>
                        </div>

                        <div>
                          <dt className="inline">Harga : </dt>
                          <dd className="inline">Rp.{item.price}</dd>
                        </div>
                      </dl>
                    </div>

                    <div className="flex flex-1 items-center justify-end">
                      <form className="flex items-center mx-4">
                        <button
                          className="bg-sky-400 text-white rounded-md mx-4 px-2 py-1"
                          onClick={() => handleAddQuantity(item)}
                          type="button"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="w-6 h-6"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </button>

                        <input
                          type="number"
                          min="1"
                          max={item.stock}
                          value={item.quantity}
                          id="Line1Qty"
                          className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                        />
                        
                        <button
                          className="bg-sky-400 text-white rounded-md mx-4 px-2 py-1"
                          onClick={() => handleRemoveQuantity(item)}
                          type="button"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="w-6 h-6"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </button>

                        <label for="Line1Qty" className="sr-only">
                          {" "}
                          Quantity{" "}
                        </label>
                      </form>

                      <button
                        type="button"
                        onClick={() => handleRemoveCart(item)}
                        className="text-gray-600 transition hover:text-red-600"
                      >
                        <span className="sr-only">Remove item</span>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </button>
                    </div>
                  </li>
                )) : <p className="text-center text-gray-700">No item in cart</p> }
              </ul>

              <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                <div className="w-screen max-w-lg space-y-4">
                  <dl className="space-y-0.5 text-sm text-gray-700">
                    <div className="flex justify-between !text-base font-medium">
                      <dt>Total</dt>
                      <dd>{getTotal()}</dd>
                    </div>
                  </dl>

                  <div className="flex justify-end gap-4">
                    <Link
                      to="/product"
                      className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                    >
                      Continue Shopping
                    </Link>
                    { (cart.length > 0 && localStorage.getItem("name")) ?
                    <Link
                      to="/checkout"
                      className="block rounded bg-blue-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                    >
                      Checkout
                    </Link>
                    : 
                    <Link
                      to="/login"
                      className="block rounded bg-blue-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                    >
                      Login
                    </Link>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
