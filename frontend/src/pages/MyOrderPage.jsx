import React, { useEffect, useState } from 'react'
import { FiShoppingBag, FiCalendar, FiMapPin, FiDollarSign, FiCheckCircle, FiClock } from 'react-icons/fi'

const MyOrderPage = () => {
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {

            const mockOrders = [
                {
                    _id: "ORD-12345",
                    createdAt: new Date('2023-05-15'),
                    shippingAddress: {
                        city: 'New York',
                        country: 'USA',
                        street: '123 Main St',
                        zipCode: '10001'
                    },
                    orderItems: [
                        {
                            name: 'Wireless Headphones Pro',
                            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&auto=format&fit=crop'
                        },

                    ],
                    totalPrice: 189.99,
                    isPaid: true,
                    isDelivered: true
                },
                {
                    _id: "ORD-12346",
                    createdAt: new Date('2023-06-02'),
                    shippingAddress: {
                        city: 'Los Angeles',
                        country: 'USA',
                        street: '456 Sunset Blvd',
                        zipCode: '90028'
                    },
                    orderItems: [
                        {
                            name: 'Smart Watch Series 5',
                            image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&auto=format&fit=crop'
                        }
                    ],
                    totalPrice: 249.99,
                    isPaid: true,
                    isDelivered: false
                },
                {
                    _id: "ORD-12347",
                    createdAt: new Date('2023-06-10'),
                    shippingAddress: {
                        city: 'Chicago',
                        country: 'USA',
                        street: '789 Lake Shore Dr',
                        zipCode: '60611'
                    },
                    orderItems: [
                        {
                            name: 'Bluetooth Speaker',
                            image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500&h=500&auto=format&fit=crop'
                        },

                    ],
                    totalPrice: 87.50,
                    isPaid: false,
                    isDelivered: false
                },
            ]
            setOrders(mockOrders)
            setLoading(false)
        }, 1000);
    }, [])

    const OrderStatusBadge = ({ paid, delivered }) => {
        if (paid && delivered) {
            return (
                <span className="inline-flex items-center px-7 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    <FiCheckCircle className="mr-1" /> Delivered
                </span>
            )
        }
        if (paid && !delivered) {
            return (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    <FiCheckCircle className="mr-1" /> Paid - Shipping
                </span>
            )
        }
        return (
            <span className="inline-flex items-center px-7 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                <FiClock className="mr-1" /> Processing
            </span>
        )
    }

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                <div className="text-sm text-gray-500">{orders.length} orders</div>
            </div>

            {loading ? (
                <div className="p-8 flex justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-rebbit-red"></div>
                </div>
            ) : orders.length > 0 ? (
                <div className="divide-y divide-gray-100">
                    {orders.map((order) => (
                        <div key={order._id} className="p-6 hover:bg-gray-50 transition-colors duration-150">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                {/* Order Info */}
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="flex -space-x-2">
                                            {order.orderItems.slice(0, 3).map((item, idx) => (
                                                <img
                                                    key={idx}
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-12 h-12 rounded-lg border-2 border-white object-cover shadow-sm"
                                                />
                                            ))}
                                            {order.orderItems.length > 3 && (
                                                <div className="w-12 h-12 rounded-lg border-2 border-white bg-gray-100 flex items-center justify-center text-xs font-medium text-gray-500 shadow-sm">
                                                    +{order.orderItems.length - 3}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-gray-900">Order #{order._id}</div>
                                        <div className="flex items-center text-sm text-gray-500 mt-1">
                                            <FiCalendar className="mr-1.5" />
                                            {new Date(order.createdAt).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric'
                                            })}
                                        </div>
                                        <div className="flex items-center text-sm text-gray-500 mt-1">
                                            <FiMapPin className="mr-1.5" />
                                            {order.shippingAddress ?
                                                `${order.shippingAddress.city}, ${order.shippingAddress.country}` :
                                                "NA"}
                                        </div>
                                    </div>
                                </div>

                                {/* Order Details */}
                                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0">
                                    <div className="text-sm">
                                        <div className="text-gray-500">Items</div>
                                        <div className="font-medium">{order.orderItems.length}</div>
                                    </div>
                                    <div className="text-sm">
                                        <div className="text-gray-500">Total</div>
                                        <div className="font-medium">₹{order.totalPrice.toFixed(2)}</div>
                                    </div>
                                    <div className="text-sm">
                                        <div className="text-gray-500 mb-1">Status</div>
                                        <OrderStatusBadge paid={order.isPaid} delivered={order.isDelivered} />
                                    </div>
                                </div>
                            </div>

                            {/* Mobile view details button */}
                            <div className="mt-4 md:hidden">
                                <button className="text-sm text-rebbit-red hover:text-red-700 font-medium">
                                    View details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="p-8 text-center">
                    <div className="mx-auto w-24 h-24 text-gray-300 mb-4">
                        <FiShoppingBag className="w-full h-full" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">No orders yet</h3>
                    <p className="text-gray-500 max-w-md mx-auto">You haven't placed any orders. When you do, they'll appear here.</p>
                </div>
            )}
        </div>
    )
}


export default MyOrderPage