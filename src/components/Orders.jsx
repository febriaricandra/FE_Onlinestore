import React, { useState, useEffect } from "react";

export default function Orders() {
  const orders = "http://127.0.0.1:8000/api/details";
  const [data, setData] = useState([]);
  useEffect(() => {
    const getOrders = async () => {
      const response = await fetch(orders);
      const data = await response.json();
      setData(data.data);
    };
    getOrders();
  }, []);

  console.log(data);
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
        <thead>
          <tr>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              Nomor Order
            </th>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              Nama Produk
            </th>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              Customers
            </th>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              Total Pembayaran
            </th>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              Courier
            </th>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              Address
            </th>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              Phone
            </th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {data.map((item) => (
            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                {item.transaction.id}
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                {item.product.name}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {item.transaction.user.name}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {item.total}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {item.transaction.courier}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {item.transaction.user.address}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {item.transaction.user.phone}
              </td>
              <td className="whitespace-nowrap px-4 py-2">
                <a
                  href="#"
                  className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                >
                  Confirm
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
