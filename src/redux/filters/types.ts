export enum SortPropertyEnum {
    RATING_DESC = 'rating',
    PRICE_DESC = 'price',
    TITLE_DESC = 'title'

}

export type SortTypes = {
    name: string;
    sortSelector: SortPropertyEnum;
}

export interface FilterSliceState {
    searchValue: string,
    categoryId: number,
    currentPage: number,
    sort: SortTypes;
}