import { Action } from '@ngrx/store';

export enum ProductsActionTypes {
  LoadProducts = '[PRODUCTS] Load Products',
  LoadProductsSuccess = '[PRODUCTS] Load Products Success',
  LoadProductsError = '[PRODUCTS] Load Products Error'
}

export class LoadProducts implements Action {
  readonly type: string = ProductsActionTypes.LoadProducts;
  constructor(public payload = null) { }
}

export class LoadProductsSuccess implements Action {
  readonly type: string = ProductsActionTypes.LoadProductsSuccess;
  constructor(public payload: any) { }
}

export class LoadProductsError implements Action {
  readonly type: string = ProductsActionTypes.LoadProductsError;
  constructor(public payload = null) { }
}

export type ProductsActions = LoadProducts | LoadProductsSuccess | LoadProductsError;
