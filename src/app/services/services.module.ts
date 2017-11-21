import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogService } from './dialog/dialog.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServiceInterceptor } from './services.interceptor';
import { TimeseriesService } from './timeseries/timeseries.service';
import { DetailsService } from './details/details.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
  providers: [
    DialogService,
    TimeseriesService,
    DetailsService,
    { provide: HTTP_INTERCEPTORS, useClass: ServiceInterceptor, multi: true },
  ]
})
export class ServicesModule { }
