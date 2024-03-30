import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Error404PageComponent } from './shared/pages/error-404-page/error-404-page.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './core/store/app.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environments';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './core/store/users/users.effects';

@NgModule({
  declarations: [AppComponent, Error404PageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoadingComponent,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([UsersEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  from = () => {
    console.log('from');
  };
}
