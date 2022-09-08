import { RootState } from "../store";

export const selectCategoryId = (store: RootState) => store.filter.categoryId
export const selectSort = (store: RootState) => store.filter.sort
export const selectSearchValue = (store: RootState) => store.filter.searchValue
export const selectPizza = (store: RootState) => store.pizza


