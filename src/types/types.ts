
export interface IProduct {
    id: number
    title: string;
    description: string;
    price: string;
    stock: number;
    discountPercentage: string;
    images: string[];
    thumbnail: {
        id: number;
        url: string;
        width: number;
        height: number;
        }
}

export interface ICartProduct extends IProduct {
    count: number;
}

export interface ICategories {
    categories: string;
    slug: string;
    name: string;
    url: string;
}




