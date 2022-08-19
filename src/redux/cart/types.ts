import { SortPropertyEnum } from "../filters/types";

export interface CartSliceState {
    totalPrice: number;
    items: CartItemType[];
    totalCount: number;
}

export type CartItemType = {
    id: string,
    description: string;
    name: string,
    img: string,
    price: number,
    crustType: string,
    size: string,
    count: number;
}


export type SortList = {
    name: string;
    sortSelector: SortPropertyEnum;
}
