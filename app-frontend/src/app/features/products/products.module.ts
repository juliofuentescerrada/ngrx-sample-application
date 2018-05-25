import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ProductsContainerComponent } from '@products/containers/products-container/products-container.component';
import { ProductsRoutingModule } from '@products/products-routing.module';
import { ProductsEffects } from '@products/state/products/products.effects';
import { SharedModule } from '@shared/shared.module';
import { reducer } from '@products/state/products/products.reducer';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    CoreModule,
    SharedModule,
    StoreModule.forFeature('products', reducer),
    EffectsModule.forFeature([ProductsEffects]),
  ],
  declarations: [ProductsContainerComponent]
})
export class ProductsModule { }
