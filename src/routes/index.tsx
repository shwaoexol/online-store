import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Products from "../pages/Product";
import SingleProduct from "../pages/SingleProduct";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/cart',
        element: <Cart/>
    },
    {
        path: '/products',
        element: <Products/>
    },
    {
        path: '/products/:id',
        element: <SingleProduct/>
    }
])