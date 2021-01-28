import React from 'react'

function Button({ product }) {
    return (
        <button className="snipcart-add-item border-2 border-red-600 font-bold text-red-700 px-3 py-1 hover:bg-red-800 hover:border-red-800 hover:text-white"
            data-item-id={product.node.productId}
            data-item-price={product.node.price}
            data-item-url="/"
            data-item-name={product.node.name}
        // data-item-custom1-name="Size"
        // data-item-custom1-options="S|M|L|XL|XXL|XXXL"
        // data-item-custom2-name="Color"
        // data-item-custom2-options="Red|White|Black|Silver"
        >
            Add to Cart
        </button>
    )
}

export default Button