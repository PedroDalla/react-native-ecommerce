type CartItem = {
    id: number,
    count: number
}

type CartState = {
    items: CartItem[],
    count: number
}

export type {
    CartItem,
    CartState
}