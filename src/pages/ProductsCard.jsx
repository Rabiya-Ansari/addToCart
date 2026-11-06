import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartApi';

const ProductsCard = () => {
    const { addToCart } = useContext(CartContext)
    const [data, setData] = useState([]);
    const fetchData = async () => {
        const response = await axios.get('https://dummyjson.com/products');
        console.log(response.data.products)
        setData(response.data.products)
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-3 place-items-center m-10'>
                {
                    data.map((p) => (
                        <div key={p.id} className="card bg-base-100 w-96 shadow-sm m-5 border-1">
                            <figure>
                                <img
                                    src={p.thumbnail}
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body ">
                                <h2 className="card-title">{p.title}</h2>
                                <p>{p.description}</p>
                                <p>{p.price}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary" onClick={() => addToCart(p)}>Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default ProductsCard