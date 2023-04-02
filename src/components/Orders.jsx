import React, { useState, useEffect } from "react";

export default function Orders() {
  const orders = "http://127.0.0.1:8000/api/details";
  const [data, setData] = useState([]);

  const handleConfirm = async (id) => {
    const response = await fetch(
      `http://127.0.0.1:8000/api/detail/${id}/confirm`,
      {
        method: "PUT",
      }
    );
    const data = await response.json();
    console.log(data);
  };

  const handleExport = () => {
    fetch("http://127.0.0.1:8000/api/export", {
      method: "GET",
      headers: {
        "Content-Type": "text/csv",
      },
    })
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "data-detail.csv");
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      });
  };


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
      <div className="flex flex-row items-center m-4">
        <h1>Export Data:</h1>
        <button
          onClick={handleExport}
          className="mx-4 inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
        >
          Export Data
        </button>
      </div>
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
              Jumlah
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
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              Bukti Pembayaran
            </th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {data.map((item) => (
            <tr key={item.id}>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                {item.transaction.id}
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                {item.product.name}
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                {item.quantity}
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
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                <img
                  src={`http://127.0.0.1:8000/api/detail/${item.transaction.transfer}`}
                  alt="bukti"
                  className="w-20 h-20"
                />
              </td>
              <td className="whitespace-nowrap px-4 py-2">
                {item.status === "Pending" ? (
                  <button
                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                    onClick={() => handleConfirm(item.id)}
                  >
                    Confirm
                  </button>
                ) : (
                  <button
                    className="inline-block rounded bg-gray-600 px-4 py-2 text-xs font-medium text-white hover:bg-gray-700"
                    disabled
                  >
                    Accepted
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
