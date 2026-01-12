import { type FC } from 'react'
import './CartBox.scss'
import type { ICartProduct } from '../../types/types'
import { cartStore } from '../../store/cartStore'
import { deleteIcon, minusIcon, plusIcon } from '../../utils/img'

const CartItem:FC<ICartProduct> = ({ id, title, price, count, thumbnail }) => {

    const { minusCount, addToCart, removeItem } = cartStore()
  return (
    <>
        <div className="cart__item">
            <div className="cart__item-left">
                <img src={thumbnail} alt="" className="cart__item-left-img" />
                <div className="cart__item-left-info">
                    <h2 className="cart__item-left-title">{title}</h2>
                    <span className="cart__item-left-price">{price} $</span>
                </div>
            </div>
            <div className="cart__item-right">
                <button className="cart__item-right-minus" onClick={() => minusCount(id)}>
                    <img src={minusIcon} alt="" />
                </button>
                <span className="cart__item-right-count">{count}</span>
                <button className="cart__item-right-plus" onClick={() => addToCart({id: id})}>
                    <img src={plusIcon} alt="" />
                </button>
                <button className="cart__item-right-remove" onClick={() => removeItem(id)}>
                    <img src={deleteIcon} alt="" />
                </button>
            </div>
        </div>
    </>
  )
}

export default CartItem