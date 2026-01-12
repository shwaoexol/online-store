

export const getDiscountPrice = (
    price: number,
    discount: number
) => Math.round((price - (price * discount)/ 100 ) * 100 ) / 100