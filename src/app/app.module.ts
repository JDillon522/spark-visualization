import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, metaReducers } from './core/store/application-state';
import { PipesModule } from './pipes/pipes.module';
import { ServicesModule } from './services/services.module';
import { PagesModule } from './pages/pages.module';
import { LogPipe } from './pipes/log/log.pipe';
import { MapToIterablePipe } from './pipes/map-to-iterable/map-to-iterable.pipe';
import { TagEffects } from './core/store/effects/tag.effect.';
import { AppSharedModule } from './shared/shared.module';
import { DetailsEffects } from './core/store/effects/details.effect';


@NgModule({
  declarations: [
    AppComponent,
    // LogPipe,
    // MapToIterablePipe
  ],
  imports: [
    // NGRX
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([
      TagEffects,
      DetailsEffects
    ]),
    // Angular
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    // App
    AppSharedModule,
    PipesModule,
    ServicesModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
