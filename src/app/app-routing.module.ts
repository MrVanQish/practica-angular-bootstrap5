import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetallesComponent } from './detalles/detalles.component';

const routes: Routes = [
  {path: 'detalles', component: DetallesComponent},
  {path: '**', pathMatch:'full', redirectTo:'/'},
  {path: '', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
