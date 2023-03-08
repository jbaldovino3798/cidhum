import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { MisionComponent } from './components/mision/mision.component'; 

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'mision', component: MisionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
