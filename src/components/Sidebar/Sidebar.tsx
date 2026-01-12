import  { type FC } from 'react'
import Sort from '../Sort/Sort'
import SortCategories from '../Sort/SortCategories'
import './Sidebar.scss'

const Sidebar:FC = () => {
  return (
    <>
        <div className="sidebar">
            <div className="sidebar__block">
                    <SortCategories/>
                    <Sort/>
            </div>
        </div>
    </>
  )
}

export default Sidebar