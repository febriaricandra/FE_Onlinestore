import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Checkout() {
  const cart = useSelector((state) => state.cart);
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedProvinces, setSelectedProvinces] = useState({});
  const [selectedCities, setSelectedCities] = useState({});
  const [selectedKurir, setSelectedKurir] = useState({});
  const [ongkir, setOngkir] = useState([]);
  const [selectedOngkir, setSelectedOngkir] = useState({});
  const url = "http://127.0.0.1:8000/api/provinsi";
  const urlcity = `http://127.0.0.1:8000/api/city/${selectedProvinces}`;
  const urlongkir = `http://127.0.0.1:8000/api/ongkir/${selectedProvinces}/${selectedKurir}`
  const getProvinces = async () => {
    const response = await fetch(url, {
      method: "GET",
    });
    const data = await response.json();
    setProvinces(data.data);
  };
  const getCity = async () => {
    const response = await fetch(urlcity, {
      method: "GET",
    });
    const data = await response.json();
    setCities(data.data);
  };
  const getOngkir = async () => {
    const response = await fetch(urlongkir, {
      method: "GET",
    });
    const data = await response.json();
    setOngkir(data);
  };

  useEffect(() => {
    getProvinces();
    getCity();
    getOngkir();
  }, [
    selectedCities,
    selectedProvinces, 
    // selectedOngkir
  ]);
  const handleSelect = (e) => {
    setSelectedProvinces(e.target.value);
  };
  const handleSelectCity = (e) => {
    setSelectedCities(e.target.value);
  };
  const handleSelectKurir = (e) => {
    setSelectedKurir(e.target.value);
  };
  const handleSelectOngkir = (e) => {
    setSelectedOngkir(e.target.value);
  };
  console.log(ongkir.data);
  console.log(selectedOngkir);
  console.log(urlongkir);
  // console.log(ongkir[0].name);
  // console.log(ongkir[0].costs[0].cost[0].value);

  return (
    <section>
      <h1 className="sr-only">Checkout</h1>

      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-2">
        <div className="bg-gray-50 py-12 md:py-24">
          <div className="mx-auto max-w-lg space-y-8 px-4 lg:px-8">
            <div className="flex items-center gap-4">
              <span className="h-10 w-10 rounded-full bg-blue-700"></span>

              <h2 className="font-medium text-gray-900">BambooYou</h2>
            </div>

            <div>
              <p className="text-2xl font-medium tracking-tight text-gray-900">
                $99.99
              </p>

              <p className="mt-1 text-sm text-gray-600">For the purchase of</p>
            </div>

            <div>
              <div className="flow-root">
                <ul className="-my-4 divide-y divide-gray-100">
                  <li className="flex items-center gap-4 py-4">
                    <img
                      src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                      alt=""
                      className="h-16 w-16 rounded object-cover"
                    />

                    <div>
                      <h3 className="text-sm text-gray-900">
                        Basic Tee 6-Pack
                      </h3>

                      <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                        <div>
                          <dt className="inline">Size:</dt>
                          <dd className="inline">XXS</dd>
                        </div>

                        <div>
                          <dt className="inline">Color:</dt>
                          <dd className="inline">White</dd>
                        </div>
                      </dl>
                    </div>
                  </li>

                  <li className="flex items-center gap-4 py-4">
                    <img
                      src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                      alt=""
                      className="h-16 w-16 rounded object-cover"
                    />

                    <div>
                      <h3 className="text-sm text-gray-900">
                        Basic Tee 6-Pack
                      </h3>

                      <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                        <div>
                          <dt className="inline">Size:</dt>
                          <dd className="inline">XXS</dd>
                        </div>

                        <div>
                          <dt className="inline">Color:</dt>
                          <dd className="inline">White</dd>
                        </div>
                      </dl>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white py-12 md:py-24">
          <div className="mx-auto max-w-lg px-4 lg:px-8">
            <form className="grid grid-cols-6 gap-4">
              <div className="col-span-6">
                <label
                  for="FirstName"
                  className="block text-xs font-medium text-gray-700"
                >
                  First Name
                </label>

                <input
                  type="text"
                  id="FirstName"
                  className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                />
              </div>

              <div className="col-span-6">
                <label
                  for="Email"
                  className="block text-xs font-medium text-gray-700"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="Email"
                  className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                />
              </div>

              <div className="col-span-6">
                <label
                  for="Phone"
                  className="block text-xs font-medium text-gray-700"
                >
                  Phone
                </label>

                <input
                  type="tel"
                  id="Phone"
                  className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                />
              </div>

              <div className="col-span-6">
                <label
                  for="Address"
                  className="block text-xs font-medium text-gray-700"
                >
                  Address
                </label>

                <textarea
                  id="Notes"
                  rows="3"
                  className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                />
              </div>

              <div className="col-span-6">
                <label
                  for="Province"
                  className="block text-xs font-medium text-gray-700"
                >
                  Province
                </label>
                <select name="Province" id="Province" value={selectedProvinces} onChange={handleSelect}>
                {
                  provinces.map(province => (
                        <option key={province.province_id} value={province.province_id}>
                          {province.province}
                        </option>
                    )
                  )
                }
                </select>
              </div>

              <div className="col-span-6">
                <label
                  for="City"
                  className="block text-xs font-medium text-gray-700"
                >
                  City
                </label>
                <select name="City" id="City" value={selectedCities} onChange={handleSelectCity}>
                {
                  cities.map(city => (
                        <option key={city.city_id} value={city.city_id}>
                          {city.city_name}
                        </option>
                    )
                  )
                }
                </select>
              </div>

              <div className="col-span-6">
                <label
                  for="Kurir"
                  className="block text-xs font-medium text-gray-700"
                >
                  Kurir
                </label>
                <select name="Kurir" id="Kurir" value={selectedKurir} onChange={handleSelectKurir}>
                  <option value="jne">JNE</option>
                  <option value="tiki">TIKI</option>
                  <option value="pos">POS</option>
                </select>
              </div>

              <div className="col-span-6">
                <label
                  for="Ongkir"
                  className="block text-xs font-medium text-gray-700"
                >
                  Ongkir
                </label>
                <select name="Ongkir" id="Ongkir" value={selectedOngkir} onChange={handleSelectOngkir}>
                {
                  ongkir.data[0].costs[0].cost.map((item, index) => (
                        <option key={index} value={item.value}>
                          {item.value}
                        </option>
                    )
                  )
                }
                </select>
              </div>

              <div className="col-span-6">
                <label
                  for="Notes"
                  className="block text-sm font-medium text-gray-700"
                >
                  Upload Bukti Transfer
                </label>

                <input
                  class="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding py-[0.32rem] px-3 text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100"
                  type="file"
                  id="formFile"
                />
              </div>

              <div className="col-span-6">
                <button className="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg">
                  Pay Now
                </button>
                <Link
                  to="/cart"
                  className="my-4 block w-full rounded-md bg-red-500 text-center p-2.5 text-sm text-white transition hover:shadow-lg"
                >
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}