import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MisionComponent } from './components/mision/mision.component';
import { FooterComponent } from './templates/footer/footer.component';
import { HeaderComponent } from './templates/header/header.component';

import { MisionService } from './services/Mision/mision.service';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VisionComponent } from './components/vision/vision.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { MiembrosComponent } from './components/miembros/miembros.component';
import { GidhumComponent } from './components/gidhum/gidhum.component';
import { GpsicologiaComponent } from './components/gpsicologia/gpsicologia.component';
import { GpbxComponent } from './components/gpbx/gpbx.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    MisionComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    MisionComponent,
    LoginComponent,
    VisionComponent,
    ContactoComponent,
    MiembrosComponent,
    GidhumComponent,
    GpsicologiaComponent,
    GpbxComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    MisionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
