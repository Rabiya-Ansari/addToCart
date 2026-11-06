import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartApi'

const Cart = () => {
    const { cart, removeItem, increase, decrease } = useContext(CartContext)


    return (

        <>
            <div className='flex grid-cols-1 md:grid-cols-3 '>

                {/* <h1 className='text-3xl text-center m-5'> Cart </h1> */}

                {
                    cart.map((item) => (
                        <div key={item.id} className="card bg-base-100 w-96 shadow-sm m-5">
                            <figure>
                                <img
                                    src={item.thumbnail}
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{item.title}</h2>
                                <p>{item.description}</p>
                                <p>{item.price}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary" onClick={() => decrease(item.id)} disabled={item.quantity <=1}>-</button>

                                    <span className="font-semibold text-lg">{item.quantity || 1}</span>

                                    <button className="btn btn-primary" onClick={() => increase(item.id)}>+</button>

                                    <button className="btn btn-primary" onClick={() => removeItem(item.id)}>remove</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Cart