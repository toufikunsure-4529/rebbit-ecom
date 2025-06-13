import { RiDeleteBin3Line } from "react-icons/ri";
import React from 'react'

const CartContents = () => {
    const cartProducts = [
        {
            productId: 1,
            name: 'Cotton T-shirt',
            size: 'L',
            color: 'Black',
            quantity: 1,
            price: 599,
            image: 'https://picsum.photos/200/300?random=1'
        },
        {
            productId: 2,
            name: 'Denim Jacket',
            size: 'M',
            color: 'Blue',
            quantity: 1,
            price: 1299,
            image: 'https://picsum.photos/200/300?random=2'
        },
        {
            productId: 3,
            name: 'Hooded Sweatshirt',
            size: 'XL',
            color: 'Grey',
            quantity: 1,
            price: 999,
            image: 'https://picsum.photos/200/300?random=3'
        },
        {
            productId: 4,
            name: 'Casual Shirt',
            size: 'S',
            color: 'White',
            quantity: 1,
            price: 799,
            image: 'https://picsum.photos/200/300?random=4'
        },
        {
            productId: 5,
            name: 'Casual Shirt',
            size: 'S',
            color: 'White',
            quantity: 1,
            price: 799,
            image: 'https://picsum.photos/200/300?random=4'
        },
        {
            productId: 6,
            name: 'Casual Shirt',
            size: 'S',
            color: 'White',
            quantity: 1,
            price: 799,
            image: 'https://picsum.photos/200/300?random=4'
        },
    ];

    return (
        <div>
            {cartProducts.map((product, index) => (
                <div key={index} className='flex items-start justify-between py-4 border-b'>
                    <div className='flex items-center'>
                        <img src={product.image} alt={product.name} className='w-20 h-24 object-cover mr-4 rounded' />
                        <div>
                            <h3>{product.name} </h3>
                            <p className='text-sm text-gray-500'>Size: {product.size} | Color: {product.color}</p>
                            <div className=' flex items-center mt-2'>
                                <button className='border rounded px-2 py-1 text-xl font-medium'>-</button>
                                <span className='text-sm text-gray-500  mx-4'> {product.quantity}</span>
                                <button className='border rounded px-2 py-1 text-xl font-medium'>+</button>

                            </div>
                        </div>
                    </div>
                    <div>
                        <p>₹{product.price.toLocaleString()}</p>
                        <button><RiDeleteBin3Line className="h-6 w-6 mt-2 text-rebbit-red" /></button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CartContents