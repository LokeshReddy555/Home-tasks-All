import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActiveModule } from './active/active.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeletedModule } from './deleted/deleted.module';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ActiveModule,
    DeletedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }