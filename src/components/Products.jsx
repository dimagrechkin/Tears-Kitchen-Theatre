import { useState } from 'react'

import { CheckoutForm } from './CheckoutForm'

const Product = ({ product, setShow }) => {
  const hasSalePrice = product.salePrice !== null

  const priceText = hasSalePrice ? (
    <>
      <p className="line-through">£{product.originalPrice}.00</p>
      <p className="text-lg font-bold text-gray-600">£{product.salePrice}.00</p>
    </>
  ) : (
    <p className="text-lg font-bold">£{product.originalPrice}.00</p>
  )

  const imageElement = product.imageUrl ? (
    <img src={product.imageUrl} alt={product.altText} className="mx-auto" />
  ) : null

  return (
    <div onClick={setShow} className="text-center">
      {imageElement}
      <p className="mt-2">{product.title}</p>
      {priceText}
    </div>
  )
}

const Products = ({ productData }) => {
  const [show, setShow] = useState(false)

  return (
    <>
      <div className="grid grid-cols-4 gap-8 p-8">
        {productData.map((product) => (
          <Product setShow={setShow} key={product.title} product={product} />
        ))}
      </div>
      <div className=""> {show && <CheckoutForm />}</div>
    </>
  )
}

export default Products
