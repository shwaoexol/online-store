import type { FC } from "react";
import Select from "react-select";
import "./Sort.scss";
import { productStore } from "../../store/productStore";


interface SortOption {
  value: {
    sortBy: string;
    order: "asc" | "desc";
  };
  label: string;
}

const titleOptions: SortOption[] = [
  { value: { sortBy: "title", order: "asc" }, label: "Name A-Z" },
  { value: { sortBy: "title", order: "desc" }, label: "Name Z-A" },
];

const priceOptions: SortOption[] = [
  { value: { sortBy: "price", order: "asc" }, label: "Low to high" },
  { value: { sortBy: "price", order: "desc" }, label: "High to low" },
];

const stockOptions: SortOption[] = [
  { value: { sortBy: "stock", order: "asc" }, label: "Low to high" },
  { value: { sortBy: "stock", order: "desc" }, label: "High to low" },
];

const Sort:FC = () => {
  
  const {sortBy, order, setSortBy, setOrder} = productStore()



  const changeSortProduct = (option: SortOption | null) => {
    if (!option) return;

    setSortBy(option.value.sortBy);
    setOrder(option.value.order);
  };

  const selectedOption = (options: SortOption[]) =>
    options.find(
      item =>
        item.value.sortBy === sortBy &&
        item.value.order === order
    ) || null;

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

  return (
    <div className="sort">
      <Select
        options={titleOptions}
        value={selectedOption(titleOptions)}
        onChange={changeSortProduct}
        placeholder="Sort by Name"
        styles={customStyles}
        isClearable
      />

      <Select
        options={priceOptions}
        value={selectedOption(priceOptions)}
        onChange={changeSortProduct}
        placeholder="Sort by Price"
        styles={customStyles}
        isClearable
      />

      <Select
        options={stockOptions}
        value={selectedOption(stockOptions)}
        onChange={changeSortProduct}
        placeholder="Sort by Stock"
        styles={customStyles}
        isClearable
      />
    </div>
  );
};

export default Sort;
