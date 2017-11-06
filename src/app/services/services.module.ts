import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogService } from './dialog/dialog.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServiceInterceptor } from './services.interceptor';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
  providers: [
    DialogService,
    { provide: HTTP_INTERCEPTORS, useClass: ServiceInterceptor, multi: true },
  ]
})
export class ServicesModule { }
