import  { type FC } from 'react'
import './Footer.scss'
import { inputIcon } from '../../utils/img'
import { Link } from 'react-router-dom'

const Footer:FC = () => {
  return (
    <>
        <footer className="footer">
            <h3 className="footer__title">Dummy</h3>
            <p className="footer__text">Worldwide  store since 2020. We sell over 1000+ branded products on our website</p>
            <Link to={"/products"} className="footer__products" >Products</Link>
            <div className="footer__contacts">
                <p className="footer__contacts-adress">1, Street Gulsanam, Mirzo-ulugbek Area</p>
                <p className="footer__contacts-number">+998983698844</p>
            </div>
            <form className="footer__input">
              <div className="footer__input-box">
                <input 
                type="email"
                className="footer__input-box-text"
                placeholder="Enter your email"
                />
              <a href="mailto:example@gmail.com" className="footer__btn">
               <img src={inputIcon} alt="" />
              </a>
              </div>
            </form>
            
        </footer>
    </>
  )
}

export default Footer