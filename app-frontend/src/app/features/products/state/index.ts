import { AppState } from '@core/state';
import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromProducts from './products';
import { applySourceSpanToStatementIfNeeded } from '@angular/compiler/src/output/output_ast';

export interface State extends AppState {
  products: fromProducts.State;
}

export const getProductsState = createFeatureSelector<fromProducts.State>('products');
export const getProductList = createSelector(getProductsState, state => state.list);
