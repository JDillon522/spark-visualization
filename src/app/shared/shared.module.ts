import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule, MatToolbarModule, MatMenuModule, MatIconModule, MatButtonModule, MatDialogModule, MatGridListModule,
  MatTooltipModule, MatFormFieldModule, MatInputModule, MatListModule, MatExpansionModule, MatProgressSpinnerModule, MatCheckboxModule,
  MatTableModule, MatSortModule, MatTabsModule, MatDatepickerModule, MatNativeDateModule
} from '@angular/material';
import { DataTableModule, SharedModule, ChartModule } from 'primeng/primeng';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  exports: [
    CommonModule,
    // Material
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,

    MatIconModule,
    MatButtonModule,
    MatDialogModule,

    MatGridListModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    DataTableModule,
    SharedModule,
    ChartModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule

    // MatTableModule,
    // CdkTableModule,
    // // MatSortModule
  ],
  declarations: []
})
export class AppSharedModule { }
