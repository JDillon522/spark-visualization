import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FourOFourComponent } from './pages/four-o-four/four-o-four.component';
import { TagsComponent } from './pages/tags/tags.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/tags',
    pathMatch: 'full'
  },
  {
    path: 'tags',
    component: TagsComponent
  },
  { path: '**', component: FourOFourComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
