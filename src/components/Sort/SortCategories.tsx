import  { useEffect, useState, type FC } from 'react';
import Select from 'react-select';
import './Sort.scss'
import { productStore } from '../../store/productStore';



const options = [
  { value: 'beauty', label: 'Beauty' },
  { value: 'fragrances', label: 'Fragrances' },
  { value: 'furniture', label: 'Furniture' },
  { value: 'groceries', label: 'Groceries' },
  { value: 'home-decorations', label: 'Home Decorations' },
  { value: 'kitchen-accessories', label: 'Kitchen Accessories' },
  { value: 'mens-shirts', label: 'Mens Shirts' },
  { value: 'mens-shoes', label: 'Mens Shoes' },
  { value: 'mens-watches', label: 'Mens Watches' },
  { value: 'mobile-accessories', label: 'Mobile Accessories' },
  { value: 'motorcycle', label: 'Motorcycle' },
  { value: 'skin-care', label: 'Skin Care' },
  { value: 'smartphones', label: 'Smartphones' },
  { value: 'sports-accessories', label: 'Sports Accessories' },
  { value: 'sunglasses', label: 'Sunglasses'},
  { value: 'tops', label: 'Tops' },
  { value: 'vehicle', label: 'Vehicle' },
  { value: 'womens-bags', label: 'Womens Bags' },
  { value: 'womens-dresses', label: 'Womens Dresses' },
  { value: 'womens-jewellery', label: 'Womens Jewellery' },
  { value: 'womens-shoes', label: 'Womens Shoes' },
  { value: 'womens-watches', label: 'Womens Watches' }
]

const SortCategories:FC = () => {

  const { category, setCategory } = productStore()
  const [selectedOption, setSelectedOption] = useState(null)

 const customStyles = {
    control: (provided: any) => ({
      ...provided,
      width: "200px",
      height: "50px",
      border: "1px solid #efefef",
      borderRadius: "10px",
      background: "rgb(252, 252, 253)",
      boxShadow: "none",
      padding: "0 12px",
    }),
    indicatorsContainer: () => ({
      display: "none",
    }),
  };

  const changeSortOptions = (option: any) => {
    setCategory(option.value)
    setSelectedOption(option)
  }

  useEffect(() => {
    const option = options.find((item) => item.value == category) || null
    setSelectedOption(option)
  }, [category])


  console.log(category)

  return (
    <>
     <Select
        options={options}
        value={selectedOption}
        placeholder="Categories"
        onChange={changeSortOptions}
        styles={customStyles}
     />
    </>
  )
}

export default SortCategories