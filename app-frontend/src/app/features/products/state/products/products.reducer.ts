import { ProductsActionTypes, ProductsActions } from '@products/state/products/products.actions';
import { State, initialState } from '@products/state/products/products.state';

export function   reducer(state: State = initialState, action: ProductsActions) {
  switch (action.type) {
    case ProductsActionTypes.LoadProductsSuccess:
      return {
        ...state,
        list: [...action.payload]
      };
  }

  return state;
}
