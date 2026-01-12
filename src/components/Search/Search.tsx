import  { useEffect, useState, type FC } from 'react'
import { closeIcon, searchIcon } from '../../utils/img'
import './Search.scss'
import { productStore } from '../../store/productStore'

const Search:FC = () => {

    const { setSearchValue, searchValue } = productStore()
    const [value, setValue] = useState('')

    const submit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(value)
        setSearchValue(value)   
    }

    const reset = () => {
        setValue('')
        setSearchValue('')
    }

    useEffect(() => {
        setValue(searchValue)
    }, [searchValue])


  return (
    <>
        <form className="search" onSubmit={(event) => submit(event) }>
            <div className="search__box">
                <input 
                type="text" 
                className="search__box-input"
                placeholder="Type in..."
                value={value}
                onChange={((event) => setValue(event.target.value))}
                />
                {value && <img onClick={reset} src={closeIcon} alt="" className="search__box-icon" /> }
            </div>
            <button className="search__box-btn">
                <img src={searchIcon} alt="" />
            </button>
        </form>
    </>
  )
}

export default Search