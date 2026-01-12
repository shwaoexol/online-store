import  { type FC } from 'react'
import './ProductById.scss'
import { Link, useParams } from 'react-router-dom'
import { arrowIcon, cartIcon} from '../../utils/img'
import { useProductById } from '../../api/common'
import { cartStore } from '../../store/cartStore'
import { toast } from 'react-toastify'
import { getDiscountPrice } from '../../utils/price'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';






const ProductById:FC = () => {

  const params = useParams()

  const { data } = useProductById(+params.id!)
  console.log(data);
  const { addToCart } = cartStore()

  const discountPrice = data ? getDiscountPrice(data.price, data.discountPercentage) 
  : null
  

  const addToCartHandler = () => {
    addToCart(data)
    toast.success('Product added to cart', {
      position: 'top-right',
      autoClose: 2000,
    })
  }

  return (
    <>
        {data ? (
          <div className="product">
          <div className="product__top">
            <Link to="/products" className="product__top-link">
                <img src={arrowIcon} alt="" />
            </Link>
            <Link to="/cart" className="product__top-cart" onClick={addToCartHandler}>
              <img src={cartIcon} alt="" />
              <p className="product__top-cart-text">Cart</p>
            </Link>
          </div>
          <div className="product__item">
            <div className="product__item-top">
               <Swiper
                  modules={[EffectCoverflow, Pagination]}
                  effect='coverflow'
                  pagination= {{ clickable:true}}
                  grabCursor
                  speed={800}
                  slidesPerView='auto'
                  coverflowEffect= {{
                    rotate: 50,
                    depth: 100, 
                    modifier: 1,
                    scale: 1.1,
                    slideShadows: true,
                    stretch: 0
                  }}
                  className="swiper"
               >
                <SwiperSlide>
                  <img src={data.thumbnail} alt="" />
                </SwiperSlide>
                {data.images?.map((image, i) => (
                  <SwiperSlide key={i}>
                    <img src={image} alt="" />
                  </SwiperSlide>
                ))}
               </Swiper>
               
            </div>
            <div className="product__item-bottom">
              <h2 className="product__item-bottom-title">{data.title}</h2>
              <p className="product__item-bottom-text">{data.description}</p>
              <p className="product__item-bottom-price">Price: {data.price} $</p>
              <p className="product__item-bottom-discount">Discount: {data.discountPercentage} %</p>
              <p className="product__item-bottom-disprice">Price with discount: {discountPrice} $</p>
            </div>
          </div>
        </div>
        ) : ''}
    </>
  )
}

export default ProductById