import React from "react"
import Image from "./Image"
import Button from "./Button"

function Product({ product }) {
  return (
    <div style={{ "min-width": 275, 'background': 'var(--white)' }} className="w-2/12 border border-black mb-8 text-blue-800 pb-2">
      <div>
        <Image product={product} />
      </div>
      <div className="flex justify-between items-baseline leading-loose p-2">
        <h3 className="font-bold text-black text-xl">{product.node.name}</h3>
        <span style={{ 'min-width': 65 }} className="font-bold text-red-900 text-md text-right">
          $ {product.node.price}
        </span>
      </div>
      <div style={{ 'min-height': 50 }}>
        <p className="text-black text-md lg:text-lg px-2">
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
