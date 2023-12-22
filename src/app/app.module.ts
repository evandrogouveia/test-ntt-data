import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { MoviesEffects } from './store/effects/movie.effects';
import { StoreModule } from '@ngrx/store';
import { dataReducer } from './store/reducer/movie.reducer';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ data: dataReducer }),
    EffectsModule.forRoot([MoviesEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
