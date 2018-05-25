import { Injectable } from '@angular/core';
import { ProductsClient } from '@core/api/swagger';
import { HideLoader, ShowLoader } from '@core/state/layout/layout.actions';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { switchMap } from 'rxjs/operators';
import { LoadProducts, LoadProductsError, LoadProductsSuccess, ProductsActionTypes } from './products.actions';

@Injectable()
export class ProductsEffects {

  @Effect()
  showLoadIndicator$ = this.actions$.pipe(
    ofType<LoadProducts>(ProductsActionTypes.LoadProducts),
    switchMap(e => of(new ShowLoader()))
  );

  @Effect()
  hideLoadIndicator$ = this.actions$.pipe(
    ofType<LoadProductsSuccess | LoadProductsError>(
      ProductsActionTypes.LoadProductsSuccess,
      ProductsActionTypes.LoadProductsError),
    switchMap(e => of(new HideLoader()))
  );

  @Effect()
  loadProducts$ = this.actions$.pipe(
    ofType<LoadProducts>(ProductsActionTypes.LoadProducts),
    switchMap(e => this.productsClient.getProductList()
      .map(products => new LoadProductsSuccess(products))
      .catch(error => of(new LoadProductsError())))
  );

  constructor(
    private actions$: Actions,
    private productsClient: ProductsClient) {
  }
}
