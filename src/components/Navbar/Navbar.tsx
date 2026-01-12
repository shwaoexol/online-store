import {  type FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.scss';




const links = [
  { url: '/', name: 'Home' },
  { url: '/products', name: 'Products' },
  { url: '/cart', name: 'Cart'}
];



const Navbar: FC = () => {


  return (
    <nav className="nav">
      <Link to="/" className="logo">Dummy Shop</Link>
      
      <ul className="list">
        {links.map((link) => (
          <li key={link.name}>
            <NavLink to={link.url} className="link">
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

    </nav>
  );
};

export default Navbar;
