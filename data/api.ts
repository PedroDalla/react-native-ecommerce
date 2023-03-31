import { products } from "./mockData"

type GetProductsOptionsParams = {
    itemIds?: number[]
}

export type Product = {
    fullDescription: string,
    id: number,
    image: string,
    imageAlt: string,
    name: string,
    price: number,
    shortDescription: string,
}

//Simple function that mocks an API call with a slight delay of 0.2 seconds
export const getProducts: (options?: GetProductsOptionsParams) => Promise<Product[]> = (options) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (options && options.itemIds) {
                resolve(products.filter(value => options.itemIds.some((val) => val === value.id)))
            } else {
                resolve(products);
            }
        }, 200);
    });
};