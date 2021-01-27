import React from "react"
import Image from "./Image"
import Button from "./Button"

function Product({ product }) {
  return (
    <div style={{ "min-width": 275 }} className="w-11/12 md:w-5/12 lg:w-2/12 border border-black mb-8 text-blue-800 pb-2">
      <div>
        <Image product={product} />
      </div>
      <div className="flex justify-between items-baseline leading-loose p-2">
        <h2 className="font-bold text-blue-500 text-3xl">{product.node.name}</h2>
        <span className="font-bold text-blue-900 text-lg">
          $ {product.node.price}
        </span>
      </div>
      <div style={{ 'min-height': 50 }}>
        <p className="text-blue-900 text-lg px-2">
          {product.node.description}
        </p>
      </div>
      <div className="text-center p-4">
        <Button product={product} />
      </div>
    </div>
  )
}

export default Product
