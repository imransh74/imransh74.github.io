import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DataService } from './data.service';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
// import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    // routingComponents,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
