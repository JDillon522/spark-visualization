import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogService } from './dialog/dialog.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServiceInterceptor } from './services.interceptor';
import { TimeseriesService } from './timeseries/timeseries.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
  providers: [
    DialogService,
    TimeseriesService,
    { provide: HTTP_INTERCEPTORS, useClass: ServiceInterceptor, multi: true },
  ]
})
export class ServicesModule { }
