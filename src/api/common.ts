import { useQuery } from "@tanstack/react-query";
import apiInstance from ".";


interface IProductParams {
  searchValue: string;
  limit?: number;
  skip?: number;
}

export const useProducts = ({
  searchValue,
  limit,
  skip
}: IProductParams) => {
  return useQuery({
    queryKey: ['products', searchValue, limit, skip ],
    queryFn: () => apiInstance.get('/products/search', {
        params: {
          q: searchValue,
          limit,
          skip
        }
      }),
      select: (response) => response.data
    })
  }


interface ISortParams {
  sortBy?: string;
  order?: "asc" | "desc";
  limit?: number;
  skip?: number;
  category?: string;
}

export const useProductSort = ({ sortBy, order, limit, skip, category }: ISortParams) => {
  return useQuery({
    queryKey: ["products", sortBy, order, limit, skip, category ],
    queryFn: () => apiInstance.get(
      category ? `/products/category/${category}` : "/products", {
        params: { 
          ...(sortBy && { sortBy}), 
          ...(order && { order}), 
          limit,
          skip, 
        },
      }),
    select: response => response.data
  });
};


// export const useProductCategory = (category: string) => {
//   return useQuery({
//     queryKey: ['products', category],
//     queryFn: () => apiInstance.get(`/products/category/${category}`),
//     select: response => response.data
//   })
// }


export const useProductById = (id:number) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => apiInstance.get(`/products/${id}`),
    select: response => response.data
  })
}