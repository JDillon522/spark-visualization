import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapToIterablePipe } from './map-to-iterable/map-to-iterable.pipe';
import { LogPipe } from './log/log.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LogPipe,
    MapToIterablePipe
  ]
})
export class PipesModule { }
