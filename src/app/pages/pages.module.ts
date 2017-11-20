import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FourOFourComponent } from './four-o-four/four-o-four.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    PipesModule
  ],
  declarations: [
    FourOFourComponent
  ]
})
export class PagesModule { }
