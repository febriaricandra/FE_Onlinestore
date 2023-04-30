import React, { useState, useEffect } from "react";

export default function Orders() {
  const orders = "http://127.0.0.1:8000/api/details";
  const [data, setData] = useState([]);
  const [awal, setAwal] = useState(null);
  const [akhir, setAkhir] = useState(null);

  function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
  }


  const filterDataBydate = (data) => {
    if (select === "1") {
      return data.filter((item) => {
        return new Date(item.created_at) > oneMonthAgo;
      });
    } else if (select === "2") {
      return data.filter((item) => {
        return new Date(item.created_at) > oneWeekAgo;
      });
    } else if (select === "3") {
      return data.filter((item) => {
        return new Date(item.created_at) > oneYearAgo;
      });
    } else {
      return data;
    }
  };


  const handleConfirm = async (id) => {
    const response = await fetch(
      `http://127.0.0.1:8000/api/detail/${id}/confirm`,
      {
        method: "PUT",
      }
    );
    const data = await response.json();
    console.log(data);
    window.location.reload();
  };

  const handleExport = () => {
    const url = "http://127.0.0.1:8000/api/export";
    var link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "orders.xlsx");
    document.body.appendChild(link);
    link.click();
  };
  const handleUserExport = () => {
    const url = "http://127.0.0.1:8000/api/userexport";
    var link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "users.xlsx");
    document.body.appendChild(link);
    link.click();
  };

  useEffect(() => {
    const getOrders = async () => {
      const response = await fetch(orders);
      const data = await response.json();
      setData(data.data);
    };
    getOrders();
  }, []);

  const handleExportDate = () =>{
    const tanggalAwalobj = new Date(awal);
    const tanggalAkhirobj = new Date(akhir);

    fetch('http://127.0.0.1:8000/api/export/filter', {
      method: "POST",
      body: JSON.stringify({
        Awal: formatDate(tanggalAwalobj),
        Akhir: formatDate(tanggalAkhirobj)
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'detail_filter.xlsx');
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    })
    .catch((error) =>{
      console.error('error:', error);
    })

  }

  const handleAwal = (e) => {
    setAwal(e.target.value);
  }

  const handleAkhir = (e) => {
    setAkhir(e.target.value);
  }


  const filterDataByDate = (data) => {
    if (awal && akhir) {
      return data.filter((item) => {
        return (
          new Date(item.created_at) > new Date(awal) &&
          new Date(item.created_at) < new Date(akhir)
        );
      });
    } else {
      return data;
    }
  };

  console.log(data);
  return (
    <div className="overflow-x-auto">
      <div className="flex flex-row justify-between m-4">
        <div className="flex flex-row">
          <h1>Export to Excel:</h1>
          <button
            onClick={handleExport}
            className="mx-4 inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
          >
            Export Data
          </button>
          <button
            onClick={handleUserExport}
            className="mx-4 inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
          >
            Export User
          </button>
        </div>
        <div className="flex">
          <div className="mx-4">
            <input type="date"
            value={awal}
            onChange={handleAwal}
             />
          </div>
          <div className="mx-2">
            <input type="date"
            value={akhir}
            onChange={handleAkhir}
             />
          </div>
          <div className="mx-2">
          <button
            onClick={handleExportDate}
            className="mx-4 inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
          >
            Export By Date
          </button>
          </div>
        </div>
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
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              Date
            </th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {filterDataByDate(data).map((item) => (
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
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {formatDate(item.created_at)}
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
