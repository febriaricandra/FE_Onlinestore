import React,{ useState,useEffect } from "react";

export default function FormProduct() {
    const url = "http://127.0.0.1:8000/api/products";
    const [products, setProducts] = useState([]);
    const [image, setImage] = useState(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const imageUrl = URL.createObjectURL(file);
        setImage(imageUrl);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", e.target.name.value);
        formData.append("price", e.target.price.value);
        formData.append("description", e.target.description.value);
        formData.append("image", e.target.image.files[0]);
        formData.append("stock", e.target.stock.value);

        const response = await fetch(url, {
            method: "POST",
            body: formData,
        });
        const data = await response.json();
        console.log(data);
    };

    const deleteProduct = (id) => {
        fetch(`${url}/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                window.location.reload();
            });
    };

  
    useEffect(() => {
      const getAllProducts = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data.data);
      };
      getAllProducts();
    }, []);

    console.log(products);

    return (
        <div className="flex flex-row">
            <form onSubmit={handleSubmit} className="w-1/3" enctype="multipart/form-data">
                <div className="flex flex-col">
                    <label htmlFor="name">Name</label>
                    <input className="my-2 w-full rounded-lg border-gray-200 p-3 text-sm" type="text" name="name" id="name" />

                    <label htmlFor="price">Price</label>
                    <input className="my-2 w-full rounded-lg border-gray-200 p-3 text-sm" type="number" name="price" id="price" />

                    <label htmlFor="description">Description</label>
                    <textarea className="my-2 w-full rounded-lg border-gray-200 p-3 text-sm" type="text" name="description" id="description" />

                    <label htmlFor="image">Image</label>
                    <input className="my-2 w-full rounded-lg border-gray-200 p-3 text-sm" type="file" name="image" id="image" onChange={handleImageUpload} />

                    <label htmlFor="stock">Stock</label>
                    <input className="my-2 w-full rounded-lg border-gray-200 p-3 text-sm" type="number" name="stock" id="stock" />
                </div>
                <button
                    className="my-4 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    type="submit"
                >
                    Submit
                </button>
            </form>
            <div className="w-full p-6">
                <div class="overflow-x-auto rounded-lg border border-gray-200">
                    <table class="min-w-full divide-y-2 divide-gray-200 text-sm">
                        <thead>
                            <tr>
                                <th
                                    class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                                >
                                    Product
                                </th>
                                <th
                                    class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                                >
                                    Price
                                </th>
                                <th
                                    class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                                >
                                    Image
                                </th>
                                <th
                                    class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                                >
                                    Stock
                                </th>
                                <th
                                    class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                                >
                                    Action
                                </th>
                            </tr>
                        </thead>

                        <tbody class="divide-y divide-gray-200">

                            {products.map((product) => (
                                <tr>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                        {product.name}
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                        {product.price}
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                        <img className="w-[120px]" src={`http://127.0.0.1:8000/api/products/${product.image}`} alt={product.name} />
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                        {product.stock}
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                        <button
                                            onClick={() => deleteProduct(product.id)}
                                            className="my-4 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            type="submit"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
}
