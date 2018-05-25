import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { getLoading } from '@core/state';
import { Store, select } from '@ngrx/store';
import { getProductList, State } from '@products/state';
import { LoadProducts } from '@products/state/products/products.actions';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ProductsContainerComponent implements OnInit {

  list$: Observable<Array<any>>;
  loading$: Observable<boolean>;

  constructor(private store: Store<State>) {
    this.list$ = this.store.pipe(select(getProductList));
    this.loading$ = this.store.pipe(select(getLoading));
  }

  ngOnInit() {
    this.store.dispatch(new LoadProducts());
  }
}
