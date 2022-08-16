export type Pizza = {
    id: string;
    name: string;
    img: string;
    description: string;
    price: [];
    size: string[];
    types: string[];
    rating: number;
    category: number;
    crustType: string[];
}

export enum Status {
    LOADING = 'loading',
    SUCCSESS = 'success',
    ERORR = 'erorr',
}

export interface PizzaSliceSate {
    items: Pizza[];
    status: Status;
}

export type SearchPizzaParams = {
    sortBy: string,
    setCategory: string,
    searchPizza: string,

}