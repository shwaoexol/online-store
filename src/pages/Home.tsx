import  { type FC } from 'react'
import Navbar from '../components/Navbar/Navbar'
import { bgIcon, deliveryIcon, quantityIcon, supportIcon } from '../utils/img'
import Footer from '../components/Footer/Footer'



const Home:FC = () => {
  return (
    <>
        <Navbar/>
        <img src={bgIcon} alt="" className="main__bg" />
        <div className="main__info">
          <div className="main__info-quantity">
            <img src={quantityIcon} alt="" />
            <p>High Quality</p>
          </div>
          <div className="main__info-shipping">
            <img src={deliveryIcon} alt="" />
            <p>Free shipping</p>
          </div>
          <div className="main__info-support">
            <img src={supportIcon} alt="" />
            <p>24 / 7 Support</p>
          </div>
        </div>
        <Footer/>
    </>
  )
}

export default Home