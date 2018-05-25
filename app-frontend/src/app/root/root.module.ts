import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from '@core/core.module';
import { CustomRouterStateSerializer, reducers } from '@core/state';
import { RouterEffects } from '@core/state/router/router.effects';
import { environment } from '@env/environment';
import { EffectsModule } from '@ngrx/effects';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RootComponent } from '@root/components/root/root.component';
import { AppShellContainerComponent } from '@root/containers/app-shell-container/app-shell-container.component';
import { LoginContainerComponent } from '@root/containers/login-container/login-container.component';
import { RootRoutingModule } from '@root/root-routing.module';
import { SharedModule } from '@shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { API_BASE_URL } from '@core/api/swagger';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RootRoutingModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    StoreModule.forRoot(reducers),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    StoreDevtoolsModule.instrument({ name: 'ngrx', logOnly: environment.production }),
    EffectsModule.forRoot([RouterEffects])],
  declarations: [RootComponent, LoginContainerComponent, AppShellContainerComponent],
  bootstrap: [RootComponent],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer },
    { provide: API_BASE_URL, useValue: environment.apiUrl }
  ],
})
export class RootModule { }
