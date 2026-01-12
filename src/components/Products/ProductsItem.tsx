import  { type FC } from 'react'
import './Products.scss'
import { cartIcon } from '../../utils/img'
import type { IProduct } from '../../types/types'
import { cartStore } from '../../store/cartStore'
import {  toast } from 'react-toastify'
import { Link } from 'react-router-dom'

interface IProductItem {
    product:IProduct
}

const ProductsItem:FC<IProductItem> = ({ product }) => {

    const discountPrice = Math.round((product.price - (product.price * product.discountPercentage) / 100) * 100) / 100
    const { addToCart } = cartStore()

    const addToCartHandler = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        addToCart(product)
        toast.success('Product added to cart', {
            position: 'top-right',
            autoClose: 2000,
        })
    }

    

  return (
    <>
        <Link to={`/products/${product.id}`} className="products__item">
            <img src={product.thumbnail} alt="" className="products__item-img" />
            <div className="products__item-prices">
                <span className="products__item-prices-price">{product.price}</span>
                <span className="products__item-prices-discount"> Discount: {product.discountPercentage} %</span>
                <span className="products__item-prices-disprice"> Price with discount:{discountPrice}</span>
            </div>
            <button className="products__item-cart" onClick={(event) => addToCartHandler(event)}>
                <img src={cartIcon} alt="" />
            </button>
            <div className="products__item-info">
                <span className="products__item-info-stock"> In stock:{product.stock}</span>
                <h2 className="products__item-info-title">{product.title}</h2>
                <p className="products__item-info-text">{product.description}</p>
            </div>
        </Link>
    </>
  )
}

export default ProductsItem