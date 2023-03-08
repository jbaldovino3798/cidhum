import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MisionComponent } from './components/mision/mision.component';
import { FooterComponent } from './templates/footer/footer.component';
import { HeaderComponent } from './templates/header/header.component';

import { MisionService } from './services/Mision/mision.service';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MisionComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    MisionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    MisionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
