import  { type FC } from 'react'
import './Products.scss'
import Navbar from '../Navbar/Navbar'
import ProductsItem from './ProductsItem'
import Sidebar from '../Sidebar/Sidebar'
import { productStore } from '../../store/productStore'
import {  useProductSort, useProducts } from '../../api/common'
import Pagination from '../Pagination/Pagination'
import Search from '../Search/Search'






const Products: FC = () => {

  const { 
    searchValue,
    sortBy,
    order,
    limit,
    skip, 
    currentPage,
    category,
    setCurrentPage,
    setSkip,
  } = productStore()
  

  const { data: search } = useProducts({ searchValue, limit, skip })
  const { data: sort } = useProductSort({ sortBy, order, limit, skip, category })


  const onChangePage = (num) => {
    setCurrentPage(num)
    setSkip(num * limit - limit)
  }

  

  const products =
  category
    ? sort?.products
    : sortBy && order
      ? sort?.products
      : search?.products;

const totalCount =
  category
    ? sort?.total ?? 0
    : sortBy && order
      ? sort?.total ?? 0
      : search?.total ?? 0;


    

  return (
    <>
      <Navbar />
      <div className="products__search">
        <Search/>
        </div> 
        <div className="products">
         <Sidebar />

        <div className="products__content">
          <div className="products__list">
            {products?.map(product => (
              <ProductsItem key={product.id} product={product} />
            ))}
         </div>

        <Pagination
           limit={limit}
           currentPage={currentPage}
           totalCount={totalCount}
           onChangePage={onChangePage}
         />
        </div>
      </div>

    </>
  );
};


export default Products