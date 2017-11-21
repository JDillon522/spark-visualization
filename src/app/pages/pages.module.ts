import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FourOFourComponent } from './four-o-four/four-o-four.component';
import { PipesModule } from '../pipes/pipes.module';
import { TagsComponent } from './tags/tags.component';
import { AppSharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AppSharedModule
  ],
  declarations: [
    FourOFourComponent,
    TagsComponent
  ]
})
export class PagesModule { }
