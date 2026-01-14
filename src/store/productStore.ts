import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IProductStore {
    searchValue: string;
    sortBy: string;
    order: "asc";
    currentPage: number;
    limit: number;
    skip: number;
    category: string;
    setCurrentPage: (val: number) => void;
    setSkip: (val: number) => void;
    setSortBy: (val: string) => void;
    setSearchValue: (val: string) => void;
    setOrder: (val: "asc" | "desc") => void;
    setCategory: (val: string) => void;
}


export const productStore = create<IProductStore>()(devtools((set) => ({
    searchValue: '',
    sortBy: '',
    order: "asc" | "desc",
    currentPage: 1,
    limit: 12,
    skip: 0,
    category: '',
    setCurrentPage: (val) => set({ currentPage: val}),
    setSkip: (val) => set({skip: val}),
    setSortBy: (val) => set({ sortBy: val}),
    setOrder: (val) => set({ order: val}),
    setSearchValue: (val) => set({ searchValue: val}),
    setCategory: (val) => set({category: val})
})))