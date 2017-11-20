import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  MatCardModule, MatToolbarModule, MatMenuModule, MatIconModule, MatButtonModule, MatDialogModule, MatGridListModule,
  MatTooltipModule, MatFormFieldModule, MatInputModule, MatListModule, MatExpansionModule, MatProgressSpinnerModule, MatCheckboxModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, metaReducers } from './core/store/application-state';
import { PipesModule } from './pipes/pipes.module';
import { ServicesModule } from './services/services.module';
import { PagesModule } from './pages/pages.module';
import { DemoEffects } from './core/store/effects/demo.effect';
import { LogPipe } from './pipes/log/log.pipe';
import { MapToIterablePipe } from './pipes/map-to-iterable/map-to-iterable.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LogPipe,
    MapToIterablePipe
  ],
  imports: [
    // NGRX
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([
      DemoEffects
    ]),
    // Angular
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    // Material
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    BrowserModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    AppRoutingModule,
    MatGridListModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    // App
    // PipesModule,
    ServicesModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
