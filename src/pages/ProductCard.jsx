import React, { useEffect,useState } from 'react'
import DetailProduct from '../components/DetailProduct'
import Navbar from '../components/Navbar'
import Footers from '../components/Footers'
import { useParams } from 'react-router-dom'

export default function ProductCard() {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const url = `http://127.0.0.1:8000/api/products/${id}`

    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch(url)
            const data = await response.json()
            setProduct(data)
        }
        getProduct()
    }, [])
  return (
    <div>
        <Navbar />
        <DetailProduct product={product.data} />
        <Footers />
    </div>
  )
}
