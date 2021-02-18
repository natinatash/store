import React from 'react'

function Button({ product }) {
    return (
        <button className="snipcart-add-item border-2 border-red-400 font-bold text-red-700 px-4 py-2 hover:bg-red-800 hover:border-red-800 hover:text-white"
            data-item-id={product.node.productId}
            data-item-price={product.node.price}
            data-item-url="/"
            data-item-name={product.node.name}
        >
            Add to Cart
        </button>
    )
}

export default Button