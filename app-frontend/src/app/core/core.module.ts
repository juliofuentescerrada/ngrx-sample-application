import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountClient, ProductsClient } from '@core/api/swagger';

@NgModule({
  imports: [CommonModule],
  providers: [ProductsClient, AccountClient]
})
export class CoreModule { }
