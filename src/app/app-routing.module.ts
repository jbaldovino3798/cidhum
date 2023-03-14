import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { MisionComponent } from './components/mision/mision.component'; 
import { LoginComponent } from './components/login/login.component';
import { VisionComponent } from './components/vision/vision.component';
import { MiembrosComponent } from './components/miembros/miembros.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { GpbxComponent } from './components/gpbx/gpbx.component';
import { GpsicologiaComponent } from './components/gpsicologia/gpsicologia.component';
import { GidhumComponent } from './components/gidhum/gidhum.component';
import { AboutComponent } from './components/about/about.component';




const routes: Routes = [
    { path: '', component: HomeComponent },    
    { path: 'about', component: AboutComponent}, 
    { path: 'mision', component: MisionComponent},    
    { path: 'vision', component: VisionComponent},       
    { path: 'miembros', component: MiembrosComponent},     
    { path: 'contacto', component: ContactoComponent},     
    { path: 'gpbx', component: GpbxComponent},         
    { path: 'gpsicologia', component: GpsicologiaComponent},         
    { path: 'gidhum', component: GidhumComponent},
    { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
